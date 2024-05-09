/*  git init: crea un archivo oculto que almacena las versiones de nuestro proyecto
    git -v: version de git
    git add .: agrega todos los cambios
    git commit -m "msg": git commit msg
    git push -u origin master: 
*/


const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function(){
    const Username = document.getElementById("Username").value
    const Email = document.getElementById("Email").value
    const Password = document.getElementById("Password").value
    const FullName = document.getElementById("FullName").value
    const Address = document.getElementById("Address").value
    const PhoneNumber = document.getElementById("PhoneNumber").value

    console.log("El username es "+Username)
    console.log("El email es "+Email)
    console.log("contraseña "+Password)
    console.log("El nombre es "+FullName)
    console.log("la direccion es  "+Address)
    console.log("El numero de telefono es "+PhoneNumber)

})

