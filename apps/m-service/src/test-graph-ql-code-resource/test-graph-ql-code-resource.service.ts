import { Injectable } from "@nestjs/common";
import { CreateTestGraphQlCodeResourceInput } from "./dto/create-test-graph-ql-code-resource.input";
import { UpdateTestGraphQlCodeResourceInput } from "./dto/update-test-graph-ql-code-resource.input";

@Injectable()
export class TestGraphQlCodeResourceService {
  create(
    createTestGraphQlCodeResourceInput: CreateTestGraphQlCodeResourceInput,
  ) {
    return "This action adds a new testGraphQlCodeResource";
  }

  findAll() {
    return `This action returns all testGraphQlCodeResource`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testGraphQlCodeResource`;
  }

  update(
    id: number,
    updateTestGraphQlCodeResourceInput: UpdateTestGraphQlCodeResourceInput,
  ) {
    return `This action updates a #${id} testGraphQlCodeResource`;
  }

  remove(id: number) {
    return `This action removes a #${id} testGraphQlCodeResource`;
  }
}
