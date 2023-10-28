import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-entity',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="contact">
    <img class="contact-photo" [src]="contact.pictureLink" alt="Photo of {{contact.name}}">
    <h2 class="contact-title">{{ contact.name }}</h2>
    <p class="contact-phone">{{ contact.phone }}</p>
  </section>
  `,
  styleUrls: ['./contact-entity.component.css']
})
export class ContactEntityComponent {
  @Input() contact!: Contact;
}
