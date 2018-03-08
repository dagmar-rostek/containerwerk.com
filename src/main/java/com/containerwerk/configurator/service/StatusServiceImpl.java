package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Status;
import com.containerwerk.configurator.repositories.StatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("statusService")
@Transactional
public class StatusServiceImpl implements StatusService{
    @Autowired
    StatusRepository statusRepository;

    @Override
    public Status findById(Long id) {
        return statusRepository.findById(id);
    }

    @Override
    public void saveStatus(Status status) {
        statusRepository.save(status);
    }

    @Override
    public void updateStatus(Status status) {
        saveStatus(status);
    }

    @Override
    public void deleteStatusById(Long id) {
        statusRepository.delete(id);
    }

    @Override
    public void deleteAllStatuss() {
        statusRepository.deleteAll();
    }

    @Override
    public List<Status> findAllStatuss() {
        return statusRepository.findAll();
    }

    @Override
    public boolean isStatusExist(Status status) {
        return findById(status.getId())!=null;
    }
}
