class KosarModel() {
#kosar = [];
#osszAr = 0;
#osszDb = 0;

  /*  getOsszAr() {

    } */

    setKosar(adat) {
        #kosar.push(adat);
    }

    kosarba(adat) {
        let azonosElem = this.#kosar.findIndex((elem) => {
            return elem.id == adat.id;
        });

        if (azonosElem >= 0) {
            this.#kosar[azonosElem].db++;
        } else {
            this.#kosar.push(adat);
            this.#kosar[this.#kosar.length - 1].db = 1;
        }   
    }

 /*   getKosar() {
        return this.#kosar;
    }

    kosarbolTorol(adat) {

    }*/
}

export default KosarModel;

