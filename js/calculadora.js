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
    switch (button.innerhtml) {
        case 'c':
            borrar(display);
            break;

            case '=':
                calculadora(display);
                break;

                default:
                    actualizar(display, button);
                    break;
    }
}

function calcular (display) {
    displey.innerhtml = eval(display.innerhtml) /* tomar el string, resolverlo y guardarlo en el innerhtml del display */ 
}

function actualizar(display, button) {
    if (display.innerhtml == 0) {
       display.innerhtml = '';
    }
    display.innerhtml += button.innerhtml;
    /* displey.innerhtml = displey.innerhtml + button.innerhtml */
}

function borrar(display) {
    display.innerhtml = 0;
}