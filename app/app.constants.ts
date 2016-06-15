import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public static get ApiUrl(): string { return 'http://jsonplaceholder.typicode.com'; }
}

export interface Serializable<T> {
    fromJson(json: Object): T;
}   