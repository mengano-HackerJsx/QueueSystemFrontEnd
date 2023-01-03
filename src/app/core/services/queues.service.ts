import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Queues } from "app/shared/models/queues";
import { BaseService } from "../base.service";

@Injectable({
    providedIn: 'root'
  })
export class QueuesService extends BaseService<Queues,Queues> {

    constructor(
        _http: HttpClient
    ) {
        super(_http)
    }

}