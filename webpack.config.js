const path = require("path");

module.exports = {
    entry: "./src/index.ts",

    output: {
        path: path.resolve("build"),
        filename: "index.js",
        libraryTarget: "umd",
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"],
        modules: [path.resolve("./src"), "node_modules"],
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ["awesome-typescript-loader"],
            },
	    {
                test: /\.js$/,
                use: {
                    loader:'babel-loader',
                    options: { presets: ['es2015'] }
                 },
            }
        ],
    },

    // Because docx is now targetting web
    // target: 'node',
};
