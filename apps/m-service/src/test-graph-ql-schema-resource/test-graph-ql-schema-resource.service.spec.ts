import { Test, TestingModule } from "@nestjs/testing";
import { TestGraphQlSchemaResourceService } from "./test-graph-ql-schema-resource.service";

describe("TestGraphQlSchemaResourceService", () => {
  let service: TestGraphQlSchemaResourceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGraphQlSchemaResourceService],
    }).compile();

    service = module.get<TestGraphQlSchemaResourceService>(
      TestGraphQlSchemaResourceService,
    );
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
