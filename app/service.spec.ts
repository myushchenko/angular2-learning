import {describe, it, beforeEach, expect, beforeEachProviders, inject} from '@angular/core/testing';
import {Http, Response, ResponseOptions, BaseRequestOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {provide} from '@angular/core';
import {HeroService} from './service';

describe('Service: HeroService', () => {
    var heroes = [{
        'id': 1,
        'name': 'Magneta'
    }];
    
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
        const baseResponse = new Response(new ResponseOptions({body: heroes}));
        _mockbackend.connections.subscribe((c: MockConnection) => c.mockRespond(baseResponse));
    }));
    
    it('1 - should return list of heroes', inject([HeroService], (testService: HeroService) => {
        
        testService.getAll().subscribe((res: Response) => {
            expect(res).toEqual(heroes);
        });
        
      })
    );
});
