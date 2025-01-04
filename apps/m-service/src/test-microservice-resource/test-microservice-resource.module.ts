import { Module } from '@nestjs/common';
import { TestMicroserviceResourceService } from './test-microservice-resource.service';
import { TestMicroserviceResourceController } from './test-microservice-resource.controller';

@Module({
  controllers: [TestMicroserviceResourceController],
  providers: [TestMicroserviceResourceService],
})
export class TestMicroserviceResourceModule {}
