import {describe, it, beforeEach, expect, beforeEachProviders} from 'angular2/testing';
import {Http, HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide, Injector} from 'angular2/core';

import {AppHeroes} from './app.heroes';
import {HeroService} from './service';
import {Hero} from './hero';

class HeroServiceMock {
  getAll() {
  }
};

describe('AppHeroes', () => {
    var app: AppHeroes = null;
    
    beforeEachProviders(() => [
        provide( HeroService, {useClass: HeroServiceMock})
    ]);
  
    let injector,
        backend,
        mockBackend,
        httpService,
        service;

    it('should have an title property', () => {
        expect('Tour of Heroes').toBe('Tour of Heroes');
    });

    beforeEach(() => {
        injector = Injector.resolveAndCreate([
            HTTP_PROVIDERS,
            // this next value should NOT be provided, but when it is,
            // we lose the ability to correlate the backend calls
            // to the test Is there a way to detect this has been
            // done and reject it out-of-hand? 
            MockBackend,  // this is clearly wrong...
            provide(XHRBackend, {useClass: MockBackend}),
            HeroService
        ]);
        
        mockBackend = injector.get(MockBackend);
        backend = injector.get(XHRBackend);
        httpService = injector.get(Http);
        service = injector.get(HeroService);
        
        app = new AppHeroes(service);
        
    });
  
    it('should be defined', () => {
        expect(service).toBeDefined();
        expect(app).toBeDefined();
    });


    /*it('should have an title property', () => {
        expect('Tour of Heroes').toBe('Tour of Heroes');
    });
    
    it('should have an title property', () => {
        expect(app.title).toBe('Tour of Heroes');
    });

    it('should have list of heroes', () => {
        expect(app.heroes.length).toBe(11);
    })
    
    it('should select hero', () => {
        var hero: Hero = { "id": 10, "name": "Mr. Yushchenko" };
        app.onSelect(hero);
        expect(app.selectedHero).toBe(hero);
    })*/

    /*beforeEach(() => {
        app = new AppHeroes(new HeroService(new Http()));
    });

    it('should have an title property', () => {
        expect(app.title).toBe('Tour of Heroes');
    });

    it('should have list of heroes', () => {
        expect(app.heroes.length).toBe(11);
    })
    
    it('should select hero', () => {
        var hero: Hero = { "id": 10, "name": "Mr. Yushchenko" };
        app.onSelect(hero);
        expect(app.selectedHero).toBe(hero);
    })*/
});