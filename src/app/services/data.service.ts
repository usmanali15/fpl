import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../data/data';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private url = 'http://localhost:5000/';

    constructor(private http: HttpClient) {}

    getPlayersData(): Observable<Data[]> {
        return this.http.get<Data[]>(this.url+'getplayersdata');
    }
}
