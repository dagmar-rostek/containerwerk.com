package com.containerwerk.configurator.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_STA")
public class Status implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="status")
    private String status;

    @Column(name="beschreibung")
    private String beschreibung;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Status)) return false;
        Status status1 = (Status) o;
        return Objects.equals(getId(), status1.getId()) &&
                Objects.equals(getStatus(), status1.getStatus()) &&
                Objects.equals(getBeschreibung(), status1.getBeschreibung());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getStatus(), getBeschreibung());
    }

    @Override
    public String toString() {
        return "Status{" +
                "id=" + id +
                ", status='" + status + '\'' +
                ", beschreibung='" + beschreibung + '\'' +
                '}';
    }
}
