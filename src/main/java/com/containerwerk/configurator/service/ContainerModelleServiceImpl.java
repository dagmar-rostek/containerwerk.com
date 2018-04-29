package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.ContainerModelle;
import com.containerwerk.configurator.repositories.ContainerModelleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("containerModelleService")
@Transactional
public class ContainerModelleServiceImpl implements ContainerModelleService {

    @Autowired
    private ContainerModelleRepository containerModelleRepository;

    @Override
    public ContainerModelle findById(Long id) {
        return containerModelleRepository.findById(id);
    }

    @Override
    public void saveContainerModell(ContainerModelle containerModelle) {
        containerModelleRepository.save(containerModelle);
    }

    @Override
    public void updateContainerModell(ContainerModelle containerModelle) {
        saveContainerModell(containerModelle);
    }

    @Override
    public void deleteContainerModellById(Long id) {
        containerModelleRepository.delete(id);
    }

    @Override
    public void deleteAllContainerModelle() {
        containerModelleRepository.deleteAll();
    }

    @Override
    public List<ContainerModelle> findAllContainerModelle() {
        return containerModelleRepository.findAll();
    }

    @Override
    public boolean isContainerModellExist(ContainerModelle containerModelle) {
        return findById(containerModelle.getId()) != null;
    }
}
