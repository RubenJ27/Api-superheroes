import marvel from "../../assets/logo-marvel.png"
import dc from "../../assets/logo-dc.png"

export const InicioPage = () => {
  return (
    <>
      <h1 className="text-center font-bold text-6xl uppercase mt-12">
        ¿Que <span className="text-yellow-500">Team</span> eres 🤔?
      </h1>
      <div className="flex flex-col justify-center items-center mt-20">
        <img src={marvel} className="rounded-lg cursor-pointer m-4" />
        <img src={dc} className="rounded-lg cursor-pointer m-4" />
      </div>
    </>
  )
}

