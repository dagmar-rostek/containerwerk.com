package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Adresse;

import java.util.List;

public interface AdresseService {
    Adresse findById(Long id);


    void saveAdresse(Adresse adresse);

    void updateAdresse(Adresse adresse);

    void deleteAdresseById(Long id);

    void deleteAllAdresses();

    List<Adresse> findAllAdresses();

    boolean isAdresseExist(Adresse adresse);
}
