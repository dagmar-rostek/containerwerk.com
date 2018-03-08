package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Checkliste;
import com.containerwerk.configurator.repositories.ChecklisteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("checklisteService")
@Transactional
public class ChecklisteServiceImpl implements ChecklisteService {

    @Autowired
    private ChecklisteRepository checklisteRepository;

    @Override
    public Checkliste findById(Long id) {
        return checklisteRepository.findById(id);
    }

    @Override
    public Checkliste findByName(String name) {
        return checklisteRepository.findByName(name);
    }

    @Override
    public void saveCheckliste(Checkliste checkliste) {
        checklisteRepository.save(checkliste);
    }

    @Override
    public void updateCheckliste(Checkliste checkliste) {
        saveCheckliste(checkliste);
    }

    @Override
    public void deleteChecklisteById(Long id) {
        checklisteRepository.delete(id);
    }

    @Override
    public void deleteAllChecklistes() {
        checklisteRepository.deleteAll();
    }

    @Override
    public List<Checkliste> findAllChecklistes() {
        return checklisteRepository.findAll();
    }

    @Override
    public boolean isChecklisteExist(Checkliste checkliste) {
        return findByName(checkliste.getName()) != null;
    }
}
