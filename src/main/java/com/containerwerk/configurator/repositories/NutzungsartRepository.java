package com.containerwerk.configurator.repositories;
import com.containerwerk.configurator.model.Nutzungsart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NutzungsartRepository extends JpaRepository<Nutzungsart, Long> {
    Nutzungsart findByTyp(String typ);
}
