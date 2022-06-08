let ingredientes = ["Harina", "Agua", "Sal", "Levadura", "Orégano", "Tomate", "Cebolla", "Queso", "Jamón", "Aceituna"];

function ordenarParesEImpares (pizza){
    let pares = [];
    let impares = [];

    for(let i = 0; i < ingredientes.length; i++){
        let cantLetras = pizza[i].length;
        if(cantLetras % 2 == 0){
            pares.push(pizza[i]);
        }else{
            impares.push(pizza[i]);
        }
    }
    return [
        console.log(`Los elementos pares son: ${pares}`), 
        console.log(`Los elementos impares son: ${impares}`)
    ];
}

ordenarParesEImpares(ingredientes);