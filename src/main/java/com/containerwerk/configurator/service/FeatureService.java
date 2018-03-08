package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Feature;

import java.util.List;

public interface FeatureService {
    Feature findById(Long id);

    void saveFeature(Feature feature);

    void updateFeature(Feature feature);

    void deleteFeatureById(Long id);

    void deleteAllFeatures();

    List<Feature> findAllFeatures();

    boolean isFeatureExist(Feature feature);
}
