import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http'
import { of } from 'rxjs'
import { iDocumento } from '../Modelos/iDocumento'

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {
  url:string;
  constructor(private httpclient : HttpClient) { 
      this.url='http://localhost:8080/Buscador_TPI-1.0/documentos/'
  }

  getAll() {
    return this.httpclient.get(this.url+'todos');
  }

  getById(Id: number) {
    return this.httpclient.get(this.url + Id);
  }
}
