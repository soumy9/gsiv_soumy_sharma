import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Details({
  imageSrc,
  title,
  rating,
  description,
  year,
  length,
  director,
}) {
  const {id} = useParams();
  
  useEffect(()=>{}, [])
  return (
    <div>
      <picture>
        <source srcset={imageSrc} />
      </picture>
      <div>
        <h3>{title}</h3>
        <span>({rating})</span>
        <div>
          <span>{year}</span>
          <span>{length}</span>
          <span>{director}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Details;
