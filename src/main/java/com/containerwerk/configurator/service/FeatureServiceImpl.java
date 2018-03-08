package com.containerwerk.configurator.service;

import com.containerwerk.configurator.repositories.FeatureRepository;
import com.containerwerk.configurator.model.Feature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("featureService")
@Transactional
public class FeatureServiceImpl implements FeatureService {
    @Autowired
    private FeatureRepository featureRepository;


    @Override
    public Feature findById(Long id) {
        return featureRepository.findById(id);
    }

    @Override
    public void saveFeature(Feature feature) {
        featureRepository.save(feature);
    }

    @Override
    public void updateFeature(Feature feature) {
        saveFeature(feature);
    }

    @Override
    public void deleteFeatureById(Long id) {
        featureRepository.delete(id);
    }

    @Override
    public void deleteAllFeatures() {
        featureRepository.deleteAll();
    }

    @Override
    public List<Feature> findAllFeatures() {
        return featureRepository.findAll();
    }

    @Override
    public boolean isFeatureExist(Feature feature) {
        return findById(feature.getId()) != null;
    }
}
