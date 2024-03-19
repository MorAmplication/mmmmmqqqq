import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { EnumDto } from "./EnumDto";

@ObjectType()
class CreateInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @Field(() => EnumDto)
    @ApiProperty({
        required: true,
        type: () => EnumDto
    })
    enumTest!: EnumDto;
}

export { CreateInput as CreateInput };