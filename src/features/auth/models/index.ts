import i18next from "i18next";
import zod from "zod";

export const loginReuestSchema = zod.object({
  username: zod.string().min(1, i18next.t("auth:field.username_required")),
  password: zod.string().min(1, i18next.t("auth:field.password_required")),
});

export type LoginRequest = zod.infer<typeof loginReuestSchema>;
