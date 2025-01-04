import { PartialType } from '@nestjs/mapped-types';
import { CreateTestMicroserviceResourceDto } from './create-test-microservice-resource.dto';

export class UpdateTestMicroserviceResourceDto extends PartialType(CreateTestMicroserviceResourceDto) {
  id: number;
}
