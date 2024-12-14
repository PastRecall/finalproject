import { faker } from '@faker-js/faker';

class PostBuilder  {
    constructor() {
        this.title = faker.lorem.sentence(); 
        this.body = faker.lorem.paragraph(); 
        this.userId = faker.number.int(); 
        this.id = faker.number.int();
    }
      
    build() {
        return {
        title: this.title,
        body: this.body,
        userId: this.userId,
        }
    }
}

export { PostBuilder };