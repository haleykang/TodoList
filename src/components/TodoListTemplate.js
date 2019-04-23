// TODO리스트 큰 틀(템플릿)

import React from 'react';
import '../css/TodoListTemplate.css'

const TodoListTemplate = ({palette, form, children}) => {
    return(
        <main className="todo-list-template">
            <div className="title">
                오늘 할 일
            </div>
            <section className="palette-wrapper">
                {palette}
            </section>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;