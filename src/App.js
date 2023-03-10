import React from "react";
import { Header } from "./components/Header/Header";
import { Profiles } from "./components/Profiles/Profiles";
import "./App.css";

function App() {
  const perfis = [
    { nome: "Lucas", foto: "https://github.com/santanafx.png" },
    { nome: "Pedro", foto: "https://github.com/santanafx.png" },
    { nome: "Maria", foto: "https://github.com/santanafx.png" },
    { nome: "João", foto: "https://github.com/santanafx.png" },
    { nome: "Otavio", foto: "https://github.com/santanafx.png" },
  ];

  return (
    <div>
      <Header />
      <div className="app__perfis">
        {perfis.map((perfil) => (
          <Profiles key={perfil.nome} foto={perfil.foto} nome={perfil.nome} />
        ))}
      </div>
    </div>
  );
}

export default App;
