import * as graphql from "@nestjs/graphql";
import { MorService } from "./mor.service";

export class MorResolver {
  constructor(protected readonly service: MorService) {}
}
