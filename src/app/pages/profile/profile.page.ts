import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  username: string = 'Luis.troncoso'; 
  email: string = 'Lui.Troncoso@duocuc.cl'; 
  phoneNumber: string = '';
  appointments: Array<{ date: string; time: string }> = [
    { date: '15/01/25', time: '17:00 hrs' },
    { date: '20/01/25', time: '15:30 hrs' },
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
