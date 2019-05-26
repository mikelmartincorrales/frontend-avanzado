import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, inject } from '@angular/core/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Hero } from './hero';
import { HeroService } from './hero.service';

describe('HeroesService', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    let heroService: HeroService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [HeroService]
        });

        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);

        heroService = TestBed.get(HeroService);
    });

    afterEach(() => {
        httpTestingController.verify();
    });

    it('should create the service', inject([HeroService], (service: HeroService) => {
        expect(service).toBeTruthy();
    }));

    describe('#getHeroes', () => {
        let mockHeroes: Hero[];

        beforeEach(() => {
            heroService = TestBed.get(HeroService);
            mockHeroes = [
                { id: 1, name: 'A' },
                { id: 2, name: 'B' },
            ] as Hero[];
        });

        it('should return expected heroes (called once)', () => {
            heroService.getHeroes().subscribe(
                heroes => expect(heroes).toEqual(mockHeroes, 'should return expected heroes'),
                fail
            );

            const req = httpTestingController.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('GET');

            req.flush(mockHeroes);
        });

        it('should be OK returning no heroes', () => {
            heroService.getHeroes().subscribe(
                heroes => expect(heroes.length).toEqual(0, 'should have empty heroes array'),
                fail
            );

            const req = httpTestingController.expectOne(heroService.heroesUrl);
            req.flush([]); // Respond with no heroes
        });

        it('should return expected heroes (called multiple times)', () => {
            heroService.getHeroes().subscribe();
            heroService.getHeroes().subscribe();
            heroService.getHeroes().subscribe(
                heroes => expect(heroes).toEqual(mockHeroes, 'should return expected heroes'),
                fail
            );

            const requests = httpTestingController.match(heroService.heroesUrl);
            expect(requests.length).toEqual(3, 'calls to getHeroes()');

            requests[0].flush([]);
            requests[1].flush([{ id: 1, name: 'bob' }]);
            requests[2].flush(mockHeroes);
        });
    });

    describe('#updateHero', () => {
        it('should update a hero and return it', () => {

            const updateHero: Hero = { id: 1, name: 'F' };

            heroService.updateHero(updateHero).subscribe(
                data => expect(data).toEqual(updateHero, 'should return the hero'),
                fail
            );

            const req = httpTestingController.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('PUT');
            expect(req.request.body).toEqual(updateHero);

            const expectedResponse = new HttpResponse(
                { status: 200, statusText: 'OK', body: updateHero });
            req.event(expectedResponse);
        });
    });
    describe('#addHero', () => {

        it('should add a hero and return it', () => {

            const addHero: Hero = { id: 4, name: 'D' };

            heroService.addHero(addHero).subscribe(
                data => expect(data).toEqual(addHero, 'should return the hero'),
                fail
            );

            const req = httpTestingController.expectOne(heroService.heroesUrl);
            expect(req.request.method).toEqual('POST');
            expect(req.request.body).toEqual(addHero);

            const expectedResponse = new HttpResponse(
                { status: 200, statusText: 'OK', body: addHero });
            req.event(expectedResponse);
        });
    });

    describe('#getHero', () => {
        let mockHero: Hero = { id: 1, name: 'A' }
        let mockId: number = 1

        it('should return expected heroe', () => {
            heroService.getHero(mockId).subscribe(
                hero => expect(hero).toEqual(mockHero),
                fail
            );

            const req = httpTestingController.expectOne(`${heroService.heroesUrl}/${mockId}`);
            expect(req.request.method).toEqual('GET');

            req.flush(mockHero);
        });
    })

    // describe('#getHeroNo404', () => {
    //     let mockHero: Hero = { id: 1, name: 'A' }
    //     let mockId: number = 2

    //     it('should return expected heroe', () => {
    //         heroService.getHero(mockId).subscribe(
    //             hero => expect(hero).toEqual(mockHero),
    //             fail
    //         );

    //         const req = httpTestingController.expectOne('api/heroes/2');
    //         expect(req.request.method).toEqual('GET');

    //         req.flush(mockHero);
    //     });
    // })

    describe('#deleteHero', () => {

        it('should delete a hero', () => {

            let mockHero: Hero = { id: 1, name: 'A' };

            heroService.deleteHero(mockHero.id).subscribe(
                data => expect(data).toEqual(mockHero),
                fail
            );
            const req = httpTestingController.expectOne(`${heroService.heroesUrl}/${mockHero.id}`);
            expect(req.request.method).toEqual('DELETE');
            req.flush(mockHero);
        });
    });

});