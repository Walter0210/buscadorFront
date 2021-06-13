import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BuscadorService {
  url:string;
  constructor(private httpclient : HttpClient) { 
        this.url='http://localhost:8080/Buscador_TPI-1.0/buscar/'
  }

  get(busqueda:string) {
    return this.httpclient.get(this.url + busqueda);
  }
}


