package com.containerwerk.configurator.model;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="APP_AUSF")
public class Ausfuehrung implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name="typ", nullable=false)
    private String typ;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name="imageID")
    private String imageID;

    @Column(name="preis")
    private Integer preis;

    @ElementCollection
    @Column(name="modulVarianten")
    private List<ModulVarianten> modulVarianten;

    @ElementCollection
    @Column(name="nutzungsartVarianten")
    private List<NutzungsartVarianten> nutzungsartVarianten;

    @ElementCollection
    @Column(name="featureliste")
    private List<Feature> featureList;

    @ElementCollection
    @Column(name="einrichtungliste")
    private List<Einrichtung> einrichtungList;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTyp() {
        return typ;
    }

    public void setTyp(String typ) {
        this.typ = typ;
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

    public Integer getPreis() {
        return preis;
    }

    public void setPreis(Integer preis) {
        this.preis = preis;
    }

    public List<Feature> getFeatureList() {
        return featureList;
    }

    public void setFeatureList(List<Feature> featureList) {
        this.featureList = featureList;
    }

    public List<Einrichtung> getEinrichtungList() {
        return einrichtungList;
    }

    public void setEinrichtungList(List<Einrichtung> einrichtungList) {
        this.einrichtungList = einrichtungList;
    }

    public List<ModulVarianten> getModulVarianten() {
        return modulVarianten;
    }

    public void setModulVarianten(ArrayList<ModulVarianten> modulVarianten) {
        this.modulVarianten = modulVarianten;
    }

    public List<NutzungsartVarianten> getNutzungsartVarianten() {
        return nutzungsartVarianten;
    }

    public void setNutzungsartVarianten(ArrayList<NutzungsartVarianten> nutzungsartVarianten) {
        this.nutzungsartVarianten = nutzungsartVarianten;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Ausfuehrung)) return false;
        Ausfuehrung that = (Ausfuehrung) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getTyp(), that.getTyp()) &&
                Objects.equals(getBeschreibung(), that.getBeschreibung()) &&
                Objects.equals(getImageID(), that.getImageID()) &&
                Objects.equals(getPreis(), that.getPreis()) &&
                Objects.equals(getModulVarianten(), that.getModulVarianten()) &&
                Objects.equals(getNutzungsartVarianten(), that.getNutzungsartVarianten()) &&
                Objects.equals(getFeatureList(), that.getFeatureList()) &&
                Objects.equals(getEinrichtungList(), that.getEinrichtungList());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getTyp(), getBeschreibung(), getImageID(), getPreis(), getModulVarianten(), getNutzungsartVarianten(), getFeatureList(), getEinrichtungList());
    }

    @Override
    public String toString() {
        return "Ausfuehrung{" +
                "id=" + id +
                ", typ='" + typ + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", modulVarianten=" + modulVarianten +
                ", nutzungsartVarianten=" + nutzungsartVarianten +
                ", featureList=" + featureList +
                ", einrichtungList=" + einrichtungList +
                '}';
    }
}
