export interface Prestamo {
    data?: [
        {
            id: number,
            dpi: string,
            nombre: string,
            monto: number;
            cuotas: number;
            fecha: Date;
        }
    ]
}