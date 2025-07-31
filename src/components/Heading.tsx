import styles from './Heading.module.css';

type HeadingProps = {
  children: string;
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.Heading}>{children}</h1>;
}
