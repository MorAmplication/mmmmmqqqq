import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MorService } from "./mor.service";
import { CreateInput } from "../mor/CreateInput";
import { Amit } from "../amit/base/Amit";

@swagger.ApiTags("mors")
@common.Controller("mors")
export class MorController {
  constructor(protected readonly service: MorService) {}

  @common.Get("/:id/create")
  @swagger.ApiOkResponse({
    type: Amit
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Create(
    @common.Body()
    body: CreateInput
  ): Promise<Amit> {
        return this.service.Create(body);
      }
}
