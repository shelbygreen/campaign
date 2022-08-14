import {
  BackgroundImage,
  Box,
  Button,
  Card,
  Center,
  Container,
  Group,
  Text,
  Title,
} from "@mantine/core";
import { format } from "date-fns";
import React, { useEffect, useState } from "react";

export const EventsList = (props) => {
  const useMatchMedia = (mediaQuery, initialValue) => {
    const [isMatching, setIsMatching] = useState(initialValue);
    useEffect(() => {
      const watcher = window.matchMedia(mediaQuery);
      setIsMatching(watcher.matches);
      const listener = (matches) => {
        setIsMatching(matches.matches);
      };
      if (watcher.addEventListener) {
        watcher.addEventListener("change", listener);
      } else {
        watcher.addListener(listener);
      }
      return () => {
        if (watcher.removeEventListener) {
          return watcher.removeEventListener("change", listener);
        } else {
          return watcher.removeListener(listener);
        }
      };
    }, [mediaQuery]);

    return isMatching;
  };

  const isDesktopResolution = useMatchMedia("(min-width:650px)", true);

  return (
    <Container pt={10}>
      {props.data.map((event) => (
        <Card shadow="sm" p="lg" radius="md" withBorder mt={10} key={event.id}>
          {isDesktopResolution ? (
            <Group position="apart" mt="md" mb="xs">
              <Box>
                <Text size="sm" color="grey" weight={700}>
                  {format(new Date(event.fields.Date), "E, MMM do")} @{" "}
                  {format(new Date(event.fields.Date), "h")}
                  {format(new Date(event.fields.Date), "HH") >= 12
                    ? "pm"
                    : "am"}{" "}
                  EDT
                </Text>
                <Title order={2}>{event.fields.Title}!</Title>
                <Text size="sm" color="dimmed">
                  {event.fields.Location}
                </Text>
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  component="a"
                  href={"/event/" + event.fields.id}
                >
                  See details and times -{">"}
                </Button>
              </Box>
              <Box>
                <BackgroundImage
                  // src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                  // src={event.fields.Image}
                  src={event.fields.Photo}
                  radius="sm"
                >
                  <Center sx={{ height: 150, width: 300 }}>
                    <Box>
                      <Text color="#fff" align="center" size="50">
                        {event.fields.Title}
                      </Text>
                      <Text color="#fff" align="center" weight={700} size="xl">
                        {event.fields.Location}
                      </Text>
                      <Text color="#fff" align="center">
                        {format(new Date(event.fields.Date), "EEEE")} @{" "}
                        {format(new Date(event.fields.Date), "h")}
                        {format(new Date(event.fields.Date), "HH") >= 12
                          ? "pm"
                          : "am"}{" "}
                        EDT
                      </Text>
                    </Box>
                  </Center>
                </BackgroundImage>
              </Box>
            </Group>
          ) : (
            <Group position="apart" mt="md" mb="xs">
              <Center sx={{ width: "100%", height: "100%" }}>
                <BackgroundImage
                  // src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
                  // src={event.fields.Image}
                  src={event.fields.Photo}
                  radius="sm"
                  component="div"
                  m="auto"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Center sx={{ height: 150, width: 300 }}>
                    <Box>
                      <Text color="#fff" align="center" size="50">
                        {event.fields.Title}
                      </Text>
                      <Text color="#fff" align="center" weight={700} size="xl">
                        {event.fields.Location}
                      </Text>
                      <Text color="#fff" align="center">
                        {format(new Date(event.fields.Date), "EEEE")} @{" "}
                        {format(new Date(event.fields.Date), "h")}
                        {format(new Date(event.fields.Date), "HH") >= 12
                          ? "pm"
                          : "am"}{" "}
                        EDT
                      </Text>
                    </Box>
                  </Center>
                </BackgroundImage>
              </Center>
              <Box sx={{ width: "100%" }}>
                <Text size="sm" color="grey" weight={700}>
                  {format(new Date(event.fields.Date), "E, MMM do")} @{" "}
                  {format(new Date(event.fields.Date), "h")}
                  {format(new Date(event.fields.Date), "HH") >= 12
                    ? "pm"
                    : "am"}{" "}
                  EDT
                </Text>
                <Title order={2}>{event.fields.Title}!</Title>
                <Text size="sm" color="dimmed">
                  {event.fields.Location}
                </Text>
                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                  component="a"
                  href={"/event/" + event.fields.id}
                >
                  See details and times -{">"}
                </Button>
              </Box>
            </Group>
          )}
        </Card>
      ))}
    </Container>
  );

  // return <h1>{props.data[0].fields.Title}</h1>;
};
