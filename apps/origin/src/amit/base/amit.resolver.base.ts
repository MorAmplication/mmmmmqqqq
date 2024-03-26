/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Amit } from "./Amit";
import { AmitCountArgs } from "./AmitCountArgs";
import { AmitFindManyArgs } from "./AmitFindManyArgs";
import { AmitFindUniqueArgs } from "./AmitFindUniqueArgs";
import { CreateAmitArgs } from "./CreateAmitArgs";
import { UpdateAmitArgs } from "./UpdateAmitArgs";
import { DeleteAmitArgs } from "./DeleteAmitArgs";
import { AmitService } from "../amit.service";
@graphql.Resolver(() => Amit)
export class AmitResolverBase {
  constructor(protected readonly service: AmitService) {}

  async _amitsMeta(
    @graphql.Args() args: AmitCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Amit])
  async amits(@graphql.Args() args: AmitFindManyArgs): Promise<Amit[]> {
    return this.service.amits(args);
  }

  @graphql.Query(() => Amit, { nullable: true })
  async amit(@graphql.Args() args: AmitFindUniqueArgs): Promise<Amit | null> {
    const result = await this.service.amit(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Amit)
  async createAmit(@graphql.Args() args: CreateAmitArgs): Promise<Amit> {
    return await this.service.createAmit({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Amit)
  async updateAmit(@graphql.Args() args: UpdateAmitArgs): Promise<Amit | null> {
    try {
      return await this.service.updateAmit({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Amit)
  async deleteAmit(@graphql.Args() args: DeleteAmitArgs): Promise<Amit | null> {
    try {
      return await this.service.deleteAmit(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Query(() => Amit)
  async Bj(
    @graphql.Args()
    args: AmitCountArgs
  ): Promise<Amit> {
    return this.service.Bj(args);
  }
}
