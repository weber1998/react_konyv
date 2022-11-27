import './App.css';
import Konyv from './Konyv';
import React from 'react';

//import kep from 'kepek/mokus.jpg'

const Konyveim = [
  {
    id:1,
    cim:"Malveil",
    szerzo:"Robert Merle",
    ar: 1111,
    kep: "https://www.haziallat.hu/upload/4/article/1655/lama_csiko.jpg"
  },
  {
    id:2,
    cim:"Védett férfiak",
    szerzo:"Robert Merle",
    ar: 2111,
    kep: "https://www.haziallat.hu/egzotikus-fajok/a-lama/3749/2/lama-az-andokban.jpg"
  },
  {
    id:3,
    cim:"Állati elmék",
    szerzo:"Robert Merle",
    ar: 3112,
    kep: "https://www.haziallat.hu/allat-es-ember/a-lama-kopni-fog-/1655/1/lama-lama-glama-sherpa.jpg"
  }
]


function App() {

  function kosarFeldolgoz(adat) {
    console.log(adat);
  }


  return ( // jsx - javascript + XML
    <div className="App">
      <header className="App-header">
       <h1>Könyváruház</h1>
      </header>
      <article className="konyvek">
      {
        Konyveim.map((konyv, index)=>{
            return(<Konyv konyvAdat={konyv} key={index} kosarKattintasMetodus={kosarFeldolgoz}/>)
          }
        )
      }
        

       </article>
       <footer className="lablec">
        <p>Wéber Krisztián</p>
       </footer>
    </div>
  );
}

export default App;
