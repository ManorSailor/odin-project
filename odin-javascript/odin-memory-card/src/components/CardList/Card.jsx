function Card() {
  return (
    <div className="card w-72 bg-base-100 shadow-xl cursor-pointer hover:scale-[1.025] transition-transform">
      <figure className="px-5 pt-5">
        <img
          src="https://picsum.photos/400"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body p-3 items-center text-center">
        <h2 className="card-title">Random Picture!</h2>
      </div>
    </div>
  );
}

export default Card;
