import { Component, OnInit, Input } from '@angular/core';
import { IStorie } from './stories.interface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  private _stories: IStorie[] = null;

  @Input()
  set stories(values: IStorie[]) {
    this._stories = values;
  }
  get stories(): IStorie[] {
    return this._stories;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
