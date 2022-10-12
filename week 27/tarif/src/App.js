import Tarif from "./assets/components/tarif";
import './assets/styles/app.css';

const packages = [
  {price: '300', mb: '10', bg: 'blue'},
  {price: '450', mb: '50', bg: 'green'},
  {price: '550', mb: '100', bg: 'red', isSelected: true},
  {price: '1000', mb: '200', bg: 'black'}
];

function App() {
  return (
    <>
      <div className="container">
        {
          packages.map((packages) =>
          <Tarif price = {packages.price} mb = {packages.mb} bg = {packages.bg} isSelected = {packages.isSelected} />
          ) 
        }
      </div>
    </>
  );
}

export default App;
