import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';  // Importar el ToastController

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  registroForm!: FormGroup;
  errorMessage: string = '';
  showPassword: boolean = false;
  showRepeatPassword: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastController: ToastController 
  ) {}

  ngOnInit() {
    this.registroForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z.]*$/), // Mayúsculas, minúsculas, puntos únicamente
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(40),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(12),
          Validators.pattern(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,12}$/,
          ), // Mayúsculas, minúsculas y números, sin caracteres especiales
        ],
      ],
      repeatPassword: ['', Validators.required],
    });
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  toggleRepeatPasswordVisibility() {
    this.showRepeatPassword = !this.showRepeatPassword;
  }

  async registrarse() {
    if (this.registroForm.valid) {
      const { password, repeatPassword } = this.registroForm.value;

      if (password !== repeatPassword) {
        this.errorMessage = 'Las contraseñas no coinciden.';
        return;
      }

      // Procesar el registro
      this.errorMessage = '';
      await this.showToast('¡Registro completado con éxito!');  // Mostrar el toast
      this.router.navigate(['/login']);
    } else {
      this.displayErrors();
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000, // El toast se mostrará por 2 segundos
      position: 'bottom', // Puedes usar 'top', 'middle', o 'bottom' para la posición
      color: 'success', // El color del toast (puedes elegir 'success', 'danger', etc.)
    });
    toast.present();
  }

  displayErrors() {
    const errors = this.registroForm.controls;
    if (errors['username'].errors) {
      if (errors['username'].errors['required']) {
        this.errorMessage = 'El nombre de usuario es obligatorio.';
      } else if (errors['username'].errors['minlength']) {
        this.errorMessage =
          'El nombre de usuario debe tener al menos 10 caracteres.';
      } else if (errors['username'].errors['maxlength']) {
        this.errorMessage =
          'El nombre de usuario no debe exceder 20 caracteres.';
      } else if (errors['username'].errors['pattern']) {
        this.errorMessage =
          'El nombre de usuario debe contener mayúsculas, minúsculas y puntos únicamente.';
      }
    } else if (errors['email'].errors) {
      if (errors['email'].errors['required']) {
        this.errorMessage = 'El correo es obligatorio.';
      } else if (errors['email'].errors['email']) {
        this.errorMessage = 'El formato del correo no es válido.';
      } else if (errors['email'].errors['maxlength']) {
        this.errorMessage = 'El correo no debe exceder 40 caracteres.';
      }
    } else if (errors['password'].errors) {
      if (errors['password'].errors['required']) {
        this.errorMessage = 'La contraseña es obligatoria.';
      } else if (errors['password'].errors['minlength']) {
        this.errorMessage =
          'La contraseña debe tener al menos 8 caracteres.';
      } else if (errors['password'].errors['maxlength']) {
        this.errorMessage =
          'La contraseña no debe exceder 12 caracteres.';
      } else if (errors['password'].errors['pattern']) {
        this.errorMessage =
          'La contraseña debe contener mayúsculas, minúsculas y números, y no debe incluir caracteres especiales.';
      }
    } else if (errors['repeatPassword'].errors) {
      this.errorMessage = 'Debe repetir la contraseña.';
    }
  }
}
