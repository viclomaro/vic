import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  formRegistro: FormGroup;
  formLogin: FormGroup;
  errores: any[];
  mostrarRegistro: boolean;
  mostrarLogin: boolean;

  constructor(private usuarioService: UsuarioService, private router: Router) {

    this.mostrarRegistro = false;
    this.mostrarLogin = false;

    // Formlario registro
    this.formRegistro = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      apellidos: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+/)
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
      repitepassword: new FormControl('', [
        Validators.required,
      ]),
    }, [this.passwordValidator]);


    // Formulario login
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
      ]),
      password: new FormControl('', [
        Validators.required,
      ]),
    });

  }


  ngOnInit() {

    // Al entrar en la página carga desde arriba del todo.
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

  }

  // Recuperamos datos del formulario registro
  async onSubmitRegistro() {
    await this.usuarioService.createUser(this.formRegistro.value)
    this.mostrarRegistro = !this.mostrarRegistro;

    if (this.mostrarRegistro === true) {
      this.formRegistro.reset();
    }
  }

  // Recuperamos datos del formulario login
  onSubmitLogin() {
    this.usuarioService.loginUser(this.formLogin.value)
      .then(response => {
        localStorage.setItem('token', response['success']);
        this.mostrarLogin = true;
        this.formLogin.reset();

        // Recuperamos datos del usuario y se guardan en localStorage
        this.usuarioService.getUserById()
          .then(response => {
            localStorage.setItem('usuario', JSON.stringify(response));
            window.location.reload();
          })
          .catch(err => {
          });
      })
      .catch(err => {
      });

  }

  // Validador para comprobar que coinciden las contraseñas en el registro
  passwordValidator(form) {
    const passwordValue = form.controls.password.value;
    const repitePasswordValue = form.controls.repitepassword.value;

    if (passwordValue === repitePasswordValue) {
      return null;
    } else {
      return { passwordvalidator: true };
    }
  }



}
