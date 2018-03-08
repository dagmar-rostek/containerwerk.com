package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Ausfuehrung;

import java.util.List;

public interface AusfuehrungService {
    Ausfuehrung findById(Long id);


    void saveAusfuehrung(Ausfuehrung ausfuehrung);

    void updateAusfuehrung(Ausfuehrung ausfuehrung);

    void deleteAusfuehrungById(Long id);

    void deleteAllAusfuehrungs();

    List<Ausfuehrung> findAllAusfuehrungs();

    boolean isAusfuehrungExist(Ausfuehrung ausfuehrung);
}
