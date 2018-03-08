package com.containerwerk.configurator.model;
import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_NUTZ")
public class Nutzungsart implements Serializable{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotEmpty
    @Column(name="typ", nullable=false)
    private String typ;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name="imageID")
    private String imageID;

    @Column(name="preis")
    private Double preis;

    @Column(name="ausfuehrung")
    private Ausfuehrung ausfuehrung;


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

    public Ausfuehrung getAusfuehrung() {
        return ausfuehrung;
    }

    public void setAusfuehrung(Ausfuehrung ausfuehrung) {
        this.ausfuehrung = ausfuehrung;
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
                Objects.equals(getAusfuehrung(), that.getAusfuehrung());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getTyp(), getBeschreibung(), getImageID(), getPreis(), getAusfuehrung());
    }

    @Override
    public String toString() {
        return "Nutzungsart{" +
                "id=" + id +
                ", typ='" + typ + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", ausfuehrung=" + ausfuehrung +
                '}';
    }
}
