import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-template-more-attributes',
  templateUrl: './template-more-attributes.component.html',
  styleUrls: ['./template-more-attributes.component.css'],
})
export class TemplateMoreAttributesComponent {
  @Input() title: string;
}
