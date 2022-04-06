import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export namespace PicsumImage {
  export namespace Receive {
    export interface Response {
      id: string;
      author: string;
      width: number;
      height: number;
      url: string;
      download_url: string;
    }
  }
  export namespace Send {
    export interface Filtros {
      page: number;
      limit: number;
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class ApiPicsumService {
  private baseRouter = 'https://picsum.photos/v2/list';

  constructor(private http: HttpClient) {}

  public getImages(
    filtros: PicsumImage.Send.Filtros
  ): Observable<PicsumImage.Receive.Response[]> {
    return this.http.get<PicsumImage.Receive.Response[]>(
      `${this.baseRouter}?page=${filtros.page}&limit=${filtros.limit}`
    );
  }
}
