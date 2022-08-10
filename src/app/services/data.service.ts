import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    // private url = 'https://fantasy.premierleague.com/api/bootstrap-static/';
    // private url = 'https://fantasy.premierleague.com/api/entry/1/';
    private url = 'http://localhost:5000/getData';

    constructor(private http: HttpClient) {}

    async getData() {
        // await fetch(this.url).then((res) => {
        // console.log(res.json());
        //     });
        return this.http.get<Data>(this.url);
    }
}
