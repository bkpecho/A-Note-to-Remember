const Footer = () => {
  const authorName = 'Bryan King Pecho';
  const githubLink = 'https://github.com/bkpecho';

  return (
    <footer>
      &copy; {new Date().getFullYear()} {authorName}.{' '}
      <a href={githubLink} target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </footer>
  );
};

export default Footer;
