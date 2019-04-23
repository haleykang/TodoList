import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';

const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6'];

class App extends Component {

  id = 3; // 이미 0,1,2가 존재하므로 3으로 설정
  state = {
    input : '',
    color : '#343a40',
    todos : [
      {id: 0, text: '동생한테 전화하기', checked:false, color:'#343a40'},
      {id: 1, text: '영어 문법 공부', checked:true, color:'#12b886'},
      {id: 2, text: '야구 예매 11시', checked:false, color:'#f03e3e'}
    ]
  }

  // handleChange
  // Form기능 구현 - 텍스트 내용이 바뀌면 state 업데이트
  handleChange = (e) => {
    this.setState({
      input:e.target.value // input의 다음 바뀔 값
    });
  }

  // handleCreate
  // Form기능 구현 - 버튼이 클릭되면 새로운 todo 생성 후 todos 업데이트
  handleCreate = () => {
    const { input, todos, color } = this.state;
    this.setState({
      input: '', // 인풋 비우고
      // concat을 사용하여 배열에 추가
      // react에서는 push를 이용해서 배열을 추가하면 안됨!(추후 최적화시 배열을 비교해 리렌더링 방지 불가)
      todos : todos.concat({
        id: this.id++,
        text: input,
        checked: false,
        color:color
      })
    });
  }

  // handelKeyPress
  // Form기능 구현 - 인풋에서 Enter 누르면 버튼 클릭과 동일한 작업진행
  handleKeyPress = (e) => {
    // 눌려진 키가 Enter면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  // handleToggle
  // TodoItemList 기능 구현 - 체크하기/체크풀기에 따라 처리
  handleToggle = (id) => {
    const { todos } = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾기
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택받은 객체

    const nextTodos = [...todos]; // 배열 복사 ** 배열의 값을 직접 수정하면 안됨

    // 기존의 값들을 복사하고, checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked:!selected.checked
    };

    // state todos 값 업데이트
    this.setState({
      todos: nextTodos
    });
  }

  // handleRemove
  // TodoItemList 기능 구현 - todo 삭제
  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }
 
  // handleSelectColor 
  // Palette 기능 구현 - 색 선택시 엑티브 색 변경
  handleSelectColor = (color) => { 
    this.setState({
      color
    });
  }

  render() {
    // 렌더 함수로 input 값과 handle 함수 비구조화 할당
    // this.handleChange, this.handleCreate에서 this. 생략 가능
    const { input, color, todos } = this.state;
    const {
      handleChange,
      handleCreate,
      handleKeyPress,
      handleToggle,
      handleRemove,
      handleSelectColor
    } = this;

    return (
      <TodoListTemplate 
      palette={(
        <Palette colors={colors} selected={color} onSelect={handleSelectColor} />
      )}
      form={(
        <Form 
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList 
         todos={todos} 
         onToggle={handleToggle}
         onRemove={handleRemove} 
        />
      </TodoListTemplate>
    );
  }
}

export default App;
