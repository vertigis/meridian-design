import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { Button } from "../components/Button.jsx";

const features = [
    {
        title: "Design Principles",
        imageUrl: "/img/inclusive.png",
        description: (
            <>
                <p className="feature__text">
                    Build products that enable anyone to be successful using them, no matter what language they speak, device they use, or disabilities they may have.
                </p>
                <Link to="/docs/design-principles">
                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--medium"
                    >
                        Discover
                    </Button>
                </Link>
            </>
        ),
    },
    {
        title: "Design Philosophy",
        imageUrl: "/img/polish.png",
        description: (
            <>
                <p className="feature__text">
                    Empathize with people to understand their motivations and goals. Use that knowledge to design solutions that enable them to accomplish their tasks.
                </p>
                <Link to="/docs/design-philosophy">
                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--medium"
                    >
                        Learn
                    </Button>
                </Link>
            </>
        ),
    },
    {
        title: <>Design Language</>,
        imageUrl: "/img/app-icons.png",
        description: (
            <>
                <p className="feature__text">
                    Ensure every product we produce is recognizable to customers as being a VertiGIS product by using familiar patterns, interactions and iconography across products.
                </p>
                <Link to="/docs/design-language">
                    <Button
                        type="button"
                        buttonStyle="btn--primary--solid"
                        buttonSize="btn--medium"
                    >
                        Explore
                    </Button>
                </Link>
            </>
        ),
    },
];

function Feature({ imageUrl, title, description, button }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={classnames("col col--4", styles.feature)}>
            {imgUrl && (
                <div className="text--center">
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3>{title}</h3>
            <div className="feature__description">{description}</div>
            <div className={styles.buttons}>{button}</div>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="VertGIS Meridian Design System"
        >
            <header
                className={classnames("hero hero--primary", styles.heroBanner)}
                style={{
                    backgroundImage: `url("${useBaseUrl("img/banner.jpg")}")`,
                }}
            >
                <div className="container">
                    <h1 className="hero__title">{siteConfig.title}</h1>
                    <p className="hero__subtitle">{siteConfig.tagline}</p>
                    <div className={styles.buttons}>
                        <Link
                            className={classnames(
                                "button button button--secondary button--lg"
                                // styles.getStarted
                            )}
                            to={"/docs/design-principles"}
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length && (
                    <section className={styles.features}>
                        <div className="container">
                            <div className="row">
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
