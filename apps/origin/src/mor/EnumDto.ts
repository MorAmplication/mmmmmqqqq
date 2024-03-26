import { registerEnumType } from "@nestjs/graphql";

export enum EnumDto {
    Yellow = "yellow",
    Red = "red",
    Green = "green"
}

registerEnumType(EnumDto, {
    name: "EnumDto",
  });