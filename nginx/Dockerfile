FROM nginx:stable-alpine

# removes default ngnix config (welcome to nginx! removed)
RUN rm /etc/nginx/conf.d/default.conf

# copies our custom nginx config (assuming a nginx.conf exists in the same directory as this dockerfile)
ADD ./nginx.conf /etc/nginx/conf.d/nginx.conf