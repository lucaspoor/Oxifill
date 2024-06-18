'use client';

import { filter } from '@chakra-ui/react';
import { useState } from 'react';
import info from '../json/secciones.json';
import Seccion from './Seccion';

export default function Maquina() {
  const [seccion1, setSeccion1] = useState(true);
  const [seccion2, setSeccion2] = useState(false);
  const [seccion3, setSeccion3] = useState(false);

  const cambiarSeccion1 = () => {
    setSeccion1(true);
    setSeccion2(false);
    setSeccion3(false);
  };

  const cambiarSeccion2 = () => {
    setSeccion2(true);
    setSeccion1(false);
    setSeccion3(false);
  };

  const cambiarSeccion3 = () => {
    setSeccion3(true);
    setSeccion1(false);
    setSeccion2(false);
  };

  const product1 = info[0];
  const product2 = info[1];
  const product3 = info[2];

  return (
    <div className="bg-black w-100 h-[700px] content-center ">
      <div key="ds" className=" flex justify-center">
        <button onClick={cambiarSeccion1} className="bg-green-600 p-4">
          seccion1
        </button>
        <button onClick={cambiarSeccion2} className="bg-green-600 p-4">
          seccion2
        </button>
        <button onClick={cambiarSeccion3} className="bg-green-600 p-4">
          seccion3
        </button>
      </div>
      <div className="bg-white w-3/4 h-3/4 m-auto ">
        {seccion1 && (
          <Seccion
            titulo={product1.titulo}
            bajada={product1.bajada}
            imagen={product1.imagen}
            button={product1.button}
            link={product1.link}
          />
        )}
        {seccion2 && (
          <Seccion
            titulo={product2.titulo}
            bajada={product2.bajada}
            imagen={product2.imagen}
            button={product2.button}
            link={product2.link}
          />
        )}
        {seccion3 && (
          <Seccion
            titulo={product3.titulo}
            bajada={product3.bajada}
            imagen={product3.imagen}
            button={product3.button}
            link={product3.link}
          />
        )}
      </div>
    </div>
  );
}
