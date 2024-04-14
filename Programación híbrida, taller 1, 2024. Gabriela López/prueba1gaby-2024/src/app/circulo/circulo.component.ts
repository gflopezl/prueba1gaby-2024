import { Component, OnInit } from '@angular/core';
import { IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader,IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Circulo } from '../modelo/circulo';

@Component({
  selector: 'app-circulo',
  standalone: true,
  templateUrl: './circulo.component.html',
  styleUrls: ['./circulo.component.scss'],
  imports: [FormsModule, IonList, IonItem, IonInput, IonButton, IonCard, IonCardHeader,IonCardTitle, IonCardSubtitle, IonCardContent, IonImg]
})
export class CirculoComponent implements OnInit {
  perimetrostr: string= "";
  resultado: string= "";

  constructor() { }
  ngOnInit() {}
  calcularPerimetro() {
    const perimetro = parseFloat(this.perimetrostr)
    const circulo = new Circulo(perimetro)
    const calcularPerimetro = circulo.calcularPerimetro()
    this.resultado = `El perímetro es ${calcularPerimetro} cm`
    }
}
