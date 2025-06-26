"use client";
import React from "react";
import styles from "./TwoColumnLayout.module.css";

/**
 * TwoColumnLayout Component
 *
 * A responsive two-column layout component featuring:
 * - Left column with background image and overlay text
 * - Right column with a standalone image
 * - Responsive design that stacks columns on mobile
 * - Configurable max width and lazy loading
 */

interface TwoColumnLayoutProps {
  /** Maximum width of the layout container in pixels */
  maxWidth?: number;
  /** Enable lazy loading for images */
  lazyLoad?: boolean;
}

export default function TwoColumnLayout({
  maxWidth = 1200,
  lazyLoad = false,
}: TwoColumnLayoutProps) {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.hiddenElement} />

      {/* First Section */}
      <div className={styles.sectionWrapper} style={{ maxWidth }}>
        <section className={styles.section}></section>
      </div>

      {/* Image Columns Section */}
      <div className={styles.imageColumnsWrapper}>
        <div className={styles.hiddenElement} />
        <div className={styles.imageColumnsContainer}>
          <section className={styles.imageSection}>
            <div className={styles.imageContentWrapper}>
              <div className={styles.columnLeft}>
                <div className={styles.imageContainer}>
                  <img
                    loading="eager"
                    src="https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2Fea3b5340ff424b09a73ff59c731e6e7e?width=2000"
                    alt="Column 1 Image"
                    className={styles.backgroundImage}
                  />
                  <span className={styles.columnText}>Column 111</span>
                </div>
              </div>
              <div className={styles.columnRight}>
                <img
                  loading="eager"
                  src="https://cdn.builder.io/api/v1/image/assets%2F358fb1baf0df4a24838c490ec295504f%2F55e4e291a699432fb1d92f35586e97e6"
                  alt="Column 2 Image"
                  className={styles.columnImage}
                />
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

      {/* Second Section */}
      <div className={styles.sectionWrapper} style={{ maxWidth }}>
        <section className={styles.section}></section>
      </div>

      {/* Services Section */}
      <div className={styles.servicesWrapper}>
        <div className={styles.servicesContent}>
          <h2 className={styles.servicesTitle}>Our Services & Packages</h2>
          <p className={styles.servicesDescription}>
            Explore our range of professional services and affordable packages
            designed to suit your business needs.
          </p>

          <div className={styles.packagesGrid}>
            <div className={styles.packageCard}>
              <h3 className={styles.packageTitle}>Basic Package</h3>
              <p className={styles.packageDescription}>
                Perfect for small businesses starting out. Includes basic web
                design and hosting.
              </p>
              <p className={styles.packagePrice}>₹4,999</p>
            </div>

            <div className={styles.packageCard}>
              <h3 className={styles.packageTitle}>Pro Package</h3>
              <p className={styles.packageDescription}>
                Includes SEO, design, analytics, and email integrations for
                growing brands.
              </p>
              <p className={styles.packagePrice}>₹9,999</p>
            </div>

            <div className={styles.packageCard}>
              <h3 className={styles.packageTitle}>Enterprise Package</h3>
              <p className={styles.packageDescription}>
                Custom solutions with dedicated support, advanced integrations,
                and scalability.
              </p>
              <p className={styles.packagePrice}>₹24,999</p>
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className={styles.sectionWrapper} style={{ maxWidth }}>
        <section className={styles.section}></section>
      </div>

      {/* Builder Content */}
      <div className={styles.builderContentWrapper}>
        <div className={styles.builderModelContainer}>
          <div className={styles.builderPlaceholder} />
        </div>
      </div>
    </div>
  );
}
