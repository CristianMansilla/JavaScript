/* Crear el array de objetos "Pizzas". 🍕
👉 Debemos crear 6 objetos como mínimo.
👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

🔥 Crear una iteración del array que imprima en consola:
a) Las pizzas que tengan un id impar.
b) ¿Hay alguna pizza que valga menos de $600?
c) Los nombres de todos las pizzas.
d) Los precios de las pizzas.
e) El nombre de cada pizza con su respectivo precio.

Cada respuesta debe ser, como siempre, usuario friendly. 
Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸 */

let pizzas = [
    {id: 1, nombre: "Cuatro Estaciones", ingredientes: ["tomate", "mozzarella", "setas", "huevo duro", "aceitunas", "alcachofas", "salami", "jamón de york", "pimienta", "anchoa", "pimiento verde"], precio: 1800},
    {id: 2, nombre: "Margarita", ingredientes: ["tomate", "mozzarella", "albahaca fresca"], precio: 500},
    {id: 3, nombre: "Carbonara", ingredientes: ["yema de huevo", "huevo duro", "manteca de cerdo", "aceite", "pimienta negra", "bacon"], precio: 800},
    {id: 4, nombre: "Barbacoa", ingredientes: ["carne de ternera", "trozos de pollo", "cebolla", "tomate", "bacon", "mozzarella", "salsa barbacoa"], precio: 1000},
    {id: 5, nombre: "Calzone", ingredientes: ["champiñones", "carne picada", "queso fundido"], precio: 900},
    {id: 6, nombre: "Cuatro Quesos", ingredientes: ["mozzarella", "provolone", "parmesano", "emmental"], precio: 1200},
]


function imprimirArray(_pizza) {
    let idImpar;
    let menos600;

    console.log("Este restaurante ofrece las siguientes variedades de pizzas:");
    console.log(_pizza.map((name) => `${name.id}:${name.nombre} - $${name.precio}\nINGREDIENTES:${name.ingredientes}\n`).join("\n"));
    console.log("___________________________________");

    idImpar = _pizza.filter((item) => item.id%2 !=0);
    console.log("Las pizzas que tienen un ID IMPAR son:");
    console.log(idImpar.map((name) => `${name.id}:${name.nombre}`).join("\n"));

    console.log("-------------------------------------");
    menos600 = _pizza.filter((item) => item.precio < 600);
    console.log("La pizza que vale menos de $600 es:");
    console.log(menos600.map((name) => `${name.id}:${name.nombre}`).join("\n"));
    
}

imprimirArray(pizzas)