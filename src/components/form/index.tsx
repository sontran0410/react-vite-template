import { createFormHook, createFormHookContexts } from "@tanstack/react-form";
import FieldInput from "./FieldInput";
export const { fieldContext, formContext, useFieldContext } =
  createFormHookContexts();

export const { useAppForm } = createFormHook({
  fieldComponents: {
    Input: FieldInput,
  },
  formComponents: {},
  fieldContext,
  formContext,
});
