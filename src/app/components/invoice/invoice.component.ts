import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/Invoice';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';

@Component({
  selector: 'app-invoice',
  imports: [
    CommonModule,
    ClientViewComponent,
    CompanyViewComponent,
    InvoiceViewComponent,
    ListItemsComponent
  ],
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})


export class InvoiceComponent implements OnInit {

  invoice: Invoice | undefined;

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
    console.log('Factura cargada en InvoiceComponent:', this.invoice);
  }

  deleteItem(id: number): void {
    this.invoiceService.removeItem(id);
    this.invoice = this.invoiceService.getInvoice();
  }

  
}

