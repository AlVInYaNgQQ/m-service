import { PartialType } from "@nestjs/mapped-types";
import { CreateTestWebsocketResourceDto } from "./create-test-websocket-resource.dto";

export class UpdateTestWebsocketResourceDto extends PartialType(
  CreateTestWebsocketResourceDto,
) {
  id: number;
}
