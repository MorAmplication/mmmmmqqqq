/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { AmitService } from "../amit.service";
import { AmitCreateInput } from "./AmitCreateInput";
import { Amit } from "./Amit";
import { AmitFindManyArgs } from "./AmitFindManyArgs";
import { AmitWhereUniqueInput } from "./AmitWhereUniqueInput";
import { AmitUpdateInput } from "./AmitUpdateInput";

export class AmitControllerBase {
  constructor(protected readonly service: AmitService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Amit })
  async createAmit(@common.Body() data: AmitCreateInput): Promise<Amit> {
    return await this.service.createAmit({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        enumTest: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Amit] })
  @ApiNestedQuery(AmitFindManyArgs)
  async amits(@common.Req() request: Request): Promise<Amit[]> {
    const args = plainToClass(AmitFindManyArgs, request.query);
    return this.service.amits({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        enumTest: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Amit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async amit(
    @common.Param() params: AmitWhereUniqueInput
  ): Promise<Amit | null> {
    const result = await this.service.amit({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        enumTest: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Amit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateAmit(
    @common.Param() params: AmitWhereUniqueInput,
    @common.Body() data: AmitUpdateInput
  ): Promise<Amit | null> {
    try {
      return await this.service.updateAmit({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          enumTest: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Amit })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteAmit(
    @common.Param() params: AmitWhereUniqueInput
  ): Promise<Amit | null> {
    try {
      return await this.service.deleteAmit({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          enumTest: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
