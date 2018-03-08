package com.containerwerk.configurator.repositories;

import com.containerwerk.configurator.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Long> {
    Todo findById(Long id);
}
