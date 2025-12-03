import { Component, Input } from '@angular/core';
import { Company } from '../../models/company';

@Component({
  selector: 'company-view',
  imports: [],
  templateUrl: './company-view.component.html',
  styleUrl: './company-view.component.css'
})
export class CompanyViewComponent {

  @Input () company: Company = new Company();
  @Input () name!: string;

}
