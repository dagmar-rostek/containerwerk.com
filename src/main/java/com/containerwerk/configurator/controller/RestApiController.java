package com.containerwerk.configurator.controller;

import com.containerwerk.configurator.model.*;
import com.containerwerk.configurator.service.*;
import com.containerwerk.configurator.util.CustomErrorType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RestApiController {

	public static final Logger logger = LoggerFactory.getLogger(RestApiController.class);

	@Autowired
    UserService userService; //Service which will do all data retrieval/manipulation work
	@Autowired
    ContainerService containerService;
	@Autowired
	AngebotService angebotService;
	@Autowired
    AdresseService adresseService;
	@Autowired
	AusfuehrungService ausfuehrungService;
	@Autowired
	ChecklisteService checklisteService;
	@Autowired
	EinrichtungService einrichtungService;
	@Autowired
	FeatureService featureService;
	@Autowired
	KundeService kundeService;
	@Autowired
	ModulService modulService;
	@Autowired
    NutzungsartService nutzungsartService;
	@Autowired
	ProjektinformationenService projektinformationenService;
	@Autowired
	StatusService statusService;
	@Autowired
	TodoService todoService;
	@Autowired
    LoginService loginService;

	// -------------------Retrieve All Users---------------------------------------------

	@RequestMapping(value = "/user/", method = RequestMethod.GET)
	public ResponseEntity<List<User>> listAllUsers() {
		List<User> users = userService.findAllUsers();
		if (users.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);
	}

	// -------------------Retrieve  All Container -------------------------------------------

	@RequestMapping(value = "/container/", method = RequestMethod.GET)
	public ResponseEntity<List<Container>> listAllContainer() {
		List<Container> containers = containerService.findAllContainers();
		if (containers.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Container>>(containers, HttpStatus.OK);
	}


	// -------------------Retrieve  All Angebote -------------------------------------------

	@RequestMapping(value = "/angebot/", method = RequestMethod.GET)
	public ResponseEntity<List<Angebot>> listAllAngebote() {
		List<Angebot> angebote = angebotService.findAllAngebote();
		if (angebote.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Angebot>>(angebote, HttpStatus.OK);
	}


    //--------------- Retrieve a id of Container ------------------ //
    @RequestMapping(value = "/container/{container}", method = RequestMethod.GET)
    public ResponseEntity<?> getContainer(@PathVariable("container") Container container) {
        logger.info("Fetching Container id {}", container);
        Long id = containerService.getId(container);
        if (id == null) {
            logger.error("Container id {} not found for container.", container);
            return new ResponseEntity(new CustomErrorType("Container id " + container
                    + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Long>(id, HttpStatus.OK);
    }


    //--------------- Retrieve a single Container ------------------ //
	@RequestMapping(value = "/container/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getContainer(@PathVariable("id") long id) {
		logger.info("Fetching Container with id {}", id);
		Container container = containerService.findById(id);
		if (container == null) {
			logger.error("Container with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Container with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Container>(container, HttpStatus.OK);
	}


    //--------------- Retrieve a single Angebot ------------------ //
    @RequestMapping(value = "/angebot/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getAngebot(@PathVariable("id") long id) {
        logger.info("Fetching Angebot with id {}", id);
        Angebot angebot = angebotService.findById(id);
        if (angebot == null) {
            logger.error("Angebot with id {} not found.", id);
            return new ResponseEntity(new CustomErrorType("Angebot with id " + id
                    + " not found"), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Angebot>(angebot, HttpStatus.OK);
    }


    // -------------------Retrieve Single User------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getUser(@PathVariable("id") long id) {
		logger.info("Fetching User with id {}", id);
		User user = userService.findById(id);
		if (user == null) {
			logger.error("User with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("User with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	// -------------------Create a User-------------------------------------------

	@RequestMapping(value = "/user/", method = RequestMethod.POST)
	public ResponseEntity<?> createUser(@RequestBody User user, UriComponentsBuilder ucBuilder) {
		logger.info("Creating User : {}", user);

		if (userService.isUserExist(user)) {
			logger.error("Unable to create. A User with name {} already exist", user.getName());
			return new ResponseEntity(new CustomErrorType("Unable to create. A User with name " +
			user.getName() + " already exist."),HttpStatus.CONFLICT);
		}
		userService.saveUser(user);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/user/{id}").buildAndExpand(user.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// -------------------Create a Angebot-------------------------------------------

	@RequestMapping(value = "/angebot/", method = RequestMethod.POST)
	public ResponseEntity<?> createAngebot(@RequestBody Angebot angebot, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Angebot : {}", angebot);

		if (angebotService.isAngebotExist(angebot)) {
			logger.error("Unable to create. A Angebot with name {} already exist", angebot.getName());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Angebot with name " +
					angebot.getName() + " already exist."),HttpStatus.CONFLICT);
		}
		angebotService.saveAngebot(angebot);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/angebot/{id}").buildAndExpand(angebot.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}

	// -------------------Create a Container-------------------------------------------

	@RequestMapping(value = "/container/", method = RequestMethod.POST)
	public ResponseEntity<?> createContainer(@RequestBody Container container, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Container : {}", container);

		/*if (containerService.isContainerExist(container)) {
			logger.error("Unable to create. A Container with name {} already exist", container.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Container with name " +
					container.getId() + " already exist."),HttpStatus.CONFLICT);
		}*/
		if(container.getAnzahl()!=null){
            container.setGesamtpreis(container.getPreis()*container.getAnzahl());
        }else{
            container.setGesamtpreis(container.getPreis());
        }
		containerService.saveContainer(container);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/containers/{id}").buildAndExpand(container.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}




	// ------------------- Update a User ------------------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateUser(@PathVariable("id") long id, @RequestBody User user) {
		logger.info("Updating User with id {}", id);

		User currentUser = userService.findById(id);

		if (currentUser == null) {
			logger.error("Unable to update. User with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentUser.setName(user.getName());
		currentUser.setAge(user.getAge());
		currentUser.setSalary(user.getSalary());

		userService.updateUser(currentUser);
		return new ResponseEntity<User>(currentUser, HttpStatus.OK);
	}

	// ------------------- Update a Angebot ------------------------------------------------

	@RequestMapping(value = "/angebot/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateAngebot(@PathVariable("id") long id, @RequestBody Angebot angebot) {
		logger.info("Updating Angebot with id {}", id);

		Angebot currentAngebot = angebotService.findById(id);

		if (currentAngebot == null) {
			logger.error("Unable to update. Angebot with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Angebot with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentAngebot.setName(angebot.getName());
		currentAngebot.setKunde(angebot.getKunde());
		currentAngebot.setBeschreibung(angebot.getBeschreibung());
		currentAngebot.setKommentar(angebot.getKommentar());
		currentAngebot.setInterneAnsicht(angebot.isInterneAnsicht());
		currentAngebot.setProjektinformationen(angebot.getProjektinformationen());
		currentAngebot.setContainerListe(angebot.getContainerListe());
		currentAngebot.setGesamtpreis(angebot.getGesamtpreis());
		currentAngebot.setRabatt(angebot.getRabatt());
		currentAngebot.setAnsprechpartner(angebot.getAnsprechpartner());
		angebotService.updateAngebot(currentAngebot);
		return new ResponseEntity<Angebot>(currentAngebot, HttpStatus.OK);
	}


	// ------------------- Update a Container ------------------------------------------------

	@RequestMapping(value = "/container/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateContainer(@PathVariable("id") long id, @RequestBody Container container) {
		logger.info("Updating Container with id {}", id);

		Container currentContainer = containerService.findById(id);

		if (currentContainer == null) {
			logger.error("Unable to update. Container with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Container with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentContainer.setAngebot(container.getAngebot());
		currentContainer.setBeschreibung(container.getBeschreibung());
		currentContainer.setImageID(container.getImageID());
		currentContainer.setModul(container.getModul());
		currentContainer.setPreis(container.getPreis());
		currentContainer.setGesamtpreis(container.getGesamtpreis());
		currentContainer.setPreisrelevant(container.isPreisrelevant());

		containerService.updateContainer(currentContainer);
		return new ResponseEntity<Container>(currentContainer, HttpStatus.OK);
	}



	// ------------------- Delete a User-----------------------------------------

	@RequestMapping(value = "/user/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteUser(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting User with id {}", id);

		User user = userService.findById(id);
		if (user == null) {
			logger.error("Unable to delete. User with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. User with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		userService.deleteUserById(id);
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete a Angebot-----------------------------------------

	@RequestMapping(value = "/angebot/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteAngebot(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Angebot with id {}", id);

		Angebot angebot = angebotService.findById(id);
		if (angebot == null) {
			logger.error("Unable to delete. Angebot with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Angebot with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		angebotService.deleteAngebotById(id);
		return new ResponseEntity<Angebot>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete a Container-----------------------------------------

	@RequestMapping(value = "/container/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteContainer(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Container with id {}", id);

		Container container = containerService.findById(id);
		if (container == null) {
			logger.error("Unable to delete. Container with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Container with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		containerService.deleteContainerById(id);
		return new ResponseEntity<Container>(HttpStatus.NO_CONTENT);
	}


	// ------------------- Delete All Users-----------------------------

	@RequestMapping(value = "/user/", method = RequestMethod.DELETE)
	public ResponseEntity<User> deleteAllUsers() {
		logger.info("Deleting All Users");

		userService.deleteAllUsers();
		return new ResponseEntity<User>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Angebote-----------------------------

	@RequestMapping(value = "/angebot/", method = RequestMethod.DELETE)
	public ResponseEntity<Angebot> deleteAllAngebote() {
		logger.info("Deleting All Angebote");

		angebotService.deleteAllAngebote();
		return new ResponseEntity<Angebot>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Container-----------------------------

	@RequestMapping(value = "/container/", method = RequestMethod.DELETE)
	public ResponseEntity<Container> deleteAllContainer() {
		logger.info("Deleting All Container");

		containerService.deleteAllContainer();
		return new ResponseEntity<Container>(HttpStatus.NO_CONTENT);
	}



///////////////

	// -------------------Retrieve All Adresses---------------------------------------------

	@RequestMapping(value = "/adresse/", method = RequestMethod.GET)
	public ResponseEntity<List<Adresse>> listAllAdresses() {
		List<Adresse> adresses = adresseService.findAllAdresses();
		if (adresses.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Adresse>>(adresses, HttpStatus.OK);
	}

	// -------------------Retrieve Single Adresse------------------------------------------

	@RequestMapping(value = "/adresse/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getAdresse(@PathVariable("id") long id) {
		logger.info("Fetching Adresse with id {}", id);
		Adresse adresse = adresseService.findById(id);
		if (adresse == null) {
			logger.error("Adresse with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Adresse with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Adresse>(adresse, HttpStatus.OK);
	}

	// -------------------Create a Adresse-------------------------------------------

	@RequestMapping(value = "/adresse/", method = RequestMethod.POST)
	public ResponseEntity<?> createAdresse(@RequestBody Adresse adresse, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Adresse : {}", adresse);

		if (adresseService.isAdresseExist(adresse)) {
			logger.error("Unable to create. A Adresse with id {} already exist", adresse.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Adresse with name " +
					adresse.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		adresseService.saveAdresse(adresse);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/adresse/{id}").buildAndExpand(adresse.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Adresse ------------------------------------------------

	@RequestMapping(value = "/adresse/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateAdresse(@PathVariable("id") long id, @RequestBody Adresse adresse) {
		logger.info("Updating Adresse with id {}", id);

		Adresse currentAdresse = adresseService.findById(id);

		if (currentAdresse == null) {
			logger.error("Unable to update. Adresse with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Adresse with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentAdresse.setStrasse(adresse.getStrasse());
		currentAdresse.setPlz(adresse.getPlz());
		currentAdresse.setOrt(adresse.getOrt());

		adresseService.updateAdresse(currentAdresse);
		return new ResponseEntity<Adresse>(currentAdresse, HttpStatus.OK);
	}

	// ------------------- Delete a Adresse-----------------------------------------

	@RequestMapping(value = "/adresse/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteAdresse(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Adresse with id {}", id);

		Adresse adresse = adresseService.findById(id);
		if (adresse == null) {
			logger.error("Unable to delete. Adresse with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Adresse with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		adresseService.deleteAdresseById(id);
		return new ResponseEntity<Adresse>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Adresses-----------------------------

	@RequestMapping(value = "/adresse/", method = RequestMethod.DELETE)
	public ResponseEntity<Adresse> deleteAllAdresses() {
		logger.info("Deleting All Adresses");

		adresseService.deleteAllAdresses();
		return new ResponseEntity<Adresse>(HttpStatus.NO_CONTENT);
	}


	////

	// -------------------Retrieve All Ausfuehrungen---------------------------------------------

	@RequestMapping(value = "/ausfuehrung/", method = RequestMethod.GET)
	public ResponseEntity<List<Ausfuehrung>> listAllAusfuehrungen() {
		List<Ausfuehrung> ausfuehrungen = ausfuehrungService.findAllAusfuehrungen();
		if (ausfuehrungen.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Ausfuehrung>>(ausfuehrungen, HttpStatus.OK);
	}

	// -------------------Retrieve Single Ausfuehrung------------------------------------------

	@RequestMapping(value = "/ausfuehrung/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getAusfuehrung(@PathVariable("id") long id) {
		logger.info("Fetching Ausfuehrung with id {}", id);
		Ausfuehrung ausfuehrung = ausfuehrungService.findById(id);
		if (ausfuehrung == null) {
			logger.error("Ausfuehrung with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Ausfuehrung with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Ausfuehrung>(ausfuehrung, HttpStatus.OK);
	}

	// -------------------Create a Ausfuehrung-------------------------------------------

	@RequestMapping(value = "/ausfuehrung/", method = RequestMethod.POST)
	public ResponseEntity<?> createAusfuehrung(@RequestBody Ausfuehrung ausfuehrung, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Ausfuehrung : {}", ausfuehrung);

		if (ausfuehrungService.isAusfuehrungExist(ausfuehrung)) {
			logger.error("Unable to create. A Ausfuehrung with id {} already exist", ausfuehrung.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Ausfuehrung with name " +
					ausfuehrung.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		ausfuehrungService.saveAusfuehrung(ausfuehrung);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/ausfuehrung/{id}").buildAndExpand(ausfuehrung.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Ausfuehrung ------------------------------------------------

	@RequestMapping(value = "/ausfuehrung/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateAusfuehrung(@PathVariable("id") long id, @RequestBody Ausfuehrung ausfuehrung) {
		logger.info("Updating Ausfuehrung with id {}", id);

		Ausfuehrung currentAusfuehrung = ausfuehrungService.findById(id);

		if (currentAusfuehrung == null) {
			logger.error("Unable to update. Ausfuehrung with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Ausfuehrung with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentAusfuehrung.setTyp(ausfuehrung.getTyp());
		currentAusfuehrung.setBeschreibung(ausfuehrung.getBeschreibung());
		currentAusfuehrung.setImageID(ausfuehrung.getImageID());
		currentAusfuehrung.setPreis(ausfuehrung.getPreis());
		currentAusfuehrung.setFeatureList(ausfuehrung.getFeatureList());
		currentAusfuehrung.setEinrichtungList(ausfuehrung.getEinrichtungList());

		ausfuehrungService.updateAusfuehrung(currentAusfuehrung);
		return new ResponseEntity<Ausfuehrung>(currentAusfuehrung, HttpStatus.OK);
	}

	// ------------------- Delete a Ausfuehrung-----------------------------------------

	@RequestMapping(value = "/ausfuehrung/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteAusfuehrung(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Ausfuehrung with id {}", id);

		Ausfuehrung ausfuehrung = ausfuehrungService.findById(id);
		if (ausfuehrung == null) {
			logger.error("Unable to delete. Ausfuehrung with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Ausfuehrung with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		ausfuehrungService.deleteAusfuehrungById(id);
		return new ResponseEntity<Ausfuehrung>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Ausfuehrungen-----------------------------

	@RequestMapping(value = "/ausfuehrung/", method = RequestMethod.DELETE)
	public ResponseEntity<Ausfuehrung> deleteAllAusfuehrungen() {
		logger.info("Deleting All Ausfuehrungen");

		ausfuehrungService.deleteAllAusfuehrungen();
		return new ResponseEntity<Ausfuehrung>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Checklistes---------------------------------------------

	@RequestMapping(value = "/checkliste/", method = RequestMethod.GET)
	public ResponseEntity<List<Checkliste>> listAllChecklistes() {
		List<Checkliste> checklistes = checklisteService.findAllChecklistes();
		if (checklistes.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Checkliste>>(checklistes, HttpStatus.OK);
	}

	// -------------------Retrieve Single Checkliste------------------------------------------

	@RequestMapping(value = "/checkliste/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getCheckliste(@PathVariable("id") long id) {
		logger.info("Fetching Checkliste with id {}", id);
		Checkliste checkliste = checklisteService.findById(id);
		if (checkliste == null) {
			logger.error("Checkliste with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Checkliste with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Checkliste>(checkliste, HttpStatus.OK);
	}

	// -------------------Create a Checkliste-------------------------------------------

	@RequestMapping(value = "/checkliste/", method = RequestMethod.POST)
	public ResponseEntity<?> createCheckliste(@RequestBody Checkliste checkliste, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Checkliste : {}", checkliste);

		if (checklisteService.isChecklisteExist(checkliste)) {
			logger.error("Unable to create. A Checkliste with name {} already exist", checkliste.getName());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Checkliste with name " +
					checkliste.getName() + " already exist."),HttpStatus.CONFLICT);
		}
		checklisteService.saveCheckliste(checkliste);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/checkliste/{id}").buildAndExpand(checkliste.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Checkliste ------------------------------------------------

	@RequestMapping(value = "/checkliste/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateCheckliste(@PathVariable("id") long id, @RequestBody Checkliste checkliste) {
		logger.info("Updating Checkliste with id {}", id);

		Checkliste currentCheckliste = checklisteService.findById(id);

		if (currentCheckliste == null) {
			logger.error("Unable to update. Checkliste with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Checkliste with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentCheckliste.setName(checkliste.getName());
		currentCheckliste.setTodoliste(checkliste.getTodoliste());
		currentCheckliste.setProjektinformationen(checkliste.getProjektinformationen());

		checklisteService.updateCheckliste(currentCheckliste);
		return new ResponseEntity<Checkliste>(currentCheckliste, HttpStatus.OK);
	}

	// ------------------- Delete a Checkliste-----------------------------------------

	@RequestMapping(value = "/checkliste/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteCheckliste(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Checkliste with id {}", id);

		Checkliste checkliste = checklisteService.findById(id);
		if (checkliste == null) {
			logger.error("Unable to delete. Checkliste with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Checkliste with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		checklisteService.deleteChecklisteById(id);
		return new ResponseEntity<Checkliste>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Checklistes-----------------------------

	@RequestMapping(value = "/checkliste/", method = RequestMethod.DELETE)
	public ResponseEntity<Checkliste> deleteAllChecklistes() {
		logger.info("Deleting All Checklistes");

		checklisteService.deleteAllChecklistes();
		return new ResponseEntity<Checkliste>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Einrichtungs---------------------------------------------

	@RequestMapping(value = "/einrichtung/", method = RequestMethod.GET)
	public ResponseEntity<List<Einrichtung>> listAllEinrichtungs() {
		List<Einrichtung> einrichtungs = einrichtungService.findAllEinrichtungs();
		if (einrichtungs.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Einrichtung>>(einrichtungs, HttpStatus.OK);
	}

	// -------------------Retrieve Single Einrichtung------------------------------------------

	@RequestMapping(value = "/einrichtung/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getEinrichtung(@PathVariable("id") long id) {
		logger.info("Fetching Einrichtung with id {}", id);
		Einrichtung einrichtung = einrichtungService.findById(id);
		if (einrichtung == null) {
			logger.error("Einrichtung with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Einrichtung with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Einrichtung>(einrichtung, HttpStatus.OK);
	}

	// -------------------Create a Einrichtung-------------------------------------------

	@RequestMapping(value = "/einrichtung/", method = RequestMethod.POST)
	public ResponseEntity<?> createEinrichtung(@RequestBody Einrichtung einrichtung, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Einrichtung : {}", einrichtung);

		if (einrichtungService.isEinrichtungExist(einrichtung)) {
			logger.error("Unable to create. A Einrichtung with id {} already exist", einrichtung.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Einrichtung with name " +
					einrichtung.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		einrichtungService.saveEinrichtung(einrichtung);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/einrichtung/{id}").buildAndExpand(einrichtung.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Einrichtung ------------------------------------------------

	@RequestMapping(value = "/einrichtung/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateEinrichtung(@PathVariable("id") long id, @RequestBody Einrichtung einrichtung) {
		logger.info("Updating Einrichtung with id {}", id);

		Einrichtung currentEinrichtung = einrichtungService.findById(id);

		if (currentEinrichtung == null) {
			logger.error("Unable to update. Einrichtung with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Einrichtung with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentEinrichtung.setTyp(einrichtung.getTyp());
		currentEinrichtung.setBeschreibung(einrichtung.getBeschreibung());
		currentEinrichtung.setImageID(einrichtung.getImageID());
		currentEinrichtung.setAusfuehrung(einrichtung.getAusfuehrung());

		einrichtungService.updateEinrichtung(currentEinrichtung);
		return new ResponseEntity<Einrichtung>(currentEinrichtung, HttpStatus.OK);
	}

	// ------------------- Delete a Einrichtung-----------------------------------------

	@RequestMapping(value = "/einrichtung/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteEinrichtung(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Einrichtung with id {}", id);

		Einrichtung einrichtung = einrichtungService.findById(id);
		if (einrichtung == null) {
			logger.error("Unable to delete. Einrichtung with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Einrichtung with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		einrichtungService.deleteEinrichtungById(id);
		return new ResponseEntity<Einrichtung>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Einrichtungs-----------------------------

	@RequestMapping(value = "/einrichtung/", method = RequestMethod.DELETE)
	public ResponseEntity<Einrichtung> deleteAllEinrichtungs() {
		logger.info("Deleting All Einrichtungs");

		einrichtungService.deleteAllEinrichtungs();
		return new ResponseEntity<Einrichtung>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Features---------------------------------------------

	@RequestMapping(value = "/feature/", method = RequestMethod.GET)
	public ResponseEntity<List<Feature>> listAllFeatures() {
		List<Feature> features = featureService.findAllFeatures();
		if (features.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Feature>>(features, HttpStatus.OK);
	}

	// -------------------Retrieve Single Feature------------------------------------------

	@RequestMapping(value = "/feature/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getFeature(@PathVariable("id") long id) {
		logger.info("Fetching Feature with id {}", id);
		Feature feature = featureService.findById(id);
		if (feature == null) {
			logger.error("Feature with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Feature with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Feature>(feature, HttpStatus.OK);
	}

	// -------------------Create a Feature-------------------------------------------

	@RequestMapping(value = "/feature/", method = RequestMethod.POST)
	public ResponseEntity<?> createFeature(@RequestBody Feature feature, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Feature : {}", feature);

		if (featureService.isFeatureExist(feature)) {
			logger.error("Unable to create. A Feature with id {} already exist", feature.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Feature with name " +
					feature.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		featureService.saveFeature(feature);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/feature/{id}").buildAndExpand(feature.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Feature ------------------------------------------------

	@RequestMapping(value = "/feature/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateFeature(@PathVariable("id") long id, @RequestBody Feature feature) {
		logger.info("Updating Feature with id {}", id);

		Feature currentFeature = featureService.findById(id);

		if (currentFeature == null) {
			logger.error("Unable to update. Feature with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Feature with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentFeature.setTyp(feature.getTyp());
		currentFeature.setBeschreibung(feature.getBeschreibung());
		currentFeature.setImageID(feature.getImageID());
		currentFeature.setAusfuehrung(feature.getAusfuehrung());
		currentFeature.setPreis(feature.getPreis());

		featureService.updateFeature(currentFeature);
		return new ResponseEntity<Feature>(currentFeature, HttpStatus.OK);
	}

	// ------------------- Delete a Feature-----------------------------------------

	@RequestMapping(value = "/feature/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteFeature(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Feature with id {}", id);

		Feature feature = featureService.findById(id);
		if (feature == null) {
			logger.error("Unable to delete. Feature with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Feature with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		featureService.deleteFeatureById(id);
		return new ResponseEntity<Feature>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Features-----------------------------

	@RequestMapping(value = "/feature/", method = RequestMethod.DELETE)
	public ResponseEntity<Feature> deleteAllFeatures() {
		logger.info("Deleting All Features");

		featureService.deleteAllFeatures();
		return new ResponseEntity<Feature>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Kundes---------------------------------------------

	@RequestMapping(value = "/kunde/", method = RequestMethod.GET)
	public ResponseEntity<List<Kunde>> listAllKundes() {
		List<Kunde> kundes = kundeService.findAllKundes();
		if (kundes.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Kunde>>(kundes, HttpStatus.OK);
	}

	// -------------------Retrieve Single Kunde------------------------------------------

	@RequestMapping(value = "/kunde/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getKunde(@PathVariable("id") long id) {
		logger.info("Fetching Kunde with id {}", id);
		Kunde kunde = kundeService.findById(id);
		if (kunde == null) {
			logger.error("Kunde with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Kunde with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Kunde>(kunde, HttpStatus.OK);
	}

	// -------------------Create a Kunde-------------------------------------------

	@RequestMapping(value = "/kunde/", method = RequestMethod.POST)
	public ResponseEntity<?> createKunde(@RequestBody Kunde kunde, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Kunde : {}", kunde);

		if (kundeService.isKundeExist(kunde)) {
			logger.error("Unable to create. A Kunde with name {} already exist", kunde.getName());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Kunde with name " +
					kunde.getName() + " already exist."),HttpStatus.CONFLICT);
		}
		kundeService.saveKunde(kunde);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/kunde/{id}").buildAndExpand(kunde.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Kunde ------------------------------------------------

	@RequestMapping(value = "/kunde/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateKunde(@PathVariable("id") long id, @RequestBody Kunde kunde) {
		logger.info("Updating Kunde with id {}", id);

		Kunde currentKunde = kundeService.findById(id);

		if (currentKunde == null) {
			logger.error("Unable to update. Kunde with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Kunde with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentKunde.setName(kunde.getName());
		currentKunde.setAdresse(kunde.getAdresse());
		currentKunde.setAnsprechpartner(kunde.getAnsprechpartner());
		currentKunde.setTel(kunde.getTel());
		currentKunde.seteMail(kunde.geteMail());

		kundeService.updateKunde(currentKunde);
		return new ResponseEntity<Kunde>(currentKunde, HttpStatus.OK);
	}

	// ------------------- Delete a Kunde-----------------------------------------

	@RequestMapping(value = "/kunde/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteKunde(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Kunde with id {}", id);

		Kunde kunde = kundeService.findById(id);
		if (kunde == null) {
			logger.error("Unable to delete. Kunde with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Kunde with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		kundeService.deleteKundeById(id);
		return new ResponseEntity<Kunde>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Kundes-----------------------------

	@RequestMapping(value = "/kunde/", method = RequestMethod.DELETE)
	public ResponseEntity<Kunde> deleteAllKundes() {
		logger.info("Deleting All Kundes");

		kundeService.deleteAllKundes();
		return new ResponseEntity<Kunde>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Moduls---------------------------------------------

	@RequestMapping(value = "/modul/", method = RequestMethod.GET)
	public ResponseEntity<List<Modul>> listAllModuls() {
		List<Modul> moduls = modulService.findAllModuls();
		if (moduls.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Modul>>(moduls, HttpStatus.OK);
	}

	// -------------------Retrieve Single Modul------------------------------------------

	@RequestMapping(value = "/modul/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getModul(@PathVariable("id") Long id) {
		logger.info("Fetching Modul with id {}", id);
		Modul modul = modulService.findById(id);
		if (modul == null) {
			logger.error("Modul with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Modul with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Modul>(modul, HttpStatus.OK);
	}


	// -------------------Retrieve Single id of Module------------------------------------------

	@RequestMapping(value = "/id/", method = RequestMethod.GET)
	public ResponseEntity<?> getId(@PathVariable("modul") Modul modul) {
		logger.info("Fetching id with modul {}", modul);
		Long id = modulService.getId(modul);
		if (id == null) {
			logger.error("id from module {} not found.", modul);
			return new ResponseEntity(new CustomErrorType("Id from module " + modul
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Long>(id, HttpStatus.OK);
	}

	// -------------------Create a Modul-------------------------------------------

	@RequestMapping(value = "/modul/", method = RequestMethod.POST)
	public ResponseEntity<?> createModul(@RequestBody Modul modul, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Modul : {}", modul);

		if (modulService.isModulExist(modul)) {
			logger.error("Unable to create. A Modul with id {} already exist", modul.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Modul with name " +
					modul.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		modulService.saveModul(modul);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/modul/{id}").buildAndExpand(modul.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}




	// ------------------- Update a Modul ------------------------------------------------

	@RequestMapping(value = "/modul/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateModul(@PathVariable("id") Long id, @RequestBody Modul modul) {
		logger.info("Updating Modul with id {}", id);

		Modul currentModul = modulService.findById(id);

		if (currentModul == null) {
			logger.error("Unable to update. Modul with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Modul with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentModul.setModul(modul.getModul());
		currentModul.setBeschreibung(modul.getBeschreibung());
		currentModul.setImageID(modul.getImageID());
		currentModul.setPreis(modul.getPreis());

		modulService.updateModul(currentModul);
		return new ResponseEntity<Modul>(currentModul, HttpStatus.OK);
	}

	// ------------------- Delete a Modul-----------------------------------------

	@RequestMapping(value = "/modul/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteModul(@PathVariable("id") Long id) {
		logger.info("Fetching & Deleting Modul with id {}", id);

		Modul modul = modulService.findById(id);
		if (modul == null) {
			logger.error("Unable to delete. Modul with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Modul with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		modulService.deleteModulById(id);
		return new ResponseEntity<Modul>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Moduls-----------------------------

	@RequestMapping(value = "/modul/", method = RequestMethod.DELETE)
	public ResponseEntity<Modul> deleteAllModuls() {
		logger.info("Deleting All Moduls");

		modulService.deleteAllModuls();
		return new ResponseEntity<Modul>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Nutzungsarts---------------------------------------------

	@RequestMapping(value = "/nutzungsart/", method = RequestMethod.GET)
	public ResponseEntity<List<Nutzungsart>> listAllNutzungsarts() {
		List<Nutzungsart> nutzungsarts = nutzungsartService.findAllNutzungsarts();
		if (nutzungsarts.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Nutzungsart>>(nutzungsarts, HttpStatus.OK);
	}

	// -------------------Retrieve Single Nutzungsart------------------------------------------

	@RequestMapping(value = "/nutzungsart/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getNutzungsart(@PathVariable("id") long id) {
		logger.info("Fetching Nutzungsart with id {}", id);
		Nutzungsart nutzungsart = nutzungsartService.findById(id);
		if (nutzungsart == null) {
			logger.error("Nutzungsart with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Nutzungsart with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Nutzungsart>(nutzungsart, HttpStatus.OK);
	}

	// -------------------Create a Nutzungsart-------------------------------------------

	@RequestMapping(value = "/nutzungsart/", method = RequestMethod.POST)
	public ResponseEntity<?> createNutzungsart(@RequestBody Nutzungsart nutzungsart, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Nutzungsart : {}", nutzungsart);

	/*	if (nutzungsartService.isNutzungsartExist(nutzungsart)) {
			logger.error("Unable to create. A Nutzungsart with id {} already exist", nutzungsart.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Nutzungsart with name " +
					nutzungsart.getId() + " already exist."),HttpStatus.CONFLICT);
		}*/
		nutzungsartService.saveNutzungsart(nutzungsart);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/nutzungsart/{id}").buildAndExpand(nutzungsart.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Nutzungsart ------------------------------------------------

	@RequestMapping(value = "/nutzungsart/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateNutzungsart(@PathVariable("id") long id, @RequestBody Nutzungsart nutzungsart) {
		logger.info("Updating Nutzungsart with id {}", id);

		Nutzungsart currentNutzungsart = nutzungsartService.findById(id);

		if (currentNutzungsart == null) {
			logger.error("Unable to update. Nutzungsart with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Nutzungsart with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentNutzungsart.setTyp(nutzungsart.getTyp());
		currentNutzungsart.setBeschreibung(nutzungsart.getBeschreibung());
		currentNutzungsart.setImageID(nutzungsart.getImageID());
		currentNutzungsart.setPreis(nutzungsart.getPreis());

		nutzungsartService.updateNutzungsart(currentNutzungsart);
		return new ResponseEntity<Nutzungsart>(currentNutzungsart, HttpStatus.OK);
	}

	// ------------------- Delete a Nutzungsart-----------------------------------------

	@RequestMapping(value = "/nutzungsart/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteNutzungsart(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Nutzungsart with id {}", id);

		Nutzungsart nutzungsart = nutzungsartService.findById(id);
		if (nutzungsart == null) {
			logger.error("Unable to delete. Nutzungsart with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Nutzungsart with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		nutzungsartService.deleteNutzungsartById(id);
		return new ResponseEntity<Nutzungsart>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Nutzungsarts-----------------------------

	@RequestMapping(value = "/nutzungsart/", method = RequestMethod.DELETE)
	public ResponseEntity<Nutzungsart> deleteAllNutzungsarts() {
		logger.info("Deleting All Nutzungsarts");

		nutzungsartService.deleteAllNutzungsarts();
		return new ResponseEntity<Nutzungsart>(HttpStatus.NO_CONTENT);
	}

// -------------------Retrieve All Projektinformationens---------------------------------------------

	@RequestMapping(value = "/projektinformationen/", method = RequestMethod.GET)
	public ResponseEntity<List<Projektinformationen>> listAllProjektinformationens() {
		List<Projektinformationen> projektinformationens = projektinformationenService.findAllProjektinformationens();
		if (projektinformationens.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Projektinformationen>>(projektinformationens, HttpStatus.OK);
	}

	// -------------------Retrieve Single Projektinformationen------------------------------------------

	@RequestMapping(value = "/projektinformationen/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getProjektinformationen(@PathVariable("id") long id) {
		logger.info("Fetching Projektinformationen with id {}", id);
		Projektinformationen projektinformationen = projektinformationenService.findById(id);
		if (projektinformationen == null) {
			logger.error("Projektinformationen with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Projektinformationen with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Projektinformationen>(projektinformationen, HttpStatus.OK);
	}

	// -------------------Create a Projektinformationen-------------------------------------------

	@RequestMapping(value = "/projektinformationen/", method = RequestMethod.POST)
	public ResponseEntity<?> createProjektinformationen(@RequestBody Projektinformationen projektinformationen, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Projektinformationen : {}", projektinformationen);

		if (projektinformationenService.isProjektinformationenExist(projektinformationen)) {
			logger.error("Unable to create. A Projektinformationen with id {} already exist", projektinformationen.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Projektinformationen with name " +
					projektinformationen.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		projektinformationenService.saveProjektinformationen(projektinformationen);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/projektinformationen/{id}").buildAndExpand(projektinformationen.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Projektinformationen ------------------------------------------------

	@RequestMapping(value = "/projektinformationen/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateProjektinformationen(@PathVariable("id") long id, @RequestBody Projektinformationen projektinformationen) {
		logger.info("Updating Projektinformationen with id {}", id);

		Projektinformationen currentProjektinformationen = projektinformationenService.findById(id);

		if (currentProjektinformationen == null) {
			logger.error("Unable to update. Projektinformationen with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Projektinformationen with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentProjektinformationen.setGrundstueck(projektinformationen.isGrundstueck());
		currentProjektinformationen.setArchitekt(projektinformationen.isArchitekt());
		currentProjektinformationen.setKommentar(projektinformationen.getKommentar());
		currentProjektinformationen.setCheckliste(projektinformationen.getCheckliste());

		projektinformationenService.updateProjektinformationen(currentProjektinformationen);
		return new ResponseEntity<Projektinformationen>(currentProjektinformationen, HttpStatus.OK);
	}

	// ------------------- Delete a Projektinformationen-----------------------------------------

	@RequestMapping(value = "/projektinformationen/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteProjektinformationen(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Projektinformationen with id {}", id);

		Projektinformationen projektinformationen = projektinformationenService.findById(id);
		if (projektinformationen == null) {
			logger.error("Unable to delete. Projektinformationen with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Projektinformationen with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		projektinformationenService.deleteProjektinformationenById(id);
		return new ResponseEntity<Projektinformationen>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Projektinformationens-----------------------------

	@RequestMapping(value = "/projektinformationen/", method = RequestMethod.DELETE)
	public ResponseEntity<Projektinformationen> deleteAllProjektinformationens() {
		logger.info("Deleting All Projektinformationens");

		projektinformationenService.deleteAllProjektinformationens();
		return new ResponseEntity<Projektinformationen>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Statuss---------------------------------------------

	@RequestMapping(value = "/status/", method = RequestMethod.GET)
	public ResponseEntity<List<Status>> listAllStatuss() {
		List<Status> statuss = statusService.findAllStatuss();
		if (statuss.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Status>>(statuss, HttpStatus.OK);
	}

	// -------------------Retrieve Single Status------------------------------------------

	@RequestMapping(value = "/status/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getStatus(@PathVariable("id") long id) {
		logger.info("Fetching Status with id {}", id);
		Status status = statusService.findById(id);
		if (status == null) {
			logger.error("Status with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Status with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Status>(status, HttpStatus.OK);
	}

	// -------------------Create a Status-------------------------------------------

	@RequestMapping(value = "/status/", method = RequestMethod.POST)
	public ResponseEntity<?> createStatus(@RequestBody Status status, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Status : {}", status);

		if (statusService.isStatusExist(status)) {
			logger.error("Unable to create. A Status with id {} already exist", status.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Status with name " +
					status.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		statusService.saveStatus(status);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/status/{id}").buildAndExpand(status.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Status ------------------------------------------------

	@RequestMapping(value = "/status/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateStatus(@PathVariable("id") long id, @RequestBody Status status) {
		logger.info("Updating Status with id {}", id);

		Status currentStatus = statusService.findById(id);

		if (currentStatus == null) {
			logger.error("Unable to update. Status with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Status with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentStatus.setBeschreibung(status.getBeschreibung());
		currentStatus.setStatus(status.getStatus());

		statusService.updateStatus(currentStatus);
		return new ResponseEntity<Status>(currentStatus, HttpStatus.OK);
	}

	// ------------------- Delete a Status-----------------------------------------

	@RequestMapping(value = "/status/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteStatus(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Status with id {}", id);

		Status status = statusService.findById(id);
		if (status == null) {
			logger.error("Unable to delete. Status with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Status with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		statusService.deleteStatusById(id);
		return new ResponseEntity<Status>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Statuss-----------------------------

	@RequestMapping(value = "/status/", method = RequestMethod.DELETE)
	public ResponseEntity<Status> deleteAllStatuss() {
		logger.info("Deleting All Statuss");

		statusService.deleteAllStatuss();
		return new ResponseEntity<Status>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Todos---------------------------------------------

	@RequestMapping(value = "/todo/", method = RequestMethod.GET)
	public ResponseEntity<List<Todo>> listAllTodos() {
		List<Todo> todos = todoService.findAllTodos();
		if (todos.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Todo>>(todos, HttpStatus.OK);
	}

	// -------------------Retrieve Single Todo------------------------------------------

	@RequestMapping(value = "/todo/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getTodo(@PathVariable("id") long id) {
		logger.info("Fetching Todo with id {}", id);
		Todo todo = todoService.findById(id);
		if (todo == null) {
			logger.error("Todo with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Todo with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Todo>(todo, HttpStatus.OK);
	}

	// -------------------Create a Todo-------------------------------------------

	@RequestMapping(value = "/todo/", method = RequestMethod.POST)
	public ResponseEntity<?> createTodo(@RequestBody Todo todo, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Todo : {}", todo);

		if (todoService.isTodoExist(todo)) {
			logger.error("Unable to create. A Todo with id {} already exist", todo.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Todo with name " +
					todo.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		todoService.saveTodo(todo);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/todo/{id}").buildAndExpand(todo.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Todo ------------------------------------------------

	@RequestMapping(value = "/todo/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateTodo(@PathVariable("id") long id, @RequestBody Todo todo) {
		logger.info("Updating Todo with id {}", id);

		Todo currentTodo = todoService.findById(id);

		if (currentTodo == null) {
			logger.error("Unable to update. Todo with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Todo with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentTodo.setBeschreibung(todo.getBeschreibung());
		currentTodo.setStatusinfo(todo.getStatusinfo());
		currentTodo.setCheckliste(todo.getCheckliste());

		todoService.updateTodo(currentTodo);
		return new ResponseEntity<Todo>(currentTodo, HttpStatus.OK);
	}

	// ------------------- Delete a Todo-----------------------------------------

	@RequestMapping(value = "/todo/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteTodo(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Todo with id {}", id);

		Todo todo = todoService.findById(id);
		if (todo == null) {
			logger.error("Unable to delete. Todo with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Todo with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		todoService.deleteTodoById(id);
		return new ResponseEntity<Todo>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Todos-----------------------------

	@RequestMapping(value = "/todo/", method = RequestMethod.DELETE)
	public ResponseEntity<Todo> deleteAllTodos() {
		logger.info("Deleting All Todos");

		todoService.deleteAllTodos();
		return new ResponseEntity<Todo>(HttpStatus.NO_CONTENT);
	}


	// -------------------Retrieve All Logins---------------------------------------------

	@RequestMapping(value = "/login/", method = RequestMethod.GET)
	public ResponseEntity<List<Login>> listAllLogins() {
		List<Login> logins = loginService.findAllLogins();
		if (logins.isEmpty()) {
			return new ResponseEntity(HttpStatus.NO_CONTENT);
			// You many decide to return HttpStatus.NOT_FOUND
		}
		return new ResponseEntity<List<Login>>(logins, HttpStatus.OK);
	}

	// -------------------Retrieve Single Login------------------------------------------

	@RequestMapping(value = "/login/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> getLogin(@PathVariable("id") long id) {
		logger.info("Fetching Login with id {}", id);
		Login login = loginService.findById(id);
		if (login == null) {
			logger.error("Login with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Login with id " + id
					+ " not found"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Login>(login, HttpStatus.OK);
	}

	// -------------------Create a Login-------------------------------------------

	@RequestMapping(value = "/login/", method = RequestMethod.POST)
	public ResponseEntity<?> createLogin(@RequestBody Login login, UriComponentsBuilder ucBuilder) {
		logger.info("Creating Login : {}", login);

		if (loginService.isLoginExist(login)) {
			logger.error("Unable to create. A Login with id {} already exist", login.getId());
			return new ResponseEntity(new CustomErrorType("Unable to create. A Login with name " +
					login.getId() + " already exist."),HttpStatus.CONFLICT);
		}
		loginService.saveLogin(login);

		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(ucBuilder.path("/api/login/{id}").buildAndExpand(login.getId()).toUri());
		return new ResponseEntity<String>(headers, HttpStatus.CREATED);
	}


	// ------------------- Update a Login ------------------------------------------------

	@RequestMapping(value = "/login/{id}", method = RequestMethod.PUT)
	public ResponseEntity<?> updateLogin(@PathVariable("id") long id, @RequestBody Login login) {
		logger.info("Updating Login with id {}", id);

		Login currentLogin = loginService.findById(id);

		if (currentLogin == null) {
			logger.error("Unable to update. Login with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to upate. Login with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}

		currentLogin.setLoginname(login.getLoginname());
		currentLogin.setPasswort(login.getPasswort());

		loginService.updateLogin(currentLogin);
		return new ResponseEntity<Login>(currentLogin, HttpStatus.OK);
	}

	// ------------------- Delete a Login-----------------------------------------

	@RequestMapping(value = "/login/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<?> deleteLogin(@PathVariable("id") long id) {
		logger.info("Fetching & Deleting Login with id {}", id);

		Login login = loginService.findById(id);
		if (login == null) {
			logger.error("Unable to delete. Login with id {} not found.", id);
			return new ResponseEntity(new CustomErrorType("Unable to delete. Login with id " + id + " not found."),
					HttpStatus.NOT_FOUND);
		}
		loginService.deleteLoginById(id);
		return new ResponseEntity<Login>(HttpStatus.NO_CONTENT);
	}

	// ------------------- Delete All Logins-----------------------------

	@RequestMapping(value = "/login/", method = RequestMethod.DELETE)
	public ResponseEntity<Login> deleteAllLogins() {
		logger.info("Deleting All Logins");

		loginService.deleteAllLogins();
		return new ResponseEntity<Login>(HttpStatus.NO_CONTENT);
	}



}

