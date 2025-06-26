// components/builder.tsx
"use client";
import { ComponentProps } from "react";
import { BuilderComponent, useIsPreviewing, builder } from "@builder.io/react";
import { BuilderContent } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import TwoColumnLayout from "./TwoColumnLayout";

type BuilderPageProps = ComponentProps<typeof BuilderComponent>;

// Replace with your Public API Key
const PUBLIC_API_KEY = "358fb1baf0df4a24838c490ec295504f";
builder.init(PUBLIC_API_KEY);

// Register custom components
builder.registerComponent(TwoColumnLayout, {
  name: "TwoColumnLayout",
  inputs: [
    {
      name: "maxWidth",
      type: "number",
      defaultValue: 1200,
      helperText: "Maximum width of the layout container",
    },
    {
      name: "lazyLoad",
      type: "boolean",
      defaultValue: false,
      helperText: "Enable lazy loading for images",
    },
  ],
});

export function RenderBuilderContent(props: BuilderPageProps) {
  // Call the useIsPreviewing hook to determine if
  // the page is being previewed in Builder
  const isPreviewing = useIsPreviewing();
  // If `content` has a value or the page is being previewed in Builder,
  // render the BuilderComponent with the specified content and model props.
  if (props.content || isPreviewing) {
    return <BuilderComponent {...props} />;
  }
  // If the `content` is falsy and the page is
  // not being previewed in Builder, render the
  // DefaultErrorPage with a 404.
  return <DefaultErrorPage statusCode={404} />;
}
