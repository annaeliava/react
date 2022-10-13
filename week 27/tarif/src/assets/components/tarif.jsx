import React from 'react';
import './TariffCard.module.css';

function Tarif(props) {
    return (
        <>
            <div className={"card" + (props.isSelected ? "selected" : "")}>
                <div className='title' style={{ backgroundColor: '{props.bg}' }}>Безлимитный {props.price} </div>
                <div className='sub' style={{ backgroundColor: '{props.bg}' }}>
                    <span id='rub'>руб</span>
                    <span id='bold'>{props.price}</span>
                    <span id='month'>/мес</span>
                </div>
                <div className='price'>до {props.mb} Мбит/сек</div>
                <div className='vol'>
                    <div>Объем включенного</div>
                    <div>трафика не ограничен</div>
                </div>
            </div>
        </>
    );
}

export default Tarif;