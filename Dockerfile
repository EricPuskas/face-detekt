FROM node:10.16.0-jessie

WORKDIR /usr/src/get-face

COPY ./ ./
RUN npm install
RUN cd client
RUN npm install

CMD ["/bin/bash"]