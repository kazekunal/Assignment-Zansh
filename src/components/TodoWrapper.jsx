import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Questions from './Questions';

export const TodoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (todo) => {
        console.log("addTodo function called");
        setTodos((todos) => [...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        console.log(todos)
    };

    return (
        <div>
            <Questions addTodo={addTodo} />
        </div>
    );
};

