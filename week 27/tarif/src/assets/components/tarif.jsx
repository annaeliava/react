import React from 'react';
/*import './react/week 27/tarif/src/assets/styles/tarif-card.css';*/

function Tarif(props) {
    return (
        <>
            <div className='card' style={{ border: '1px white solid', width: '250px', height: '330px', display: 'flex', flexDirection: 'column', backgroundColor: 'lightGray', color: 'white' }}>
                <div className='title' style={{ border: '1px white solid', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '18px' }}>Безлимитный {props.price} </div>
                <div className='sub' style={{ border: '1px white solid', height: '195px', width: '250px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <span id='rub' style={{ marginRight: '10px' }}>руб</span>
                    <span id='bold' style={{ fontSize: '60px' }}>{props.price}</span>
                    <span id='month' style={{ marginLeft: '10px' }}>/мес</span>
                </div>
                <div className='price' style={{ border: '1px white solid', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '15px', }}>до {props.mb} Мбит/сек</div>
                <div className='vol' style={{ border: '1px white solid', height: '51px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', fontSize: '15px' }}>
                    <div>Объем включенного</div>
                    <div>трафика не ограничен</div>
                </div>
            </div>
        </>
    );
}

export default Tarif;