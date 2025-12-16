import { Component, OnInit } from '@angular/core';
import { Invoice } from '../../models/Invoice';
import { InvoiceService } from '../../services/invoice.service';
import { CommonModule } from '@angular/common';
import { ClientViewComponent } from '../client-view/client-view.component';
import { CompanyViewComponent } from '../company-view/company-view.component';
import { InvoiceViewComponent } from '../invoice-view/invoice-view.component';
import { ListItemsComponent } from '../list-items/list-items.component';
import { FormItemComponent } from '../form-item/form-item.component';
import { Item } from '../../models/item';

@Component({
  selector: 'app-invoice',
  imports: [
    CommonModule,
    ClientViewComponent,
    CompanyViewComponent,
    InvoiceViewComponent,
    ListItemsComponent,
    FormItemComponent
  ],
  standalone: true,
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})


export class InvoiceComponent implements OnInit {

  invoice: Invoice | undefined;
  visible: boolean = false;
  itemSelected: Item = new Item();

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoice = this.invoiceService.getInvoice();
  }

  toggleForm(): void {
    this.visible = !this.visible;
    this.itemSelected = new Item(); 
  }

  prepareEdit(item: Item): void {
    this.itemSelected = { ...item } as any;
    this.visible = true;
  }

  deleteItem(id: number): void {
    this.invoiceService.removeItem(id);
    this.invoice = this.invoiceService.getInvoice();
  }

  addItem(item: Item) {
    this.invoice = this.invoiceService.save(item);
    this.visible = false;
    this.itemSelected = new Item();
  }

}