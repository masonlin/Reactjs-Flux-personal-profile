module.exports = {
    entry: './js/app.js',
    output: {
        path: './js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: "json-loader" },
            { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader' }

        ]
    }
};
