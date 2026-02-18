import { text } from 'stream/consumers';
import css from './Home.module.css';

export default function NotFound() {
  return (
    <>
      <h1 className={css.title}>404 - Page not found</h1>
      <p className={css.description} style={{ textAlign: 'center' }}>
        Sorry, the page you are looking for does not exist.
      </p>
    </>
  );
}
