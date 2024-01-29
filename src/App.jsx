import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import SectionAddPhotos from "./components/SectionAddPhotos";
import SectionPhotos from "./components/SectionPhotos/SectionPhotos";
import "./index.scss";

import axios from "axios";

const linkCategory = "http://localhost:8000/categorys";
const linkPhotos = "http://localhost:8000/photos/";

export default function App() {
  const [categoryId, setCategoryId] = useState(0);
  const [category, setCategory] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    start(setCategory, categoryId, setPhotos);
  }, [categoryId, setPhotos, setCategory]);

  return (
    <>
      <div className="container">
        <Header />
        <main>
          <SectionPhotos
            photos={photos}
            category={category}
            setCategoryId={setCategoryId}
          />
          <SectionAddPhotos
            category={category}
            linkApiPhotos={linkPhotos}
            setCategoryNumber={setCategoryId}
          />
        </main>
      </div>
    </>
  );
}

const start = async (setCategory, categoryId, setPhotos) => {
  await axios
    .get(linkCategory)
    .then((res) => setCategory(res.data))
    .catch((err) => console.log("Category", err));

  await axios
    .get(`${linkPhotos}?category=${categoryId === 0 ? "" : categoryId}`)
    .then((res) => setPhotos(res.data))
    .catch((err) => console.log("Photos", err));
};
