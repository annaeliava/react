import React from 'react';
import styles from './TariffCard.module.css';

function Tarif(props) {
    return (
        <>
            <div className={"{styles.card}" + (props.isSelected ? "{styles.selected}" : "")}>
                <div className={styles.title} style={{ backgroundColor: '{props.bg}' }}>Безлимитный {props.price} </div>
                <div className={styles.sub} style={{ backgroundColor: '{props.bg}' }}>
                    <span id={styles.rub}>руб</span>
                    <span id={styles.bold}>{props.price}</span>
                    <span id={styles.month}>/мес</span>
                </div>
                <div className={styles.price}>до {props.mb} Мбит/сек</div>
                <div className={styles.vol}>
                    <div>Объем включенного</div>
                    <div>трафика не ограничен</div>
                </div>
            </div>
        </>
    );
}

export default Tarif;