import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddNote = () => {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState('');

  const addNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description
        })
      });

      if (response.ok) {
        setTitle('');
        setDescription('');
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log('Failed to submit data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Link to="/" className="back-button">
        👈 Back
      </Link>

      <form onSubmit={addNote}>
        <div className="single-note">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="title"
            ></input>
          </div>

          <div>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              rows="4"
              cols="50"
              className="description"
            ></textarea>
          </div>
        </div>
        <input
          type="submit"
          value={submitted ? 'Saving Note...' : '✍ Add note'}
          disabled={submitted}
        ></input>
      </form>
    </div>
  );
};
export default AddNote;
