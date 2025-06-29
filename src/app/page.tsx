// Example file structure, app/[...page]/page.tsx
// You could alternatively use src/app/[...page]/page.tsx
import { builder } from "@builder.io/sdk";
import { RenderBuilderContent } from "../components/builder";
import TwoColumnLayout from "../components/TwoColumnLayout";

const PUBLIC_API_KEY = "358fb1baf0df4a24838c490ec295504f";

// Replace with your Public API Key
builder.init(PUBLIC_API_KEY);

interface PageProps {
  params: {
    page: string[];
  };
}

export default async function Page(props: PageProps) {
  const model = "page";
  const content = await builder
    // Get the page content from Builder with the specified options
    .get("page", {
      userAttributes: {
        // Use the page path specified in the URL to fetch the content
        urlPath: "/" + (props?.params?.page?.join("/") || ""),
      },
      // Set prerender to false to return JSON instead of HTML
      prerender: false,
    })
    // Convert the result to a promise
    .toPromise();

  return (
    <>
      {/* Render the TwoColumn Layout */}
      <TwoColumnLayout maxWidth={1200} lazyLoad={false} />
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={model} />
    </>
  );
}
