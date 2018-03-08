package com.containerwerk.configurator.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

@Entity
@Table(name="APP_TODO")
public class Todo implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="beschreibung")
    private String beschreibung;

    @Column(name="statusinfo")
    private Status statusinfo;

    @Column(name="checkliste")
    private Checkliste checkliste;

    @ManyToOne
    public Checkliste getCheckliste() {
        return checkliste;
    }

    public void setCheckliste(Checkliste checkliste) {
        this.checkliste = checkliste;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public Status getStatusinfo() {
        return statusinfo;
    }

    public void setStatusinfo(Status statusinfo) {
        this.statusinfo = statusinfo;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Todo)) return false;
        Todo todo = (Todo) o;
        return Objects.equals(getId(), todo.getId()) &&
                Objects.equals(getBeschreibung(), todo.getBeschreibung()) &&
                Objects.equals(getStatusinfo(), todo.getStatusinfo()) &&
                Objects.equals(getCheckliste(), todo.getCheckliste());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getBeschreibung(), getStatusinfo(), getCheckliste());
    }

    @Override
    public String toString() {
        return "Todo{" +
                "id=" + id +
                ", beschreibung='" + beschreibung + '\'' +
                ", statusinfo=" + statusinfo +
                ", checkliste=" + checkliste +
                '}';
    }
}
