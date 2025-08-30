import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  console.log('render "/"');
  return <div>Hello "/"!</div>;
}
