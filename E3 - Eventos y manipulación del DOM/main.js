/* Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. */

let pizzas = [
    {id: 1, nombre: "Cuatro Estaciones", ingredientes: ["tomate", "mozzarella", "setas", "huevo duro", "aceitunas", "alcachofas", "salami", "jamón de york", "pimienta", "anchoa", "pimiento verde"], precio: 1800},
    {id: 2, nombre: "Margarita", ingredientes: ["tomate", "mozzarella", "albahaca fresca"], precio: 500},
    {id: 3, nombre: "Carbonara", ingredientes: ["yema de huevo", "huevo duro", "manteca de cerdo", "aceite", "pimienta negra", "bacon"], precio: 800},
    {id: 4, nombre: "Barbacoa", ingredientes: ["carne de ternera", "trozos de pollo", "cebolla", "tomate", "bacon", "mozzarella", "salsa barbacoa"], precio: 1000},
    {id: 5, nombre: "Calzone", ingredientes: ["champiñones", "carne picada", "queso fundido"], precio: 900},
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
    //El usuario ingresó un ID?
    if(datoInput === ""){
        showError("Error no ingresó ningún ID");
        return;
    }
    crearHTML(datoInput);
}

function showError(error){
    let msgError = document.createElement("p");
    msgError.textContent = error;
    msgError.classList.add("error");
    info.appendChild(msgError);

    //Timer de 3 segundos de duración del mensaje de error
    setTimeout(()=>{
        msgError.remove();
    }, 3000);
}

function crearHTML(dato){
    let pizza = pizzas.filter((item)=>item.id === parseInt(dato));
    nombrePizza.innerHTML = pizza.map((item)=> item.nombre);
    precioPizza.innerHTML = pizza.map((item) => `$${item.precio}`);

    //El usuario ingresó un ID válido?
    if(dato<=0 || dato>pizzas.length){
        showError("No coincide ese ID. Ingrese un ID válido");
        nombrePizza.innerHTML = "Escriba el ID";
    }
    //Reseteo el valor del input
    input.value = "";
}
