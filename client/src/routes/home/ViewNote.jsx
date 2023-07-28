import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const ViewNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes/${id}`;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error('🏮 Failed to fetch data.');
        }

        const data = await response.json();
        setTitle(data.title);
        setDescription(data.description);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateNote = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(baseUrl, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          description
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 2000);
      } else {
        console.log('Failed to submit data');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeNote = async () => {
    try {
      const response = await fetch(baseUrl, {
        method: 'DELETE'
      });

      if (response.ok) {
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="breadcrumb-nav">
        <Link to="/" className="back-button">
          👈 Back
        </Link>

        <button onClick={removeNote} className="delete">
          ❌ Remove
        </button>
      </div>

      <form onSubmit={updateNote}>
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
          value={submitted ? 'Updating Note...' : '💾 Update note'}
          disabled={submitted}
        ></input>
      </form>
    </div>
  );
};
export default ViewNote;
