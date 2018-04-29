package com.containerwerk.configurator.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_MODU")
public class Modul implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="modul")
    @Enumerated(EnumType.STRING)
    private ModulVarianten modul;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name="imageID")
    private String imageID;

    @Column(name="preis")
    private Double preis;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public ModulVarianten getModul() {
        return modul;
    }

    public void setModul(ModulVarianten modul) {
        this.modul = modul;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getImageID() {
        return imageID;
    }

    public void setImageID(String imageID) {
        this.imageID = imageID;
    }

    public Double getPreis() {
        return preis;
    }

    public void setPreis(Double preis) {
        this.preis = preis;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Modul)) return false;
        Modul modul1 = (Modul) o;
        return Objects.equals(getId(), modul1.getId()) &&
                Objects.equals(getModul(), modul1.getModul()) &&
                Objects.equals(getBeschreibung(), modul1.getBeschreibung()) &&
                Objects.equals(getImageID(), modul1.getImageID()) &&
                Objects.equals(getPreis(), modul1.getPreis());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getModul(), getBeschreibung(), getImageID(), getPreis());
    }

    @Override
    public String toString() {
        return "Modul{" +
                "id=" + id +
                ", modul='" + modul + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                '}';
    }
}
