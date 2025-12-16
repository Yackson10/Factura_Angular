import { Injectable } from '@angular/core';
import { invoiceData } from '../data/invoice.data';
import { Invoice } from '../models/Invoice';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice;

  constructor() {
    const itemsAsClass = invoiceData.items.map(
        item => Object.assign(new Item(), item)
    );

    this.invoice = { 
        ...invoiceData, 
        items: itemsAsClass 
    } as Invoice;
  }

  getInvoice(): Invoice {
    const total = this.calcularTotal();
    console.log('Total general calculado:', total);
    return {... this.invoice, total };
    
  }

  calcularTotal(): number {
    return this.invoice.items.reduce((sum, item) => {
      return sum + item.total;
  }, 0);
  }

  removeItem(id: number): void {
    this.invoice.items = this.invoice.items.filter(item => item.id !== id);
  }

  save(item: Item): Invoice {
    const index = this.invoice.items.findIndex(i => i.id === item.id);
    if (index !== -1) {
        this.invoice.items[index] = item;
    } else {
        this.invoice.items = [...this.invoice.items, item];
    }
    return this.getInvoice();
}


}
