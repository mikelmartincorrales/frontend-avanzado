import { TestBed, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
    // beforeEach(() => {
    //     TestBed.configureTestingModule({
    //         providers: [MessageService]
    //     });
    // });

    // it('should be created', inject([MessageService], (service: MessageService) => {
    //     expect(service).toBeTruthy();
    // }));
    it('test base', () => {
        expect(true).toBe(true);
    })
});