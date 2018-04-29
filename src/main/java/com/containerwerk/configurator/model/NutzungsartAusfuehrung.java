package com.containerwerk.configurator.model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Objects;

@Entity
@Table(name="APP_NUAF")
public class NutzungsartAusfuehrung {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @NotNull
    @Column(name="nutzungsart", nullable = false)
    private Nutzungsart nutzungsart;

    @NotNull
    @Column(name="ausfuehrung", nullable = false)
    private Ausfuehrung ausfuehrung;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof NutzungsartAusfuehrung)) return false;
        NutzungsartAusfuehrung that = (NutzungsartAusfuehrung) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getNutzungsart(), that.getNutzungsart()) &&
                Objects.equals(getAusfuehrung(), that.getAusfuehrung());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getNutzungsart(), getAusfuehrung());
    }

    @Override
    public String toString() {
        return "NutzungsartAusfuehrung{" +
                "id=" + id +
                ", nutzungsart=" + nutzungsart +
                ", ausfuehrung=" + ausfuehrung +
                '}';
    }
}
