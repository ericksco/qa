FROM	docker.io/httpd:latest
MAINTAINER	bob@null.org
EXPOSE 80
LABEL	buildid="2019032100"
RUN	apt-get install -y bash
WORKDIR	/usr/local/apache2
ADD	httpd.conf	conf/	
ADD	html/*	htdocs/	
ADD	cgi-bin/* cgi-bin/
#RUN	apt-cache search * > htdocs/packages
