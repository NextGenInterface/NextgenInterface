import Link from "next/link";
import pic from "../../public/images/404.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh] text-center">
      <div className="">
        {/* <h2 className="text-7xl font-bold">404</h2> */}
        <div className="w-96 h-96 relative">
          {/* <Image src={pic} alt={"404"} className="" /> */}
        </div>
        {/* <p>Not Found</p> */}
        <p>Could not find requested resource</p>
        <Link href="/" className="underline text-blue-700">
          Return Home
        </Link>
      </div>
    </div>
  );
}
