import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Notes = () => {
  const baseUrl = `${import.meta.env.VITE_SERVER_URL}/api/notes`;
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseUrl);
        if (!response.ok) {
          throw new Error('🏮 Failed to fetch data.');
        }

        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (error) {
        setError('🏮 Error fetching data. Please try again later.');
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul className="notes">
          <li className="add-note-button">
            <Link to={`/add-note`}>
              <span>+</span>
            </Link>
          </li>

          {data.map((item) => (
            <li key={item._id}>
              <Link to={`/note/${item._id}`}>
                <h3>{item.title}</h3>
                <p>
                  {item.description.length > 50
                    ? `${item.description.substring(0, 50)}...`
                    : item.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Notes;
