import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'headOrTail';
  throw = -1;

  listThrows = [];

  throws(): void {
    this.throw = -1;
    
    

    async function delay(ms: number) {
      await new Promise(resolve => setTimeout(()=>resolve(), 1000)).then(()=>console.log("fired"));
    }
    delay(1000);

    this.throw = Math.round(Math.random());
    this.listThrows.push(this.throw);
  }

  format(): void {
    this.listThrows = [];
  }
}
