import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Egreso } from './egreso/egreso.model';
import { EgresoServicio } from './egreso/egreso.servicio';
import { IngresoServicio } from './ingreso/ingreso.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
   
  ingresos:Ingreso[]=[];
  egresos:Egreso[]=[];

  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){
    this.ingresos = ingresoServicio.ingresos;
    this.egresos = egresoServicio.egresos;

  }

  getIngresoTotal(){
    let ingresoTotal:number=0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor;
    })
    return ingresoTotal;
  }

  getEgresoTotal(){
    let egresoTotal:number=0;
    this.egresos.forEach(egreso =>{
      egresoTotal += egreso.valor;
    })
    return egresoTotal;
  }

  getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
  }
}
