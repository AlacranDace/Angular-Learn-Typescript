(function(){
    
    const miFuncion = function(a:string){
        return a.toUpperCase();
    }
    //Las funciones de Flecha tienen la ventaja de que si solo tienen una linea de codigo y es lo que queremos retornar, podemos ahorrarnos las llaves
    const miFuncionF = ( a:string ) => a.toUpperCase();
    
    //Funcion que suma dos numeros
    const sumarN = function (a:number,b:number){
        return a+b;
    }
    const sumarF = (a:number,b:number) => a+b; 
    
    //Las funciones de flecha NO MODIFICAN A LO QUE APUNTA EL THIS!!!! Si lo pusieramos en una función normal el this apuntaria a la función definida para el setTimeOut.
    const hulk = {
        nombre:'Hulk',
        smash(){
            //Funciona
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            },1000);
            //Devuelve "Undefined smash!!!""
            setTimeout(function(){
                console.log(`${this.nombre} smash!!!`);
            },1000);
        }
    }

    hulk.smash();

})();



