FROM node:18.15.0-alpine as frontend-build

WORKDIR /frontend

COPY package.json README.md yarn.lock ./

COPY . .

RUN yarn --frozen-lockfile

# RUN yarn build

# ENV VARS HERE IF REQUIRED FOR IP ADDRESS OF BACKEND
# ENV REACT_APP_baseAPIURL=192.168.49.2:31669

# FROM nginx:latest
# COPY --from=frontend-build /frontend/build/ /usr/share/nginx/html

EXPOSE 3000

CMD ["yarn", "start"]