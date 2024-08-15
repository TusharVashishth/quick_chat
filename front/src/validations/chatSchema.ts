import { z } from "zod";

export const createChatSchema = z
  .object({
    title: z
      .string()
      .min(4, { message: "Chat title must be 4 characters long" }),
    passcode: z
      .string()
      .min(4, { message: "Chat Passcode must be 4 characters long" }),
  })
  .required();

export type createChatSchemaType = z.infer<typeof createChatSchema>;
