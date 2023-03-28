import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Categoria from './componentes/Categoria';
import categorias from './constants';

function App() {

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario categorias={categorias.map(categoria => categoria.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      <section className="categorias">
        {categorias.map(categoria => <Categoria 
          key={categoria.nome} 
          nome={categoria.nome} 
          corPrimaria={categoria.corPrimaria} 
          corSecundaria={categoria.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.categoria === categoria.nome)}
        />)}   
      </section>
      <Rodape />
    </div>
  );
}

export default App;