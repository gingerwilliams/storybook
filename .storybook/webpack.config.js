const path = require("path");

module.exports = async ({ config, mode }) => {
    // Make whatever fine-grained changes you need
    config.module.rules.push({
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "../src")
    });

    // Return the altered config
    return config;
};
