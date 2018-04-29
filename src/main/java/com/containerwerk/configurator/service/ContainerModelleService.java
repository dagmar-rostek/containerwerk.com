package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.ContainerModelle;

import java.util.List;

public interface ContainerModelleService {
    ContainerModelle findById(Long id);

    void saveContainerModell(ContainerModelle checkliste);

    void updateContainerModell(ContainerModelle checkliste);

    void deleteContainerModellById(Long id);

    void deleteAllContainerModelle();

    List<ContainerModelle> findAllContainerModelle();

    boolean isContainerModellExist(ContainerModelle checkliste);
}
