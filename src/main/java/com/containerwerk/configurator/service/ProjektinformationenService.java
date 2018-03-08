package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Projektinformationen;

import java.util.List;

public interface ProjektinformationenService {
    Projektinformationen findById(Long id);

    void saveProjektinformationen(Projektinformationen projektinformationen);

    void updateProjektinformationen(Projektinformationen projektinformationen);

    void deleteProjektinformationenById(Long id);

    void deleteAllProjektinformationens();

    List<Projektinformationen> findAllProjektinformationens();

    boolean isProjektinformationenExist(Projektinformationen projektinformationen);
}
