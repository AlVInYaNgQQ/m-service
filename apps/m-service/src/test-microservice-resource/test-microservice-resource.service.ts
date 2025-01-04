import { Injectable } from '@nestjs/common';
import { CreateTestMicroserviceResourceDto } from './dto/create-test-microservice-resource.dto';
import { UpdateTestMicroserviceResourceDto } from './dto/update-test-microservice-resource.dto';

@Injectable()
export class TestMicroserviceResourceService {
  create(createTestMicroserviceResourceDto: CreateTestMicroserviceResourceDto) {
    return 'This action adds a new testMicroserviceResource';
  }

  findAll() {
    return `This action returns all testMicroserviceResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testMicroserviceResource`;
  }

  update(
    id: number,
    updateTestMicroserviceResourceDto: UpdateTestMicroserviceResourceDto,
  ) {
    return `This action updates a #${id} testMicroserviceResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} testMicroserviceResource`;
  }
}
