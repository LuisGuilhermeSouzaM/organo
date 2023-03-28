import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Categoria from "./componentes/Time";
import { categorias, inicial } from './constants';

function App() {


  const [colaboradores, setColaboradores] = useState(inicial)


  return (
    <div>
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="categorias">
        <h1>Minha organização</h1>
        {categorias.map((categoria, indice) => <Categoria key={indice} categoria={categoria} colaboradores={colaboradores.filter(colaborador => colaborador.categoria === categoria.nome)} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;