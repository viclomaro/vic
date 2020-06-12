const botones = document.querySelector('#botones');
const nombreUsuario = document.querySelector('#nombreUsuario');
const contenidoProtegido = document.querySelector('#contenidoProtegido');
const formulario = document.querySelector('#formulario');
const chat = document.querySelector('#inputChat');

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log(user);
        botones.innerHTML =/*html*/ `
        <button class="btn btn-outline-danger mr-2" id="btnCerrarSesion">Cerrar sesión</button>
        `
        nombreUsuario.innerHTML = user.displayName;
        cerrarSesion()

        formulario.classList = 'input-group fixed-bottom container'

        contenidoChat(user)
    } else {

        botones.innerHTML = /*html*/ `
        <button class="btn btn-outline-success mr-2" id="btnAcceder">Acceder</button>
        `

        iniciarSesion()
        nombreUsuario.innerHTML = 'Sin usuarios';

        contenidoProtegido.innerHTML =/*html*/ `
        <p class="text-center lead mt-3">Debes iniciar sesión</p>
        `

        formulario.classList = 'input-group fixed-bottom container d-none'
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

const contenidoChat = (user) => {

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!inputChat.value.trim()) {
            console.log('input vacio')
            return
        }

        firebase.firestore().collection('chat').add({
            texto: inputChat.value,
            uid: user.uid,
            fecha: Date.now()
        })
            .then(res => console.log('mensaje guardado'))
            .catch(e => console.log(e));

        inputChat.value = '';
    })

    firebase.firestore().collection('chat').orderBy('fecha')
        .onSnapshot(query => {
            contenidoProtegido.innerHTML = '';
            query.forEach(doc => {
                if (doc.data().uid === user.uid) {
                    contenidoProtegido.innerHTML += /*html*/ `
                    <div class="d-flex justify-content-end">
                    <span class="badge badge-pill badge-primary mt-1" style="padding:1%;">${doc.data().texto}</span>
                </div>
                    `
                } else {
                    contenidoProtegido.innerHTML += /*html*/ `
                    <div class="d-flex justify-content-start">
                    <span class="badge badge-pill badge-success mt-1" style="padding:1%;">${doc.data().texto}</span>
                </div>
                    `
                }

                contenidoProtegido.scrollTop = contenidoProtegido.scrollHeight;
            })
        })
}