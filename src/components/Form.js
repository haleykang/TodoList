import React from 'react';
import '../css/Form.css';

// value : 입력 값
// onCreate : 버튼이 클릭 될 때 실행 될 함수
// onChange : 인풋 내용이 변경 될 때 실행 될 함수
// onKeyPress : 인풋에서 키를 입력할 때 실행되는 함수, 나중에 Enter가 눌렸을 때 onCreate와 같은 작업을 하기 위함
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress} />
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;