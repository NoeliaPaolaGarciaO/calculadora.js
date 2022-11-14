window.addEventListener ('load',()=> {/* Escuchamos cuando se carga el documento*/

/* Creamos dos constantes y nos guardamos los elementos que necesitamos*/
    const display= document.querySelector ('.calculadora-display')
    const keypadButtons = document.getElementsByClassName ('keypad-button')

    /* Creamos otra constante para convertir el htmlcollection Array*/ 
    const keypadButtonsArray = Array.from (keypadButtons)

    /* Iteramos por nuestro nuevo array de botones*/ 
    keypadButtonsArray.forEach( (button) => {
        
        /* A cada boton le agregamos un listener */
        button.addEventListener('click', ()=> {
            calculadora(button, display)
        } )
    })
})

function calculadora(button, display) {
    switch (button.innerHTML) {
        case 'c':
            return borrar(display);
            break;

            case '=':
                return calcular(display);
                break;

                default:
                    return actualizar(display, button);
                    break;
    }
}

function calcular (display) {
    display.innerHTML = eval(display.innerHTML) /* tomar el string, resolverlo y guardarlo en el innerhtml del display */ 
}

function actualizar(display, button) {
    if (display.innerHTML == 0) {
       display.innerHTML = '';
    }
    display.innerHTML += button.innerHTML;
    /* displey.innerhtml = displey.innerhtml + button.innerhtml */
}

function borrar(display) {
    display.innerHTML = 0;
}