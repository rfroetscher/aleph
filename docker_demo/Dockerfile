FROM ruby:2.1.6

# install redis
RUN cd /usr/src \
    && wget -c http://download.redis.io/redis-stable.tar.gz \
    && tar xvzf redis-stable.tar.gz \
    && cd redis-stable \
    && make && make install \
    &&  echo -ne '\n' | utils/install_server.sh

# postgres client libs for streaming from redshift
RUN apt-get update && apt-get install -y postgresql-client --no-install-recommends && rm -rf /var/lib/apt/lists/*

# log location
RUN mkdir -p /var/log/aleph
ENV SERVER_LOG_ROOT /var/log/aleph

# make temp writeable
RUN chmod 777 /tmp

RUN gem install aleph_analytics --version 0.0.1.alpha
RUN echo -ne '\n \n \n \n \n' | aleph playground

COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["./entrypoint.sh"]
CMD ["aleph", "playground"]
