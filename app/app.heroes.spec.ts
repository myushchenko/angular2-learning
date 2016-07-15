import {describe, it, beforeEach, expect, beforeEachProviders, inject, async} from '@angular/core/testing';
import {TestComponentBuilder} from '@angular/core/testing';
import {Http, HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions, BaseRequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {provide, ReflectiveInjector} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {AppHeroes} from './app.heroes';
import {HeroService} from './service';
import {Hero} from './hero';

class HeroServiceMock {
    getAll() {
        return [{}];
    }
};

describe('AppHeroes', () => {
    var app: AppHeroes = null;
    let injector,
        backend,
        //mockBackend,
        //httpService,
        heroService;

   /* beforeEach(() => {
        
        injector = ReflectiveInjector.resolveAndCreate([
            HTTP_PROVIDERS,
            MockBackend,
            provide(XHRBackend, { useClass: MockBackend }),
            HeroService
        ]);

        //mockBackend = injector.get(MockBackend);
        backend = injector.get(XHRBackend);
        //httpService = injector.get(Http);
        //service = injector.get(HeroService);
        
        heroService = new HeroService(backend);
        
        //spyOn(service, 'getAll').and.callFake(function () {
             //   return ['Test'];
         //});
         
        app = new AppHeroes(heroService);

    });*/
    
    let mockbackend, service;
  
    beforeEachProviders(() => [
        HeroService,
        MockBackend,
        BaseRequestOptions,
        
        provide(Http, {
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
                return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
        })
    ]);
    
    beforeEach(inject([MockBackend], (_mockbackend) => {
        mockbackend = _mockbackend;
        
        const baseResponse = new Response(new ResponseOptions({body: ['Test1']}));
        
        _mockbackend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
        
        
        
       // heroService = new HeroService(_mockbackend);
        
       /* heroService.getAll().subscribe((res: Response) => {
            //expect(res).toBe(1);
            console.log(res);
        });*/
        
       /* heroService.getAll().subscribe((res: Response) => {
            //expect(res).toBe(1);
            console.log(res);
        });
        */
       // app = new AppHeroes(heroService);
    }));
    
    it('should return response when subscribed to getAll', inject([HeroService], (testService: HeroService) => {
        
        /*testService.getAll().subscribe((res: Response) => {
            //expect(res).toBe(1);
            console.log(res);
        });*/
        
        app = new AppHeroes(testService);
        
         console.log(app.title)
         console.log(app.heroes)
        
      })
    );

    /*it('should be defined', () => {
        //expect(service).toBeDefined();
        expect(app).toBeDefined();
    });
    
    it('should have an title property', () => {
        console.log(app.title)
        console.log(app.heroes)
        expect(app.title).toBe('Tour of Heroes');
    });*/

    /*it('should have list of heroes', () => {
        expect(app.heroes.length).toBe(11);
    })
    
    it('should select hero', () => {
        var hero: Hero = { "id": 10, "name": "Mr. Yushchenko" };
        app.onSelect(hero);
        expect(app.selectedHero).toBe(hero);
    })*/

});
