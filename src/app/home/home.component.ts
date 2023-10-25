import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
  <main>
  <header class="brand-name">
    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
  </header>
  <section class="content">
    <app-home></app-home>
  </section>
</main>

`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
