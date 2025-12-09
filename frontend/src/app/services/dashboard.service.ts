import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { DashboardData } from '../models/financial.models';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    constructor(private api: ApiService) { }

    getDashboardData(): Observable<DashboardData> {
        return this.api.get<DashboardData>('dashboard');
    }
}
