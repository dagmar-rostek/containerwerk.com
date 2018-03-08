package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Container;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ContainerRepository  extends JpaRepository<Container, Long> {
    Container findById(Long id);
}
