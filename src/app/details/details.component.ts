import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productData } from '../../data/productDummy';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() id!: number

  item = productData
}
