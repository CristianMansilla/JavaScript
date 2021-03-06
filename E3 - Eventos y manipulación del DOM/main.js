/* Vamos a utilizar el mismo array de objetos "Pizzas馃崟" del desaf铆o general anterior. 

馃憠 Crear un archivo HTML que contenga un h2, un h4, un input number y un bot贸n. 

馃憠 El desaf铆o ser谩, al tocar el bot贸n, capturar el valor ingresado en el input.
馃憠 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

馃毃 Si no coincide con ning煤n id, renderizar un mensaje de error. */

let pizzas = [
    {id: 1, nombre: "Cuatro Estaciones", ingredientes: ["tomate", "mozzarella", "setas", "huevo duro", "aceitunas", "alcachofas", "salami", "jam贸n de york", "pimienta", "anchoa", "pimiento verde"], precio: 1800},
    {id: 2, nombre: "Margarita", ingredientes: ["tomate", "mozzarella", "albahaca fresca"], precio: 500},
    {id: 3, nombre: "Carbonara", ingredientes: ["yema de huevo", "huevo duro", "manteca de cerdo", "aceite", "pimienta negra", "bacon"], precio: 800},
    {id: 4, nombre: "Barbacoa", ingredientes: ["carne de ternera", "trozos de pollo", "cebolla", "tomate", "bacon", "mozzarella", "salsa barbacoa"], precio: 1000},
    {id: 5, nombre: "Calzone", ingredientes: ["champi帽ones", "carne picada", "queso fundido"], precio: 900},
    {id: 6, nombre: "Cuatro Quesos", ingredientes: ["mozzarella", "provolone", "parmesano", "emmental"], precio: 1200},
]


const nombrePizza = document.getElementById("nombrePizza");
const precioPizza = document.getElementById("precioPizza");
const input = document.getElementById("input");
const btnBuscarPizza = document.getElementById("buscarPizza");
const info = document.querySelector(".info");

btnBuscarPizza.addEventListener("click", buscarPizza);

function buscarPizza(){
    let datoInput = input.value;
    //El usuario ingres贸 un ID?
    if(datoInput === ""){
        showError("Error no ingres贸 ning煤n ID");
        return;
    }
    crearHTML(datoInput);
}

function showError(error){
    let msgError = document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("error");
    info.appendChild(msgError);

    //Timer de 3 segundos de duraci贸n del mensaje de error
    setTimeout(()=>{
        msgError.remove();
    }, 3000);
}

function crearHTML(dato){
    let pizza = pizzas.filter((item)=>item.id === parseInt(dato));
    nombrePizza.innerHTML = pizza.map((item)=> item.nombre);
    precioPizza.innerHTML = pizza.map((item) => `$${item.precio}`);

    //El usuario ingres贸 un ID v谩lido?
    if(dato<=0 || dato>pizzas.length){
        showError("No coincide ese ID. Ingrese un ID v谩lido");
        nombrePizza.innerHTML = "Escriba el ID";
    }
    //Reseteo el valor del input
    input.value = "";
}
