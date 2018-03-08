package com.containerwerk.configurator.service;

import com.containerwerk.configurator.repositories.LoginRepository;
import com.containerwerk.configurator.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("loginService")
@Transactional
public class LoginServiceImpl implements LoginService {
    @Autowired
    LoginRepository loginRepository;

    @Override
    public Login findById(Long id) {
        return loginRepository.findById(id);
    }

    @Override
    public void saveLogin(Login login) {
        loginRepository.save(login);
    }

    @Override
    public void updateLogin(Login login) {
        saveLogin(login);
    }

    @Override
    public void deleteLoginById(Long id) {
        loginRepository.delete(id);
    }

    @Override
    public void deleteAllLogins() {
        loginRepository.deleteAll();
    }

    @Override
    public List<Login> findAllLogins() {
        return loginRepository.findAll();
    }

    @Override
    public boolean isLoginExist(Login login) {
        return loginRepository.findById(login.getId())!=null;
    }
}
