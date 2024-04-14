import { Figura } from './figura';

export class Circulo extends Figura {
  radio: number;
  constructor(radio: number) {
    super();
    this.radio = radio;
  }
  calcularPerimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}