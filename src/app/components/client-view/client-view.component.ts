import { Component, Input } from '@angular/core';
import { Address } from '../../models/address';
import { Client } from '../../models/client';

@Component({
  selector: 'client-view',
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {

  @Input () client: Client = new Client();
  




}
