package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Einrichtung;

import java.util.List;

public interface EinrichtungService {
    Einrichtung findById(Long id);

    void saveEinrichtung(Einrichtung einrichtung);

    void updateEinrichtung(Einrichtung einrichtung);

    void deleteEinrichtungById(Long id);

    void deleteAllEinrichtungs();

    List<Einrichtung> findAllEinrichtungs();

    boolean isEinrichtungExist(Einrichtung einrichtung);
}
