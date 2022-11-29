import './App.css';
import Konyv from './Konyv';
import React, { useState } from 'react';
import Kosar from './Kosar';
import KosarModel from './KosarModel';

//import kep from '../public/kepek/mokus.jpg'

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

  // let db = 0;
  const [db, setDb] = useState(0);
  const [osszAr, setOsszAr] = useState(0);
  const [kosar, setKosar] = useState([]);
  const KosarModel = new KosarModel(kosar);

  function kosarFeldolgoz(adat) {
    //console.log(adat);
    // hány könyv van a kosárban?
    //db++;
    console.log(db);
    // a darabszám jelenti a komponens pillanatnyi állapotát
    // amikor ez változik, akkor az oldal eg részének újra kell rendelődni
    // erre jó a useState

    setDb(db+1); // ez változtatja meg a hozzárendelt változó értékét
    // plussz befrissíti az oldal vonatkozó részeit
    setOsszAr(osszAr + adat.ar);
    // először push a kosárba és utána állítod be a setKosarral
    kosar.push(adat);
    setKosar(KosarModel.getKosar());
    console.log(kosar);
  }


  return ( // jsx - javascript + XML
    <div className="App">
      <header className="App-header">
       <h1>Könyváruház</h1>
      </header>
      <section className='kosar'>
        <p>A könyvek száma: {db}</p>
        <p>A könyvek összértéke: {osszAr}</p>
        {/** kosár tartalmának megjelenítése */}
        
        <table class="table table-striped">
        <thead>
            <tr>
                <th>
                    Cím
                </th>
                <th>
                    Szerző
                </th>
                <th>
                    Ár
                </th>
            </tr>
        </thead>
        <tbody>
        {kosar.map((konyv, index) => {
          return(<Kosar kosar={konyv} key={index}/>)
        })}
        </tbody>
        </table>
      </section>
      <article className="konyvek">
      {
        Konyveim.map((konyv, index)=>{
            return(<Konyv konyvAdat={konyv} key={index} kosarFeldolgoz={kosarFeldolgoz}/>)
          })}
        

       </article>
       <footer className="lablec">
        <p>Wéber Krisztián</p>
       </footer>
    </div>
  );
}

export default App;
