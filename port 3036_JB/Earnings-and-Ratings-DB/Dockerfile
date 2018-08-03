FROM mysql:5.7

MAINTAINER me

ENV MYSQL_DATABASE==invesTechSol_JB \
    MYSQL_ROOT_PASSWORD==rootpasswd

ADD schema.sql /docker-entrypoint-initdb.d

EXPOSE 3306
