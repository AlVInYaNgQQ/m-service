import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TestRestapiResourceService } from "./test-restapi-resource.service";
import { CreateTestRestapiResourceDto } from "./dto/create-test-restapi-resource.dto";
import { UpdateTestRestapiResourceDto } from "./dto/update-test-restapi-resource.dto";

@Controller("test-restapi-resource")
export class TestRestapiResourceController {
  constructor(
    private readonly testRestapiResourceService: TestRestapiResourceService,
  ) {}

  @Post()
  create(@Body() createTestRestapiResourceDto: CreateTestRestapiResourceDto) {
    return this.testRestapiResourceService.create(createTestRestapiResourceDto);
  }

  @Get()
  findAll() {
    return this.testRestapiResourceService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.testRestapiResourceService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTestRestapiResourceDto: UpdateTestRestapiResourceDto,
  ) {
    return this.testRestapiResourceService.update(
      +id,
      updateTestRestapiResourceDto,
    );
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.testRestapiResourceService.remove(+id);
  }
}
