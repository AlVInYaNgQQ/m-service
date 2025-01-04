import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { TestMicroserviceResourceService } from './test-microservice-resource.service';
import { CreateTestMicroserviceResourceDto } from './dto/create-test-microservice-resource.dto';
import { UpdateTestMicroserviceResourceDto } from './dto/update-test-microservice-resource.dto';

@Controller()
export class TestMicroserviceResourceController {
  constructor(
    private readonly testMicroserviceResourceService: TestMicroserviceResourceService,
  ) {}

  @MessagePattern('createTestMicroserviceResource')
  create(
    @Payload()
    createTestMicroserviceResourceDto: CreateTestMicroserviceResourceDto,
  ) {
    return this.testMicroserviceResourceService.create(
      createTestMicroserviceResourceDto,
    );
  }

  @MessagePattern('findAllTestMicroserviceResource')
  findAll() {
    return this.testMicroserviceResourceService.findAll();
  }

  @MessagePattern('findOneTestMicroserviceResource')
  findOne(@Payload() id: number) {
    return this.testMicroserviceResourceService.findOne(id);
  }

  @MessagePattern('updateTestMicroserviceResource')
  update(
    @Payload()
    updateTestMicroserviceResourceDto: UpdateTestMicroserviceResourceDto,
  ) {
    return this.testMicroserviceResourceService.update(
      updateTestMicroserviceResourceDto.id,
      updateTestMicroserviceResourceDto,
    );
  }

  @MessagePattern('removeTestMicroserviceResource')
  remove(@Payload() id: number) {
    return this.testMicroserviceResourceService.remove(id);
  }
}
