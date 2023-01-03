import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { QueuesService } from "app/core/services/queues.service";
import { SweetAlertService } from "app/core/services/sweetalert.service";
import { Queues } from "app/shared/models/queues";

@Component({
  templateUrl: "./first-person.component.html"
})
export class FirstPersonComponent implements OnInit {

    dataQueue: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _queueService: QueuesService,
    private _dialog: MatDialog,
    private _sweetAlertService: SweetAlertService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._queueService.customFindbyId('QueueLines', this.data.id, 'GetFirstPersonsInQueue').subscribe(data => {
        this.dataQueue = data
    })
  }

  nextPerson(id: number) {
    this._queueService.customFindbyId('QueueLines', this.data.id, 'GetNextPersonsInQueue').subscribe(data => {
      this._sweetAlertService.success();
      this._dialog.closeAll();
    })
  }

}
