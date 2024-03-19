import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { EnumDto } from "./EnumDto";

@ObjectType()
class CreateInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    name!: string;

    @Field(() => EnumDto)
    @ApiProperty({
        required: true,
        type: () => EnumDto
    })
    enumTest!: EnumDto;
}

export { CreateInput as CreateInput };