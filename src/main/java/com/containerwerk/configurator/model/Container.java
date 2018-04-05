package com.containerwerk.configurator.model;


import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_CONT")
public class Container implements Serializable{
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name="MODUL", nullable = false)
    private String modul;

    @NotNull
    @Column(name="imageID", nullable = false)
    private String imageID;

    @NotNull
    @Column(name="preis", nullable = false)
    private Double preis;

    @NotNull
    @Column(name="beschreibung", nullable = false)
    private String beschreibung;

    @Column(name="anzahl")
    private Integer anzahl;

    @Column(name="angebot")
    private Angebot angebot;

    @Column(name="gesamtpreis")
    private Double gesamtpreis;

    @Column(name="ispreisrelevant")
    private boolean ispreisrelevant;

    @Column(name="nutzungsart")
    private Nutzungsart nutzungsart;

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
        if(anzahl == null){
            anzahl = 1;
        }
        return anzahl;
    }

    public void setAnzahl(Integer anzahl) {
        this.anzahl = anzahl;
    }

    public Double getGesamtpreis() {
        return getAnzahl() * this.preis;
    }

    public void setGesamtpreis(Double gesamtpreis) {
        this.gesamtpreis = gesamtpreis;
    }

    public boolean isPreisrelevant() {
        return ispreisrelevant;
    }

    public void setPreisrelevant(boolean preisrelevant) {
        ispreisrelevant = preisrelevant;
    }

    public boolean isIspreisrelevant() {
        return ispreisrelevant;
    }

    public void setIspreisrelevant(boolean ispreisrelevant) {
        this.ispreisrelevant = ispreisrelevant;
    }

    @OneToOne(targetEntity=Nutzungsart.class, mappedBy = "nutzungsart")
    public Nutzungsart getNutzungsart() {
        return nutzungsart;
    }

    public void setNutzungsart(Nutzungsart nutzungsart) {
        this.nutzungsart = nutzungsart;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Container)) return false;
        Container container = (Container) o;
        return isIspreisrelevant() == container.isIspreisrelevant() &&
                Objects.equals(getId(), container.getId()) &&
                Objects.equals(getModul(), container.getModul()) &&
                Objects.equals(getImageID(), container.getImageID()) &&
                Objects.equals(getPreis(), container.getPreis()) &&
                Objects.equals(getBeschreibung(), container.getBeschreibung()) &&
                Objects.equals(getAnzahl(), container.getAnzahl()) &&
                Objects.equals(getAngebot(), container.getAngebot()) &&
                Objects.equals(getGesamtpreis(), container.getGesamtpreis()) &&
                Objects.equals(getNutzungsart(), container.getNutzungsart());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getModul(), getImageID(), getPreis(), getBeschreibung(), getAnzahl(), getAngebot(), getGesamtpreis(), isIspreisrelevant(), getNutzungsart());
    }

    @Override
    public String toString() {
        return "Container{" +
                "id=" + id +
                ", modul='" + modul + '\'' +
                ", imageID='" + imageID + '\'' +
                ", preis=" + preis +
                ", beschreibung='" + beschreibung + '\'' +
                ", anzahl=" + anzahl +
                ", angebot=" + angebot +
                ", gesamtpreis=" + gesamtpreis +
                ", ispreisrelevant=" + ispreisrelevant +
                ", nutzungsart=" + nutzungsart +
                '}';
    }
}
