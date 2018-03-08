package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository  extends JpaRepository<Login, Long> {
    Login findById(Long id);
}
