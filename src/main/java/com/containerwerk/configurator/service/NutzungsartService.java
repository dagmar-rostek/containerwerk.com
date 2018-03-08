package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Nutzungsart;

import java.util.List;

public interface NutzungsartService {

    Nutzungsart findById(Long id);

    void saveNutzungsart(Nutzungsart nutzungsart);

    void updateNutzungsart(Nutzungsart nutzungsart);

    void deleteNutzungsartById(Long id);

    void deleteAllNutzungsarts();

    List<Nutzungsart> findAllNutzungsarts();

    boolean isNutzungsartExist(Nutzungsart nutzungsart);
}
