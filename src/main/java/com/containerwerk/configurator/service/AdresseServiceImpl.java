package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Adresse;
import com.containerwerk.configurator.repositories.AdresseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("adresseService")
@Transactional
public class AdresseServiceImpl implements AdresseService{

    @Autowired
    private AdresseRepository adresseRepository;

    @Override
    public Adresse findById(Long id) {
        return adresseRepository.findById(id);
    }

    @Override
    public void saveAdresse(Adresse adresse) {
        adresseRepository.save(adresse);
    }

    @Override
    public void updateAdresse(Adresse adresse) {
        saveAdresse(adresse);
    }

    @Override
    public void deleteAdresseById(Long id) {
        deleteAdresseById(id);
    }

    @Override
    public void deleteAllAdresses() {
        deleteAllAdresses();
    }

    @Override
    public List<Adresse> findAllAdresses() {
        return adresseRepository.findAll();
    }

    @Override
    public boolean isAdresseExist(Adresse adresse) {
        return findById(adresse.getId()) != null;
    }
}
