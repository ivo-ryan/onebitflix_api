import path from "path";

module.exports = {
    'config': path.resolve('config', 'sequelizeCli.js'),
    'models-path': path.resolve('src', 'models'),
    'seeders': path.resolve('src', 'database', 'seeders'),
    'migrations-path' : path.resolve('src', 'database', 'migrations')
}