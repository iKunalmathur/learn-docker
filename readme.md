1. **`docker-compose up`**

   - Start containers based on the `docker-compose.yml` configuration.

2. **`docker-compose up -d`**

   - Start containers in detached mode (in the background).

3. **`docker-compose down`**

   - Stop and remove containers, networks, and volumes defined in the `docker-compose.yml` file.

4. **`docker-compose ps`**

   - List containers started by `docker-compose`, along with their status.

5. **`docker-compose logs`**

   - Display log output from services.

6. **`docker-compose exec <service-name> <command>`**

   - Execute a command inside a running container.

7. **`docker-compose build`**

   - Build or rebuild services.

8. **`docker-compose images`**

   - List images used by services.

9. **`docker-compose pull`**

   - Pull service images from the specified registry.

10. **`docker-compose restart`**

    - Restart services.

11. **`docker-compose stop`**

    - Stop services without removing containers and networks.

12. **`docker-compose rm`**

    - Remove stopped containers.

13. **`docker-compose down -v`**

    - Stop and remove containers, networks, and volumes defined in the `docker-compose.yml` file, including volumes.

14. **`docker-compose config`**

    - Validate and view the `docker-compose.yml` file.

15. **`docker-compose scale <service-name>=<num-instances>`**

    - Scale a service to the specified number of instances.

16. **`docker-compose top`**

    - Display the running processes of a service.

17. **`docker-compose pause`**

    - Pause services.

18. **`docker-compose unpause`**
    - Unpause services.
