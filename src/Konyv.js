import './konyv.css';
import React from 'react';
import Kosar from './Kosar';

function Konyv(props) {

    function kosarFeldolgoz() {
        console.log(props.konyvAdat.id)
        props.kosarFeldolgoz(props.konyvAdat)
        Kosar.kosarba(props.konyvAdat);
    }

    return(
        <div className="konyv">
            <h3>Cím: {props.konyvAdat.cim}</h3>
            <p>Szerző: {props.konyvAdat.szerzo}</p>
            
            <img src={props.konyvAdat.kep}></img>
            <br></br>
            <span>Ár: {props.konyvAdat.ar} FT </span>
            <br></br>
            <button className="btn btn-dark" onClick={kosarFeldolgoz}>Kosárba</button>
        </div>
    );
}



export default Konyv;