package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Checkliste;

import java.util.List;

public interface ChecklisteService {
    Checkliste findById(Long id);

    Checkliste findByName(String name);

    void saveCheckliste(Checkliste checkliste);

    void updateCheckliste(Checkliste checkliste);

    void deleteChecklisteById(Long id);

    void deleteAllChecklistes();

    List<Checkliste> findAllChecklistes();

    boolean isChecklisteExist(Checkliste checkliste);
}
