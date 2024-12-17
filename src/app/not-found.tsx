import Image from "next/image";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100">
      <h2 className="text-4xl font-bold text-red-500">Page Not Found</h2>
      <Image
        className="m-0 rounded-xl"
        src="/images/not-found-1024x1024.png"
        width={300}
        height={300}
        alt="Page Not Found"
        sizes="300px"
        priority={true}
        title="Page Not Found"
      />
      <div className="mt-4">
        <a href="/" className="text-blue-500 hover:underline">
          Go back to the homepage
        </a>
      </div>
    </div>
  );
}
