import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ArchivoService {
  byteCharacters:string = '';
  byteArray: string = '';
  txtDoc:string = '';

  url:string;
  constructor(private httpclient : HttpClient) { 
        this.url='http://localhost:8080/Buscador_TPI-1.0/archivos/'
  }

  getArchivo(id : number) {
    return this.httpclient.get(this.url + id, {responseType:'text'});
  }



}
