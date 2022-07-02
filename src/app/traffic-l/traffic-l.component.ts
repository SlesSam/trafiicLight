import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';



export interface Colores {
  color:string
}

@Component({
  selector: 'app-traffic-l',
  templateUrl: './traffic-l.component.html',
  styleUrls: ['./traffic-l.component.css']
})
export class TrafficLComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getColor;
  }


  seeColor: string ='red'

  $eclas = document.getElementsByTagName('div');


  contador:number =0;

   mostrar = ()=>{
    this.$eclas[this.contador].className = 'l';

    this.contador++;

    if(this.contador>2) this.contador =0;

   const mane = 'color';

    const luActu = this.$eclas[this.contador]
    luActu.classList.add(luActu.getAttribute(mane)!);
  }


  stoppede= setInterval(this.mostrar,2000)
  getColor(){

    this.stoppede

    console.log(this.stoppede)
    
    // this.changeColor=this.seeColor

    // console.log(this.changeColor);
    
  }

  stopTrafiic(){
    clearInterval(this.stoppede)
    console.log(clearInterval(this.stoppede))
  }

  

}
