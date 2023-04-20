FROM node:18.15.0-alpine as frontend-build

WORKDIR /frontend

COPY package.json README.md yarn.lock ./

COPY . .

RUN yarn --frozen-lockfile

# RUN yarn build

# FROM nginx:latest
# COPY --from=frontend-build /frontend/build/ /usr/share/nginx/html

EXPOSE 3001
CMD ["yarn", "start"]
# CMD ["nginx", "-g", "daemon off;"]