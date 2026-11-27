// ARCHIVED — original inline card in Home.page.tsx before modularization
// Archived on: 2026-11-04

import { Badge, Card, CardSection, Group, Image, Text } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import image from '@/assets/images/agashi.jpg';

export function HomePage() {
  const { hovered, ref } = useHover();
  return (
    <>
      <Card w={280} shadow="sm" withBorder radius="lg" ref={ref}>
        <CardSection>
          <Image height={160} src={image} alt="Norway" />
        </CardSection>
        <Group justify="space-between" align="center" mt="md" mb="xs">
          <Group gap="xs" align="center">
            <Text fw={600}>Agashi</Text>
            <Badge color="red">Sale</Badge>
          </Group>

          <Group gap={6} align="baseline">
            <Text fw={700} size="sm">
              55 EGP
            </Text>
            <Text td="line-through" c="dimmed" size="xs">
              75 EGP
            </Text>
          </Group>
        </Group>
        <Text size="sm" c="dimmed">
          A Sudanese delicacy made with the hands of its mothers
        </Text>
      </Card>
    </>
  );
}
