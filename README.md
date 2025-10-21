# Landofile for Brave projects

## Installation

```shell
composer require yard/lando-brave --dev
```

## Global configuration

Add `'/vendor/yard/lando-brave/.lando.brave.yml'` to `preLandoFiles` in your global lando config

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

Create a `.lndo.base.yml` file in the root of your project with the following content:

```yaml
# This file is needed because Lando determines the app root based on the first loaded config file.
```
