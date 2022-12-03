import React from 'react';
import styles from './TariffCard.module.scss';

Tariff.defaultProps = {
    price: 'Sorry',
    mbitQuantity: '0',
    backgroundColor: '000000'
};

export default function Tariff(props) {
    const { card, handleChange } = props;

    return (
        <>
            <div className={`${styles.card} ${card.isSelected ? styles.selected : ""} ${card.pressed ? styles.chosen : ''}`} onClick={() => handleChange(card.id)}>
                <div className={styles.title} style={{ backgroundColor: '#' + card.backgroundTitle }}>Безлимитный {card.price} </div>
                <div className={styles.priceSection} style={{ backgroundColor: '#' + card.backgroundPriceSection }}>
                    <span id={styles.currency}>руб</span>
                    <span id={styles.price}>{card.price}</span>
                    <span id={styles.forMonth}>/мес</span>
                </div>
                <div className={styles.mbitSection}>до {card.mbitQuantity} Мбит/сек</div>
                <div className={styles.volumeInclusion}>
                    <div>Объем включенного</div>
                    <div>трафика не ограничен</div>
                </div>
                <div className={styles.alert}>Вы выбрали тариф <span className={styles.chosenTariff}>"Безлимитный {card.price}"</span>!</div>
            </div>
        </>
    );
}