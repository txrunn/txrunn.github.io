
module.exports = {
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            '/projects': { page: '/projects' },
            '/skills': { page: '/skills' },
            '/experience': { page: '/experience' },
            '/education': { page: '/education' },
            '/contact': { page: '/contact' },
        };
    },
    plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    basePath: '/txrunn.github.io',
};
