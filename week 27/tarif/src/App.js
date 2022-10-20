import Tariff from "./assets/components/Tariff";
import './assets/styles/app.css';

const tariff_data = [
  {price: '300', mbitQuantity: '10', backgroundRGB: '(0, 0, 255)'},
  {price: '450', mbitQuantity: '50', backgroundRGB: '(0, 128, 0)'},
  {price: '550', mbitQuantity: '100', backgroundRGB: '(255, 0, 0)', isSelected: true},
  {price: '1000', mbitQuantity: '200', backgroundRGB: '(0, 0, 0)'}
];

function App() {
  return (
    <>
      <div className="container">
        {
          tariff_data.map((tariff_data) =>
          <Tariff price = {tariff_data.price} mbitQuantity = {tariff_data.mbitQuantity} backgroundRGB = {tariff_data.backgroundRGB} isSelected = {tariff_data.isSelected} />
          ) 
        }
      </div>
    </>
  );
}

export default App;
