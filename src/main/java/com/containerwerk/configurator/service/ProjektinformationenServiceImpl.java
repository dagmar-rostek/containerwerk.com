package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Projektinformationen;
import com.containerwerk.configurator.repositories.ProjektinformationenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("projektinformationService")
@Transactional
public class ProjektinformationenServiceImpl implements ProjektinformationenService{
    @Autowired
    private ProjektinformationenRepository projektinformationenRepository;

    @Override
    public Projektinformationen findById(Long id) {
        return projektinformationenRepository.findById(id);
    }

    @Override
    public void saveProjektinformationen(Projektinformationen projektinformationen) {
        projektinformationenRepository.save(projektinformationen);
    }

    @Override
    public void updateProjektinformationen(Projektinformationen projektinformationen) {
        saveProjektinformationen(projektinformationen);
    }

    @Override
    public void deleteProjektinformationenById(Long id) {
        projektinformationenRepository.delete(id);
    }

    @Override
    public void deleteAllProjektinformationens() {
        projektinformationenRepository.deleteAll();
    }

    @Override
    public List<Projektinformationen> findAllProjektinformationens() {
        return projektinformationenRepository.findAll();
    }

    @Override
    public boolean isProjektinformationenExist(Projektinformationen projektinformationen) {
        return findById(projektinformationen.getId()) != null;
    }
}
