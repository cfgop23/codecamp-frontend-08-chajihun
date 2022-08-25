# FROM ubuntu:22.04

FROM node:14

COPY . /class_build
WORKDIR /class_build

RUN yarn install
RUN yarn build
CMD yarn start

