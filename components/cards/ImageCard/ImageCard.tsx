import React from "react";
import styles from './ImageCard.module.css'
import { Card, Group, Text, ThemeIcon } from "@mantine/core";

interface Props {
    title: string
    image: React.ReactNode
    icon: React.ReactNode
    body: string
    className?: string
}

const ImageCard = ({ image, icon, title, body, className }: Props) => {
  return (
    <Card shadow="sm" p="xl" radius="md" withBorder className={`${styles.container} ${className}`}>
      <Card.Section pt='xl'>
        {image}
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <ThemeIcon children={icon} size='xl' variant="light"/>
      </Group>

      <Text size="sm" color="dimmed">
        {body}
      </Text>
    </Card>
  )
};

export default ImageCard;
