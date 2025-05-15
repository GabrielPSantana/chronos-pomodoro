import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
}

export function Heading({ children }: HeadingProps) {
    const classes = `${styles.heading} ${styles.cyan}`;

  return <h1 className={classes}>{children}</h1>;
}
