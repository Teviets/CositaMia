import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import{faFilter} from "@fortawesome/free-solid-svg-icons";
import './catalogo.css';
import producto1 from '../images/Producto1.jpg';
import producto2 from '../images/Producto2.jpg';
import producto3 from '../images/Producto3.jpg';
import producto4 from '../images/Producto4.jpg';
import producto5 from '../images/Producto5.jpg';
import producto6 from '../images/Producto6.jpg';
import producto7 from '../images/Producto7.jpg';
import producto8 from '../images/Producto8.jpg';
import producto9 from '../images/Producto9.jpg';
import producto10 from '../images/Producto10.jpg';
function Catalogo() {
    return (
        <div className="container">
            <div className="icono">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="rectangle">
                <input type="text" className="textbox"/>
            </div>
            <div className="filtros">Filtros
            <div className="iconoF">
            <FontAwesomeIcon icon={faFilter} />
            </div>
            </div>
            <div className="product-container">
                <div className="product1">
                <img src={producto1} alt="Producto 1" />
                </div>
                <div className="product2">
                <img src={producto2} alt="Producto 2" />
                </div>
                <div className="product3">
                <img src={producto3} alt="Producto 3" />
                </div>
                <div className="product4">
                <img src={producto4} alt="Producto 4" />
                </div>
                <div className="product5">
                <img src={producto5} alt="Producto 5" />
                </div>
                <div className="product6">
                <img src={producto6} alt="Producto 6" />
                </div>
                <div className="product7">
                <img src={producto7} alt="Producto 7" />
                </div>
                <div className="product8">
                <img src={producto8} alt="Producto 8" />
                </div>
                <div className="product9">
                <img src={producto9} alt="Producto 9" />
                </div>
                <div className="product10">
                <img src={producto10} alt="Producto 10" />
                </div>
            </div>
        </div>

  );
}

export default Catalogo;
