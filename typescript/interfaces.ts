(() => {
//Son puramente para Typescript para indicar tipados de propiedades de objeto
//Interface: Se definen las reglas que se quiere tener de un objeto determinado. No tiene constructor. Es como una gúia 

    interface Xmen {
        nombre: string;
        edad: number;
        poder?: string;
    }


    //Planteamos el problema.  
    //Confiamos en la buena voluntad del que use la función y le envíe un objeto con propiedad de nombre
    //Pero que se puede hacer para fijarlo???

    const enviarMision = ( xmen : any ) => {

        console.log(`Enviando a ${ xmen.nombre} a la misión`);

    }

    const wolverine = {
        nombre: 'Logan',
        edad: 360
    }
    
    enviarMision(wolverine);

    //Podemos pedirle al objeto que tenga una propiedad concreta para que si no la tiene avise al programador

    const enviarMisionMejor = ( xmen: {nombre:string} ) => {

        console.log(`Enviando a ${ xmen.nombre} a la misión`);

    }

    const regresarAlCuartel = (xmen : Xmen) => {
        console.log(`Retornando a ${ xmen.nombre} de la misión`);
    }

    const wolverine2 : Xmen = {
        nombre: 'Logan',
        edad: 360
    }
    
    enviarMisionMejor(wolverine2);
    regresarAlCuartel(wolverine2);

    
})();



