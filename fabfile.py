from fabric import task


@task
def init_coad(c):
    c.run(create_local_yml_docker())
    print("#### Killing all container on docker ####\n")
    # c.run('docker kill $(docker ps -q)')
    print("#### Creating network coad-network on docker ####\n")
    c.run('docker network create coad-network')
    print('#### Cloning backend from github ####')
    c.run('git clone https://github.com/prefeiturasp/SME-Terceirizadas.git backend')
    print('#### Cloning frontend from github ####')
    c.run('git clone https://github.com/prefeiturasp/SME-Contratos-FrontEnd.git frontend')
    print('#### Creating env file inside backend ####')
    c.run('cd backend && {}'.format(create_env_file()))
    print('#### Up all containers: Postgres, Pg-Admin, Redis ####')
    c.run('docker-compose -f local.yml up -d')


def create_env_file():
    CONFIG_ENV = """#POSTGRES
POSTGRES_USER=admin
POSTGRES_PASSWORD=12345qw
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=coad
#PG ADMIN
PGADMIN_DEFAULT_EMAIL=weslei.souza@amcom.com.br
PGADMIN_DEFAULT_PASSWORD=adminadmin
#REDIS
REDIS_LOCATION=redis://127.0.0.1:6379/1"""
    return "echo '{}' > .env".format(CONFIG_ENV)


def create_local_yml_docker():
    CONTENT_YML_DOCKER = """version: "3.1"
services:
  
  db:
    image: postgres:11.2-alpine
    #container_name: coad-postgres
    restart: always
    environment:
      POSTGRES_USER: admin
      POSTGRES_PASSWORD: 12345qw
      POSTGRES_HOST: localhost
      POSTGRES_PORT: 5432
      POSTGRES_DB: coad
    volumes:
      - ./pgdata:/var/lib/postgresql/data    
    ports:
      - 5432:5432
    
  pgadmin4:
    image: dpage/pgadmin4
    #container_name: coad-pgadmin
    restart: always
    volumes: 
      - ./bkp:/var/lib/pgadmin/storage/
    ports:
      - 9090:80
    environment:
      PGADMIN_DEFAULT_EMAIL: weslei.souza@amcom.com.br
      PGADMIN_DEFAULT_PASSWORD: adminadmin
    depends_on:
      - db

  redis:
    image: redis:5.0.0-alpine
    #container_name: coad-redis
    ports:
      - "6379:6379"
    volumes:
      - redisdata:/data/db
  
networks:
  default:
    external:
      name: coad-network

volumes:
  pgdata:
  redisdata:
  pgadmindata:"""
    return "echo '{}' > local.yml".format(CONTENT_YML_DOCKER)
