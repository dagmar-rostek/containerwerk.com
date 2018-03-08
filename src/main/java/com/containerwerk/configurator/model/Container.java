package com.containerwerk.configurator.model;


import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_CONT")
public class Container implements Serializable{
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Column(name="MODUL", nullable = false)
    private String modul;

    @NotEmpty
    @Column(name="imageID", nullable = false)
    private String imageID;

    @NotEmpty
    @Column(name="preis", nullable = false)
    private Double preis;

    @NotEmpty
    @Column(name="beschreibung", nullable = false)
    private String beschreibung;

    @Column(name="anzahl")
    private Integer anzahl;

    @Column(name="angebot")
    private Angebot angebot;

    @Column(name="gesamtpreis")
    private Double gesamtpreis;

    @Column(name="ispreisrelevant")
    private boolean isPreisrelevant;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getModul() {
        return modul;
    }

    public void setModul(String modul) {
        this.modul = modul;
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

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    @ManyToOne
    public Angebot getAngebot() {
        return angebot;
    }

    public void setAngebot(Angebot angebot) {
        this.angebot = angebot;
    }

    public Integer getAnzahl() {
        return anzahl;
    }

    public void setAnzahl(Integer anzahl) {
        this.anzahl = anzahl;
    }

    public Double getGesamtpreis() {
        return this.anzahl * this.preis;
    }

    public void setGesamtpreis(Double gesamtpreis) {
        this.gesamtpreis = gesamtpreis;
    }

    public boolean isPreisrelevant() {
        return isPreisrelevant;
    }

    public void setPreisrelevant(boolean preisrelevant) {
        isPreisrelevant = preisrelevant;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Container)) return false;
        Container container = (Container) o;
        return isPreisrelevant() == container.isPreisrelevant() &&
                Objects.equals(getId(), container.getId()) &&
                Objects.equals(getModul(), container.getModul()) &&
                Objects.equals(getImageID(), container.getImageID()) &&
                Objects.equals(getPreis(), container.getPreis()) &&
                Objects.equals(getBeschreibung(), container.getBeschreibung()) &&
                Objects.equals(getAnzahl(), container.getAnzahl()) &&
                Objects.equals(getAngebot(), container.getAngebot()) &&
                Objects.equals(getGesamtpreis(), container.getGesamtpreis());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getModul(), getImageID(), getPreis(), getBeschreibung(), getAnzahl(), getAngebot(), getGesamtpreis(), isPreisrelevant());
    }

    @Override
    public String toString() {
        return "Container{" +
                "id=" + id +
                ", modul=" + modul +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", beschreibung='" + beschreibung + '\'' +
                ", anzahl=" + anzahl +
                ", angebot=" + angebot +
                ", gesamtpreis=" + gesamtpreis +
                ", isPreisrelevant=" + isPreisrelevant +
                '}';
    }
}
