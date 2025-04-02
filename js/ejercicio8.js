// Ejercicio 8: Función Nota a Texto
// Instrucciones:
// 1. Crea una función llamada `notaTexto` que tome un número del 0 al 10
// 2. Usa switch para retornar:
//    - "Sobresaliente" si la nota es 10
//    - "Excelente" si la nota es 9
//    - "Notable" si la nota es 7 u 8
//    - "Aprobado" si la nota es 5 o 6
//    - "Suspendido" si la nota es menor que 5
// 3. Por ejemplo: notaTexto(7) debe retornar "Notable"

// Escribe tu código aquí debajo:

function notaTexto(nota) {
    switch (nota) {
        case 10:
            return "Sobresaliente";
            break;
        case 9:
            return "Excelente";
            break;
        case 8:
        case 7:
            return "Notable";
            break;
        case 6:
        case 5:
            return "Aprobado";
            break;
        default:
            if (nota < 5 && nota >= 0) {
                return "Suspendido";
            } else {
                return "Nota inválida";
            }
            break;
    }
}

