(function(){
//Los Templates Literales son aquellos que utilizan el símbolo que está al lado de la P y que sirve para hacer consol.log de una forma más sencilla
    function getEdad(){
        return 100+100+300;
    }

    const nombre     =   'Daniel';
    const apellido   = 'Cerezo';
    const edad       = 25;
    
    //const salida = nombre+apellido+edad;
    //const salida = nombre + " " + apellido + " ( "+ edad +" )";
    const salida = `${ nombre }
                    ${ apellido }
                    ( ${ getEdad() } )`;

    console.log(salida);

})();



