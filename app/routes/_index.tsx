import { defer, json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getData, str } from "~/services/data.server";

export const loader = ({ request }: { request: Request }) => {
  let url = new URL(request.url)
  let size = parseInt(url.searchParams.get('size') || '10')
  return defer({
    title: "Index",
    sync_data: str(size),
    async_data: getData(size),
  })
}

export const meta: MetaFunction = () => {
  return [
    { title: "Index" },
    { name: "description", content: "Index" },
  ];
};

export default function Index() {
  let data = useLoaderData<typeof loader>()
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{ data.title }</h1>
      <ul>
        <li><Link to="/">Index</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
      </ul>
      <main>
        { data.sync_data }
      </main>
    </div>
  );
}
