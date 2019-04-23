// 체크 값이 활성화되어있으면 우측에 체크마트 보여주고
// 마우스가 위에 있을 때는 좌측에 엑스마크 보여줌
// 이 컴포넌트의 영역이 클릭되면 체크박스가 활성화되며 중간줄이 그어지고
// 좌측의 엑스가 클릭되면 삭제됨

// 최적화를 위해 클래스형으로 작성
import React, {Component} from 'react';
import '../css/TodoItem.css';

class TodoItem extends Component {
    // 최적화
    shouldComponentUpdate(nextProps, nextState) {
        // 현재의 체크상태와 다음 체크상태가 다를때만 리렌더링
        return this.props.checked !== nextProps.checked;
    }
    render() {
        // text : todo 내용
        // checked : 체크박스 상태
        // id : todo의 고유 아이디
        // onToggle : 체크박스를 키고 끄는 함수
        // onRemove : 아이템을 삭제시키는 함수
        const { text, checked, id, color, onToggle, onRemove } = this.props;
        // console.log(id);
        return (
            // onClick{onToggle{id}} 이 형식으로 하면 절대 안됨! 해당 함수가 렌더링 될 떄 호출됨
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // 이벤트의 확산을 막아줌, onToggle이 실행되지 않도록 함
                    // 이 작업을 하지 않으면 x를 눌렀을 떄 onRemove뿐 아니라 해당 DOM의 부모 클릭 이벤트에 연결되어있는 onToggle 같이
                    onRemove(id)}
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`} style={{color:color}}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>

        );
    }
}

export default TodoItem;