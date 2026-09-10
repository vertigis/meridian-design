module.exports = {
    title: "Meridian Design System",
    tagline: "Navigating to Consistency",
    url: "https://meridian.vertigis.com",
    baseUrl: "/",
    noIndex: true,
    favicon: "img/favicon.ico",
    organizationName: "vertigis",
    projectName: "meridian-design",
    plugins: ["./src/meridian-plugin"],
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
                        "https://github.com/vertigis/meridian-design/edit/main/",
                },
                googleAnalytics: {
                    trackingID: "G-8L48ZQE2D8",
                    anonymizeIP: true,
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            },
        ],
    ],
};
