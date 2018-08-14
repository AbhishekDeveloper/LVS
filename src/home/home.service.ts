import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Injectable()
export class HomeService {
    constructor (
        private http: HttpClient
    ) { }

    getData() {
        debugger
        const url = 'http://localhost:3000/data';
    
        return this.http
            .get(url).pipe(map(r=>JSON.stringify(r)));
            
    }
}