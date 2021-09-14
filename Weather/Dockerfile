FROM openjdk:11

EXPOSE 8082

ADD Weather/target/Weather-0.0.1-SNAPSHOT.jar Weather-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "Weather-0.0.1-SNAPSHOT.jar"]