import React from 'react';
import styles from './TariffCard.module.css';
import './TariffCard.module.css';

export default function Tariff(props) {
    return (
        <>
            <div className={`styles.card ${props.isSelected ? styles.selected : ""}`}>
                <div className={styles.title} style={{ backgroundColor: 'rgb' + props.backgroundRGB }}>Безлимитный {props.price} </div>
                <div className={styles.priceSection} style={{ backgroundColor: 'rgb' + props.backgroundRGB }}>
                    <span id={styles.currency}>руб</span>
                    <span id={styles.price}>{props.price}</span>
                    <span id={styles.forMonth}>/мес</span>
                </div>
                <div className={styles.mbit}>до {props.mbitQuantity} Мбит/сек</div>
                <div className={styles.volumeInclusion}>
                    <div>Объем включенного</div>
                    <div>трафика не ограничен</div>
                </div>
            </div>
        </>
    );
}