(() => {

    //Las Clases. La primera letra de cada palabra capitalizda
    /*class Avenger {

        nombre : string;
        equipo : string;
        nombreReal: string;

        puedePelear: boolean;
        peleasGanadas?: number;

        constructor(nombre:string,equipo:string, nombreReal:string, pudedePelear:boolean, peleasGanadas:number) {
            this.nombre = nombre;
            this.equipo = equipo;
            this.nombreReal = nombreReal;
            this.puedePelear = pudedePelear;
            this.peleasGanadas = peleasGanadas;
        }

    }
    */

   class Avenger {

    /*nombre : string;
    equipo : string;
    nombreReal: string;

    puedePelear: boolean;
    peleasGanadas?: number; */

    constructor(public nombre:string,
                public equipo : string,
                public nombreReal: string,
                public puedePelear: boolean = true,
                public peleasGanadas?: number
        ) {
        

    }

}

    const antman = new Avenger('antman','Capi','no se');
        console.log(antman);


})();



