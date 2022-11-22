import './konyv.css';

function Konyv(props) {

    function kosarba() {
        console.log(props.konyvAdat.id)
        props.kosarKattintasMetodus(props.konyvAdat.id)
    }

    return(
        <div className="konyv">
            <h3>Cím: {props.konyvAdat.cim}</h3>
            <p>Szerző: {props.konyvAdat.szerzo}</p>
            <span>Ár: {props.konyvAdat.ar} FT </span>
            <img src={props.konyvAdat.kep}></img>
            <button onClick={kosarba}>Kosárba</button>
        </div>
    );
}

export default Konyv;