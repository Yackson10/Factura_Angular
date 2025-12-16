import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../../models/item';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'list-items',
  imports: [CommonModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent  {

  @Input () items: Item[] = [];
  @Input() total!: number;
  @Output() removeItemEvent = new EventEmitter<number>();
  @Output() editItemEvent = new EventEmitter<Item>();
  @Output() toggleFormEvent = new EventEmitter<void>();

  onToggleForm(): void {
    this.toggleFormEvent.emit();
  }
  
  onRemoveItem(id: number) {
    this.removeItemEvent.emit(id);
  }

  onEdit(item: Item) {
    this.editItemEvent.emit(item);
}

}
