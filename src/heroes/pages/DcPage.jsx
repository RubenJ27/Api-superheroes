import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroesApi from "../../api/HeroesApi";
import {Loader} from "../components/Loader";

export const DcPage = () => {
  const [getHeroes, setGetHeroes] = useState([]);

  useEffect(() => {
    obtainHeroes();
  }, []);

  const obtainHeroes = async () => {
    try {
      const response = await heroesApi.get("/superheroes?tipo=heroes-dc");
      setGetHeroes(response.data);
   /*    console.log(response.data); */
    } catch (error) {
      console.log(error);
    }
  };


  if (!getHeroes.length) {
    return(
    <div className="flex justify-center items-center mt-72">
      <Loader />
    </div>
    );
  }

  return (
    <>
      <h1 className="text-center font-bold text-6xl uppercase m-4">
        <span className="text-yellow-500">Top 20</span>
        <br /> Mejores heroes de <span className="text-yellow-500">DC</span>
      </h1>
      <div className="grid sm:grid-cols-4 gap">
        {getHeroes.map((heroe) => (
          <div
            key={heroe.id}
            className="rounded-t-2xl shadow-2xl bg-gray-900 m-8"
          >
            <img
              src={heroe.imagen}
              alt={heroe.nombre}
              className="rounded-t-2xl w-full "
            />
            <div className="p-6 py-4">
              <div className="font-bold text-xl mb-2">{heroe.nombre}</div>
              <p className="text-gray-500 text-base text-justify">{heroe.descripcion.substring(0, 200).concat("...")}</p>
              <Link to={`/heroe/${heroe.id}`}>
              <button className="w-full bg-blue-500 px-8 py-2 mt-8 mb-6 rounded-lg uppercase font-bold hover:bg-blue-700">Ver Perfil</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
