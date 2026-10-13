FROM php:8.2-apache
RUN apt-get update && apt-get install -y  --no-install-recommends \
  git unzip libzip-dev libonig-dev \
  && docker-php-ext-install pdo pdo_mysql zip \
  && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN a2enmod rewrite \
  && sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html
