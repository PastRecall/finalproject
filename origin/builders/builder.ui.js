import { faker } from '@faker-js/faker';

class CommentBuilder  {
    addEmail() {
        this.userEmail = faker.internet.email();
        return this;
    }
    addName() {
        this.userName = faker.person.firstName('female');
        return this;
    }
    addComment() {
        this.userComment = faker.lorem.text();
        return this;
    }
    addWebsite() {
        this.userWebsite = faker.internet.url();
        return this;
} 
    generate() {
        const copied = structuredClone({
            userEmail: this.userEmail,
            userName: this.userName,
            userComment: this.userComment,
            userWebsite: this.userWebsite,
        }
    ) 
        return copied;
    }
};

export { CommentBuilder };