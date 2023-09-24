reset

clear

set -e 

set -x


sudo apt install npm

npm install -g yarn

yarn add expo

npm install --global eas-cli


eas init --id 86525a5e-0c32-4a1a-9e72-3bec9d594655

