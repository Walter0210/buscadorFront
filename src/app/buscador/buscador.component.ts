import { Component, OnInit, } from '@angular/core';
import { BuscadorService } from '../services/buscador.service';
import { iDocumento } from '../Modelos/iDocumento';
import {DocumentosService} from '../services/documentos.service'



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  expresionFiltro = '';
  total = 0;
  resultado: boolean = false;
  muchosDocumentos: any = [];
  todosDocumentos: any = [];
  
  constructor(private buscador: BuscadorService,
              private files: DocumentosService ) { };
  ngOnInit(): void {

  }

  getSearch(): void {
    this.resultado = true;
    this.buscador.get(this.expresionFiltro).subscribe((res) => { this.muchosDocumentos = res; console.log(res) })
    

  }
  getAllFiles(){
    this.files.getAll().subscribe((res)=>{this.todosDocumentos = res; console.log(res), this.total = this.todosDocumentos.length})
    
  }
}
