function funcion(){
    location.href = "../index.html";
}

function validar() {
    var nombre, correo, password;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    password = document.getElementById("password").value;

    if(nombre === "" || correo === "" || password === "") {
        Swal.fire('Existe un campo que está vacío')
        return false;
    }else if(nombre.length > 40 || password.length > 20) {
        Swal.fire('El nombre o contraseña es muy largo')
        return false;
    }else if(correo > 100) {
        Swal.fire('El correo es muy largo')
        return false;
    }else if(nombre.length < 3) {
        Swal.fire('Nombre invalido')
        return false;
    }
}

function validar_inicio() {
    var saved_password = 192122;
    var saved_email = "juansebastian@gmail.com";
    if(document.form.contraseña.value == saved_password && document.form.correo.value == saved_email) {
        window.location = "../index.html";
        return false;
    }else{
        Swal.fire('Ingrese datos correctos')
        return false
    }
}

let date = new Date();

const month_names = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

let day = date.getDate();
let month = month_names[date.getMonth()];
let year = date.getFullYear();

document.getElementById("year").innerHTML = year;
document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = month;

function loadMainPage() {
    Swal.fire({
        imageUrl: 'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg4NDQ5OTY1OTc3MTE4NjY3/world-cup2.jpg',
        imageWidth: 600,
        imageHeight: 350,
        imageAlt: 'Custom image',
        background: '#004445',
    })
}

jQuery('#contactForm').validate({
	rules:{
		name: {
			required: true,
			minlength: 5,
		},
		email:{
			required:true,
			email:true
		},
		cantidad:{
			required:true,
		},
		pedido: {
			required:true,
			minlength: 5,
		}
	},messages:{
		name:{
			required: "Ingrese su nombre",
			minlength: "Debe ser de más de 5 letras",
		},
		email:{
			required:"Ingrese su correo",
			email:"El correo no es valido",
		},
		cantidad:{
			required:"Ingrese cantidad del producto",
		},
		pedido: {
			required: "Ingrese pedido",
			minlength: "Debe ser de más de 5 letras"
		}
	},
});
function send() {
    var cantidad = document.getElementById("number").value;
    var cod = document.getElementById("ordenar").value;
    var payment;

    let codigo201 = 25;
    let codigo411 = 13;
    let codigo230 = 48;
    let codigo21 = 26;
    let codigo235 = 7;
    let codigo145 = 3;


    if(cod == 201 && cantidad <= codigo201) {
        payment = 25 * cantidad;
        Swal.fire("Pago a realizar: " + payment)
    } else if(cod == 411 && cantidad <= codigo411) {
        payment = 30 * cantidad;
        Swal.fire("Pago a realizar: " + payment)
    } else if(cod == 230 && cantidad <= codigo230) {
        payment = 5 * cantidad;
        Swal.fire("Pago a realizar: " + payment)
    } else if(cod == 21 && cantidad <= codigo21) {
        payment = 7 * cantidad;
        Swal.fire("Pago a realizar: " + payment)
    } else if(cod == 235 && cantidad <= codigo235) {
        payment = 15 * cantidad;
        Swal.fire("Pago a realizar: " + payment)
    } else if(cod == 145 && cantidad <= codigo145) {
        payment = 20 * cantidad;
        Swal.fire("Pago a realizar: " + payment)
    } else {
        Swal.fire("La cantidad excede a la disponible")
    }
}