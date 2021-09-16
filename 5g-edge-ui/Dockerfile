FROM node:14.1-alpine AS builder

WORKDIR /5g-edge-ui

COPY 5g-edge-ui/package.json 5g-edge-ui/package-lock.json ./

RUN npm install

ENV PATH="/5g-edge-ui/node_modules/.bin:$PATH"

COPY /5g-edge-ui ./

RUN npm run build

FROM nginx:1.17-alpine

RUN apk --no-cache add curl

RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
    chmod +x envsubst && \
    mv envsubst /usr/local/bin

COPY 5g-edge-ui/nginx.config /etc/nginx/nginx.template

CMD ["/5g-edge-ui/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]

COPY --from=builder /5g-edge-ui/build /usr/share/nginx/html




# FROM node:14.1-alpine AS builder

# WORKDIR /opt/web
# COPY package.json package-lock.json ./
# RUN npm install

# ENV PATH="./node_modules/.bin:$PATH"

# COPY . ./
# RUN npm run build

# FROM nginx:1.17-alpine
# RUN apk --no-cache add curl
# RUN curl -L https://github.com/a8m/envsubst/releases/download/v1.1.0/envsubst-`uname -s`-`uname -m` -o envsubst && \
#     chmod +x envsubst && \
#     mv envsubst /usr/local/bin
# COPY 5g-edge-ui/nginx.config /etc/nginx/nginx.template
# CMD ["/bin/sh", "-c", "envsubst < /etc/nginx/nginx.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
# COPY --from=builder /opt/web/build /usr/share/nginx/html