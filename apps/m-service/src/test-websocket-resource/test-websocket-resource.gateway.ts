import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { TestWebsocketResourceService } from './test-websocket-resource.service';
import { CreateTestWebsocketResourceDto } from './dto/create-test-websocket-resource.dto';
import { UpdateTestWebsocketResourceDto } from './dto/update-test-websocket-resource.dto';

@WebSocketGateway()
export class TestWebsocketResourceGateway {
  constructor(private readonly testWebsocketResourceService: TestWebsocketResourceService) {}

  @SubscribeMessage('createTestWebsocketResource')
  create(@MessageBody() createTestWebsocketResourceDto: CreateTestWebsocketResourceDto) {
    return this.testWebsocketResourceService.create(createTestWebsocketResourceDto);
  }

  @SubscribeMessage('findAllTestWebsocketResource')
  findAll() {
    return this.testWebsocketResourceService.findAll();
  }

  @SubscribeMessage('findOneTestWebsocketResource')
  findOne(@MessageBody() id: number) {
    return this.testWebsocketResourceService.findOne(id);
  }

  @SubscribeMessage('updateTestWebsocketResource')
  update(@MessageBody() updateTestWebsocketResourceDto: UpdateTestWebsocketResourceDto) {
    return this.testWebsocketResourceService.update(updateTestWebsocketResourceDto.id, updateTestWebsocketResourceDto);
  }

  @SubscribeMessage('removeTestWebsocketResource')
  remove(@MessageBody() id: number) {
    return this.testWebsocketResourceService.remove(id);
  }
}
