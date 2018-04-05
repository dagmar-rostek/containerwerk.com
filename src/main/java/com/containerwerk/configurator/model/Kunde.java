package com.containerwerk.configurator.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_KUND")
public class Kunde implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name="name", nullable = false)
    private String name;

    @Column(name="adresse")
    private Adresse adresse;

    @Column(name="ansprechpartner")
    private String ansprechpartner;

    @Column(name="tel")
    private String tel;

    @Column(name="eMail")
    private String eMail;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToOne(targetEntity=Adresse.class, mappedBy = "adresse")
    public Adresse getAdresse() {
        return adresse;
    }

    public void setAdresse(Adresse adresse) {
        this.adresse = adresse;
    }

    public String getAnsprechpartner() {
        return ansprechpartner;
    }

    public void setAnsprechpartner(String ansprechpartner) {
        this.ansprechpartner = ansprechpartner;
    }

    public String getTel() {
        return tel;
    }

    public void setTel(String tel) {
        this.tel = tel;
    }

    public String geteMail() {
        return eMail;
    }

    public void seteMail(String eMail) {
        this.eMail = eMail;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Kunde)) return false;
        Kunde kunde = (Kunde) o;
        return Objects.equals(getId(), kunde.getId()) &&
                Objects.equals(getName(), kunde.getName()) &&
                Objects.equals(getAdresse(), kunde.getAdresse()) &&
                Objects.equals(getAnsprechpartner(), kunde.getAnsprechpartner()) &&
                Objects.equals(getTel(), kunde.getTel()) &&
                Objects.equals(geteMail(), kunde.geteMail());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getName(), getAdresse(), getAnsprechpartner(), getTel(), geteMail());
    }

    @Override
    public String toString() {
        return "KundeRepository{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", adresse=" + adresse +
                ", ansprechpartner='" + ansprechpartner + '\'' +
                ", tel='" + tel + '\'' +
                ", eMail='" + eMail + '\'' +
                '}';
    }
}
