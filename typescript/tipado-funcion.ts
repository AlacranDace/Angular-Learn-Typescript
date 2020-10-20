(() => {

    
//Tipado de Retorno de una función
    const suma = (a:number, b:number):number => a+b;
    //Hay veces donde TS no es capaz de inferir el tipo

    const nombre = ():string => 'Hola Daniel';

    const obtenerSalsario = ():Promise<string> => {

        return new Promise( (resolve, reject) => {
            resolve('Daniel');
        });

    }

    obtenerSalsario().then( a=> console.log( a.toUpperCase() ))

})();



