package com.containerwerk.configurator.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_FEAT")
public class Feature implements Serializable {

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

    @Column(name="container")
    private Container container;

    @OneToOne(targetEntity = Container.class, mappedBy = "container")
    public Container getContainer() {
        return container;
    }

    public void setContainer(Container container) {
        this.container = container;
    }

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Feature)) return false;
        Feature feature = (Feature) o;
        return Objects.equals(getId(), feature.getId()) &&
                Objects.equals(getTyp(), feature.getTyp()) &&
                Objects.equals(getBeschreibung(), feature.getBeschreibung()) &&
                Objects.equals(getImageID(), feature.getImageID()) &&
                Objects.equals(getPreis(), feature.getPreis()) &&
                Objects.equals(getContainer(), feature.getContainer());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getTyp(), getBeschreibung(), getImageID(), getPreis(), getContainer());
    }

    @Override
    public String toString() {
        return "Feature{" +
                "id=" + id +
                ", typ='" + typ + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", container=" + container +
                '}';
    }
}
