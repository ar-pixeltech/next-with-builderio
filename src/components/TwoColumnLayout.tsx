"use client";
import React from "react";
import styles from "./TwoColumnLayout.module.css";

interface TwoColumnLayoutProps {
  maxWidth?: number;
  lazyLoad?: boolean;
}

export default function TwoColumnLayout({
  maxWidth = 1200,
  lazyLoad = false,
}: TwoColumnLayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.hiddenElement} />
      <div className={styles.mainWrapper} style={{ maxWidth }}>
        <section className={styles.mainSection}>
          <div className={styles.contentWrapper}>
            <div className={styles.columnsContainer}>
              <div className={styles.columnLeft}>
                <div className={styles.imageContainer}>
                  <img
                    loading={lazyLoad ? "lazy" : "eager"}
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e"
                    alt="Column 1 Image"
                    className={styles.backgroundImage}
                  />
                  <span className={styles.columnText}>Column 111</span>
                </div>
              </div>
              <div className={styles.columnRight}>
                <img
                  loading={lazyLoad ? "lazy" : "eager"}
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F72c80f114dc149019051b6852a9e3b7a"
                  alt="Column 2 Image"
                  className={styles.columnImage}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className={styles.builderContentWrapper}>
        <div className={styles.builderModelContainer}>
          <div className={styles.builderPlaceholder} />
        </div>
      </div>
    </div>
  );
}
