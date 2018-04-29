package com.containerwerk.configurator.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_COMO")
public class ContainerModelle  implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="modul")
    private Modul modul;

    @Column(name="nutzungsart")
    private Nutzungsart nutzungsart;

    @Column(name="imageIDNutzungsartInModul")
    private String imageIDNutzungsartInModul;

    @Column(name="ausfuehrung")
    private Ausfuehrung ausfuehrung;

    @Column(name="imageIDAusfuehrungInNutzungsart")
    private String imageIDAusfuehrungInNutzungsart;

    @Column(name="feature")
    private Feature feature;

    @Column(name="imageIDFeatureInAusfuehrung")
    private String imageIDFeatureInAusfuehrung;

    @Column(name="einrichtung")
    private Einrichtung einrichtung;

    @Column(name="imageIDEinrichtungInAusfuehrung")
    private String imageIDEinrichtungInAusfuehrung;


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

    public Nutzungsart getNutzungsart() {
        return nutzungsart;
    }

    public void setNutzungsart(Nutzungsart nutzungsart) {
        this.nutzungsart = nutzungsart;
    }

    public String getImageIDNutzungsartInModul() {
        return imageIDNutzungsartInModul;
    }

    public void setImageIDNutzungsartInModul(String imageIDNutzungsartInModul) {
        this.imageIDNutzungsartInModul = imageIDNutzungsartInModul;
    }

    public Ausfuehrung getAusfuehrung() {
        return ausfuehrung;
    }

    public void setAusfuehrung(Ausfuehrung ausfuehrung) {
        this.ausfuehrung = ausfuehrung;
    }

    public String getImageIDAusfuehrungInNutzungsart() {
        return imageIDAusfuehrungInNutzungsart;
    }

    public void setImageIDAusfuehrungInNutzungsart(String imageIDAusfuehrungInNutzungsart) {
        this.imageIDAusfuehrungInNutzungsart = imageIDAusfuehrungInNutzungsart;
    }

    public Feature getFeature() {
        return feature;
    }

    public void setFeature(Feature feature) {
        this.feature = feature;
    }

    public String getImageIDFeatureInAusfuehrung() {
        return imageIDFeatureInAusfuehrung;
    }

    public void setImageIDFeatureInAusfuehrung(String imageIDFeatureInAusfuehrung) {
        this.imageIDFeatureInAusfuehrung = imageIDFeatureInAusfuehrung;
    }

    public Einrichtung getEinrichtung() {
        return einrichtung;
    }

    public void setEinrichtung(Einrichtung einrichtung) {
        this.einrichtung = einrichtung;
    }

    public String getImageIDEinrichtungInAusfuehrung() {
        return imageIDEinrichtungInAusfuehrung;
    }

    public void setImageIDEinrichtungInAusfuehrung(String imageIDEinrichtungInAusfuehrung) {
        this.imageIDEinrichtungInAusfuehrung = imageIDEinrichtungInAusfuehrung;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ContainerModelle)) return false;
        ContainerModelle that = (ContainerModelle) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getModul(), that.getModul()) &&
                Objects.equals(getNutzungsart(), that.getNutzungsart()) &&
                Objects.equals(getImageIDNutzungsartInModul(), that.getImageIDNutzungsartInModul()) &&
                Objects.equals(getAusfuehrung(), that.getAusfuehrung()) &&
                Objects.equals(getImageIDAusfuehrungInNutzungsart(), that.getImageIDAusfuehrungInNutzungsart()) &&
                Objects.equals(getFeature(), that.getFeature()) &&
                Objects.equals(getImageIDFeatureInAusfuehrung(), that.getImageIDFeatureInAusfuehrung()) &&
                Objects.equals(getEinrichtung(), that.getEinrichtung()) &&
                Objects.equals(getImageIDEinrichtungInAusfuehrung(), that.getImageIDEinrichtungInAusfuehrung());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getModul(), getNutzungsart(), getImageIDNutzungsartInModul(), getAusfuehrung(), getImageIDAusfuehrungInNutzungsart(), getFeature(), getImageIDFeatureInAusfuehrung(), getEinrichtung(), getImageIDEinrichtungInAusfuehrung());
    }

    @Override
    public String toString() {
        return "ContainerModelle{" +
                "id=" + id +
                ", modul=" + modul +
                ", nutzungsart=" + nutzungsart +
                ", imageIDNutzungsartInModul='" + imageIDNutzungsartInModul + '\'' +
                ", ausfuehrung=" + ausfuehrung +
                ", imageIDAusfuehrungInNutzungsart='" + imageIDAusfuehrungInNutzungsart + '\'' +
                ", feature=" + feature +
                ", imageIDFeatureInAusfuehrung='" + imageIDFeatureInAusfuehrung + '\'' +
                ", einrichtung=" + einrichtung +
                ", imageIDEinrichtungInAusfuehrung='" + imageIDEinrichtungInAusfuehrung + '\'' +
                '}';
    }
}
