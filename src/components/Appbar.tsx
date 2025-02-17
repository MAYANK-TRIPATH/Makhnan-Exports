import Link from "next/link";

export default function Appbar() {
  return (
    <div className="flex justify-between items-center py-4 px-8 shadow-md">
        <div className="flex items-start gap-4">
            <h1 className="font-bold text-2xl">Kesarwani Exports</h1>
        </div>
        <div className="flex gap-6 place-items-center font-semibold">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
        </div>
    </div>
  )

}