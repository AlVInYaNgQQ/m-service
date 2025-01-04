import { Module } from "@nestjs/common";
import { TestWebsocketResourceService } from "./test-websocket-resource.service";
import { TestWebsocketResourceGateway } from "./test-websocket-resource.gateway";

@Module({
  providers: [TestWebsocketResourceGateway, TestWebsocketResourceService],
})
export class TestWebsocketResourceModule {}
