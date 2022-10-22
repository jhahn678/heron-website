import React from "react";
import styles from './ContactForm.module.css'

interface Props {
    className?: string
}

const ContactForm = ({ className }: Props) => {
  return (
    <div className={`${styles.form} ${className}`}>

    </div>
  )
};

export default ContactForm;
