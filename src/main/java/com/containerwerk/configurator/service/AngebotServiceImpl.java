package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Angebot;
import com.containerwerk.configurator.repositories.AngebotRepository;
import com.containerwerk.configurator.repositories.KundeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("angebotService")
@Transactional
public class AngebotServiceImpl implements AngebotService {

    @Autowired
    private AngebotRepository angebotRepository;
    @Autowired
    private KundeRepository kundeRepository;


    @Override
    public Angebot findById(Long id) {
        return angebotRepository.findOne(id);
    }

    @Override
    public Angebot findByName(String name) {
        return angebotRepository.findByName(name);
    }

    @Override
    public void saveAngebot(Angebot angebot) {
        kundeRepository.findAll();
        angebotRepository.save(angebot);
    }

    @Override
    public void updateAngebot(Angebot angebot) {
        saveAngebot(angebot);
    }

    @Override
    public void deleteAngebotById(Long id) {
        angebotRepository.delete(id);
    }

    @Override
    public void deleteAllAngebote() {
        angebotRepository.deleteAll();
    }

    @Override
    public List<Angebot> findAllAngebote() {
        return angebotRepository.findAll();
    }

    @Override
    public boolean isAngebotExist(Angebot angebot) {
        return findByName(angebot.getName()) != null;
    }

}
