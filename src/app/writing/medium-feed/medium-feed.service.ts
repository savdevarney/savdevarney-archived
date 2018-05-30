import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class MediumService {

    constructor() {

    }

    public getMediumFeed() {
        const mediumResults = [
            { title: 'title1', article: 'article1' },
            { title: 'title2', article: 'article2' },
            { title: 'title3', article: 'article3' },
          ];
        return mediumResults;
    }
}
