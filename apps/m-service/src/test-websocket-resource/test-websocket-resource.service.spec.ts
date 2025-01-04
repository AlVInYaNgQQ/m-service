import { Test, TestingModule } from "@nestjs/testing";
import { TestWebsocketResourceService } from "./test-websocket-resource.service";

describe("TestWebsocketResourceService", () => {
  let service: TestWebsocketResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestWebsocketResourceService],
    }).compile();

    service = module.get<TestWebsocketResourceService>(
      TestWebsocketResourceService,
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
