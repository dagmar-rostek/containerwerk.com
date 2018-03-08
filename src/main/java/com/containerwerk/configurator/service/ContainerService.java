package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Container;

import java.util.List;

public interface ContainerService {

    Container findById(Long id);

    void saveContainer(Container container);

    void updateContainer(Container container);

    void deleteContainerById(Long id);

    void deleteAllContainer();

    List<Container> findAllContainers();

    boolean isContainerExist(Container container);
}
