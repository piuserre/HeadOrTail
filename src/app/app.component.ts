import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Head or Tail';
  throw = -1;

  listThrows = [];

  throws(): void {
    this.throw = -1;
    setTimeout(()=>{
      this.throw = Math.round(Math.random());
      this.listThrows.push(this.throw);
    }, 3000);

    
  }

  format(): void {
    this.listThrows = [];
  }
}
