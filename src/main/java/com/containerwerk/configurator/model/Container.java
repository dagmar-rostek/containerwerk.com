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

    @Column(name = "bezeichnung")
    private String bezeichnung;


    @Column(name = "modul")
    private Modul modul;

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


    @Column(name="ausfuehrung")
    private Ausfuehrung ausfuehrung;


    @Column(name="feature")
    private Feature feature;


    @Column(name="einrichtung")
    private Einrichtung einrichtung;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Modul getModul() {
        return modul;
    }

    public void setModul(Modul modul) {
        this.modul = modul;
    }

    public Integer getAnzahl() {
        return anzahl;
    }

    public void setAnzahl(Integer anzahl) {
        this.anzahl = anzahl;
    }

    public Angebot getAngebot() {
        return angebot;
    }

    public void setAngebot(Angebot angebot) {
        this.angebot = angebot;
    }

    public Double getGesamtpreis() {
        return gesamtpreis;
    }

    public void setGesamtpreis(Double gesamtpreis) {
        this.gesamtpreis = gesamtpreis;
    }

    public boolean isIspreisrelevant() {
        return ispreisrelevant;
    }

    public void setIspreisrelevant(boolean ispreisrelevant) {
        this.ispreisrelevant = ispreisrelevant;
    }

    public Nutzungsart getNutzungsart() {
        return nutzungsart;
    }

    public void setNutzungsart(Nutzungsart nutzungsart) {
        this.nutzungsart = nutzungsart;
    }

    public Ausfuehrung getAusfuehrung() {
        return ausfuehrung;
    }

    public void setAusfuehrung(Ausfuehrung ausfuehrung) {
        this.ausfuehrung = ausfuehrung;
    }

    public Feature getFeature() {
        return feature;
    }

    public void setFeature(Feature feature) {
        this.feature = feature;
    }

    public Einrichtung getEinrichtung() {
        return einrichtung;
    }

    public void setEinrichtung(Einrichtung einrichtung) {
        this.einrichtung = einrichtung;
    }

    public String getBezeichnung() {
        return bezeichnung;
    }

    public void setBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Container)) return false;
        Container container = (Container) o;
        return isIspreisrelevant() == container.isIspreisrelevant() &&
                Objects.equals(getId(), container.getId()) &&
                Objects.equals(getBezeichnung(), container.getBezeichnung()) &&
                Objects.equals(getModul(), container.getModul()) &&
                Objects.equals(getAnzahl(), container.getAnzahl()) &&
                Objects.equals(getAngebot(), container.getAngebot()) &&
                Objects.equals(getGesamtpreis(), container.getGesamtpreis()) &&
                Objects.equals(getNutzungsart(), container.getNutzungsart()) &&
                Objects.equals(getAusfuehrung(), container.getAusfuehrung()) &&
                Objects.equals(getFeature(), container.getFeature()) &&
                Objects.equals(getEinrichtung(), container.getEinrichtung());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getBezeichnung(), getModul(), getAnzahl(), getAngebot(), getGesamtpreis(), isIspreisrelevant(), getNutzungsart(), getAusfuehrung(), getFeature(), getEinrichtung());
    }

    @Override
    public String toString() {
        return "Container{" +
                "id=" + id +
                ", bezeichnung='" + bezeichnung + '\'' +
                ", modul=" + modul +
                ", anzahl=" + anzahl +
                ", angebot=" + angebot +
                ", gesamtpreis=" + gesamtpreis +
                ", ispreisrelevant=" + ispreisrelevant +
                ", nutzungsart=" + nutzungsart +
                ", ausfuehrung=" + ausfuehrung +
                ", feature=" + feature +
                ", einrichtung=" + einrichtung +
                '}';
    }
}
