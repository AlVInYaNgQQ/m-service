import { Test, TestingModule } from "@nestjs/testing";
import { TestRestapiResourceController } from "./test-restapi-resource.controller";
import { TestRestapiResourceService } from "./test-restapi-resource.service";

describe("TestRestapiResourceController", () => {
  let controller: TestRestapiResourceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestRestapiResourceController],
      providers: [TestRestapiResourceService],
    }).compile();

    controller = module.get<TestRestapiResourceController>(
      TestRestapiResourceController,
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
