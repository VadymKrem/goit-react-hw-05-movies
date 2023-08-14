import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/getMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  console.log(reviews);
  return (
    <>
      {reviews.length === 0 ? (
        <p>No reviews in this movies</p>
      ) : (
        <ul>
          {reviews.map(item => (
            <li key={item.id}>
              <h3>{item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Reviews;
