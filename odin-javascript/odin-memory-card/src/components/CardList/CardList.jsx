import Card from "./Card";

function CardList() {
  return (
    <main className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] place-items-center gap-4 max-w-7xl my-0 mx-auto p-4">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}

export default CardList;
