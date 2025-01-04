import { Injectable } from '@nestjs/common';
import { CreateTestRestapiResourceDto } from './dto/create-test-restapi-resource.dto';
import { UpdateTestRestapiResourceDto } from './dto/update-test-restapi-resource.dto';

@Injectable()
export class TestRestapiResourceService {
  create(createTestRestapiResourceDto: CreateTestRestapiResourceDto) {
    return 'This action adds a new testRestapiResource';
  }

  findAll() {
    return `This action returns all testRestapiResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testRestapiResource`;
  }

  update(id: number, updateTestRestapiResourceDto: UpdateTestRestapiResourceDto) {
    return `This action updates a #${id} testRestapiResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} testRestapiResource`;
  }
}
