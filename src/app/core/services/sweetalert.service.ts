import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Queues } from "app/shared/models/queues";
import { BaseService } from "../base.service";
import Swal from "sweetalert2";

@Injectable({
    providedIn: 'root'
  })
export class SweetAlertService  {

    constructor() { }

    success() {
        Swal.fire('Accion realizada', 'Se ejecuto la accion satisfactoriamente', 'success')
    }

    error() {
        Swal.fire('Accion realizada', 'Ocurrio un error en la accion', 'error')
    }

    customMessage(error) {
        Swal.fire('Notificacion',`${ error }`, 'info');
    }

}