import React, {useState} from "react";
import Tariff from "./components/Tariff";
import styles from "./assets/styles/App.module.css";

const tariff_data = [
  { id: 1, price: '300', mbitQuantity: '10', backgroundTitle: '4A89DC', backgroundPriceSection: '5D9CEC', selected: false, pressed: false },
  { id: 2, price: '450', mbitQuantity: '50', backgroundTitle: '37BC9B', backgroundPriceSection: '48CFAD', selected: false, pressed: false },
  { id: 3, price: '550', mbitQuantity: '100', backgroundTitle: 'DA4453', backgroundPriceSection: 'ED5565', isSelected: true, selected: false, pressed: false },
  { id: 4, price: '1000', mbitQuantity: '200', backgroundTitle: '434A54', backgroundPriceSection: '656D78', selected: false, pressed: false },
];

function App() {
  const [pressed, setPressed] = useState(tariff_data);

  const handleChange = (cardID) => {
    const pressedTariff = pressed.map(card => {
      if(card.id === cardID) {
        return {...card, pressed: !card.pressed}
      }
      return {...card, pressed: false}
    }) 
      setPressed(pressedTariff)
  };

  return (
    <>
      <div className={styles.container}>
      {
                pressed.map(card =>
                    <Tariff card={card} key={card.id} handleChange={handleChange} />
                )
            }
      </div>
    </>
  );
}

export default App;
