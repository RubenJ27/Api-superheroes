import { Navigate, Routes, Route } from "react-router-dom";
import { NavBar } from "../../design";

import { DcPage, HeroPage, InicioPage, MarvelPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
      <Route path="inicio" element={<InicioPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="heroe/:heroId" element={<HeroPage />} />
        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};
