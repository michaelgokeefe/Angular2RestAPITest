import { Serializable } from './app.constants';

export class ModelsTest {

    constructor(private userId: number, private id: number, private title: string, private body: string) {
        this.userId = userId;
        this.id = id;
        this.title = title;
        this.body = body;
    }
    static fromJson(json: any): ModelsTest {
        return new ModelsTest(json.userId, json.id, json.title, json.body);
    }
} 