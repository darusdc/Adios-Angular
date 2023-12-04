import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { GalleriaModule } from 'primeng/galleria';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GalleriaModule,
    MenubarModule,
    ButtonModule,
    CarouselModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'adios-app';
  carouselData = [
    {
      tagline: 'Just Do It',
      thumbnail: 'https://i.ibb.co/LzMPFjC/banner-nike.jpg',
    },
    {
      tagline: 'Impossible is Nothing',
      thumbnail: 'https://i.ibb.co/7J0wM8C/banner-adidas.jpg',
    },
    {
      tagline: 'Off the Wall',
      thumbnail: 'https://i.ibb.co/RQkwFTw/banner-vans.jpg',
    },
    {
      tagline: 'Achieve New Balance',
      thumbnail: 'https://i.ibb.co/p4qfBJ4/banner-new-balance.jpg',
    },
    {
      tagline: 'Forever Faster',
      thumbnail: 'https://i.ibb.co/3C4c69G/banner-puma.jpg',
    },
    {
      tagline: 'Anima Sana In Corpore Sano',
      thumbnail: 'https://i.ibb.co/fG5p5Qw/banner-asics.jpg',
    },
  ];
  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
