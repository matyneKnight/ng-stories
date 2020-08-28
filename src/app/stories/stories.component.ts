import { Component, OnInit, Input } from '@angular/core';
import { IStorie } from './stories.interface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  private _stories: IStorie[] = null;
  activePosition: number = 0
  progressTimerId = null;
  progressTimer = 10000;

  @Input()
  set stories(values: IStorie[]) {
    this._stories = values;
  }
  get stories(): IStorie[] {
    return this._stories;
  }

  constructor() { }

  ngOnInit(): void {
    this.handleProgressTiming();
  }

  public handleProgressTiming(): void {
    this.progressTimerId = setTimeout(
      () => {
        if (this.activePosition < this.stories.length) {
          this.handleProgressTiming()
        }

        this.activePosition +=  1;
      },
      this.progressTimer
    );
  }

}
