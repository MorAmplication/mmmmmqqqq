import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { EnumDto } from "./EnumDto";
import { Bjojno } from "./Bjojno";

@ArgsType()
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
        enum: EnumDto
    })
    enumTest!: "yellow" | "red" | "green";

    @Field(() => Bjojno)
    @ApiProperty({
        required: true,
        enum: Bjojno
    })
    testDtoMembers!: "hnhl";
}

export { CreateInput as CreateInput };