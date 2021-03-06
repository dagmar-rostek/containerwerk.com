package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Ausfuehrung;
import com.containerwerk.configurator.model.Nutzungsart;

import java.util.List;

public interface AusfuehrungService {
    Ausfuehrung findById(Long id);


    void saveAusfuehrung(Ausfuehrung ausfuehrung);

    void updateAusfuehrung(Ausfuehrung ausfuehrung);

    void deleteAusfuehrungById(Long id);

    void deleteAllAusfuehrungen();

    List<Ausfuehrung> findAllAusfuehrungen();

    boolean isAusfuehrungExist(Ausfuehrung ausfuehrung);

    List<Ausfuehrung> findAllAusfuehrungenFuerNutzungsart(Nutzungsart nutzungsart);
}
