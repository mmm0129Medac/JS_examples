document.addEventListener('DOMContentLoaded', function () {
    // Cambiar el título de la página
    document.title = "Ejercicios Repaso Examen";

    // Función para imprimir la página
    function printPage() {
        window.print();
    }

    // Asociar la función al botón
    const printButton = document.getElementById('printButton');
    if (printButton) {
        printButton.addEventListener('click', printPage);
    } else {
        console.error('No se encontró el botón con id "printButton".');
    }

    // Función para calcular la suma de dos números
    function sumOrTripleSum(a, b) {
        if (a === b) {
            return 3 * (a + b);
        } else {
            return a + b;
        }
    }

    // Calcular y mostrar el resultado por consola
    const num1 = 5;
    const num2 = 5;
    const result = sumOrTripleSum(num1, num2);
    console.log(result);

    // Mostrar una alerta con la URL de la web
    alert(window.location.href);

    // Función para calcular el área de un triángulo usando la fórmula de Herón
    function calculateTriangleArea(a, b, c) {
        const s = (a + b + c) / 2;
        const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
        return area;
    }

    // Calcular y mostrar el área del triángulo por consola
    const side1 = 5;
    const side2 = 6;
    const side3 = 7;
    const triangleArea = calculateTriangleArea(side1, side2, side3);
    console.log(triangleArea);
});
