import Image from 'next/image';
import test from "./Frame82.png";
import icon from "./Group72.png";

export default function Page() {
  return <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-yellow-300 text-gray-900 p-4">
  <div className="lg:w-1/2 w-full lg:px-32 px-4 text-center lg:text-left">
    <div className="flex justify-center lg:justify-start items-center mb-6">
      <Image src={icon} alt="Icon" width={50} height={50} />
      <div className="px-2 font-semibold text-3xl">craftwork</div>
    </div>
    <h1 className="text-4xl lg:text-7xl font-bold mb-4 lg:mb-8">Basil</h1>
    <p className="text-xl lg:text-4xl mb-4 lg:mb-16">
      500 the most useful <br /> minimalistic icons for your<br /> design in 9 categories
    </p>
    <p className="text-lg lg:text-3xl mt-2 font-semibold">Free Icons</p>
  </div>
  <div className="lg:w-1/2 w-full lg:h-full h-64 mt-8 lg:mt-0 overflow-hidden">
    <Image className="object-cover w-full h-full" src={test} alt="Hero Image" />
  </div>
</div>
}