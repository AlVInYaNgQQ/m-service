import { SetMetadata } from '@nestjs/common';

export const TestDecorator = (...args: string[]) => SetMetadata('test-decorator', args);
