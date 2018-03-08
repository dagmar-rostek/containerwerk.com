package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Angebot;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AngebotRepository  extends JpaRepository<Angebot, Long> {

    Angebot findByName(String name);

}
