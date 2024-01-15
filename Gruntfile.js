module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development: {
                files:{
                    'saida/dev/styles/main.css': 'entrada/styles/main.less'
                }
            },
            production:{
                options: {
                    compress: true,
                },
                files: {
                    'saida/dist/styles/main.min.css': 'entrada/styles/main.less'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'saida/dist/scripts/main.min.js': 'entrada/scripts/main.js'
                }
            }
        },
        watch: {
            less: {
                files: ['entrada/styles/*.less'],
                tasks: ['less']
            },
            uglify: {
                files: ['entrada/scripts/*.js'],
                tasks : ['uglify']
            }
        }
    });







    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default',['watch']);
}
