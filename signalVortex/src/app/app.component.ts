import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'signalVortex';

  count = signal(0); // simple signal

  isEven = computed<boolean>(() => {
    if(this.count() % 2 === 0) {
      return true;
    }
    return false;
  }) // computed signal, depends on count. We can type it so we now that it is boolean

  isOdd = computed<boolean>(() => {
    return !this.isEven()
  });

  increaseCount() {
    this.count.set(this.count() + 1);
  }
}
