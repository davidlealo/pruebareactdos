import "../assets/css/galeria.css"; 
import { useContext } from "react";
import Context from "../Context";

export default function Favoritos() {
  const { photos } = useContext(Context);

  return (
    <div >
      <h1>Fotos favoritas</h1>
      <div >
        {photos &&
          photos
            .filter((photo) => photo.liked)
            .map((photo) => {
              return (
                <div>
                  <img
                    key={photo.id}
                    src={photo.img}
                  />
                </div>
              );
            })}
      </div>
    </div>
  );
}