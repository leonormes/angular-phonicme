import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
    user: any
    phonicSchemeId: any;

    setPhonicScheme(schemeId) {
        this.phonicSchemeId =schemeId;
    }

    getPhonicSchemeId(): any {
        return this.phonicSchemeId;
    }
}