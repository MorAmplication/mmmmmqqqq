/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Test8WhereUniqueInput } from "./Test8WhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteTest8Args {
  @ApiProperty({
    required: true,
    type: () => Test8WhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => Test8WhereUniqueInput)
  @Field(() => Test8WhereUniqueInput, { nullable: false })
  where!: Test8WhereUniqueInput;
}

export { DeleteTest8Args as DeleteTest8Args };
