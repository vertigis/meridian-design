// A custom plugin for Docusaurus. See
// https://docusaurus.io/docs/api/plugin-methods/#configurewebpackconfig-isserver-utils.
async function meridianPlugin(context, opts) {
    return {
        name: "docusaurus-meridian-plugin",

        configureWebpack(config, isServer, utils, content) {
            return {
                module: {
                    rules: [
                        {
                            test: /\.m?jsx?/,
                            // Workaround for @vertigis/react-ui and MUI not being fully
                            // ES module compliant.
                            resolve: {
                                fullySpecified: false,
                            },
                        },
                    ],
                },
            };
        },
    };
}

module.exports = meridianPlugin;
