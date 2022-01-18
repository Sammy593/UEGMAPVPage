firebase.auth().onAuthStateChanged((user)=>{

    if(user != null){
        window.location = "principal.html";

    }
})


async function login(){
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);

}
