import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { EnumDto } from "./EnumDto";
import { Bjojno } from "./Bjojno";

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
    enumTest!: "yellow" | "red" | "green";

    @Field(() => Bjojno)
    @ApiProperty({
        required: true,
        type: () => Bjojno
    })
    testDtoMembers!: "hnhl";
}

export { CreateInput as CreateInput };