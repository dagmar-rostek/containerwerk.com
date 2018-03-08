package com.containerwerk.configurator.model;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;
import java.util.Objects;

@Entity
@Table(name="APP_CHE")
public class Checkliste implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="todoliste")
    @ElementCollection(targetClass=Todo.class)
    private List<Todo> todoliste;

    @Column(name="projektinformation")
    private Projektinformationen projektinformationen;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @OneToMany(targetEntity=Todo.class, mappedBy = "todo")
    public List<Todo> getTodoliste() {
        return todoliste;
    }

    public void setTodoliste(List<Todo> todoliste) {
        this.todoliste = todoliste;
    }

    @ManyToOne
    public Projektinformationen getProjektinformationen() {
        return projektinformationen;
    }

    public void setProjektinformationen(Projektinformationen projektinformationen) {
        this.projektinformationen = projektinformationen;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Checkliste)) return false;
        Checkliste that = (Checkliste) o;
        return Objects.equals(getId(), that.getId()) &&
                Objects.equals(getName(), that.getName()) &&
                Objects.equals(getTodoliste(), that.getTodoliste()) &&
                Objects.equals(getProjektinformationen(), that.getProjektinformationen());
    }

    @Override
    public int hashCode() {

        return Objects.hash(getId(), getName(), getTodoliste(), getProjektinformationen());
    }

    @Override
    public String toString() {
        return "Checkliste{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", todoliste=" + todoliste +
                ", projektinformationen=" + projektinformationen +
                '}';
    }
}
