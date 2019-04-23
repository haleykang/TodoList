import React from 'react';
import '../css/Palette.css';

// 컬러 하나 
const Color = ({color, active, onClick }) => {
    return (
        <div className={`color ${active && 'active'}`} style={{background:color}} onClick={onClick} />
    )
}

// 컬러 여러개 팔레트
const Palette = ({colors, selected, onSelect}) => {
    const colorList = colors.map(
     (color) => (<Color color={color} active={selected===color} onClick={() => onSelect(color)} key={color}/>)
    );
    return (
        <div className="palette">
            {colorList}
        </div>
    );
};

export default Palette;