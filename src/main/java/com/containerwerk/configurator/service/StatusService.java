package com.containerwerk.configurator.service;


import com.containerwerk.configurator.model.Status;

import java.util.List;

public interface StatusService {
    Status findById(Long id);

    void saveStatus(Status status);

    void updateStatus(Status status);

    void deleteStatusById(Long id);

    void deleteAllStatuss();

    List<Status> findAllStatuss();

    boolean isStatusExist(Status status);
}
