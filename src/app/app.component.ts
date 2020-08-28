import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-stories';

  stories = [
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laboriosam, quo, quidem libero ex omnis accusamus necessitatibus distinctio, quod maxime in. Aspernatur quaerat maiores tenetur reprehenderit repudiandae temporibus repellendus animi.'
    },
    {
      type: 'image',
      content: 'https://www.bookweb.org/sites/default/files/gallery/BLM.png'
    },
    {
      type: 'text',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis laboriosam, quo, quidem libero ex omnis accusamus necessitatibus distinctio, quod maxime in. Aspernatur quaerat maiores tenetur reprehenderit repudiandae temporibus repellendus animi.'
    },
    {
      type: 'image',
      content: 'https://www.bookweb.org/sites/default/files/gallery/BLM.png'
    }
  ]
}
