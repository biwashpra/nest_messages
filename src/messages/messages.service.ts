import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messages.repository';

@Injectable()
// The @Injectable() decorator marks the class as a provider that can be injected into other classes.
export class MessagesService {
  constructor(public messagesRepo: MessagesRepository) {
    // service is creating its own repository dependencies. This is bad.
    // DONOT DO THIS IN REAL APPS.
    // Instead we use Nest Dependency Injection to inject the repository into the service.
    // this.messagesRepo = new MessagesRepository();
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
