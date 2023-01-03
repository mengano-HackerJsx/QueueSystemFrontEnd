import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { QueuesService } from 'app/core/services/queues.service';
import { SweetAlertService } from 'app/core/services/sweetalert.service';
import { AssignComponent } from 'app/shared/components/assign-person/assign.component';
import { CreateQueueComponent } from 'app/shared/components/create-queue/create-queue.component';
import { FirstPersonComponent } from 'app/shared/components/first-person/first-person.component';
import { ShowPersonsComponent } from 'app/shared/components/show-persons/show-persons.component';
import { Queues } from 'app/shared/models/queues';
import * as Chartist from 'chartist';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  queues!: Queues[];
  displayedColumns: string[] = ['ID', 'NOMBRE', 'DESCRIPTION', 'ACCIONES'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private _queuesService: QueuesService,
    private _sweetAlertService: SweetAlertService,
    private _dialog: MatDialog) {}

  ngAfterViewInit() {
   //this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit() {
    this.loadAllQueues();
  }

  loadAllQueues() {
    this._queuesService.getAll('queueLines').subscribe(data => {
      this.queues = data;
      this.dataSource = new MatTableDataSource<Queues>(this.queues);
      this.ngAfterViewInit();
    })
  }

  delete(queue: Queues) {
    this._queuesService.delete('queueLines', queue.id).subscribe(data => {
      this._sweetAlertService.success();
    }, err => {
      this._sweetAlertService.error();
    })
  }

  openPersonsModal(queue: Queues) {
    this._dialog.open(ShowPersonsComponent, {
      width: '500px',
      height: '500px',
      data: queue
    })
  }

  openCreateQueue() {
    this._dialog.open(CreateQueueComponent, {
      width: '500px',
      height: '500px'
    })
  }

  openCreateAssign() {
    this._dialog.open(AssignComponent, {
      width: '500px',
      height: '500px'
    })
  }

  showFirstPerson(queue: Queues) {
    this._dialog.open(FirstPersonComponent, {
      width: '500px',
      height: '500px',
      data: queue
    })
  }

}
