FROM ubuntu:latest

RUN apt -y update \
    && apt install -y \
       curl \
       wget \
       git \
       python3-pip \
       vim \
       ctags \
       cscope \
       tmux \
    && curl https://cli-assets.heroku.com/install.sh | sh \
    && update-ca-certificates \
    && curl -sL https://deb.nodesource.com/setup_10.x | bash - \
    && apt install -y nodejs \
       build-essential

RUN npm install -g yarn
