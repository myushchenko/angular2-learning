import {Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    http: Http;

    constructor(http: Http) {
        this.http = http;
    }

    getAll(): Observable<Hero[]> {
        return this.http.get('heroes.json')
            .map((res: Response) => res.json());
    }
}
