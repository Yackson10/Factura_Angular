import { Component, Input } from '@angular/core';

@Component({
  selector: 'invoice-view',
  imports: [],
  templateUrl: './invoice-view.component.html',
  styleUrl: './invoice-view.component.css'
})
export class InvoiceViewComponent {
  
  
  @Input() name!: string;
  @Input() id!: number;

}
