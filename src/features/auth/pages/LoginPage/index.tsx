import { useAppForm } from "@/components/form";
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import i18next from "i18next";
import { Icon } from "@iconify/react";
export default function LoginPage() {
  const form = useAppForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <form.AppForm>
      <div className="relative flex h-svh w-full items-center justify-center over">
        <AnimatedGridPattern
          className={cn(
            "absolute",
            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
        <Card className="relative w-[350px] overflow-hidden">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid w-full items-center gap-4">
                <form.AppField
                  name="username"
                  children={(field) => (
                    <field.Input
                      label={i18next.t("auth:field.username")}
                      autoComplete="none"
                      leftIcon={
                        <Icon icon={"lucide:user-circle"} className="h-4 w-4" />
                      }
                    />
                  )}
                />
                <form.AppField
                  name="password"
                  children={(field) => (
                    <field.Input
                      label={i18next.t("auth:field.password")}
                      autoComplete="none"
                      type="password"
                      leftIcon={
                        <Icon icon={"lucide:lock"} className="h-4 w-4" />
                      }
                    />
                  )}
                />
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex">
            <Button className="w-full">Login</Button>
          </CardFooter>
          <BorderBeam duration={8} size={100} />
        </Card>
      </div>
    </form.AppForm>
  );
}
