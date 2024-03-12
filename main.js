let usuario = prompt("ingrese su nombre de usuario")
let pass = Number(prompt("ingrese su contraseña"))
if (usuario == "maria") {
    if (pass == 123) {
        function Profesor(nombre) {
            this.nombre = nombre;
            this.registro = [];
            this.valoracion = 100;
        }
        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        Profesor.prototype.generarRegistroMensual = function (mes, año) {
            this.registro = [];
            const diasMes = new Date(año, mes + 1, 0).getDate();
            let totalHoras = 0;
            for (let dia = 1; dia <= diasMes; dia++) {
                const asistencia = getRandomInt(0, 2);
                const horasTrabajadas = asistencia ? getRandomInt(4, 9) : 0;
                totalHoras += horasTrabajadas;
                this.registro.push({ dia, asistencia, horasTrabajadas });
            }
            if (totalHoras > 75) {
                alert("¡Felicidades! María ha superado las 75 horas de trabajo en el mes. ¡Excelente trabajo!");
            }
            else if (totalHoras < 75) {
                const puntosDescuento = Math.floor((75 - totalHoras) / 6);
                this.valoracion -= puntosDescuento;
                alert("¡Atención! María no ha alcanzado las 75 horas de trabajo en el mes. Se han descontado " + puntosDescuento + " puntos de su valoración para la titularidad.");
            }
        }
        function mostrarRegistroAlert(marcaTiempo) {
            const mes = parseInt(prompt("Ingresa el número de mes (1-12):"));
            const anio = parseInt(prompt("Ingresa el año:"));
            if (isNaN(mes) || isNaN(anio) || mes < 1 || mes > 12) {
                alert("Por favor, ingresa un mes válido (1-12) y un año válido.");
                return;
            }
            marcaTiempo.generarRegistroMensual(mes - 1, anio);
            let mensaje = "Registro de asistencias y horas trabajadas para " + marcaTiempo.nombre + " en " + obtenerNombreMes(mes - 1) + " de " + anio + ":\n\n";
            mensaje += "Día\tAsistencia\tHoras Trabajadas\n";
            marcaTiempo.registro.forEach(registro => {
                mensaje += registro.dia + "\t" + (registro.asistencia ? "Presente" : "Ausente") + "\t\t" + registro.horasTrabajadas + "\n";
            });
            mensaje += "\nValoración para la titularidad: " + marcaTiempo.valoracion;
            alert(mensaje);
        }
        function obtenerNombreMes(mes) {
            const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
            return meses[mes];
        }
        let maria = new Profesor("María");
        mostrarRegistroAlert(maria);
    } else {
        alert("pass incorrecto")
    }
} else {
    alert("usuario incorrecto")
}



