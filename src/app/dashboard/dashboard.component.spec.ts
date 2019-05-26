import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

describe('DashboardComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let heroService;
    let getHeroesSpy;

    beforeEach(async(() => {
        heroService = jasmine.createSpyObj('HeroService', ['getHeroes']);
        getHeroesSpy = heroService.getHeroes.and.returnValue(of(HEROES));
        TestBed.configureTestingModule({
            declarations: [
                DashboardComponent,
                HeroSearchComponent
            ],
            imports: [
                RouterTestingModule.withRoutes([])
            ],
            providers: [
                { provide: HeroService, useValue: heroService }
            ]
        })
            .compileComponents();

    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have h3', () => {
        const h3 = fixture.nativeElement.querySelector('h3');
        expect(h3.textContent).toEqual('Top Heroes');
    });

    it('should show 4 heroes', async(() => {
        let links = fixture.nativeElement.querySelectorAll('a');
        expect(links.length).toEqual(4);
    }));

});