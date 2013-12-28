module.exports = function(grunt){
    grunt.initConfig({
        requirejs: {
            main: {
                options: {
                    baseUrl: "assets_src/javascript",
                    name: 'main',
                    mainConfigFile: "assets_src/javascript/main.js",
                    out: "assets/javascript/main.js"
                }
            }
        },
        watch: {
            requirejs: {
                files: "assets_src/javascript/**",
                tasks: ["requirejs:main"]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
}
