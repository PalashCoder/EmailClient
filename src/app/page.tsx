import Link from "next/link";

export default function Home() {
  return (
    <center className="mt-96">
      <h1>Welcome to the Email Client</h1>
      <button className="bg-green-400 p-2 rounded-md">
        <Link href="/">Let's Started</Link>
      </button>
    </center>
  );
}
