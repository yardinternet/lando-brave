'use strict';

import { App } from "lando";
import * as versionCheck from 'github-version-checker';

export = (app: App) => {
    app.events.on('post-start', () => {
        
        const options = {
            repo: 'lando-brave',
            owner: 'yardinternet',
            currentVersion: require('./package.json').version // eslint-disable-line
        };
        versionCheck(options, function (error, update) {
            if (update) {
                // @ts-ingore
                app.addWarning({
                    title: `A new version of the plugin 'lando-brave' is available`,
                    detail: [
                        `You have version v${options.currentVersion} but Yard released ${update.name}`,
                        'Please proceed to update with the instructions from the README in our repository'
                    ],
                    url: 'https://github.com/yardinternet/lando-brave',
                }, error)
            }
        });
    });
};
