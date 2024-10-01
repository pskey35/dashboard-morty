import React from 'react';
import Menu from '../components/Menu';

function Home() {
    return (
        <div className="flex">
            <div className="flex-1 mt-16 ml-16 md:ml-48 p-5">
                <div className='fixed top-0 left-0 w-full flex justify-around items-center border border-gray-500 h-14 bg-white'>
                    <h2>MODULO DE GESTION DE MEMORIA DESCRIPTIVA LST 4</h2>
                    <div>
                        <label htmlFor="">Ingrese la foto JEAN MARTIN</label>
                        <select name="" id="">
                            <option value="">Configuracion</option>
                            <option value="">Salir</option>
                        </select>
                    </div>
                </div>

                <div className='mt-16 h-full'>
                    <p>Listado de precios</p>
                    <div className='flex h-full justify-around items-center'>
                        <p>Filtros de Búsqueda de Predios</p>
                        <div className='flex'>
                            <div>
                                <label>Proyecto</label>
                                <select name="" id="">
                                    <option value="">Proyecto 1</option>
                                    <option value="">Proyecto 2</option>
                                    <option value="">Proyecto 3</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="">Código de Precio</label>
                                <input type="text" placeholder='Codigo de precio' />
                            </div>
                        </div>
                    </div>
                </div>
                <Menu />
            </div>

        </div>
    );
}

export default Home;