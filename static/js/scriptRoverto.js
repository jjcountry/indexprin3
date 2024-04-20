function iniciarMapa(){
    var coord={lat:4.683502,lng:-74.0424858};
    var map=new google.maps.Map(document.getElementById('map'),{
        zoom:15,
        center:coord
    });
    var marker = new google.maps.Marker({
        position: coord,
        map:map
    })
}
    // Tu código JavaScript aquí
    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
    
    // Your web app's Firebase configuration
    const firebaseConfig = {
    apiKey: "AIzaSyCik-hsqM24GSvMJdtk0UysyfMvgeOMUks",
    authDomain: "basededatosprueva-79653.firebaseapp.com",
    databaseURL: "https://basededatosprueva-79653-default-rtdb.firebaseio.com",
    projectId: "basededatosprueva-79653",
    storageBucket: "basededatosprueva-79653.appspot.com",
    messagingSenderId: "984780399094",
    appId: "1:984780399094:web:838c3b4addf4fecc1127d7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    import{getDatabase, ref, child, get} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";
document.addEventListener('DOMContentLoaded', function() {


const db = getDatabase();

let Temp = document.getElementById("temperatureValue");
let Pres = document.getElementById("pressureValue");
let Gas = document.getElementById("signalQuality");
let Dis = document.getElementById("humidityValue");
let Cor1 = document.getElementById("inclinacionValue");
let Cor2 = document.getElementById("positionValue");
let Cor3 = document.getElementById("joint5");

function RetData(){
    const dbRef = ref(db);
    get(child(dbRef, 'sensorica/')).then((snapshot)=>{

        if(snapshot.exists()){
            Temp.textContent = + snapshot.val().esp.temperatura;
            Pres.textContent = + snapshot.val().esp.precion;
            Gas.textContent = + snapshot.val().esp.gas;
            Dis.textContent = + snapshot.val().esp.distancia;
            Cor1.textContent = + snapshot.val().raspi.corriente1;
            Cor2.textContent = + snapshot.val().raspi.corriente2;
            Cor3.textContent = + snapshot.val().raspi.corriente3;
            console.log(Temp)
        }else{
            console.log("Q paso???")
        }
    })
}
setInterval(RetData, 10);
});

// Función para actualizar los valores de los sensores en el contenedor cont_gemelo
// Suponiendo que obtienes los valores de los sensores y los actualizass en JavaScript.

