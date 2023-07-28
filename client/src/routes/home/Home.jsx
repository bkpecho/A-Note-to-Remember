import Notes from '../../components/Notes';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>
        &ldquo;A Note to Remember&rdquo; is a full-stack MERN (MongoDB, Express,
        React, Node.js) app that helps you keep track of important notes,
        reminders, and tasks.
      </p>
      <p>
        With our user-friendly interface and simple design, you can easily
        create, edit, and delete notes, ensuring you never forget anything
        important ever again.
      </p>

      <Notes />
    </div>
  );
};

export default Home;
