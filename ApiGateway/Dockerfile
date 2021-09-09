FROM java:11

EXPOSE 8080

WORKDIR /app

COPY target/customer-service-0.0.1-SNAPSHOT.jar .

ENTRYPOINT ["java", "-jar", "ApiGateway-0.0.1-SNAPSHOT.jar"]