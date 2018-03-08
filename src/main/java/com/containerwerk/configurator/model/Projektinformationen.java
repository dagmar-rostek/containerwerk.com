package com.containerwerk.configurator.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="APP_PRJI")
public class Projektinformationen implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="grundstueck")
    private boolean grundstueck;

    @Column(name="architekt")
    private boolean architekt;

    @Column(name="kommentar")
    private String kommentar;

    @Column(name="checkliste")
    @ElementCollection(targetClass=Checkliste.class)
    private List<Checkliste> checkliste = new ArrayList<>();

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public boolean isGrundstueck() {
        return grundstueck;
    }

    public void setGrundstueck(boolean grundstueck) {
        this.grundstueck = grundstueck;
    }

    public boolean isArchitekt() {
        return architekt;
    }

    public void setArchitekt(boolean architekt) {
        this.architekt = architekt;
    }

    public String getKommentar() {
        return kommentar;
    }

    public void setKommentar(String kommentar) {
        this.kommentar = kommentar;
    }

    @OneToMany(targetEntity=Checkliste.class, mappedBy = "checkliste")
    public List<Checkliste> getCheckliste() {
        return checkliste;
    }

    public void setCheckliste(List<Checkliste> checkliste) {
        this.checkliste = checkliste;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Projektinformationen)) return false;
        Projektinformationen that = (Projektinformationen) o;
        return isGrundstueck() == that.isGrundstueck() &&
                isArchitekt() == that.isArchitekt() &&
                Objects.equals(getId(), that.getId()) &&
                Objects.equals(getKommentar(), that.getKommentar()) &&
                Objects.equals(getCheckliste(), that.getCheckliste());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), isGrundstueck(), isArchitekt(), getKommentar(), getCheckliste());
    }

    @Override
    public String toString() {
        return "Projektinformationen{" +
                "id=" + id +
                ", grundstueck=" + grundstueck +
                ", architekt=" + architekt +
                ", kommentar='" + kommentar + '\'' +
                ", checkliste=" + checkliste +
                '}';
    }
}
