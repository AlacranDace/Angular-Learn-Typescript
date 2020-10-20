(() => {
//Lo basico de las promesas, el concepto es como los hilos de Java, que una parte no detenga la ejecución de todo el programa!!!???
//No hay nada parecido a las promesas en el es5 por lo que por fines educativos vamos al tsconfig.json y modificamos el tarjet a es6
//Las promesas se usan mucho para consumir WS
console.log('Inicio');


const prom1 = new Promise( (resolve,reject)=>{
    
    setTimeout( () => {
        reject('Se termino el timeout');
    },1000);

});

prom1
    .then(mensaje => console.log(mensaje))
    .catch(err => console.warn(err));

console.log('Fin');

//Primero se ejecutan Inicio y Fin y de mientras el timeout se agota y luego sale el texto
//Es importante en las promesas poner tanto el .then como el .catch!!! Sino se nos puede parar el código

})();



