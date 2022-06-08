"use strict"

   


function generateCard(usersarray) {
    // 1. generar el html que voy a ingresar en la pagina en este caso lo guarde en const html
    // 2. identificar el contenedor donde pondre este codigo dentro de html...
    // 3. poner el codigo en el html atravez de innerHTML.
   let html = ``;
    for (let i = 0; i<usersarray.length; i++) {
      html += `<tr>
                    <td>${usersarray[i].name}</td>
                    <td>${usersarray[i].email} </td>
                    <td>${usersarray[i].direccion} </td>
                    <td>${usersarray[i].localidad} </td>
                    <td>${usersarray[i].pais} </td>
              </tr>`;
    }
    const container = document.getElementById("user-container");
    container.innerHTML = html
}


let users = [ 
    {name: "Pedro", email: "pedroagustini@hotmail.com", direccion: "San Vicente", localidad: "Alejandro Korn", pais: "Argentina"},
    {name: "Pedro", email: "pedroagustini@hotmail.com", direccion: "San Vicente", localidad: "Alejandro Korn", pais: "Argentina"},
    {name: "Pedro", email: "pedroagustini@hotmail.com", direccion: "San Vicente", localidad: "Alejandro Korn", pais: "Argentina"},
    {name: "Pedro", email: "pedroagustini@hotmail.com", direccion: "San Vicente", localidad: "Alejandro Korn", pais: "Argentina"},
    {name: "Pedro", email: "pedroagustini@hotmail.com", direccion: "San Vicente", localidad: "Alejandro Korn", pais: "Argentina"},
    {name: "Pedro", email: "pedroagustini@hotmail.com", direccion: "San Vicente", localidad: "Alejandro Korn", pais: "Argentina"}
];

generateCard(users);
