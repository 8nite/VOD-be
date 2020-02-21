FROM node:12.13

RUN apt-get update && apt-get install -yV \
  libkrb5-dev \
  graphicsmagick \
  build-essential \
  net-tools \
  vim \
  tree \
  openssl \
  tcpdump \
  whois \
  socat \
  iproute \
  curl \
  wget \
  dnsutils \
  Netcat
ARG NODE_ENV

RUN curl -o- -L https://yarnpkg.com/install.sh | bash

WORKDIR /opt/app-root/

COPY package.json .npmrc yarn.lock /opt/app-root/
RUN $HOME/.yarn/bin/yarn install

COPY . /opt/app-root

RUN chmod -R 770 /opt/app-root \
	&& chown :0 -R /opt/app-root \
	&& date +"%Y-%m-%dT%H:%M:%S.%3NZ" >> /opt/app-root/.build-datetime

CMD ["npm", "start"]
