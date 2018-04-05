package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Modul;
import com.containerwerk.configurator.repositories.ModulRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service("modulService")
@Transactional
public class ModulServiceImpl implements ModulService{
    @Autowired
    private ModulRepository modulRepository;

    @Override
    public Modul findById(Long id) {
        return modulRepository.findById(id);
    }

    @Override
    public void saveModul(Modul modul) {
        modulRepository.save(modul);
    }

    @Override
    public Long getId(Modul modul){
        return modul.getId();
    }

    @Override
    public void updateModul(Modul modul) {
        saveModul(modul);
    }

    @Override
    public void deleteModulById(Long id) {
        modulRepository.delete(id);
    }

    @Override
    public void deleteAllModuls() {
        modulRepository.deleteAll();
    }

    @Override
    public List<Modul> findAllModuls() {
        return modulRepository.findAll();
    }

    @Override
    public boolean isModulExist(Modul modul) {
        return findById(modul.getId()) != null;
    }
}
