import { CreateTestGraphQlSchemaResourceInput } from './create-test-graph-ql-schema-resource.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateTestGraphQlSchemaResourceInput extends PartialType(CreateTestGraphQlSchemaResourceInput) {
  id: number;
}
