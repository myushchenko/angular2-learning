import {Injectable } from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
import {Hero} from './hero';

@Injectable()
export class HeroService {
    
    constructor(private http: Http) {}

    getAll(){ //: Observable<Hero[]> {
        return this.http.get('heroes.json')
            .map((res: Response) => res.json());
    }
}
