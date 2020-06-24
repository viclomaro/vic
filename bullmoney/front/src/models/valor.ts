export class Valor {
    buyDate: Date;
    accion: string;
    titulos: number;
    precioAccion: number;
    compraTotal: number;
    comision: number;
    compraNeta: number;
    evento: string

    constructor(buyDate, accion, titulos, precioAccion, compraTotal, comision, compraNeta, evento) {
        this.buyDate = buyDate,
            this.accion = accion,
            this.titulos = titulos,
            this.precioAccion = precioAccion,
            this.compraTotal = compraTotal,
            this.comision = comision,
            this.compraNeta = compraNeta,
            this.evento = evento
    }
}