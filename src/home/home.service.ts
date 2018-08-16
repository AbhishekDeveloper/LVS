import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, filter, catchError, mergeMap } from 'rxjs/operators';
@Injectable()
export class HomeService {
    constructor (
        private http: HttpClient
    ) { }

    getData() {
        const url = 'http://localhost:3000/data';
        return this.http
            .get(url).pipe(map(r=>JSON.parse(JSON.stringify(r))));
            
    }
    getDataByUserName(userName:string) {
        const url = 'http://localhost:3000/data?user_name='+userName;
        return this.http
            .get(url).pipe(map(r=>JSON.parse(JSON.stringify(r))));
            
    }
    postData(data:any) {
        const url = 'http://localhost:3000/data';
        return this.http
            .post(url,data).pipe(map(r=>JSON.parse(JSON.stringify(r))));        
    }
}