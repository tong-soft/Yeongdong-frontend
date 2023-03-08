# Base 이미지 FROM node:14.15.1-alpine3.12
FROM node:19.2.0

# 빌드된 산출물을 실행시키기 위해 필요한 serve 모듈
RUN yarn global add serve



# 작업 공간
RUN mkdir /app
WORKDIR /app



# build
RUN yarn build

# 빌드된 산출물 도커 이미지로 복사
RUN mkdir ./build
COPY ./build ./build


# 실행 명령어
ENTRYPOINT ["serve", "-s", "build"]