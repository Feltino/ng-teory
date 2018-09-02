import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-lg-8 offset-lg-2">
      <h2>{{ num }}</h2>
      <h2>{{ num | appPow:3: 'грн.' }}</h2>
    </div>
  `
})
export class AppComponent {
  num = 2;
}
