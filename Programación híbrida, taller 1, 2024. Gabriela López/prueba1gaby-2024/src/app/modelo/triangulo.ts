import { Figura } from "./figura";

export class Triangulo extends Figura{
    ladoA: number;
    ladoB: number;
    ladoC: number;

    constructor(ladoA: number, ladoB: number, ladoC: number){
        super();
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;

    }

    override calcularPerimetro(): number {
        return this.ladoA + this.ladoB + this.ladoC
    }
}