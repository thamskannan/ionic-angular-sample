import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public text = 'Default starting text';

  public onChangeText(): void {
    this.text = 'Changed!';
  }
}
