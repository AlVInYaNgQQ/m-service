import { PartialType } from "@nestjs/mapped-types";
import { CreateTestRestapiResourceDto } from "./create-test-restapi-resource.dto";

export class UpdateTestRestapiResourceDto extends PartialType(
  CreateTestRestapiResourceDto,
) {}
