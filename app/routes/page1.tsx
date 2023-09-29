import { defer, json, type MetaFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getData, str } from "~/services/data.server";

export const loader = () => {
  return defer({
    title: "Page1",
    sync_data: str(),
    async_data: getData(),
  })
}

export const meta: MetaFunction = () => {
  return [
    { title: "Page1" },
    { name: "description", content: "Page1" },
  ];
};

export default function Page1() {
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
