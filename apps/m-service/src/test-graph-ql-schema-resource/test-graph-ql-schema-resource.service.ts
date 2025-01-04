import { Injectable } from "@nestjs/common";
import { CreateTestGraphQlSchemaResourceInput } from "./dto/create-test-graph-ql-schema-resource.input";
import { UpdateTestGraphQlSchemaResourceInput } from "./dto/update-test-graph-ql-schema-resource.input";

@Injectable()
export class TestGraphQlSchemaResourceService {
  create(
    createTestGraphQlSchemaResourceInput: CreateTestGraphQlSchemaResourceInput,
  ) {
    return "This action adds a new testGraphQlSchemaResource";
  }

  findAll() {
    return `This action returns all testGraphQlSchemaResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testGraphQlSchemaResource`;
  }

  update(
    id: number,
    updateTestGraphQlSchemaResourceInput: UpdateTestGraphQlSchemaResourceInput,
  ) {
    return `This action updates a #${id} testGraphQlSchemaResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} testGraphQlSchemaResource`;
  }
}
