import PropTypes from "prop-types";
import "./sectionAddPhotos.scss";
import axios from "axios";
import { useState } from "react";

SectionAddPhotos.propTypes = {
  category: PropTypes.array,
  linkApiPhotos: PropTypes.string,
  setCategoryNumber: PropTypes.func,
};

export default function SectionAddPhotos({
  linkApiPhotos,
  category,
  setCategoryNumber,
}) {
  const [idCategory, setIdCategory] = useState(1);
  const [linkText, setLinkText] = useState("");

  return (
    <section className="section_add-photos">
      <h1 style={{ textAlign: "center" }}>Добавить Фото</h1>
      <form>
        <div className="form_div">
          {selectDepartamet(category, setIdCategory)}
          {textInputDepartament(linkText, setLinkText)}
        </div>

        <button
          type="button"
          onClick={() =>
            addPhoto(
              linkApiPhotos,
              idCategory,
              linkText,
              setCategoryNumber,
              setLinkText
            )
          }
        >
          Загрузить
        </button>
      </form>
    </section>
  );
}

function selectDepartamet(category, setIdCategory) {
  return (
    <span>
      <label htmlFor="category" className="item-1">
        Категория
      </label>
      <select
        id="category"
        className="item-2"
        onChange={(e) => setIdCategory(e.target.value)}
      >
        {category.map(
          (el) =>
            +el.id !== 0 && (
              <option key={el.id} value={+el.id} className="selected_option">
                {el.name}
              </option>
            )
        )}
      </select>
    </span>
  );
}

function textInputDepartament(linkText, setLinkText) {
  return (
    <span>
      <label htmlFor="textLink" className="item-1">
        Ссылка на фото
      </label>
      <input
        type="text"
        id="textLink"
        placeholder="Введите ссылку"
        className="item-2"
        value={linkText}
        onChange={(e) => setLinkText(e.target.value)}
      />
    </span>
  );
}

async function addPhoto(
  linkApiPhotos,
  idCategory,
  linkText,
  setCategoryNumber,
  setLinkText
) {
  await axios
    .post(linkApiPhotos, {
      category: idCategory,
      link: linkText,
    })
    .then(() => console.log("Фото добавлено"))
    .catch((err) => console.log("Ошибка", err))
    .finally(() => {
      setCategoryNumber(idCategory);
      setLinkText("");
    });
}
