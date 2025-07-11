# Landofile for Brave projects

## Installation

```shell
composer require yard/lando-brave --dev
```

## Global configuration

Add `'/vendor/yard/lando-brave/.lando.brave.yml'` to `preLandoFiles` in your global lando config

## Project configuration

Add a minimal `.lando.yml` to your project:

```yaml
name: project
recipe: wordpress

proxy:
  appserver_nginx:
    - project.lndo.site
    - subsite.project.lndo.site
  mailhog:
    - mail.project.lndo.site
  pma:
    - pma.project.lndo.site
```
