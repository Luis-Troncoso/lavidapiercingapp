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
      image: 'assets/img/nostril.jpg',
      name: 'NOSTRIL',
      price: 8000,
    },
    {
      image: 'assets/img/ombligo.png',
      name: 'OMBLIGO',
      price: 10000,
    },
    {
      image: 'assets/img/industrial.jpg',
      name: 'INDUSTRIAL',
      price: 10000,
    },
    {
      image: 'assets/img/septum.jpg',
      name: 'SEPTUM',
      price: 10000,
    },
    {
      image: 'assets/img/ceja.jpg',
      name: 'CEJA',
      price: 10000,
    },
    {
      image: 'assets/img/Helix.jpg',
      name: 'HELIX',
      price: 10000,
    },
    {
      image: 'assets/img/labret.jpg',
      name: 'LABRET',
      price: 10000,
    },
  ];

  constructor() {}

  ngOnInit() {}
}

