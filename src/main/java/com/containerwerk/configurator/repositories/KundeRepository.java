package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Kunde;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface KundeRepository extends JpaRepository<Kunde, Long> {
    Kunde findById(Long id);
}
