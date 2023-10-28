import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactEntityComponent } from '../contact-entity/contact-entity.component';
import { Contact } from '../contact';

@Component({
    selector: 'app-home',
    standalone: true,
    template: `
    <main>
      <section>
        <app-contact-entity [contact]="contact"></app-contact-entity>
      </section>
    </main>
  `,
    styleUrls: ['./home.component.css'],
    imports: [CommonModule, ContactEntityComponent]
})
export class HomeComponent {
  readonly contactPictureUrl = 'https://images.immediate.co.uk/production/volatile/sites/3/2018/08/Simpsons_SO28_Gallery_11-fb0b632.jpg?quality=90&resize=800,534';

  contact: Contact = {
    id: 1,
    name: 'Homer Simpson',
    phone: '+1 22 98712-6785',
    pictureLink: `${this.contactPictureUrl}`,
  }
}
