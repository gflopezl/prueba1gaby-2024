import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonInput, IonImg} from '@ionic/angular/standalone';
import { IonButton } from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { Triangulo } from '../modelo/triangulo';

@Component({
  selector: 'app-triangulo',
  templateUrl: './triangulo.component.html',
  styleUrls: ['./triangulo.component.scss'],
  standalone: true,
  imports: [FormsModule, IonButton, IonInput, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonItem, IonThumbnail, IonLabel, IonImg]
})
export class TrianguloComponent  implements OnInit {
  ladoA!: number;
  ladoB!: number;
  ladoC!:number ;
  resultado: string ="";

  constructor() { }

  ngOnInit() {}

  calcularPerimetro(){
    const triangulo = new Triangulo(this.ladoA, this.ladoB, this.ladoC);
    const perimetro = triangulo.calcularPerimetro();
    this.resultado = `El perímetro es ${perimetro}`;
  }

}
