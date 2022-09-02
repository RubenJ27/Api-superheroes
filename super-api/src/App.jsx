import { useState, useEffect } from 'react';
import './App.css'

function App() {

  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    llamarNuestraApi();
  }, [])
  

  const llamarNuestraApi = async () => {
    const response = await fetch('http://localhost:4000/superheroes');
    const datos = await response.json();
    setHeroes(datos);
  };


  return (
    <div className="App">
      <div>
        {heroes.map((heroe) => (
          <div key={heroe.id}>
            <h3>{heroe.nombre}</h3>
            <p>{heroe.editorial}</p>
            <img className='img__heroes' src={heroe.imagen} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
