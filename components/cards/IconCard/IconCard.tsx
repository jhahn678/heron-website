import { DefaultProps, Paper } from "@mantine/core";
import React from "react";
import styles from './IconCard.module.css'

interface Props{
  icon: React.ReactNode
  size?: number
  className?: string
}

const IconCard = ({ icon, size=64, className}: Props) => {
  return (
  <Paper 
    className={`${styles.container} ${className}`} 
    radius={16}
    style={{ height: size, width: size }}
    sx={(theme) => ({
      background: theme.fn.gradient({ from: 'primary.1', to: 'primary.3', deg: 170 })
    })}
  >
    {icon}
  </Paper>
  )
};

export default IconCard;
