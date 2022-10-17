import './App.css';
import CarDetails from './components/CarDetails';

function App() {
  const Carros = [
    { id: 1, marca: "Ford", cor: "Branco", placa: "APL-4286" },
    { id: 2, marca: "Honda", cor: "Prata", placa: "ABC-1234" },
    { id: 3, marca: "Volkswagen", cor: "Vermelho", placa: "PWK-5997" }
  ]

  return (
    <div className="App">
      <h1 className="Title">Detalhes dos carros</h1>
      {Carros.map((carro) => (
        <CarDetails 
          key={carro.id}
          marca={carro.marca}
          cor={carro.cor}
          placa={carro.placa}
        />
      ))}
    </div>
  );
}

export default App;
