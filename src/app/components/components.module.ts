import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardImageComponent } from './card-image/card-image.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [CardImageComponent],
  imports: [CommonModule, MatPaginatorModule],
  exports: [CardImageComponent],
})
export class ComponentsModule {}
