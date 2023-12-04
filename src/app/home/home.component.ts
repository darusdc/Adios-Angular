import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productData } from '../../data/productDummy';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
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
  productData = productData;
  maxIndex = Math.random() * (productData.length - 4);
  weeklyProduct = productData.slice(this.maxIndex - 4, this.maxIndex);
}
