FROM openjdk:11

EXPOSE 8084

ADD Service/target/Service-0.0.1-SNAPSHOT.jar Service-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "Service-0.0.1-SNAPSHOT.jar"]