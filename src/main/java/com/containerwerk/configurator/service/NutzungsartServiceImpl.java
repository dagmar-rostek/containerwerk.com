package com.containerwerk.configurator.service;

import com.containerwerk.configurator.repositories.NutzungsartRepository;
import com.containerwerk.configurator.model.Nutzungsart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("nutzungsartService")
@Transactional
public class NutzungsartServiceImpl implements NutzungsartService{

    @Autowired
    private NutzungsartRepository nutzungsartRepository;

    @Override
    public Nutzungsart findById(Long id) {
        return nutzungsartRepository.findOne(id);
    }

    @Override
    public void saveNutzungsart(Nutzungsart nutzungsart) {
        nutzungsartRepository.save(nutzungsart);
    }

    @Override
    public void updateNutzungsart(Nutzungsart nutzungsart) {
        saveNutzungsart(nutzungsart);
    }

    @Override
    public void deleteNutzungsartById(Long id) {
        nutzungsartRepository.delete(id);
    }

    @Override
    public void deleteAllNutzungsarts() {
        nutzungsartRepository.deleteAll();
    }

    @Override
    public List<Nutzungsart> findAllNutzungsarts() {
        return nutzungsartRepository.findAll();
    }

    @Override
    public boolean isNutzungsartExist(Nutzungsart nutzungsart) {
        return findById(nutzungsart.getId()) != null;
    }
}
