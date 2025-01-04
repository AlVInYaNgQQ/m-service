import { Test, TestingModule } from "@nestjs/testing";
import { TestWebsocketResourceGateway } from "./test-websocket-resource.gateway";
import { TestWebsocketResourceService } from "./test-websocket-resource.service";

describe("TestWebsocketResourceGateway", () => {
  let gateway: TestWebsocketResourceGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestWebsocketResourceGateway, TestWebsocketResourceService],
    }).compile();

    gateway = module.get<TestWebsocketResourceGateway>(
      TestWebsocketResourceGateway,
    );
  });

  it("should be defined", () => {
    expect(gateway).toBeDefined();
  });
});
