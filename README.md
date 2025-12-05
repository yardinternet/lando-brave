# Lando file for Brave projects

## Installation

```shell
composer require yard/lando-brave --dev
```

## Global configuration

Add `'/vendor/yard/lando-brave/.lando.brave.yml'` to `preLandoFiles` in your global lando config.

You can find the global lando config in `~/.lando/config.yml`:

```yml
preLandoFiles:
  - /vendor/yard/lando-brave/.lando.brave.yml
```

## Project configuration

Add a minimal `.lando.yml` to the root of your project:

```yaml
name: project

proxy:
  appserver_nginx:
    - project.lndo.site
    - subsite.project.lndo.site
  mailpit:
    - mail.project.lndo.site
  pma:
    - pma.project.lndo.site
```

Create a `.lando.base.yml` file in the root of your project with the following content:

```yaml
# This file is needed because Lando determines the app root based on the first loaded config file.
```

If you have a `provision` directory in your project's root, it is no longer necessary and can be removed.

## About us

[![banner](https://raw.githubusercontent.com/yardinternet/.github/refs/heads/main/profile/assets/small-banner-github.svg)](https://www.yard.nl/werken-bij/)
