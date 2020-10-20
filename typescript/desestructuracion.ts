(() => {
    
    const avenger = {
        nombre: 'Steve',
        clave: 'Capitan América',
        poder: 'Droga'
    }
    /*console.log(avenger.nombre);
    console.log(avenger.clave);
    console.log(avenger.poder);*/

    //Para no tener que estar todo el rato referenciando al objeto avenger entra en juego la desestructuración de objetos
    const { nombre, clave, poder} = avenger;
    /*console.log(nombre);
    console.log(clave);
    console.log(poder );*/
    
    //Este tipo de desestructuración también funciona en los argumentos de una función
    const extraer = ( { nombre, poder}:any ) => {
        //const { nombre, poder} = avenger;
        console.log(nombre);
        console.log(poder );

    }
    //extraer( avenger );

    //Desestructuración de Arreglos (Arrays)
    const avengers: string[] = ['Thor','Ironman','Spiderman'];
    //Para evitar tener que hacer esto
    /*console.log(avengers[0]);
    console.log(avengers[1]);
    console.log(avengers[2]);*/

    //Con la desestructuración de arreglo son llaves cuadradas. Pero hay que hacerlo de forma ordenada
    const [thor, ironman, spiderman] = avengers;
    //console.log(`${thor}  ${ironman}  ${spiderman}`);
    //Si no nos interesara las dos primeras posiciones sería así
    const [,,spiderman] = avengers;
    //console.log(spiderman);


    const extraerArr = ( [,,spiderman]: string[] ) => spiderman;
    console.log(spiderman);

})();



