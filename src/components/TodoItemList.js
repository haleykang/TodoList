// TodoItem 컴포넌트 여러개를 렌더링 해주는 역할
// 리스트를 렌더링 할 때는(특히 보여주는 리스트가 동적인 경우) 함수형이 아닌 클래스형 컴포넌트로 작성
// 클래스형 컴포넌트로 작성해야 나중에 컴포넌트 성능 최적화를 할 수 있기 때문

import React, {Component} from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
    // 최적화
    shouldComponentUpdate(nextProps, nextState) {
        // 현재의 todos와 다음의 todos가 다를 때만 리렌더링
        return this.props.todos !== nextProps.todos;
    }

    render() {
        // todos : todo 객체들이 들어있는 배열
        // onToggle : 체크박스를 키고 끄는 함수
        // onRemove : 아이템을 삭제시키는 함수
        const { todos, onToggle, onRemove } = this.props;

        // 전달받은 객체배열을 TodoItem 컴포넌트 배열로 변환
        const todoList = todos.map(
            ({id, text, color, checked}) => (
                <TodoItem
                 id={id}
                 text={text}
                 color={color}
                 checked={checked}
                 onToggle={onToggle}
                 onRemove={onRemove}
                 key={id}
                />
            )
        );


        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;