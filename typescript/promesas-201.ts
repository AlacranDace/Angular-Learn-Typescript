(() => {
//Promesas y su Tipado en TypeScript
//Ejercicio menos abstracto

//Esta función hay que tiparla para evitar errores y esto se hace poniendo los dos pountos seguido de Promise y entre simbolos mayorque y menorque el tipo de lo que devuelve la función si la promesa se cumple (se ejecuta el resolve)
    const retirarDinero = (montoRetirar:number): Promise<number> => {
        
        let dineroActual = 1000;

        return new Promise( ( resolve, reject ) => {
                
            if( montoRetirar > dineroActual ) {
                reject('No hay suficientes fondos')
            } else {
                dineroActual -= montoRetirar;
                resolve( dineroActual );
            }

        }));
    }
    
    retirarDinero( 1789.36 )
        .then( montoActual => console.log(`Me queda ${ montoActual}`))
        .catch(console.warn);


})();



