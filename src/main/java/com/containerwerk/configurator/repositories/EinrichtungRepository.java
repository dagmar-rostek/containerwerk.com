package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Einrichtung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EinrichtungRepository extends JpaRepository<Einrichtung, Long> {
    Einrichtung findById(Long id);
}
