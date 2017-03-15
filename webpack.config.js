module.exports = {
    entry: {
        main: './scripts/main.js',
        namespace: './scripts/app.js',
        view: './scripts/models.js'
    },
    output: {
        path: './dist/',
        filename: '[name].bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            }
        ]
    }
};