import { Card, Grid, Image, NavLink, Text } from "@mantine/core";
import { images } from "./assets";
import { repos } from "./static-repos";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="vh-100 flex flex-col items-center">
        <NavLink
          href="https://github.com/yoyomo"
          label="yoyomo's github pages"
          className="py-8 text-center"
          classNames={{ label: "text-2xl font-bold" }}
        />
        <Grid grow className="mx-2 items-center" justify="center">
          {repos.map((repo) => (
            <Card
              key={repo.name}
              className="m-2 h-full w-96 items-center rounded-md"
              shadow="sm"
              padding="xl"
              component="a"
              withBorder
              href={`https://yoyomo.github.io/${repo.name}/`}
              target="_blank"
            >
              {images[repo.name] && (
                <Card.Section>
                  <Image
                    src={images[repo.name]}
                    w={180}
                    h={180}
                    alt={repo.name}
                  />
                </Card.Section>
              )}

              <Text fw={500} size="lg" mt="md">
                {repo.name}
              </Text>

              <Text mt="xs" c="dimmed" size="sm">
                {repo.description}
              </Text>
            </Card>
          ))}
        </Grid>
      </div>
    </div>
  );
};
