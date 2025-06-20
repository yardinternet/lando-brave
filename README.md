# Adeliom - Lando plugin
![GitHub package.json version](https://img.shields.io/github/package-json/v/agence-adeliom/lando-adeliom)
![GitHub all releases](https://img.shields.io/github/downloads/agence-adeliom/lando-adeliom/total)
![GitHub](https://img.shields.io/github/license/agence-adeliom/lando-adeliom)

## Features of this plugin:
 * A new [php service](./docs/php.md) A new recipe using a single docker image
 * A new [lamp recipe](./docs/recipes.md) using the service
 * A [Mutagen](./docs/mutagen.md) support to speed-up your Docker Desktop for MacOS

---
## Requirements
1. [Mutagen](https://mutagen.io/documentation/introduction/installation) installed and running on your host
2. Lando (obviously :))

## Installation

### Mac Installation Script
```
curl -s https://raw.githubusercontent.com/agence-adeliom/lando-adeliom/main/scripts/mac-install.sh | bash
```
The above command will download and run a script which installs the latest release of the plugin to `~/.lando/plugins/lando_adeliom`

### One-liner
```
# rm -rf ~/.lando/plugins/lando_adeliom # Delete previous install
mkdir -p ~/.lando/plugins && wget https://github.com/agence-adeliom/lando-adeliom/releases/latest/download/release.zip -O /tmp/lando-adeliom.zip && unzip -o /tmp/lando-adeliom.zip -d ~/.lando/plugins && rm /tmp/lando-adeliom.zip
```

There is currently an [issue with lando](https://github.com/lando/lando/issues/3394) where dashes in a plugin's name prevent it from working. Until this is fixed, run this command to rename the plugin:
```
mv ~/.lando/plugins/lando-adeliom ~/.lando/plugins/lando_adeliom
```

### Manual
<details>
  <summary>Show instructions</summary>

Add the plugin in `~/.lando/plugins`. Your directory will look like this:

```shell
~/.lando/plugins/lando_adeliom:
-rw-r--r--@ 1 user  group    193 Feb 21 17:07 BaseError.js
-rw-r--r--@ 1 user  group    455 Feb 21 17:07 Logger.js
-rw-r--r--@ 1 user  group   2338 Feb 21 17:07 Mutagen.js
-rw-r--r--@ 1 user  group   3766 Feb 21 17:07 MutagenConfigManipulator.js
-rw-r--r--@ 1 user  group   2465 Feb 21 17:07 app.js
-rw-r--r--@ 1 user  group    193 Feb 21 17:07 index.js
drwxr-xr-x@ 6 user  group    192 Feb 21 17:07 node_modules
-rw-r--r--@ 1 user  group   1277 Feb 21 17:07 package.json
-rw-r--r--@ 1 user  group  96577 Feb 21 17:07 package-lock.json
```

Lando will now load the plugin automatically on any `lando` CLI command. You can verify this by running `lando info -v` and searching for the line
`DEBUG ==> plugin lando_adeliom loaded from /Users/user/.lando/plugins/lando_adeliom/index.js`

</details>

-----
Made with ❤️ by [@agence-adeliom](https://github.com/agence-adeliom)
