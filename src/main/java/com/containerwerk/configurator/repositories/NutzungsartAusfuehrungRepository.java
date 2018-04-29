package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Nutzungsart;
import com.containerwerk.configurator.model.NutzungsartAusfuehrung;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NutzungsartAusfuehrungRepository extends JpaRepository<NutzungsartAusfuehrung, Long> {
    NutzungsartAusfuehrung findById(Long id);
}
