


//rafc tab

//1. se crea el componente y se exporta para usarlo en el main
// se crea el input, con el diseño del css, se le agregan las propiedades, tipo texto, placeholder para que muestre un texto
// y el value se usara un hook de useState, de inputValue, que queda en ""
// se necesita el metodo onChange y se crea una variable onInputChange.

//2. para que muestre el texto tenemos que mostrar el evento  que es un change event
// dentro del evento tenemos el .target.value para recibir el cambio de valor al tocar el teclado
// podemos desestructurar el target del value y no hace falta poner event.target.value

//2. mandamos una función cuyo primer argumento es el argumento que le mandamos a la funcion que queremos ejecutar
// que es el event y se puede obviar
//onChange= {(event) => onInputChange(event)}
//2. creamos un form y dentro colocamos el input, para colocar el evento onSubmit,
// para evitar el refresh usamos el preventDefault(). El inputValue es el valor que queremos sacar del evento onSubmit.

//3. se desestructura las props y se obtiene lo que recibimos de las props, en este caso setCategories
// llamamos setCategories en el evento onSubmit, para que no se borren los otros valores, mandamos un callback de categorias
// e insertamos el inputValue setCategories(categories => [inputValue, ...categories]);

//4. validamos con if, si el inputValue.trim() elimina espacios adelante y atras. es menor a 1 caracter, entonces 
// escribimos un return para salirse de la funcion y no se ejecute lo demás.
// una vez pasa la instrucción limpiamos el inputValue para que se limpie nuestra caja de texto.
import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

// inicializar estados, o parámetros, se relaciona la variable con el método a ejecutar.
    const [inputValue, setInputValue] = useState("");
    const onInputChange = ({target}) => {
        // console.log(target.value)
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length<=1) return;

        // setCategories(categories => [inputValue, ...categories]);
        setInputValue('');
        onNewCategory(inputValue.trim());
    }

  return (
   <form onSubmit={onSubmit}>
    <input
    type="text"
    placeholder="Buscar gifs"
    value={ inputValue }
    onChange= {onInputChange}
    />
    </form>
  )
}
