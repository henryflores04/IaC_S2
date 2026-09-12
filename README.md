# Proyecto de prueba de despliegue usando docker compose para una triple API build

------------------------------------------------------------------------------------
Comandos para el despliegue:
# 1. Construir imágenes y levantar servicios en segundo plano
docker compose up -d --build
# 2. Verificar los contenedores en ejecución
docker compose ps
# 3. Identificar los logs en tiempo real
docker compose logs -f
# 4. Detener la infraestructura sin borrar datos
docker compose down
# 5. Detener borrando los datos
docker compose down -v
--------------------------------------------------------------------------------------

## Respuestas teóricas
# 1. Tipos de redes en docker AKA Networks Drivers
- Bridge (Predeterminada): Es el controlador de red por defecto para contenedores independientes. Crea una red privada dentro del host donde los contenedores pueden comunicarse por nombre de servicio o IP aislados del exterior.
- Host: Elimina el aislamiento entre el contenedor y el host de Docker, compartiendo directamente la interfaz de red de la máquina anfitriona.
- Overlay: Conecta múltiples demonios de Docker entre sí y permite que los servicios de Swarm o contenedores en distintos nodos físicos se comuniquen transparentemente.
- Macvlan: Asigna una dirección MAC física a un contenedor, haciéndolo aparecer como un dispositivo físico directamente conectado a la red.
- None: Desactiva toda conectividad de red para el contenedor, dejándolo totalmente aislado.
# 2. Tipos de volúmenes y almacenamiento en Docker
- Named Volumes (Volúmenes Administrados): Son almacenados en una parte del sistema de archivos del host gestionada directamente por Docker (/var/lib/docker/volumes/). Son la mejor opción para persistir datos como bases de datos relacionales.
- Bind Mounts: Vinculan una ruta o archivo específico del sistema de archivos del host hacia el contenedor. Muy útiles en entornos de desarrollo local para reflejar cambios en código fuente al instante.
- tmpfs Mounts: Guardan los datos únicamente en la memoria RAM del host. No se escriben en disco y se utilizan para almacenar información sensible o datos temporales de alto rendimiento.
