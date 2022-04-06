import { Component, OnInit } from '@angular/core';
import { ApiPicsumService, PicsumImage } from 'src/app/api/api-picsum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  public configCardImage!: PicsumImage.Receive.Response[];
  constructor(private picsumApiService: ApiPicsumService) {}

  ngOnInit(): void {
    this.picsumApiService
      .getImages({ page:1, limit: 10 })
      .subscribe((response) => {
        this.configCardImage = response;
      });
  }
}
