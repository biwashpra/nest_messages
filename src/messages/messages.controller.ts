import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage(@Body() body: { content: string }) {
    return body;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    return { id };
  }
}
