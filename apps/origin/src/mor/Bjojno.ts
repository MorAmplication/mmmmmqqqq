import { registerEnumType } from "@nestjs/graphql";

export enum Bjojno {
    Hnhl = "hnhl"
}

registerEnumType(Bjojno, {
    name: "Bjojno",
  });