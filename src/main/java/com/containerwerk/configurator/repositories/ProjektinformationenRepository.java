package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Projektinformationen;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProjektinformationenRepository extends JpaRepository<Projektinformationen, Long> {
    Projektinformationen findById(Long id);
}
