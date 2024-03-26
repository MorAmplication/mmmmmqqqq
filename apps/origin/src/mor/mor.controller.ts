import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MorService } from "./mor.service";
import { AmitCreateInput } from "../amit/base/AmitCreateInput";
import { Amit } from "../amit/base/Amit";
import { AmitCountArgs } from "../amit/base/AmitCountArgs";

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
    body: AmitCreateInput
  ): Promise<Amit> {
        return this.service.Create(body);
      }

  @common.Get("/:id/gou")
  @swagger.ApiOkResponse({
    type: AmitCountArgs
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Gou(
    @common.Body()
    body: AmitCreateInput
  ): Promise<AmitCountArgs> {
        return this.service.Gou(body);
      }
}
