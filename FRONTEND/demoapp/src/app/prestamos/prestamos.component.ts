import { Component, Input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { Prestamo } from '../../service/IPrestamo';
import { PrestamoService } from '../../service/prestamo.service';
import { MatTableModule } from '@angular/material/table';
import { formatDate, CommonModule } from '@angular/common';
import { parseISO, addMonths, format } from 'date-fns';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-prestamos',
  standalone: true,
  imports: [AsyncPipe, MatTableModule, CommonModule, FormsModule],
  templateUrl: './prestamos.component.html',
  styleUrl: './prestamos.component.css'
})
export class PrestamosComponent implements OnInit {

  public prestamoData!: Observable<Prestamo>;
  
  displayedColumns: string[] = ['id', 'dpi', 'nombre', 'monto', 'cuotas', 'fecha'];

  cuota: number = 0;
  fechas: any [] = [];

  nombre: string = "";
  dpi: string = "";
  monto: number = 0;
  cuotas: number = 0;

  constructor(private prestamoSvc: PrestamoService){ }


  ngOnInit(): void {
    this.prestamoData = this.prestamoSvc.getData();

    this.prestamoData.subscribe(
      value => console.log("mi val", value)
    )
  }


  getPlan(prestamo: any)  {
    this.cuota = Math.round((prestamo.monto / prestamo.cuotas) + (prestamo.monto * 1.519))

    const fechaDate = parseISO(prestamo.fecha);

    for (let i = 1; i <= prestamo.cuotas; i++) {
      this.fechas.push(format(addMonths(fechaDate, i), 'dd/MM/yyyy'));
    }
  }

  closePlan() {
    this.cuota = 0;
    this.fechas = [];
  }

  insertarPrestamo() {
    if (this.nombre.length > 0 && this.dpi.length > 0 && this.monto > 0 && this.cuotas > 0) {

      this.prestamoSvc.postData(this.nombre, this.dpi, this.monto, this.cuotas).subscribe(
        value => {
          console.log("post", value);
          this.ngOnInit();
          this.nombre = "";
          this.dpi = "";
          this.monto = 0;
          this.cuotas = 0;
        }

      );
    } else {
      console.log("no se puede insertar");
    }
  }




}
