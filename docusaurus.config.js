module.exports = {
    title: "Meridian Design System",
    tagline: "Navigating to Consistency",
    url: "https://meridian.vertigis.com",
    baseUrl: "/meridian-design/",
    noIndex: true,
    favicon: "img/favicon.ico",
    organizationName: "geocortex",
    projectName: "meridian-design",
    themeConfig: {
        colorMode: {
            disableSwitch: true,
        },
        navbar: {
            title: "Meridian Design System by VertiGIS",
            logo: {
                alt: "VertiGIS",
                src: "img/vertigis-icon.svg",
            },
        },
        footer: {
            style: "dark",
            copyright: `Copyright © ${new Date().getFullYear()} VertiGIS`,
        },
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl:
                        "https://github.com/geocortex/meridian-design/edit/main/",
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
