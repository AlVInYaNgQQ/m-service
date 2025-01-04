import { Module } from '@nestjs/common';
import { TestGraphQlCodeResourceService } from './test-graph-ql-code-resource.service';
import { TestGraphQlCodeResourceResolver } from './test-graph-ql-code-resource.resolver';

@Module({
  providers: [TestGraphQlCodeResourceResolver, TestGraphQlCodeResourceService],
})
export class TestGraphQlCodeResourceModule {}
