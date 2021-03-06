package com.containerwerk.configurator.model;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_EINR")
public class Einrichtung implements Serializable  {

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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Einrichtung)) return false;
        Einrichtung that = (Einrichtung) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getTyp(), that.getTyp()) &&
                Objects.equals(getBeschreibung(), that.getBeschreibung()) &&
                Objects.equals(getImageID(), that.getImageID()) &&
                Objects.equals(getContainer(), that.getContainer());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getTyp(), getBeschreibung(), getImageID(), getContainer());
    }

    @Override
    public String toString() {
        return "Einrichtung{" +
                "id=" + id +
                ", typ='" + typ + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", container=" + container +
                '}';
    }
}
