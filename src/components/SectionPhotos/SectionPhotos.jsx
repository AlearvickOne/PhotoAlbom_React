// import axios from "axios";

import { useEffect, useState } from "react";
import ButtonPage from "../Buttons/ButtonPage";
import ButtonSorting from "../Buttons/ButtonSorting";
import Img from "./Img";

import "./sectionPhotos.scss";
import axios from "axios";

const linkCategory = "http://localhost:8000/categorys";
const linkPhotos = "http://localhost:8000/photos";

export default function SectionPhotos() {
  // eslint-disable-next-line no-unused-vars
  const [photoIndex, setPhotoIndex] = useState(0);
  const [categoryId, setCategoryId] = useState(0);
  const [category, setCategory] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [photosIsLoad, setPhotosIsLoad] = useState(true);

  useEffect(() => {
    setPhotosIsLoad(true);

    axios
      .get(linkCategory)
      .then((res) => setCategory(res.data))
      .catch((err) => console.log("Category", err));

    axios
      .get(`${linkPhotos}?category=${categoryId}`)
      .then((res) => setPhotos(res.data))
      .catch((err) => console.log("Photos", err))
      .finally(() => setPhotosIsLoad(false));
  }, [categoryId, photosIsLoad]);

  return (
    <section>
      <div className="background_btns">
        <div className="btns">
          <div className="btns_child">
            {category.map((el, index) => (
              <ButtonSorting key={index} id={el.id} setId={setCategoryId}>
                {el.name}
              </ButtonSorting>
            ))}
          </div>
        </div>
      </div>

      <div className="photos">
        {photoElements(photos, photoIndex, setPhotoIndex, photosIsLoad)}
      </div>

      <div className="background_page">
        <div className="btns-page_child">
          <ButtonPage
            photosArr={photos}
            photoIndex={photoIndex}
            setPhotoIndex={setPhotoIndex}
          />
        </div>
      </div>
    </section>
  );
}

const photoElements = (photos, photoIndex, setPhotoIndex, isLoading) => {
  return (
    <div className="photos_elts">
      <Img
        isLoading={isLoading}
        opacity={true}
        photosArr={photos}
        index={photoIndex - 1 === -1 ? photos.length - 1 : photoIndex - 1}
      />
      <Img
        isLoading={isLoading}
        opacity={false}
        photosArr={photos}
        index={photoIndex}
        setPhotoIndex={setPhotoIndex}
      />
      <Img
        isLoading={isLoading}
        opacity={true}
        photosArr={photos}
        index={photoIndex + 1 === photos.length ? 0 : photoIndex + 1}
      />
    </div>
  );
};
