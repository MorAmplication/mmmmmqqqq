import * as graphql from "@nestjs/graphql";
import { CreateInput } from "../mor/CreateInput";
import { Amit } from "../amit/base/Amit";
import { AmitCreateInput } from "../amit/base/AmitCreateInput";
import { AmitCountArgs } from "../amit/base/AmitCountArgs";
import { MorService } from "./mor.service";

export class MorResolver {
  constructor(protected readonly service: MorService) {}

  @graphql.Query(() => Amit)
  async Create(
    @graphql.Args()
    args: CreateInput
  ): Promise<Amit> {
    return this.service.Create(args);
  }

  @graphql.Query(() => AmitCountArgs)
  async Gou(
    @graphql.Args()
    args: AmitCreateInput
  ): Promise<AmitCountArgs> {
    return this.service.Gou(args);
  }
}
