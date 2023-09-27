import { TestBed } from '@angular/core/testing';
import { AuthentificationService } from './authentification.service';
describe('AuthentificationService', () => {
    let service;
    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(AuthentificationService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=authentification.service.spec.js.map