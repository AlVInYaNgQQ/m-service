import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TestGatewayGateway } from "./test-gateway/test-gateway.gateway";
import { TestModule } from "./test/test.module";
import { TestModuleModule } from "./test-module/test-module.module";
import { TestProvider } from "./test-provider/test-provider";
import { TestResolverResolver } from "./test-resolver/test-resolver.resolver";
import { TestRestapiResourceModule } from "./test-restapi-resource/test-restapi-resource.module";
import { TestGraphQlCodeResourceModule } from "./test-graph-ql-code-resource/test-graph-ql-code-resource.module";
import { TestGraphQlSchemaResourceModule } from "./test-graph-ql-schema-resource/test-graph-ql-schema-resource.module";
import { TestMicroserviceResourceModule } from "./test-microservice-resource/test-microservice-resource.module";
import { TestWebsocketResourceModule } from "./test-websocket-resource/test-websocket-resource.module";
import { TestServiceService } from "./test-service/test-service.service";

@Module({
  imports: [
    TestModule,
    TestModuleModule,
    TestRestapiResourceModule,
    TestGraphQlCodeResourceModule,
    TestGraphQlSchemaResourceModule,
    TestMicroserviceResourceModule,
    TestWebsocketResourceModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TestGatewayGateway,
    TestProvider,
    TestResolverResolver,
    TestServiceService,
  ],
})
export class AppModule {}
