import { Module } from "@nestjs/common";
import { TestRestapiResourceService } from "./test-restapi-resource.service";
import { TestRestapiResourceController } from "./test-restapi-resource.controller";

@Module({
  controllers: [TestRestapiResourceController],
  providers: [TestRestapiResourceService],
})
export class TestRestapiResourceModule {}
