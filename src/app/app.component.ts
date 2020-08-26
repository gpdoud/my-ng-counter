import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nbr: number = 0;
  btnClass: string = '';

  inc(): void { this.nbr++; this.display(); }
  dec(): void { this.nbr--; this.display(); }

  display(): void {
    this.btnClass = '';
    if(this.nbr % 2 == 0) {
      this.btnClass += "text-danger ";
    }
    if(this.nbr % 3 == 0) {
      this.btnClass += "font-weight-bold ";
    }
    if(this.nbr % 5 == 0) {
      this.btnClass += "font-italic ";
    }
  }
}
