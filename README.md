# Para el ejemplo 3:
## Pasos para levantar los contenedores mediante el docker-compose.yml
```bash
docker compose run --rm app composer create-project laravel/laravel .
docker compose up -d
docker compose exec app php artisan migrate
```
NOTA: el comando docker compose exec se ejecutará si tenemos modelos en el proyecto PHP.

## Verificando limites en contenedores
### Este ejemplo es sobre el contenedor app_laravel y el valor que retorne está en Bytes/CPUs
```bash
docker inspect -f '{{.HostConfig.Memory}}' app_laravel
docker inspect -f '{{.HostConfig.NanoCpus}}' app_laravel
docker inspect db_laravel | grep -A 40 '"HostConfig"'
```
### Ver uso de recursos de todos/un contenedor
```bash
docker stats
docker stats db_laravel
```

## Cambio de config de recursos en caliente
El siguiente ejemplo cambia los límites, del contenedor app_laravel, a RAM: 1GiB, CPUs: 2; y luego se cambian los recursos límite a varios contenedores.
```bash
docker update --memory 1g --cpus 2 app_laravel
docker update --memory 512m --cpus 1 app_laravel db_laravel
```
# Para el ejemplo 6

## Para ejecutar el proyecto en local:
```bash
npm install
npm ci --omit=dev
npm ci --only=production
node index.js
```
Ahora podemos consultar, desde un navegador, http://localhost:3000 y veremos un mensaje de la app (no importa si es error 500).

## Comando para StorageClass
```bash
kubectl get storageclass
```
