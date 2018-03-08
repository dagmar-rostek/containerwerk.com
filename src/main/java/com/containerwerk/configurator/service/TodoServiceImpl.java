package com.containerwerk.configurator.service;

import com.containerwerk.configurator.model.Todo;
import com.containerwerk.configurator.repositories.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service("todoService")
@Transactional
public class TodoServiceImpl implements TodoService{
    @Autowired
    TodoRepository todoRepository;

    @Override
    public Todo findById(Long id) {
        return todoRepository.findById(id);
    }

    @Override
    public void saveTodo(Todo todo) {
        todoRepository.save(todo);
    }

    @Override
    public void updateTodo(Todo todo) {
        saveTodo(todo);
    }

    @Override
    public void deleteTodoById(Long id) {
        todoRepository.delete(id);
    }

    @Override
    public void deleteAllTodos() {
        todoRepository.deleteAll();
    }

    @Override
    public List<Todo> findAllTodos() {
        return todoRepository.findAll();
    }

    @Override
    public boolean isTodoExist(Todo todo) {
        return findById(todo.getId())!=null;
    }
}
