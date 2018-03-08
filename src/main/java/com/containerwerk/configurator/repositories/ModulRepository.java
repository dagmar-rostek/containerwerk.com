package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Modul;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ModulRepository extends JpaRepository<Modul, Long> {
    Modul findById(Long id);
}
