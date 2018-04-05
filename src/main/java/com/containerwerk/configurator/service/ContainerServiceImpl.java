package com.containerwerk.configurator.service;

import com.containerwerk.configurator.repositories.ContainerRepository;
import com.containerwerk.configurator.model.Container;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("containerService")
@Transactional
public class ContainerServiceImpl implements ContainerService {
    @Autowired
    private ContainerRepository containerRepository;

    @Override
    public Container findById(Long id) {
        return containerRepository.findOne(id);
    }
    @Override
    public void saveContainer(Container container) {
        containerRepository.save(container);
    }

    @Override
    public void updateContainer(Container container) {
        saveContainer(container);
    }

    @Override
    public void deleteContainerById(Long id) {
        containerRepository.delete(id);
    }

    @Override
    public void deleteAllContainer() {
        containerRepository.deleteAll();
    }

    @Override
    public List<Container> findAllContainers() {
        return containerRepository.findAll();
    }

    @Override
    public boolean isContainerExist(Container container) {
        return findById(container.getId()) != null;
    }

    @Override
    public Long getId(Container container) {
        return container.getId();
    }
}
