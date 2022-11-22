import './App.css';
import Konyv from './Konyv';

const Konyveim = [
  {
    id:1,
    cim:"Malveil",
    szerzo:"Robert Merle",
    ar: 1111,
    kep:"../public/mokus.jpg"
  },
  {
    id:2,
    cim:"Védett férfiak",
    szerzo:"Robert Merle",
    ar: 2111,
    kep:"../public/mokus.jpg"
  },
  {
    id:3,
    cim:"Állati elmék",
    szerzo:"Robert Merle",
    ar: 3112,
    kep:"../public/mokus.jpg"
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
