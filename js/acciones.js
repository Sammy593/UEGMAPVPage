let profileNameContainer = document.getElementById("profile-name");
let profilePictureContainer = document.getElementById("profile-picture");

let currentUser;

let database = firebase.database().ref();

/*elementos*/
let newli = document.createElement("li");
let a = document.createElement("a");
let textoInicio = document.createTextNode("Iniciar sesion");
let textoCerrar = document.createTextNode("Cerrar sesion");

let currentLi = document.getElementById("aqui");

/*funciones*/
firebase.auth().onAuthStateChanged((user)=>{
    if(user == null){
        a.classList.add("menu-link");
        a.setAttribute("id", "inicio");
        a.setAttribute("href", "./login.html");
        newli.classList.add("item-menu");

        a.appendChild(textoInicio);
        newli.appendChild(a);
        document.getElementById("item-container").appendChild(newli);

    }else if(user != null){
        a.classList.add("menu-link");
        a.setAttribute("id", "cerrar");
        a.setAttribute("href", "./principal.html");
        newli.classList.add("item-menu");

        a.appendChild(textoCerrar);
        newli.appendChild(a);
        document.getElementById("item-container").appendChild(newli);

        let i = document.getElementById("cerrar");
        i.addEventListener('click', function(){
            signOut();
        });
    }

    currentUser = user;
    profilePictureContainer.src = user.photoURL;
    profileNameContainer.innerHTML = user.displayName;
});

let inicio = getElementById("inicio");
let cerrar = getElementById("cerrar");

function signOut(){
    firebase.auth().signOut()
}
