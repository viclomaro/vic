const botones = document.querySelector('#botones');
const nombreUsuario = document.querySelector('#nombreUsuario');

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        botones.innerHTML =/*html*/ `
        <button class="btn btn-outline-danger mr-2" id="btnCerrarSesion">Cerrar sesión</button>
        `
        nombreUsuario.innerHTML = user.displayName;
        cerrarSesion()
    } else {
        console.log('no existe');
        botones.innerHTML = /*html*/ `
        <button class="btn btn-outline-success mr-2" id="btnAcceder">Acceder</button>
        `

        iniciarSesion()
        nombreUsuario.innerHTML = 'Sin usuarios';
    }
})

const iniciarSesion = () => {
    const btnAcceder = document.querySelector('#btnAcceder');
    btnAcceder.addEventListener('click', async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider)
        } catch (error) {
            console.log(error);
        }
    })
}

const cerrarSesion = () => {
    const btnCerrarSesion = document.querySelector('#btnCerrarSesion');
    btnCerrarSesion.addEventListener('click', () => {
        firebase.auth().signOut();
    })
}