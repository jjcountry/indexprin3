/*// Variables globales para almacenar los valores recibidos
var angulo1Value, angulo2Value, angulo3Value, angulo4Value, angulo5Value, angulo6Value;
var vel1Value, vel2Value, vel3Value, vel4Value, vel5Value, vel6Value;
var referenciaValue, posxValue, posyValue, poszValue;

// Función para actualizar el valor del input number cuando se mueve el slider
function updateNumberInput(sliderId, numberInputId, storageVariable) {
    var slider = document.getElementById(sliderId);
    var numberInput = document.getElementById(numberInputId);
    if(numberInput.value>360){
        numberInput.value=360;
        slider.value=360;
    }
    
    // Actualizar el valor del input number cuando se cambia el valor del slider
    slider.addEventListener('input', function() {
        numberInput.value = slider.value;
        // Almacenar el valor en la variable global correspondiente
        window[storageVariable] = numberInput.value;

        // Mostrar el valor en la consola
        console.log(storageVariable + ': ' + numberInput.value);
        //enviarDatosAlServidor(numberInput);
        sendDataToPython(); // Llamar a la función para enviar los datos a Python
    });

    // Actualizar el valor del slider cuando se cambia el valor del input number
    numberInput.addEventListener('input', function() {
        slider.value = numberInput.value;
        // Almacenar el valor en la variable global correspondiente
        window[storageVariable] = numberInput.value;
        // Mostrar el valor en la consola
        console.log(storageVariable + ': ' + numberInput.value);
    });
}

// Llamar a la función para cada par de slider y input number, y asignar la variable de almacenamiento correspondiente
updateNumberInput('grado1', 'angulo1', 'angulo1Value');
updateNumberInput('grado2', 'angulo2', 'angulo2Value');
updateNumberInput('grado3', 'angulo3', 'angulo3Value');
updateNumberInput('grado4', 'angulo4', 'angulo4Value');
updateNumberInput('grado5', 'angulo5', 'angulo5Value');
//updateNumberInput('Grado6', 'angulo6', 'angulo6Value');
updateNumberInput('VELOCIDAD1', 'vel1', 'vel1Value');
updateNumberInput('VELOCIDAD2', 'vel2', 'vel2Value');
updateNumberInput('VELOCIDAD3', 'vel3', 'vel3Value');
updateNumberInput('VELOCIDAD4', 'vel4', 'vel4Value');
updateNumberInput('VELOCIDAD5', 'vel5', 'vel5Value');
//updateNumberInput('VELOCIDAD6', 'vel6', 'vel6Value');
updateNumberInput('referen', 'Referencia', 'referenciaValue');
updateNumberInput('POSICIONX', 'posx', 'posxValue');
updateNumberInput('POSICIONY', 'posy', 'posyValue');
updateNumberInput('POSICIONZ', 'posz', 'poszValue');
*/


// Función para actualizar el valor del input numérico y la variable correspondiente
function updateNumberInput(slider) {
    const id = slider.id;
    const numberInput = document.getElementById(id.replace('grado', 'angulo').replace('VELOCIDAD', 'vel').replace('referen','Referencia'));
    numberInput.value = slider.value;
    
    // Actualizar la variable correspondiente utilizando window[id]
    window[id.replace('grado', 'angulo').replace('VELOCIDAD', 'vel').replace('referen','Referencia')]= parseInt(slider.value);
}

function increaseFirstSliderValue() {
    const Slider = document.getElementById('grado1');
    const currentValue = parseInt(Slider.value);
    if (!isNaN(currentValue)) {
        Slider.value = currentValue + 1;
        updateNumberInput(Slider);
        sendDataToPython(); // Llamar a la función para enviar los datos a Python
    }
}
function increaseSecondSliderValue() {
    const Slider = document.getElementById('grado2');
    const currentValue = parseInt(Slider.value);
    if (!isNaN(currentValue)) {
        Slider.value = currentValue + 1;
        updateNumberInput(Slider);
        sendDataToPython(); // Llamar a la función para enviar los datos a Python
    }
}
function increaseThirdSliderValue() {
    const Slider = document.getElementById('grado3');
    const currentValue = parseInt(Slider.value);
    if (!isNaN(currentValue)) {
        Slider.value = currentValue + 1;
        updateNumberInput(Slider);
        sendDataToPython(); // Llamar a la función para enviar los datos a Python
    }
}
function increaseFourthSliderValue() {
    const Slider = document.getElementById('grado4');
    const currentValue = parseInt(Slider.value);
    if (!isNaN(currentValue)) {
        Slider.value = currentValue + 1;
        updateNumberInput(Slider);
        sendDataToPython(); // Llamar a la función para enviar los datos a Python
    }
}
function increaseFifthSliderValue() {
    const Slider = document.getElementById('grado5');
    const currentValue = parseInt(Slider.value);
    if (!isNaN(currentValue)) {
        Slider.value = currentValue + 1;
        updateNumberInput(Slider);
        sendDataToPython(); // Llamar a la función para enviar los datos a Python
    }
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'q') {
        increaseFirstSliderValue();
    }
    if (event.key === 'w') {
        window.movimiento = 2;
        increaseSecondSliderValue();
    }
    if (event.key === 'e') {
        increaseThirdSliderValue();
    }
    if (event.key === 'r') {
        increaseFourthSliderValue();
    }
    if (event.key === 'v') {
        increaseFifthSliderValue();
    }
});


function updateSliderFromNumberInput(numberInput) {
    const id = numberInput.id;
    const slider = document.getElementById(id.replace('angulo', 'grado').replace('vel', 'VELOCIDAD').replace('Referencia','referen'));

    // Actualizar el valor del slider cuando se cambie el cuadro de entrada
    slider.value = parseInt(numberInput.value);

    // Actualizar la variable correspondiente utilizando window[id]
    window[id.replace('angulo', 'grado').replace('vel', 'VELOCIDAD').replace('Referencia','referen')] = parseInt(numberInput.value);
}

// Agregar eventos de escucha al cuadro de entrada de número
const numberInputs = document.querySelectorAll('input[type="number"]');
numberInputs.forEach(numberInput => {
    numberInput.addEventListener('change', function() {
        updateSliderFromNumberInput(this);

    });
});
// Seleccionar todos los sliders
const sliders = document.querySelectorAll('.slider');

// Agregar event listener a cada slider
sliders.forEach(slider => {
    slider.addEventListener('input', () => {
        updateNumberInput(slider);

        sendDataToPython(); // Llamar a la función para enviar los datos a Python
    });
});

function sendDataToPython() {
    // Crear un objeto con los valores de los ángulos y velocidades
    const data = {
        angulo1: parseFloat(window.angulo1),
        angulo2: parseFloat(window.angulo2),
        angulo3: parseFloat(window.angulo3),
        angulo4: parseFloat(window.angulo4),
        angulo5: parseFloat(window.angulo5),
        angulo6: parseFloat(window.angulo6),
        vel1: parseFloat(window.vel1),
        vel2: parseFloat(window.vel2),
        vel3: parseFloat(window.vel3),
        vel4: parseFloat(window.vel4),
        vel5: parseFloat(window.vel5),
        vel6: parseFloat(window.vel6),
        ref: parseFloat(window.Referencia)
    };

    console.log(data);

    // Enviar los datos al servidor Flask
    fetch('/receive_data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
