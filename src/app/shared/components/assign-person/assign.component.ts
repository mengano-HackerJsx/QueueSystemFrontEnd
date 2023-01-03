import { Component, OnInit, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { AssignService } from "app/core/services/assign.service";
import { PersonService } from "app/core/services/persons.service";
import { QueuesService } from "app/core/services/queues.service";
import { SweetAlertService } from "app/core/services/sweetalert.service";
import { AssignLines } from "app/shared/models/assign";
import { Person } from "app/shared/models/person";
import { Queues } from "app/shared/models/queues";

@Component({
  templateUrl: "./assign.component.html"
})
export class AssignComponent implements OnInit {
  assignForm!: FormGroup;

  queues: Queues[];
  persons: Person[];

  constructor(
    private _fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _assignService: AssignService,
    private _queueService: QueuesService,
    private _personService: PersonService,
    private _dialog: MatDialog,
    private _sweetAlertService: SweetAlertService
  ) {}

  ngOnInit() {
    this.buildForm();
    this.loadPersons();
    this.loadQueues();
  }

  buildForm() {
    this.assignForm = this._fb.group({
      queue: ['', Validators.required],
      person: ['', Validators.required],
      condition: ['', Validators.required]
    });
  }

  loadQueues() {
    this._queueService.getAll('queueLines').subscribe(data => {
        this.queues = data;
    })
  }

  loadPersons() {
    this._personService.getAll('persons').subscribe(data => {
        this.persons = data;
    })
  }

  createQueue() {
    const { queue, person, condition } = this.assignForm.value;

    const request: AssignLines = {
        queueLineId: Number(queue),
        personId: Number(person),
        conditionsIds: [Number(condition)]
    }

    this._assignService.insert('QueuePerson', request).subscribe(data => {
        this._sweetAlertService.success();
        this._dialog.closeAll();
    }, err => {
        this._sweetAlertService.error();
    })
  }
}
