import { Component, ElementRef, ViewChild } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import * as M from 'materialize-css';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('mobile') sideNav?: ElementRef;

  title = 'personal-finances-planner';

  ngAfterViewInit(): void{
    M.Sidenav.init(this.sideNav?.nativeElement);
  }

}
