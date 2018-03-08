package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Ausfuehrung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AusfuehrungRepository extends JpaRepository<Ausfuehrung, Long> {
     Ausfuehrung findById(Long id);
}
