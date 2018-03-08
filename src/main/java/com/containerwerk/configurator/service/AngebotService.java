package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Angebot;

import java.util.List;

public interface AngebotService {

    Angebot findById(Long id);

    Angebot findByName(String name);

    void saveAngebot(Angebot angebot);

    void updateAngebot(Angebot angebot);

    void deleteAngebotById(Long id);

    void deleteAllAngebote();

    List<Angebot> findAllAngebote();

    boolean isAngebotExist(Angebot angebot);


}
