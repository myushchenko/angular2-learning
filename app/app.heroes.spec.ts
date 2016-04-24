import {describe, it, beforeEach, expect} from 'angular2/testing';
import {AppHeroes} from './app.heroes';
import {HeroService} from './service';
import {Hero} from './hero';

describe('AppHeroes', () => {
    var app: AppHeroes = null;

    beforeEach(() => {
        app = new AppHeroes(new HeroService());
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
    })
});