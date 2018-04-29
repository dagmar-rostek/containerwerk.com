package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.NutzungsartAusfuehrung;

import java.util.List;

public interface NutzungsartAusfuehrungService {
    NutzungsartAusfuehrung findById(Long id);

    void saveNutzungsartAusfuehrung(NutzungsartAusfuehrung nutzungsart);

    void updateNutzungsartAusfuehrung(NutzungsartAusfuehrung nutzungsart);

    void deleteNutzungsartAusfuehrungById(Long id);

    void deleteAllNutzungsartAusfuehrungen();

    List<NutzungsartAusfuehrung> findAllNutzungsartAusfuehrungen();

    boolean isNutzungsartAusfuehrungExist(NutzungsartAusfuehrung nutzungsart);
}
