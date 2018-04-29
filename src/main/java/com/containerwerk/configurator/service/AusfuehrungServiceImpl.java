package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Nutzungsart;
import com.containerwerk.configurator.repositories.AusfuehrungRepository;
import com.containerwerk.configurator.model.Ausfuehrung;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("ausfuehrungService")
@Transactional
public class AusfuehrungServiceImpl implements AusfuehrungService {

    @Autowired
    private AusfuehrungRepository ausfuehrungRepository;

    @Override
    public Ausfuehrung findById(Long id) {
        return ausfuehrungRepository.findById(id);
    }

    @Override
    public void saveAusfuehrung(Ausfuehrung ausfuehrung) {
        ausfuehrungRepository.save(ausfuehrung);
    }

    @Override
    public void updateAusfuehrung(Ausfuehrung ausfuehrung) {
        saveAusfuehrung(ausfuehrung);
    }

    @Override
    public void deleteAusfuehrungById(Long id) {
        ausfuehrungRepository.delete(id);
    }

    @Override
    public void deleteAllAusfuehrungen() {
        ausfuehrungRepository.deleteAll();
    }

    @Override
    public List<Ausfuehrung> findAllAusfuehrungen() {
        return ausfuehrungRepository.findAll();
    }

    @Override
    public boolean isAusfuehrungExist(Ausfuehrung ausfuehrung) {
        return findById(ausfuehrung.getId()) != null;
    }

    @Override
    public List<Ausfuehrung> findAllAusfuehrungenFuerNutzungsart(Nutzungsart nutzungsart) {
        List<Ausfuehrung> allAusfuehrungen = findAllAusfuehrungen();

        return null;
    }
}
