package com.containerwerk.configurator.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_SOWU")
public class Sonderwunsch  implements Serializable  {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="bezeichnung")
    private String bezeichnung;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name="imageID")
    private String imageID;

    @NotNull
    @Column(name="preis", nullable = false)
    private Double preis;

    @Column(name="anzahl")
    private Integer anzahl;

    @Column(name="ispreisrelevant")
    private boolean ispreisrelevant;


    @Column(name="container")
    private Container container;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBezeichnung() {
        return bezeichnung;
    }

    public void setBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
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

    public Integer getAnzahl() {
        return anzahl;
    }

    public void setAnzahl(Integer anzahl) {
        this.anzahl = anzahl;
    }

    public boolean isIspreisrelevant() {
        return ispreisrelevant;
    }

    public void setIspreisrelevant(boolean ispreisrelevant) {
        this.ispreisrelevant = ispreisrelevant;
    }

    @OneToOne(targetEntity = Container.class, mappedBy = "container")
    public Container getContainer() {
        return container;
    }

    public void setContainer(Container container) {
        this.container = container;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Sonderwunsch)) return false;
        Sonderwunsch that = (Sonderwunsch) o;
        return isIspreisrelevant() == that.isIspreisrelevant() &&
                Objects.equals(getId(), that.getId()) &&
                Objects.equals(getBezeichnung(), that.getBezeichnung()) &&
                Objects.equals(getBeschreibung(), that.getBeschreibung()) &&
                Objects.equals(getImageID(), that.getImageID()) &&
                Objects.equals(getPreis(), that.getPreis()) &&
                Objects.equals(getAnzahl(), that.getAnzahl()) &&
                Objects.equals(getContainer(), that.getContainer());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getBezeichnung(), getBeschreibung(), getImageID(), getPreis(), getAnzahl(), isIspreisrelevant(), getContainer());
    }

    @Override
    public String toString() {
        return "Sonderwunsch{" +
                "id=" + id +
                ", bezeichnung='" + bezeichnung + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", anzahl=" + anzahl +
                ", ispreisrelevant=" + ispreisrelevant +
                ", container=" + container +
                '}';
    }
}
