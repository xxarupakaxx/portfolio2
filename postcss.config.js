module.exports = {
    plugins: {
        '@unocss/postcss': {
            content: [
                './pages/**/*.{js,ts,jsx,tsx}',
                './components/**/*.{js,ts,jsx,tsx}',
                './app/**/*.{js,ts,jsx,tsx}',
            ],
        },
    },
}
