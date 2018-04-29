package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.NutzungsartAusfuehrung;
import com.containerwerk.configurator.repositories.NutzungsartAusfuehrungRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("nutzungsartAusfuehrungService")
@Transactional
public class NutzungsartAusfuehrungServiceImpl implements NutzungsartAusfuehrungService{

    @Autowired
    private NutzungsartAusfuehrungRepository nutzungsartAusfuehrungRepository;

    @Override
    public NutzungsartAusfuehrung findById(Long id) {
        return nutzungsartAusfuehrungRepository.findById(id);
    }

    @Override
    public void saveNutzungsartAusfuehrung(NutzungsartAusfuehrung nutzungsartAusfuehrung) {
        nutzungsartAusfuehrungRepository.save(nutzungsartAusfuehrung);
    }

    @Override
    public void updateNutzungsartAusfuehrung(NutzungsartAusfuehrung nutzungsartAusfuehrung) {
        nutzungsartAusfuehrungRepository.save(nutzungsartAusfuehrung);
    }

    @Override
    public void deleteNutzungsartAusfuehrungById(Long id) {
        nutzungsartAusfuehrungRepository.delete(id);
    }

    @Override
    public void deleteAllNutzungsartAusfuehrungen() {
        nutzungsartAusfuehrungRepository.deleteAll();
    }

    @Override
    public List<NutzungsartAusfuehrung> findAllNutzungsartAusfuehrungen() {
        return nutzungsartAusfuehrungRepository.findAll();
    }

    @Override
    public boolean isNutzungsartAusfuehrungExist(NutzungsartAusfuehrung nutzungsartAusfuehrung) {
        return findById(nutzungsartAusfuehrung.getId()) != null;
    }
}
