export function ItemsInd({ item }) {
  return (
    <div className="card bg-base-100 w-96 shadow-sm text-white">
      <figure>
        <img src={item.image} alt="Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item.name.toUpperCase()}</h2>
        <p>{item.desc}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{item.price + "$"}</button>
        </div>
      </div>
    </div>
  );
}
