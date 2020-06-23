export class Valor{
    buyDate: Date;
    accion: string;
    titulos: number;
    precioAccion: number;
    compraTotal: number;
    comision: number;
    compraNeta: number

    constructor(buyDate, accion, titulos, precioAccion, compraTotal, comision, compraNeta){
        this.buyDate = buyDate,
        this.accion = accion,
        this.titulos = titulos,
        this.precioAccion = precioAccion,
        this.compraTotal = compraTotal,
        this.comision = comision,
        this.compraNeta = compraNeta
    }
}