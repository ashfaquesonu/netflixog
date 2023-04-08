import React, { useEffect, useState } from 'react';
import './Row.css';
import YouTube from 'react-youtube';
import { imageUrl, API_KEY } from '../../constants/constant';
import axios from '../../axios';

function Row(props) {
  const [movie, setMovie] = useState([]);
  const [urlId , setUrlId] = useState('');

  useEffect(() => {
    axios.get(props.url)
      .then(response => {
        console.log(response.data);
        setMovie(response.data.results);
      })
      .catch(err => {
        console.error(err);
        // Add code to handle the error, such as displaying a message to the user
      });
  }, []);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  

  const handleMovie = (id) => {
    console.log(id);
    axios.get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then(response => {
      if (response.data.results.length!==0) {
        setUrlId(response.data.results[0]);
      } else{
        console.log('empty');
      }
    });
  };


  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
          <img
            onClick={() => handleMovie(obj.id)}
            className={props.isSmall ? 'smallPoster' : 'poster'}
            src={`${imageUrl}${obj.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
     { urlId && <YouTube opts={opts} videoId={urlId.key} />}
    </div>
  );
}

export default Row;
