import { Component, OnInit, } from '@angular/core';
import { BuscadorService } from '../services/buscador.service';
import { iDocumento } from '../Modelos/iDocumento'

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  expresionFiltro = ''
  resultado: boolean = false;
  muchosDocumentos: any = [];
  constructor(private buscador: BuscadorService) { }

  ngOnInit(): void {

  }

  getSearch(): void {
    this.resultado = true;
    this.buscador.get(this.expresionFiltro).subscribe((res) => { this.muchosDocumentos = res; console.log(res) })
    

  }
}
