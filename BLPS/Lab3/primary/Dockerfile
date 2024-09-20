FROM gradle:7.6-jdk17 as builder

WORKDIR /app

COPY ../build.gradle settings.gradle ./
RUN gradle build --no-daemon || return 0
COPY . .

RUN gradle clean build -x test --no-daemon

FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=builder /app/build/libs/*.jar app.jar

EXPOSE 13980

ENTRYPOINT ["java", "-jar", "app.jar"]
