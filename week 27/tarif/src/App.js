import Tarif from "./assets/components/tarif";
import './assets/styles/app.css';

const packages = [
  {price: '300', mb: '10'},
  {price: '450', mb: '50'},
  {price: '550', mb: '100'},
  {price: '1000', mb: '200'}
];

function App() {
  return (
    <>
      <div className="container">
        {
          packages.map((packages) =>
          <Tarif price = {packages.price} mb = {packages.mb} />
          ) 
        }
      </div>
    </>
  );
}

export default App;
