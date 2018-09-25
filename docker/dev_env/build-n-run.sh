#!/usr/bin/env bash

script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
clone_root=${script_dir}/../../
cd ${script_dir}

docker build -t optimal-route-ui .

cd ${clone_root}

docker run -it -p 30000:3000 -v $(pwd):/code optimal-route-ui /bin/bash 
