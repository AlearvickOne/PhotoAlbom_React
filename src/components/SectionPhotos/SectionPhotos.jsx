import ButtonPage from "../Buttons/ButtonPage";
import ButtonSorting from "../Buttons/ButtonSorting";
import "./sectionPhotos.scss";

const category = [
  { name: "Горы" },
  { name: "Природа" },
  { name: "Города" },
  { name: "Люди" },
  { name: "Животные" },
];

export default function SectionPhotos() {
  const arr = [1, 2, 3, 4, 5];
  return (
    <section>
      <section className="btns">
        <div className="btns_child">
          {category.map((el, index) => (
            <ButtonSorting key={index}>{el.name}</ButtonSorting>
          ))}
        </div>
      </section>
      <section className="photos">
        <div className="photos_elts">
          <img src="/vite.svg" alt="photo"></img>
        </div>
        <div className="btns-page_child">
          {arr.map((el, index) => (
            <ButtonPage key={index}>{el}</ButtonPage>
          ))}
        </div>
      </section>
    </section>
  );
}
