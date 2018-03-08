package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Login;

import java.util.List;

public interface LoginService {
    Login findById(Long id);

    void saveLogin(Login login);

    void updateLogin(Login login);

    void deleteLoginById(Long id);

    void deleteAllLogins();

    List<Login> findAllLogins();

    boolean isLoginExist(Login login);
}
