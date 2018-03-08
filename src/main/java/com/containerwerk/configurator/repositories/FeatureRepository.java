package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Feature;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FeatureRepository extends JpaRepository<Feature, Long> {
    Feature findById(Long id);
}
