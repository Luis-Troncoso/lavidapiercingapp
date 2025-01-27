import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.page.html',
  styleUrls: ['./administrador.page.scss'],
  standalone: false,
})
export class AdministradorPage implements OnInit {
  citas: any[] = []; // Citas cargadas desde la pestaña de agenda
  piercings: any[] = []; // Piercings gestionados desde la pestaña de piercings
  piercingForm!: FormGroup;
  imagenSeleccionada: File | null = null;

  constructor(
    private fb: FormBuilder,
    private toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    // Inicialización de citas (simulación de carga desde backend o API)
    this.cargarCitas();

    // Inicialización del formulario para agregar piercings
    this.piercingForm = this.fb.group({
      nombre: ['', [Validators.required]],
      precio: [
        '',
        [Validators.required, Validators.min(1), Validators.pattern('^[0-9]+$')],
      ],
    });

    // Cargar piercings iniciales (simulación de carga desde backend o API)
    this.cargarPiercings();
  }

  cargarCitas() {
    this.citas = [
      {
        cliente: 'Luis Troncoso',
        fecha: '2025-01-11',
        hora: '15:00',
        piercing: 'Aro de nariz',
      },
      {
        cliente: 'Patricio Rodríguez',
        fecha: '2025-01-12',
        hora: '16:30',
        piercing: 'Piercing en la ceja',
      },
    ];
  }

  cargarPiercings() {
    this.piercings = [
      { nombre: 'Piercing de ceja', precio: 5000, imagen: 'ceja.jpg' },
      { nombre: 'Piercing de nariz', precio: 3000, imagen: 'nariz.jpg' },
    ];
  }

  aceptarCita(cita: any) {
    this.showToast(`Cita aceptada para ${cita.cliente}.`);
    this.citas = this.citas.filter((c) => c !== cita); // Eliminar cita aceptada
  }

  rechazarCita(cita: any) {
    this.showToast(`Cita rechazada para ${cita.cliente}.`);
    this.citas = this.citas.filter((c) => c !== cita); // Eliminar cita rechazada
  }

  onFileSelected(event: any) {
    this.imagenSeleccionada = event.target.files[0] || null;
  }

  agregarPiercing() {
    if (this.piercingForm.valid && this.imagenSeleccionada) {
      const nuevoPiercing = {
        nombre: this.piercingForm.value.nombre,
        precio: this.piercingForm.value.precio,
        imagen: this.imagenSeleccionada.name, // Solo simula el nombre de la imagen
      };

      this.piercings.push(nuevoPiercing); // Agregar el piercing a la lista

      this.showToast('Piercing agregado correctamente.');
      this.piercingForm.reset();
      this.imagenSeleccionada = null;
    } else {
      this.showToast(
        'Por favor completa todos los campos y selecciona una imagen.',
        'danger'
      );
    }
  }

  editarPiercing(piercing: any) {
    this.piercingForm.patchValue({
      nombre: piercing.nombre,
      precio: piercing.precio,
    });
    this.imagenSeleccionada = null; // Resetear imagen al editar

    // Eliminar el piercing original de la lista temporalmente
    this.piercings = this.piercings.filter((p) => p !== piercing);
  }

  eliminarPiercing(piercing: any) {
    this.piercings = this.piercings.filter((p) => p !== piercing);
    this.showToast('Piercing eliminado correctamente.', 'warning');
  }

  cerrarSesion() {
    this.router.navigate(['/login']); // Redirigir al login
    this.showToast('Sesión cerrada correctamente.', 'warning');
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      position: 'bottom',
      color,
    });
    toast.present();
  }
}
