package com.containerwerk.configurator.model;

import org.hibernate.validator.constraints.NotEmpty;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_ADRE")
public class Adresse implements Serializable {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotEmpty
    @Column(name="strasse", nullable = false)
    private String strasse;

    @NotEmpty
    @Column(name="plz", nullable = false)
    private Integer plz;

    @NotEmpty
    @Column(name="ort", nullable = false)
    private Integer ort;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStrasse() {
        return strasse;
    }

    public void setStrasse(String strasse) {
        this.strasse = strasse;
    }

    public Integer getPlz() {
        return plz;
    }

    public void setPlz(Integer plz) {
        this.plz = plz;
    }

    public Integer getOrt() {
        return ort;
    }

    public void setOrt(Integer ort) {
        this.ort = ort;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Adresse)) return false;
        Adresse adresse = (Adresse) o;
        return Objects.equals(getId(), adresse.getId()) &&
                Objects.equals(getStrasse(), adresse.getStrasse()) &&
                Objects.equals(getPlz(), adresse.getPlz()) &&
                Objects.equals(getOrt(), adresse.getOrt());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getStrasse(), getPlz(), getOrt());
    }

    @Override
    public String toString() {
        return "AdresseRepository{" +
                "id=" + id +
                ", strasse='" + strasse + '\'' +
                ", plz=" + plz +
                ", ort=" + ort +
                '}';
    }
}
