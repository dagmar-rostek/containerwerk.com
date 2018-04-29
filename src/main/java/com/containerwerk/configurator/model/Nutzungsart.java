package com.containerwerk.configurator.model;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="APP_NUTZ")
public class Nutzungsart implements Serializable{
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
    private Double preis;

    @ElementCollection
    @Column(name="modulVarianten")
    private List<ModulVarianten> modulVarianten;


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

    public Double getPreis() {
        return preis;
    }

    public void setPreis(Double preis) {
        this.preis = preis;
    }

    public List<ModulVarianten> getModulVarianten() {
        return modulVarianten;
    }

    public void setModulVarianten(ArrayList<ModulVarianten> modulVarianten) {
        this.modulVarianten = modulVarianten;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Nutzungsart)) return false;
        Nutzungsart that = (Nutzungsart) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getTyp(), that.getTyp()) &&
                Objects.equals(getBeschreibung(), that.getBeschreibung()) &&
                Objects.equals(getImageID(), that.getImageID()) &&
                Objects.equals(getPreis(), that.getPreis()) &&
                Objects.equals(getModulVarianten(), that.getModulVarianten());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getTyp(), getBeschreibung(), getImageID(), getPreis(), getModulVarianten());
    }

    @Override
    public String toString() {
        return "Nutzungsart{" +
                "id=" + id +
                ", typ='" + typ + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", modulVarianten=" + modulVarianten +
                '}';
    }
}
