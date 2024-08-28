import { TRPCError } from "@trpc/server";
import { hash } from "argon2";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const credAuthRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string().email(),
        password: z.string().min(4).max(12),
        name: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { name, email, password } = input;

      const exists = await ctx.db.user.findFirst({
        where: { email },
      });

      if (exists) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User already exists.",
        });
      }

      const hashedPassword = await hash(password);

      const result = await ctx.db.user.create({
        data: { name, email, password: hashedPassword },
      });

      return {
        status: 201,
        message: "Account created successfully",
        result: result.email,
      };
    }),
});
