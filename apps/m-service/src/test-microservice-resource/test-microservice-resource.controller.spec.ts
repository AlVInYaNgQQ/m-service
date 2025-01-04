import { Test, TestingModule } from "@nestjs/testing";
import { TestMicroserviceResourceController } from "./test-microservice-resource.controller";
import { TestMicroserviceResourceService } from "./test-microservice-resource.service";

describe("TestMicroserviceResourceController", () => {
  let controller: TestMicroserviceResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestMicroserviceResourceController],
      providers: [TestMicroserviceResourceService],
    }).compile();

    controller = module.get<TestMicroserviceResourceController>(
      TestMicroserviceResourceController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
