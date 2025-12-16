import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Item } from '../../models/item';

@Component({
  selector: 'form-item',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-item.component.html'
})
export class FormItemComponent implements OnChanges {
  
  @Input() item: Item = new Item();
  @Output() addItemEventEmitter = new EventEmitter<Item>();

  private counterId: number = 4;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item'] && changes['item'].currentValue) {
      this.item = { ...changes['item'].currentValue };
    }
  }

  onSubmit(itemForm: NgForm): void {
    if (itemForm.invalid) {
        itemForm.control.markAllAsTouched();
        return;
    }
    const itemToEmit: any = { ...this.item };

    if (!itemToEmit.id || itemToEmit.id === 0) {
        itemToEmit.id = this.counterId;
        this.counterId++;
    }
    itemToEmit.total = Number(itemToEmit.price) * Number(itemToEmit.quantity);

    this.addItemEventEmitter.emit(itemToEmit as Item);
    this.item = new Item();
    itemForm.resetForm(new Item());
  }
}