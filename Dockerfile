FROM	docker.io/httpd:latest
MAINTAINER	bob@null.org
EXPOSE 80
WORKDIR	/usr/local/apache2
ADD	httpd.conf	conf.d/	
ADD	html/*	htdocs/	
ADD	cgi-bin .
LABEL	buildid=1548104706
