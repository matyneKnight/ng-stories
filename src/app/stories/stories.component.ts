import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { KeyValue } from '@angular/common';
import { IStorie } from './stories.interface';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent implements OnInit, OnDestroy {
  private _stories: IStorie[] = null;
  activePosition: number = 0;
  progressTimerId = null;
  timer = 3;
  timeStarted = null;
  timeRemains = this.timer * 1000;
  paused = false;

  @Input()
  set stories(values: IStorie[]) {
    this._stories = values;
  }
  get stories(): IStorie[] {
    return this._stories;
  }

  constructor() {}

  ngOnInit(): void {
    this.handleProgressTiming();
  }

  keyDescOrder(a, b) {
    return 1;
  }

  public handleProgressTiming(): void {
    this.timeStarted = Date.now();
    this.progressTimerId = setTimeout(() => {
      this.timeRemains = this.timer * 1000;
      if (this.activePosition < this.stories.length) {
        this.handleProgressTiming();
      }

      this.activePosition += 1;
      if (this.activePosition + 1 == this.stories.length) {
        clearTimeout(this.progressTimerId);
      }
    }, this.timeRemains);
  }

  public storyContentholddown(): void {
    clearTimeout(this.progressTimerId);
    this.timeRemains -= Date.now() - this.timeStarted;
    this.paused = true;
  }

  public storyContentholdup(): void {
    this.paused = false;
    if (this.activePosition + 1 < this.stories.length) {
      this.handleProgressTiming();
    }
  }

  public previous(): void {
    if (this.activePosition > 0) {
      clearTimeout(this.progressTimerId);
      this.activePosition -= 1;
      this.handleProgressTiming();
    }
  }

  public next(): void {
    if (this.activePosition + 1  < this.stories.length) {
      clearTimeout(this.progressTimerId);
      this.activePosition += 1;
      this.handleProgressTiming();
    }
  }

  public onSideClick(e): void {
    const storie = document.getElementById('stories');

    if (storie) {
      const content_width = storie.offsetWidth;
      const pos_x = e.pageX - storie.offsetLeft;

      if (content_width / 2  > pos_x) {
        this.previous();

      } else {
        this.next();
      }
    }
  }

  ngOnDestroy(): void {
    if (this.progressTimerId) {
      clearTimeout(this.progressTimerId);
    }
  }
}
