package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Modul;

import java.util.List;

public interface ModulService {
    Modul findById(Long id);

    void saveModul(Modul modul);

    Long getId(Modul modul);

    void updateModul(Modul modul);

    void deleteModulById(Long id);

    void deleteAllModuls();

    List<Modul> findAllModuls();

    boolean isModulExist(Modul modul);
}
