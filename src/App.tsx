import { Card, NavLink, Text } from '@mantine/core';
import { repos } from './static-repos';

export const App = () => {

  return (
    <div className="flex flex-row">
      <NavLink href="https://github.com/yoyomo" label="yoyomo's github pages" />
      {repos.map((repo) => (
        <Card
          className="bg-gray-100"
          shadow="sm"
          padding="xl"
          component="a"
          href={`https://yoyomo.github.io/${repo.name}/`}
          target="_blank"
        >
          <Card.Section>
            {/* <Image
              src="https://images.unsplash.com/photo-1579227114347-15d08fc37cae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
              h={160}
              alt="No way!"
            /> */}
          </Card.Section>

          <Text fw={500} size="lg" mt="md">
            {repo.name}
          </Text>

          <Text mt="xs" c="dimmed" size="sm">
            {repo.description}
          </Text>
        </Card>
      ))}
    </div>
  )
}
