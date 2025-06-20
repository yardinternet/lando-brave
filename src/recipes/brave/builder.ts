'use strict';
import * as _ from "lodash";

/*
 * Build LAMP
 */
export = {
    name: 'brave',
    parent: 'wordpress',
    config: {
        confSrc: __dirname,
        php: '8.1',
        via: 'nginx',
        webroot: 'web',
        xdebug: true,
        config: {
          vhosts: 'provision/nginx/multisite-subdomain-subdirectory.conf'
        },
        proxy: {},
        services: {
            appserver: {
                xdebug: 'debug',
                composer_version: 2,
                overrides: {
                    volumes: [
                        '~/.composer/auth.json:/var/www/.composer/auth.json'
                    ],
                    environment: {
                        // For PHPStorm, which supports automatic configuration switching
                        // for multiple remote servers. In PHPStorm, you can create a server
                        // named 'appserver' and it will automatically pick up debug sessions.
                        PHP_IDE_CONFIG: 'serverName=appserver',
                    },
                },
                config: {
                    php: 'provision/php/php.ini'
                }
            },
            database: {
                type: 'mysql:8.0.39',
                config: {
                    database: 'provision/mysql/mysql.cnf'
                }
            },
            pma: {
                type: 'phpmyadmin',
                ssl: true,
                hosts: ['database'],
                scanner: {
                    timeout: 1000,
                    retry: 5
                }
            },
            mailhog: {
                type: 'mailhog',
                hogfrom: ['appserver']
            },
            node : {
                type: 'node:18',
                build: ['npm install && npm run dev-all-once'],
                overrides: {
                    volumes: ['~/.npmrc:/home/node/.npmrc']
                }
            }
        },
        tooling: {
            deploy: {
                service: 'appserver',
                cmd: './vendor/bin/dep deploy'
            },
            npm: {
                service: 'node',
            },
            'debug-on': {
                service: 'appserver',
                description: 'Enable xdebug for nginx.',
                cmd: 'docker-php-ext-enable xdebug && pkill -o -USR2 php-fpm && echo "Enabling xdebug"',
                user: 'root'
            },
            'debug-off': {
                service: 'appserver',
                description: 'Disable xdebug for nginx.',
                cmd: 'rm /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini && pkill -o -USR2 php-fpm && echo "Disabling xdebug"',
                user: 'root'
            }
        }
    },
    builder: (parent, config) => class LandoBrave extends parent {
        constructor(id, options: any = {}) {
            options = _.merge({}, config, options)
            super(id, options);
        }
    },
};
