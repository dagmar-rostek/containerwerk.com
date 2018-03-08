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

    @NotEmpty
    @Column(name="modul", nullable = false)
    private String modul;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name="imageID")
    private String imageID;

    @Column(name="preis")
    private Double preis;

    @Column(name="nutzungsart")
    private Nutzungsart nutzungsart;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToOne(targetEntity=Container.class, mappedBy = "container")
    public String getModul() {
        return modul;
    }

    public void setModul(String modul) {
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


    public Nutzungsart getNutzungsart() {
        return nutzungsart;
    }

    public void setNutzungsart(Nutzungsart nutzungsart) {
        this.nutzungsart = nutzungsart;
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
                Objects.equals(getPreis(), modul1.getPreis()) &&
                Objects.equals(getNutzungsart(), modul1.getNutzungsart());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getModul(), getBeschreibung(), getImageID(), getPreis(), getNutzungsart());
    }

    @Override
    public String toString() {
        return "Modul{" +
                "id=" + id +
                ", modul='" + modul + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", nutzungsart=" + nutzungsart +
                '}';
    }
}
