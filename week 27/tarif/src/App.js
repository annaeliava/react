import Tarif from "./assets/components/tarif";
import './assets/styles/app.css';

const packages = [
  {price: '300', mb: '10', bg: '(0, 0, 255)'},
  {price: '450', mb: '50', bg: '(0, 128, 0)'},
  {price: '550', mb: '100', bg: '(255, 0, 0)', isSelected: true},
  {price: '1000', mb: '200', bg: '(0, 0, 0)'}
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
