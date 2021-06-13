import { Component, OnInit, } from '@angular/core';
import { BuscadorService } from '../services/buscador.service';
import { ArchivoService } from '../services/archivo.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { iDocumento } from '../Modelos/iDocumento'
import {DocumentosService} from '../services/documentos.service'
import {IndexarService} from '../services/indexar.service'


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
  urlDescarga: SafeResourceUrl = '';
  todosDocumentos: any = [];
  total = 0;
  
  

  constructor(
    private buscador: BuscadorService,
    private archivo: ArchivoService,
    private files: DocumentosService,
    private indexador: IndexarService,
    private sanitizer: DomSanitizer,
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

  indexar(){
    this.indexador.indexar().subscribe((res:any)=>alert(res['respTxt']))
  }

  downloadFile(){
    const data = this.bodyDocClick;
    const blob = new Blob([data], { type: 'application/octet-stream' });
    this.urlDescarga = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
  }
}
