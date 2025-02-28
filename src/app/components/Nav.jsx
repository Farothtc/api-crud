import Link from "next/link";
export function Nav() {
  return (
    <div className="navbar bg-gray-300 flex justify-center">
      <Link href="/">
        <button className="btn btn-primary btn-outline text-xl">
          API-CRUD
        </button>
      </Link>
    </div>
  );
}
