import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <h1>Oh no! I can't find that page.</h1>
      <div className="space-y-8 mt-8">
        <Link href="/">Click here</Link> to go back.
      </div>
    </>
  );
}
