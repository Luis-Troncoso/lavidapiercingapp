import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  username: string = 'Juan Pérez'; // El nombre de usuario puede venir de la autenticación
  email: string = 'juan.perez@example.com'; // El correo también puede ser parte de los datos de usuario
  phoneNumber: string = '';
  appointments: Array<{ date: string; time: string }> = [
    { date: '2025-01-15', time: '10:00 AM' },
    { date: '2025-01-17', time: '03:30 PM' },
  ];

  constructor() {}

  ngOnInit() {}

  savePhoneNumber() {
    if (this.phoneNumber) {
      alert('Número de celular guardado con éxito');
    } else {
      alert('Por favor ingresa un número de celular');
    }
  }
}
