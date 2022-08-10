import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Data } from '../data/data';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    // private url = 'https://fantasy.premierleague.com/api/bootstrap-static/';
    // private url = 'https://fantasy.premierleague.com/api/entry/1/';
    private url = 'http://localhost:5000/getData';

    constructor(private http: HttpClient) {}

    getData(): Observable<Data[]> {
        // await fetch(this.url).then((res) => {
        // console.log(res.json());
        //     });
        return this.http.get<Data[]>(this.url);
    }
}
