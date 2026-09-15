#!/bin/sh
set -eu

if wp core is-installed --network; then
  exit 0
fi

set -a
. /app/.env
set +a

wp core multisite-install \
  --url="$WP_HOME" \
  --subdomains \
  --title="$DOMAIN_CURRENT_SITE" \
  --admin_user=lando \
  --admin_password=lando \
  --admin_email="admin@$DOMAIN_CURRENT_SITE" \
  --skip-email

wp theme enable sage --network --activate
