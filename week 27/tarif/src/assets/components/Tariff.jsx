import React from 'react';
import styles from './TariffCard.module.scss';

export default function Tariff(props) {
    return (
        <>
            <div className={`${styles.card} ${props.isSelected ? styles.selected : ""}`}>
                <div className={styles.title} style={{ backgroundColor: '#' + props.backgroundTitle }}>Безлимитный {props.price} </div>
                <div className={styles.priceSection} style={{ backgroundColor: '#' + props.backgroundPriceSection }}>
                    <span id={styles.currency}>руб</span>
                    <span id={styles.price}>{props.price}</span>
                    <span id={styles.forMonth}>/мес</span>
                </div>
                <div className={styles.mbitSection}>до {props.mbitQuantity} Мбит/сек</div>
                <div className={styles.volumeInclusion}>
                    <div>Объем включенного</div>
                    <div>трафика не ограничен</div>
                </div>
            </div>
        </>
    );
}