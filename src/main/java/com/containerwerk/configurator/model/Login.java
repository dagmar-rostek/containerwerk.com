package com.containerwerk.configurator.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_LOGI")
public class Login implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="loginname")
    private String loginname;

    @Column(name="passwort")
    private String passwort;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLoginname() {
        return loginname;
    }

    public void setLoginname(String loginname) {
        this.loginname = loginname;
    }

    public String getPasswort() {
        return passwort;
    }

    public void setPasswort(String passwort) {
        this.passwort = passwort;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Login)) return false;
        Login login = (Login) o;
        return  Objects.equals(getId(), login.getId()) &&
                Objects.equals(getLoginname(), login.getLoginname()) &&
                Objects.equals(getPasswort(), login.getPasswort());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getLoginname(), getPasswort());
    }

    @Override
    public String toString() {
        return "Login{" +
                "id=" + id +
                ", loginname='" + loginname + '\'' +
                ", passwort='" + passwort + '\'' +
                '}';
    }
}
