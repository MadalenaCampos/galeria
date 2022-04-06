import { Component, Input, OnInit } from '@angular/core';
import { PicsumImage } from 'src/app/api/api-picsum.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.less'],
})
export class CardImageComponent implements OnInit {
  @Input() public configCardImage!: PicsumImage.Receive.Response[];

  constructor() {}

  ngOnInit(): void {
    console.log(this.configCardImage);
  }
}
