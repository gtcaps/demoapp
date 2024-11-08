import { Injectable, inject } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Prestamo } from './IPrestamo';


@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(private http: HttpClient){}

  getData(): Observable<Prestamo> {
    const url = 'http://localhost:8093/allPrestamos';
    return this.http.get<Prestamo>(url);
  }

  postData(nombre: string, dpi: string, monto: number, cuotas: number) {
    const url = 'http://localhost:8093/prestamos';
    console.log("validando nombre", nombre);
    return this.http.post(url, {
      nombre: nombre,
      dpi: dpi,
      monto: monto,
      cuotas: cuotas
    }).pipe(
      
    )
  }
}
