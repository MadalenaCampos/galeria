import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatIconModule, ComponentsModule],
  exports: [HomeComponent],
})
export class PagesModule {}
