import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
  standalone: false,
})
export class RecuperarPage implements OnInit {
  showSuccessMessage: boolean = false; // Controla la visibilidad del mensaje

  constructor() {}

  ngOnInit() {}

  sendLink() {
    // Mostrar el mensaje de éxito
    this.showSuccessMessage = true;

    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 3000);
  }
}

