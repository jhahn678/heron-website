import { Paper } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import styles from './IconCard.module.css'

interface Props{
  icon: React.ReactNode
  size?: number
  className?: string
}

const IconCard = ({ icon, size=64, className}: Props) => {

  const widthLargerThan1200 = useMediaQuery('(min-width: 1200px)');

  return (
  <Paper 
    className={`${styles.container} ${className}`} 
    radius={16}
    style={{ height: size, width: size }}
    sx={(theme) => ({
      background: theme.fn.gradient({ 
        from: 'primary.5', 
        to: 'primary.7', 
        deg: 170 
      })
    })}
  >
    {icon}
  </Paper>
  )
};

export default IconCard;
