import {ChangeDetectorRef, Component, ViewRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-change-detection-app';

  textToChange: string;


  constructor(private changeDetectorRef: ChangeDetectorRef) {
    console.log(this.changeDetectorRef);
  }


  triggerChange() {
    this.textToChange = Math.random().toString();
    console.log(this.changeDetectorRef);
  }

}
