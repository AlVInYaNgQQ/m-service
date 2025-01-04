import { Injectable } from '@nestjs/common';
import { CreateTestWebsocketResourceDto } from './dto/create-test-websocket-resource.dto';
import { UpdateTestWebsocketResourceDto } from './dto/update-test-websocket-resource.dto';

@Injectable()
export class TestWebsocketResourceService {
  create(createTestWebsocketResourceDto: CreateTestWebsocketResourceDto) {
    return 'This action adds a new testWebsocketResource';
  }

  findAll() {
    return `This action returns all testWebsocketResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testWebsocketResource`;
  }

  update(id: number, updateTestWebsocketResourceDto: UpdateTestWebsocketResourceDto) {
    return `This action updates a #${id} testWebsocketResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} testWebsocketResource`;
  }
}
