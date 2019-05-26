import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeroesComponent } from './heroes.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('HeroesComponent', () => {
    let component: HeroesComponent;
    let fixture: ComponentFixture<HeroesComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HeroesComponent],
            imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HeroesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });

    it('should have h2 title', () => {
        const bannerElement: HTMLElement = fixture.nativeElement;
        const h2 = bannerElement.querySelector('h2');
        expect(h2.textContent).toEqual('My Heroes');
    })

    it('button should invoke add()', async(() => {
        spyOn(component, 'add');

        let button = fixture.debugElement.nativeElement.querySelector('div > button');
        button.click();

        fixture.whenStable().then(() => {
            expect(component.add).toHaveBeenCalled();
        })
    }))
});

