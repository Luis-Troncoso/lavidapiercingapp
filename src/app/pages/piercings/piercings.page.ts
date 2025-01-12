import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piercings',
  templateUrl: './piercings.page.html',
  styleUrls: ['./piercings.page.scss'],
  standalone: false,
})
export class PiercingsPage implements OnInit {
  piercings = [
    {
      image: 'assets/img/logo2.png',
      name: 'Piercing de Ceja',
      price: 10000,
    },
    {
      image: 'assets/img/piercing2.jpg',
      name: 'Piercing de Nariz',
      price: 15000,
    },
    {
      image: 'assets/img/piercing3.jpg',
      name: 'Piercing de Labios',
      price: 12000,
    },
    {
      image: 'assets/img/piercing4.jpg',
      name: 'Piercing de Ombligo',
      price: 13000,
    },
  ];

  constructor() {}

  ngOnInit() {}
}

