import React, { useState } from 'react';
import styles from './TariffCard.module.scss';

Tariff.defaultProps = { // через static не вышло, выводил в problems 'declaration or statement expecred.'
    price: 'Sorry',
    mbitQuantity: '0',
    backgroundColor: '000000'
};

export default function Tariff(props) {
    const { data } = props;

    const [pressed, setPressed] = useState(false);
    const handleChange = () => {
        setPressed(!pressed)
    }
    return (
        <>
            <div className={`${styles.card} ${data.isSelected ? styles.selected : ""} ${pressed ? styles.chosen : ''}`} onClick={handleChange}>
                <div className={styles.title} style={{ backgroundColor: '#' + data.backgroundTitle }}>Безлимитный {data.price} </div>
                <div className={styles.priceSection} style={{ backgroundColor: '#' + data.backgroundPriceSection }}>
                    <span id={styles.currency}>руб</span>
                    <span id={styles.price}>{data.price}</span>
                    <span id={styles.forMonth}>/мес</span>
                </div>
                <div className={styles.mbitSection}>до {data.mbitQuantity} Мбит/сек</div>
                <div className={styles.volumeInclusion}>
                    <div>Объем включенного</div>
                    <div>трафика не ограничен</div>
                </div>
                <div className={styles.alert}>Вы выбрали тариф <span className={styles.chosenTariff}>"Безлимитный {data.price}"</span>!</div>
            </div>
        </>
    );
}