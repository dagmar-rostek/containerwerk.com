package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Adresse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdresseRepository extends JpaRepository<Adresse, Long> {

    Adresse findById(Long id);

}