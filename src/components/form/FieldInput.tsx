import { cn } from "@/lib/utils";
import { useFieldContext } from ".";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const FieldInput: React.FC<
  Omit<React.ComponentProps<"input">, "value" | "onChange"> & {
    label?: string;
    leftIcon?: React.ReactNode;
  }
> = ({ label, leftIcon, ...props }) => {
  const field = useFieldContext<string>();
  return (
    <div className=" flex flex-col space-y-1.5">
      <Label htmlFor="email">{label}</Label>

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground">
            {leftIcon}
          </div>
        )}
        <Input
          {...props}
          className={cn(leftIcon && "pl-8", props.className)}
          value={field.state.value}
          onChange={(e) => field.handleChange(e.currentTarget.value)}
        />
      </div>
      {!field.state.meta.isValid && (
        <p className="px-1 text-xs text-red-600">
          {field.state.meta.errors.map(({ message }) => message).join(", ")}
        </p>
      )}
    </div>
  );
};

export default FieldInput;
