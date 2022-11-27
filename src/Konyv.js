import './konyv.css';
import React, { Component }  from 'react';

function Konyv(props) {

    function kosarba() {
        console.log(props.konyvAdat.id)
        props.kosarKattintasMetodus(props.konyvAdat.id)
    }

    return(
        <div className="konyv">
            <h3>Cím: {props.konyvAdat.cim}</h3>
            <p>Szerző: {props.konyvAdat.szerzo}</p>
            
            <img src={props.konyvAdat.kep}></img>
            <br></br>
            <span>Ár: {props.konyvAdat.ar} FT </span>
            <br></br>
            <button onClick={kosarba}>Kosárba</button>
        </div>
    );
}

export default Konyv;