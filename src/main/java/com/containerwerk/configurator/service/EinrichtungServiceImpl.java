package com.containerwerk.configurator.service;

import com.containerwerk.configurator.repositories.EinrichtungRepository;
import com.containerwerk.configurator.model.Einrichtung;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("einrichtungService")
@Transactional
public class EinrichtungServiceImpl implements EinrichtungService{

    @Autowired
    private EinrichtungRepository einrichtungRepository;

    @Override
    public Einrichtung findById(Long id) {
        return einrichtungRepository.findById(id);
    }

    @Override
    public void saveEinrichtung(Einrichtung einrichtung) {
        einrichtungRepository.save(einrichtung);
    }

    @Override
    public void updateEinrichtung(Einrichtung einrichtung) {
        saveEinrichtung(einrichtung);
    }

    @Override
    public void deleteEinrichtungById(Long id) {
        einrichtungRepository.delete(id);
    }

    @Override
    public void deleteAllEinrichtungs() {
        einrichtungRepository.deleteAll();
    }

    @Override
    public List<Einrichtung> findAllEinrichtungs() {
        return einrichtungRepository.findAll();
    }

    @Override
    public boolean isEinrichtungExist(Einrichtung einrichtung) {
        return findById(einrichtung.getId())!=null;
    }
}
