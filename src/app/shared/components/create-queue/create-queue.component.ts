import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { QueuesService } from "app/core/services/queues.service";
import { SweetAlertService } from "app/core/services/sweetalert.service";
import { Queues } from "app/shared/models/queues";

@Component({
  templateUrl: "./create-queue.component.html"
})
export class CreateQueueComponent implements OnInit {
  queueForm!: FormGroup;

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _queueService: QueuesService,
    private _dialog: MatDialog,
    private _sweetAlertService: SweetAlertService
  ) {}

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.queueForm = this._fb.group({
      queueName: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  createQueue() {
    const { queueName, description } = this.queueForm.value;

    const request: Queues = {
        queueName,
        description,
        persons: [
                  {
                    "id": 0,
                    "dni": "string",
                    "name": "string",
                    "lastname": "string",
                    "age": 0,
                    "sex": "string",
                    "height": 0,
                    "weight": 0
                  }
                ]
    }

    this._queueService.insert('queueLines', request).subscribe(data => {
        this._sweetAlertService.success();
        this._dialog.closeAll();
    }, err => {
        this._sweetAlertService.error();
    })
  }
}
