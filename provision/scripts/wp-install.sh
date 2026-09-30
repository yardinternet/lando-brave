#!/bin/sh
set -eu

# Acorn crashes on boot when its package cache lists a removed provider, so no wp command can clear it: https://github.com/roots/acorn/issues/270
rm -f /app/web/app/themes/*/storage/framework/cache/packages.php \
      /app/web/app/themes/*/storage/framework/cache/services.php

if wp core is-installed --network; then
  exit 0
fi

. /app/.env

wp core multisite-install \
  --url="$WP_HOME" \
  --subdomains \
  --title="$DOMAIN_CURRENT_SITE" \
  --admin_user=Minda \
  --admin_password=lando \
  --admin_email="admin@$DOMAIN_CURRENT_SITE" \
  --skip-email

wp theme enable sage --network --activate
