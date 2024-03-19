import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateInput } from "../mor/CreateInput";
import { Amit } from "../amit/base/Amit";

@Injectable()
export class MorService {
  constructor(protected readonly prisma: PrismaService) {}
  async Create(args: CreateInput): Promise<Amit> {
    throw new Error("Not implemented");
  }
}
