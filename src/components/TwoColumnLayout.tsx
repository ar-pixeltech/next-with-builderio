"use client";
import React from "react";

interface TwoColumnLayoutProps {
  maxWidth?: number;
  lazyLoad?: boolean;
}

export default function TwoColumnLayout({
  maxWidth = 1200,
  lazyLoad = false,
}: TwoColumnLayoutProps) {
  return (
    <div className="layout-container">
      <div className="hidden-element" />
      <div className="main-wrapper" style={{ maxWidth }}>
        <section className="main-section">
          <div className="content-wrapper">
            <div className="columns-container">
              <div className="column-left">
                <div className="image-container">
                  <img
                    loading={lazyLoad ? "lazy" : "eager"}
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e"
                    alt="Column 1 Image"
                    className="background-image"
                  />
                  <span className="column-text">Column 111</span>
                </div>
              </div>
              <div className="column-right">
                <img
                  loading={lazyLoad ? "lazy" : "eager"}
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                  alt="Column 2 Image"
                  className="column-image"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="builder-content-wrapper">
        <div className="builder-model-container">
          <div className="builder-placeholder" />
        </div>
      </div>
    </div>
  );
}
