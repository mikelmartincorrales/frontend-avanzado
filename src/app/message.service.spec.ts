import { TestBed, inject } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [MessageService]
        });
    });

    it('Crea el servicio', inject([MessageService], (service: MessageService) => {
        expect(service).toBeTruthy();
    }));

    it('Añade mensajes', inject([MessageService], (service: MessageService) => {
        service.messages = [];
        let message = "test";
        service.add(message);
        expect(service.messages.length).toBe(1);
        expect(service.messages.slice(-1)[0]).toBe(message);
    }));

    it('Vacía mensajes', inject([MessageService], (service: MessageService) => {
        service.messages = [];
        service.clear();
        expect(service.messages.length).toBe(0);
        service.messages = ["test1", "test2", "test3"];
        service.clear();
        expect(service.messages.length).toBe(0);
    }));
});
