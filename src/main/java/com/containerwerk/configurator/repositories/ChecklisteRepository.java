package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Checkliste;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChecklisteRepository extends JpaRepository<Checkliste, Long> {
    Checkliste findByName(String name);
    Checkliste findById(Long id);
}
