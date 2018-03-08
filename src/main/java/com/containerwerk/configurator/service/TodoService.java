package com.containerwerk.configurator.service;



import com.containerwerk.configurator.model.Todo;

import java.util.List;

public interface TodoService {
    Todo findById(Long id);

    void saveTodo(Todo todo);

    void updateTodo(Todo todo);

    void deleteTodoById(Long id);

    void deleteAllTodos();

    List<Todo> findAllTodos();

    boolean isTodoExist(Todo todo);
}
