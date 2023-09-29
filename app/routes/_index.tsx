import { LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { RandomBytes } from "~/components/RandomBytes";

// the loader is not strictly necessary -- this repros just fine with 18000
// hard coded. but letting you specify the number makes it easy to play with the
// response size
export function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const size = url.searchParams.get("size");
  return json({
    size: size && /^\d+$/.test(size) ? parseInt(size, 10) : 18000,
  });
}

export default function Index() {
  const { size } = useLoaderData<typeof loader>();
  return (
    <>
      size={size} (set with query param)
      <br />
      <RandomBytes n={size} />
    </>
  );
}
