package com.containerwerk.configurator.model;

import javax.persistence.Entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.*;

@Entity
@Table(name="APP_ANG")
public class Angebot implements Serializable{

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="kunde")
    private Kunde kunde;

    @Column(name="containerliste")
    @ElementCollection(targetClass=Container.class)
    private List<Container> containerListe = new ArrayList<Container>();

    @Column(name="container")
    private Container container;

    @Column(name="gesamtpreis")
    private Double gesamtpreis;

    @Column(name="rabatt")
    private String rabatt;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name = "kommentar")
    private String kommentar;

    @Column(name="interneAnsicht")
    private boolean interneAnsicht = false;

    @Column(name="ansprechpartner")
    private String ansprechpartner;

    @Column(name="projektinformationen")
    private Projektinformationen projektinformationen;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @OneToMany(targetEntity=Container.class, mappedBy = "container")
    public List<Container> getContainerListe() {
        return containerListe;
    }

    public void setContainerListe(List<Container> containerListe) {
        this.containerListe = containerListe;
    }

    public Double getGesamtpreis() {
        return gesamtpreis;
    }

    public void setGesamtpreis(Double gesamtpreis) {
        this.gesamtpreis = gesamtpreis;
    }

    public String getRabatt() {
        return rabatt;
    }

    public void setRabatt(String rabatt) {
        this.rabatt = rabatt;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public String getKommentar() {
        return kommentar;
    }

    public void setKommentar(String kommentar) {
        this.kommentar = kommentar;
    }

    public boolean isInterneAnsicht() {
        return interneAnsicht;
    }

    public void setInterneAnsicht(boolean interneAnsicht) {
        this.interneAnsicht = interneAnsicht;
    }

    public Projektinformationen getProjektinformationen() {
        return projektinformationen;
    }

    public void setProjektinformationen(Projektinformationen projektinformationen) {
        this.projektinformationen = projektinformationen;
    }

    public Kunde getKunde() {
        return kunde;
    }

    public void setKunde(Kunde kunde) {
        this.kunde = kunde;
    }

    public String getAnsprechpartner() {
        return ansprechpartner;
    }

    public void setAnsprechpartner(String ansprechpartner) {
        this.ansprechpartner = ansprechpartner;
    }

    public Container getContainer() {
        return container;
    }

    public void setContainer(Container container) {
        this.container = container;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Angebot)) return false;
        Angebot angebot = (Angebot) o;
        return isInterneAnsicht() == angebot.isInterneAnsicht() &&
                Objects.equals(getId(), angebot.getId()) &&
                Objects.equals(getName(), angebot.getName()) &&
                Objects.equals(getKunde(), angebot.getKunde()) &&
                Objects.equals(getContainerListe(), angebot.getContainerListe()) &&
                Objects.equals(getContainer(), angebot.getContainer()) &&
                Objects.equals(getGesamtpreis(), angebot.getGesamtpreis()) &&
                Objects.equals(getRabatt(), angebot.getRabatt()) &&
                Objects.equals(getBeschreibung(), angebot.getBeschreibung()) &&
                Objects.equals(getKommentar(), angebot.getKommentar()) &&
                Objects.equals(getAnsprechpartner(), angebot.getAnsprechpartner()) &&
                Objects.equals(getProjektinformationen(), angebot.getProjektinformationen());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getName(), getKunde(), getContainerListe(), getContainer(), getGesamtpreis(), getRabatt(), getBeschreibung(), getKommentar(), isInterneAnsicht(), getAnsprechpartner(), getProjektinformationen());
    }

    @Override
    public String toString() {
        return "Angebot{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", kunde=" + kunde +
                ", containerListe=" + containerListe +
                ", container=" + container +
                ", gesamtpreis=" + gesamtpreis +
                ", rabatt='" + rabatt + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                ", kommentar='" + kommentar + '\'' +
                ", interneAnsicht=" + interneAnsicht +
                ", ansprechpartner='" + ansprechpartner + '\'' +
                ", projektinformationen=" + projektinformationen +
                '}';
    }
}
