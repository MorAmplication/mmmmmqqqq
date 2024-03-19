import * as graphql from "@nestjs/graphql";
import { AmitResolverBase } from "./base/amit.resolver.base";
import { Amit } from "./base/Amit";
import { AmitService } from "./amit.service";

@graphql.Resolver(() => Amit)
export class AmitResolver extends AmitResolverBase {
  constructor(protected readonly service: AmitService) {
    super(service);
  }
}
