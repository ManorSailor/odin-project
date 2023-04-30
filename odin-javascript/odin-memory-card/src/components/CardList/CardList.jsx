import Card from "./Card";

function CardList() {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] place-items-center gap-4">
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
      <li className="">
        <Card />
      </li>
    </ul>
  );
}

export default CardList;
