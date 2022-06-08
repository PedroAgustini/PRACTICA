/* Modo estricto javascript
no se puede ejecutar codigo que de problema
se declara en el archivo js poniendo "use strict" 

luego se enlaza el js al html al final del body con script
<script> scr="./js/script.js"></script>
*/
"use strict"

function generateTitle() {
    // 1. generar el html que voy a ingresar en la pagina en este caso lo guarde en const html
    // 2. identificar el contenedor donde pondre este codigo dentro de html...
    // 3. poner el codigo en el html atravez de innerHTML.
    
    const name = "Nombre";
    const email = "Email"
    const direccion = "Direccion"
    const localidad = "Ciudad"
    const pais = "Pais"
    const html = `<tr>
                    <td>${name}</td>
                    <td>${email} </td>
                    <td>${direccion} </td>
                    <td>${localidad} </td>
                    <td>${pais} </td>
                </tr>`;
    const container = document.getElementById("user-container-title")

    container.innerHTML = html
}

generateTitle()



function generateCard() {
    // 1. generar el html que voy a ingresar en la pagina en este caso lo guarde en const html
    // 2. identificar el contenedor donde pondre este codigo dentro de html...
    // 3. poner el codigo en el html atravez de innerHTML.
    
    const name = "Pedro";
    const email = "pedroagustini@hotmail.com"
    const direccion = "San Vicente"
    const localidad = "Alejandro Korn"
    const pais = "Argentina"
    const html = `<tr>
                    <td>${name}</td>
                    <td>${email} </td>
                    <td>${direccion} </td>
                    <td>${localidad} </td>
                    <td>${pais} </td>
                </tr>`;
    const container = document.getElementById("user-container")

    container.innerHTML = html
}

generateCard()
