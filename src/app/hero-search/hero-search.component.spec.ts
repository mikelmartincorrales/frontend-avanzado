import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroSearchComponent } from './hero-search.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroSearchComponent', () => {
    let component: HeroSearchComponent;
    let fixture: ComponentFixture<HeroSearchComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroSearchComponent],
            imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroSearchComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have h4 title', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        const h4 = bannerElement.querySelector('h4');
        expect(h4.textContent).toEqual('Hero Search');
    })

    it('input should invoke search()', async(() => {
        spyOn(component, 'search');

        let input = fixture.debugElement.nativeElement.querySelector('#search-box');
        input.value = 'Magneta';
        input.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(component.search).toHaveBeenCalled();
        })
    }))
});

