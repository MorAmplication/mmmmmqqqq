/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Test8WhereInput } from "./Test8WhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class Test8ListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => Test8WhereInput,
  })
  @ValidateNested()
  @Type(() => Test8WhereInput)
  @IsOptional()
  @Field(() => Test8WhereInput, {
    nullable: true,
  })
  every?: Test8WhereInput;

  @ApiProperty({
    required: false,
    type: () => Test8WhereInput,
  })
  @ValidateNested()
  @Type(() => Test8WhereInput)
  @IsOptional()
  @Field(() => Test8WhereInput, {
    nullable: true,
  })
  some?: Test8WhereInput;

  @ApiProperty({
    required: false,
    type: () => Test8WhereInput,
  })
  @ValidateNested()
  @Type(() => Test8WhereInput)
  @IsOptional()
  @Field(() => Test8WhereInput, {
    nullable: true,
  })
  none?: Test8WhereInput;
}
export { Test8ListRelationFilter as Test8ListRelationFilter };
