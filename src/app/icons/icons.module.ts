import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import { ChevronLeft, ChevronRight } from 'angular-feather/icons';

const icons = {
  ChevronLeft,
  ChevronRight
};

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeatherModule.pick(icons)
  ],
  exports: [FeatherModule]
})
export class IconsModule { }
