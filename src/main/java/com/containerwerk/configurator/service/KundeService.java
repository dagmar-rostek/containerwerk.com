package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Kunde;

import java.util.List;

public interface KundeService {
    Kunde findById(Long id);

    void saveKunde(Kunde kunde);

    void updateKunde(Kunde kunde);

    void deleteKundeById(Long id);

    void deleteAllKundes();

    List<Kunde> findAllKundes();

    boolean isKundeExist(Kunde kunde);
}
