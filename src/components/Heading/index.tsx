import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
  return <h2 className={styles['heading']}>{children}</h2>;
}
