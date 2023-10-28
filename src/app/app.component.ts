import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    template: `
    <main>
        <h2>Testing Contact Entity</h2>
        <app-home></app-home>
    </main>
`,
    styleUrls: [],
    imports: [HomeComponent]
})
export class AppComponent {
  title = 'homes';
}
