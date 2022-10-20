import Tariff from "./assets/components/Tariff";
import styles from "./assets/styles/App.module.css";

const tariff_data = [
  {price: '300', mbitQuantity: '10', backgroundTitle: '4A89DC', backgroundPriceSection: '5D9CEC'},
  {price: '450', mbitQuantity: '50', backgroundTitle: '37BC9B', backgroundPriceSection: '48CFAD'},
  {price: '550', mbitQuantity: '100', backgroundTitle: 'DA4453', backgroundPriceSection: 'ED5565', isSelected: true},
  {price: '1000', mbitQuantity: '200', backgroundTitle: '434A54', backgroundPriceSection: '656D78'},
];

function App() {
  return (
    <>
      <div className={styles.container}>
        {
          tariff_data.map(tariff_data =>
          <Tariff price = {tariff_data.price} mbitQuantity = {tariff_data.mbitQuantity} backgroundTitle = {tariff_data.backgroundTitle} backgroundPriceSection ={tariff_data.backgroundPriceSection} isSelected = {tariff_data.isSelected} />
          ) 
        }
      </div>
    </>
  );
}

export default App;
