import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
  standalone: false,
})
export class AgendaPage implements OnInit {
  piercingSeleccionado: string = '';
  fechaHora: string = '';
  metodoPago: string = '';
  citaAgendada: boolean = false;

  piercings = [
    { name: 'Piercing de Ceja' },
    { name: 'Piercing de Nariz' },
    { name: 'Piercing de Labios' },
    { name: 'Piercing de Ombligo' },
  ];

  constructor() {}

  ngOnInit() {}

  agendarCita() {
    if (this.piercingSeleccionado && this.fechaHora && this.metodoPago) {
      this.citaAgendada = true;
    }
  }
}
