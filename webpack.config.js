module.exports = {
    entry: {
        namespace: './scripts/app.js',
        models: './scripts/models.js',
        view: './scripts/view.js',
        controller: './scripts/controller.js',
        main: './scripts/main.js'

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