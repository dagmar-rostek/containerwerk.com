package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Kunde;
import com.containerwerk.configurator.repositories.KundeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("kundenService")
@Transactional
public class KundeServiceImpl implements KundeService{

    @Autowired
    private KundeRepository kundeRepository;

    @Override
    public Kunde findById(Long id) {
        return kundeRepository.findById(id);
    }

    @Override
    public void saveKunde(Kunde kunde) {
        kundeRepository.save(kunde);
    }

    @Override
    public void updateKunde(Kunde kunde) {
        saveKunde(kunde);
    }

    @Override
    public void deleteKundeById(Long id) {
        kundeRepository.delete(id);
    }

    @Override
    public void deleteAllKundes() {
        kundeRepository.deleteAll();
    }

    @Override
    public List<Kunde> findAllKundes() {
        return kundeRepository.findAll();
    }

    @Override
    public boolean isKundeExist(Kunde kunde) {
        return findById(kunde.getId()) != null;
    }
}
