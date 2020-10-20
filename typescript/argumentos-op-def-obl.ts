(function(){
//Obligatorios, opcionales y los que tienen valores por defecto. Por ese orden
        function activar (  quien: string, 
                            momento?:string, 
                            objeto: string = 'batseñal', ){
            
            if( momento ) {
                console.log (`${ quien } activó la ${ objeto } en la ${ momento }`);
            } else {
                console.log (`${ quien } activó la ${ objeto }`);
            }
        }

    activar ('Gordon','tarde');
})();



