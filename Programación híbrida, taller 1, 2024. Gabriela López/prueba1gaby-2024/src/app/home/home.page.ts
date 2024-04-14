import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonSelect, IonSelectOption, SelectChangeEventDetail } from '@ionic/angular/standalone';
import { CirculoComponent } from '../circulo/circulo.component';
import { IonSelectCustomEvent } from '@ionic/core';
import { TrianguloComponent } from '../triangulo/triangulo.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CirculoComponent, TrianguloComponent, IonSelect, IonSelectOption, TrianguloComponent, CommonModule ],
})
export class HomePage {
figurageometrica:string =""

constructor(){}
esCirculo(){ return this.figurageometrica == "circulo"}
esTriangulo(){ return this.figurageometrica == "triangulo"}

seleccionFiguraGeometrica($event: IonSelectCustomEvent<SelectChangeEventDetail<any>>) {
  this.figurageometrica = $event.detail.value
  }
}
