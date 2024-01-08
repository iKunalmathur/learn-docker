# Docker Commands

### Build Image :

Build an image from a Dockerfile:

```bash
docker build -t <image-name>:<tag>
```

Build an image with a specific Dockerfile:

```bash
docker build -f <Dockerfile-name> -t <image-name>:<tag>
```

### List Images :

List all Docker images:

```bash
docker images
```

### Pull Image :

Pull a Docker image from a registry:

```bash
docker pull <image-name>:<tag>
```

### Remove Image

Remove a Docker image:

```bash
docker rmi <image-name>:<tag>
```

### Run Container

Run a container from an image:

```bash
docker run <image-name>:<tag>
```

Run a container in detached mode

```bash
docker run -d <image-name>:<tag>
```

### List Containers

List all running containers:

```bash
docker ps
```

List all containers (including stopped ones):

```bash
docker ps -a
```

### Stop Container

Stop a running container:

```bash
docker stop <container-id>
```

### Remove Container

Remove a stopped container:

```bash
docker rm <container-id>
```

Remove a running container:

```bash
docker rm -f <container-id>
```

### Exec Into Container

Execute a command inside a running container interactively:

```bash
docker exec -it <container-id> <command>
```

### Logs

Display the logs of a specific container:

```bash
docker logs <container-id>
```

### Network Management

List all Docker networks:

```bash
docker network ls
```

### Volume Management

List all Docker volumes:

```bash
docker volume ls
```

### Docker Compose

Run containers defined in a Compose file:

```bash
docker-compose up
```

Run containers in detached mode and rebuild images:

```bash
docker-compose up -d --build
```

Stop and remove containers, networks, and volumes defined in a Compose file:

```bash
docker-compose down
```

Scale a service to the specified number of instances:

```bash
docker-compose scale <service-name>=<num-instances>
```

Validate and view the Compose file:

```bash
docker-compose config
```
