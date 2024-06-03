import { Card, Image, NavLink, Text } from "@mantine/core";
import { images } from "./assets";
import { repos } from "./static-repos";

export const App = () => {
  console.log(images);
  return (
    <div className="flex flex-col bg-gray-100">
      <NavLink
        href="https://github.com/yoyomo"
        label="yoyomo's github pages"
        className="text-center text-lg font-bold"
      />
      {repos.map((repo) => (
        <Card
          key={repo.name}
          className="mx-4 my-2 items-center"
          shadow="sm"
          padding="xl"
          component="a"
          withBorder
          href={`https://yoyomo.github.io/${repo.name}/`}
          target="_blank"
        >
          {images[repo.name] && (
            <Card.Section>
              <Image src={images[repo.name]} w={160} h={160} alt={repo.name} />
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
    </div>
  );
};
