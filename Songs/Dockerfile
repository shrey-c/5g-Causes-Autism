FROM openjdk:11

EXPOSE 8083

ADD Songs/target/songs-0.0.1-SNAPSHOT.jar songs-0.0.1-SNAPSHOT.jar

ENTRYPOINT ["java", "-jar", "songs-0.0.1-SNAPSHOT.jar"]