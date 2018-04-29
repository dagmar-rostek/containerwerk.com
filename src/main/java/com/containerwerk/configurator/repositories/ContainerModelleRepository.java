package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.ContainerModelle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContainerModelleRepository extends JpaRepository<ContainerModelle, Long> {

    ContainerModelle findById(Long id);
}