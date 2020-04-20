import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    shouldComponentUpdate(nextPros, nextState) {
        return this.props.todos !== nextPros.todos;
    }

    render(){
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}
                    onToggle={() => onToggle(todo.id)}
                    onRemove={() => onRemove(todo.id)}>
                    {todo.text}
                </TodoItem>
            )
        )

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;