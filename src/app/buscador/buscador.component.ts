import { Component, OnInit, } from '@angular/core';
import { BuscadorService } from '../services/buscador.service';
import { ArchivoService } from '../services/archivo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { iDocumento } from '../Modelos/iDocumento'
import {DocumentosService} from '../services/documentos.service'


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  busqueda: string = ''
  resultado: boolean = false;
  listDoc: any = [];
  bodyDocClick: string = '';
  nombreDocClick: string = '';
  fileUrl: SafeResourceUrl = '';
  todosDocumentos: any = [];
  total = 0;
  
  

  constructor(
    private buscador: BuscadorService,
    private archivo: ArchivoService,
    private files: DocumentosService
  ) { }

  ngOnInit(): void {}

  getSearch(): void {
    this.resultado = true;
    this.buscador.get(this.busqueda).subscribe((res) => { this.listDoc = res })
  }

  getTextoArchivo(idArchivo:number):void {
    this.archivo.getArchivo(idArchivo).subscribe((res) => { this.bodyDocClick = atob(res); console.log(this.bodyDocClick) })
    
  }

  loadModal(nombreDoc:string, preview:string, id:number):void {
    this.nombreDocClick = nombreDoc;
    this.getTextoArchivo(id);
  }

  getAllFiles(){
    this.files.getAll().subscribe((res)=>{this.todosDocumentos = res; console.log(res), this.total = this.todosDocumentos.length})
  }
}
