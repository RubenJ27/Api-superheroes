import { Navigate, Routes, Route } from "react-router-dom";
import { LoginPage } from "../auth";
import { MarvelPage, DcPage } from "../heroes";
import { NavBar } from "../design";


export const AppRouter = () => {
  return (
    <>
    <NavBar />
        <Routes>
          <Route path="marvel" element={<MarvelPage />} />
          <Route path="dc" element={<DcPage />} />

          <Route path="login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
    </>
  );
};
