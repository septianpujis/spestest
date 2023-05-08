import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <>
      <head>
        <title>Contact Us</title>
      </head>
      <main className="flex min-h-screen flex-col items-center overflow-hidden">
        <nav className="bg-primary-p-100 flex flex-wrap w-full py-2 px-20 justify-between">
          <Link
            href="/"
            className="text-primary-p-500 font-bold text-desktop-bodytext my-auto flex flex-nowrap"
          >
            <Image
              src={"/images/vectors/icon-zap.svg"}
              unoptimized
              height={13}
              width={13}
              alt="icon"
              className="mr-[10px]"
            />
            STORAGE GPT
          </Link>
          <div className="flex text-primary-p-400">
            <ul className="flex flex-wrap gap-base-space-7 content-center">
              <li className="p-base-space-2 cursor-pointer hover:mix-blend-multiply bg-primary-p-100">
                Nav Item
              </li>
              <li className="p-base-space-2 cursor-pointer hover:mix-blend-multiply bg-primary-p-100">
                Nav Item
              </li>
              <li className="p-base-space-2 cursor-pointer hover:mix-blend-multiply bg-primary-p-100">
                Nav Item
              </li>
              <li className="p-base-space-2 cursor-pointer hover:mix-blend-multiply bg-primary-p-100">
                Nav Item
              </li>
              <li className="p-base-space-2 cursor-pointer hover:mix-blend-multiply bg-primary-p-100">
                Nav Item
              </li>
            </ul>
            <Link
              href="/about"
              className="ml-base-space-7 bg-primary-p-300 text-primary-p-500 p-base-space-2 flex flex-nowrap"
            >
              <Image
                src={"/images/vectors/icon-zap.svg"}
                unoptimized
                height={24}
                width={24}
                className="mr-[10px] w-6 h-6"
                alt="icon"
              />
              Contact Us
            </Link>
          </div>
        </nav>
        <section className="bg-white w-full text-neutral-n-1000">
          <div className="container flex flex-wrap mx-auto py-16">
            <div className="flex flex-col items-center mx-auto mb-[86px]">
              <h2 className="font-desktop-h-2 text-desktop-h-2 leading-desktop-h-2 mb-6">
                Key Benefits:
              </h2>
              <h4 className="font-desktop-h-4 text-desktop-h-4 leading-desktop-h-4 w-[870px] text-center mx-auto">
                Our expertise lies in developing customized mobile SAP solutions
                that seamlessly integrate with your existing SAP systems
              </h4>
            </div>
            <div className="w-full flex gap-6">
              <div className="relative w-[670px]">
                <Image
                  alt="image"
                  unoptimized
                  src={"/images/specify/bitmap-03.png"}
                  width={670}
                  height={448}
                />
                <Image
                  alt="icon"
                  unoptimized
                  width={46}
                  height={46}
                  src={"/images/vectors/icon-zap.svg"}
                  className="absolute bottom-10 -right-10"
                />
              </div>
              <div className="w-2/5 mt-6">
                <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-4">
                  Tailored Solutions
                </h5>
                <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle mb-base-space-13">
                  Streamline workflows, optimize resources, reduce costs, and
                  improve productivity with our mobile SAP software.
                </p>
                <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-4">
                  Tailored Solutions
                </h5>
                <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle mb-base-space-13">
                  Streamline workflows, optimize resources, reduce costs, and
                  improve productivity with our mobile SAP software.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gradient-1 w-full text-neutral-n-000 py-16 ">
          <div className=" mx-auto mb-10 flex justify-center">
            <hi className="text-desktop-h-1 leading-desktop-h-1 font-desktop-h-1">
              Tailored Solutions
            </hi>
          </div>
          <div className="overflow-scroll">
            <div className="container mx-auto flex flex-wrap">
              <div className="flex overflow-visible gap-base-space-7 py-10">
                <div className="p-base-space-7 bg-primary-p-100 flex flex-col min-w-[389px] h-[508px] text-neutral-n-1000 shadow-[0px_10px_20px_rgba(0,0,0,0.45)]">
                  <Image
                    src={"/images/specify/bitmap-03.png"}
                    width={321}
                    height={231}
                    unoptimized
                    alt="card Image"
                    className="mb-base-space-9"
                  />
                  <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-6">
                    Tailored Solutions
                  </h5>
                  <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                    Streamline workflows, optimize resources, reduce costs, and
                    improve productivity with our mobile SAP software.
                  </p>
                </div>
                <div className="p-base-space-7 bg-primary-p-100 flex flex-col min-w-[389px] h-[508px] text-neutral-n-1000 shadow-[0px_10px_20px_rgba(0,0,0,0.45)]">
                  <Image
                    src={"/images/specify/bitmap-02.png"}
                    width={321}
                    height={231}
                    unoptimized
                    alt="card Image"
                    className="mb-base-space-9"
                  />
                  <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-6">
                    Tailored Solutions
                  </h5>
                  <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                    Streamline workflows, optimize resources, reduce costs, and
                    improve productivity with our mobile SAP software.
                  </p>
                </div>
                <div className="p-base-space-7 bg-primary-p-100 flex flex-col min-w-[389px] h-[508px] text-neutral-n-1000 shadow-[0px_10px_20px_rgba(0,0,0,0.45)]">
                  <Image
                    src={"/images/specify/bitmap-01.png"}
                    width={321}
                    height={231}
                    unoptimized
                    alt="card Image"
                    className="mb-base-space-9"
                  />
                  <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-6">
                    Tailored Solutions
                  </h5>
                  <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                    Streamline workflows, optimize resources, reduce costs, and
                    improve productivity with our mobile SAP software.
                  </p>
                </div>
                <div className="p-base-space-7 bg-primary-p-100 flex flex-col min-w-[389px] h-[508px] text-neutral-n-1000 shadow-[0px_10px_20px_rgba(0,0,0,0.45)]">
                  <Image
                    src={"/images/specify/bitmap-05.png"}
                    width={321}
                    height={231}
                    unoptimized
                    alt="card Image"
                    className="mb-base-space-9"
                  />
                  <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-6">
                    Tailored Solutions
                  </h5>
                  <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                    Streamline workflows, optimize resources, reduce costs, and
                    improve productivity with our mobile SAP software.
                  </p>
                </div>
                <div className="p-base-space-7 bg-primary-p-100 flex flex-col min-w-[389px] h-[508px] text-neutral-n-1000 shadow-[0px_10px_20px_rgba(0,0,0,0.45)]">
                  <Image
                    src={"/images/specify/bitmap-04.png"}
                    width={321}
                    height={231}
                    unoptimized
                    alt="card Image"
                    className="mb-base-space-9"
                  />
                  <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-6">
                    Tailored Solutions
                  </h5>
                  <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                    Streamline workflows, optimize resources, reduce costs, and
                    improve productivity with our mobile SAP software.
                  </p>
                </div>
                <div className="p-base-space-7 bg-primary-p-100 flex flex-col min-w-[389px] h-[508px] text-neutral-n-1000 shadow-[0px_10px_20px_rgba(0,0,0,0.45)]">
                  <Image
                    src={"/images/specify/bitmap-06.png"}
                    width={321}
                    height={231}
                    unoptimized
                    alt="card Image"
                    className="mb-base-space-9"
                  />
                  <h5 className="font-desktop-h-5 text-desktop-h-5 leading-desktop-h-5 mb-base-space-6">
                    Tailored Solutions
                  </h5>
                  <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                    Streamline workflows, optimize resources, reduce costs, and
                    improve productivity with our mobile SAP software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary-p-200 w-full text-neutral-n-1000 overflow-hidden">
          <div className="container flex flex-wrap mx-auto py-base-space-13">
            <div className="w-7/12 pr-[115px] my-auto">
              <h1 className="text-desktop-h-1 leading-desktop-h-1 font-desktop-h-1 mb-base-space-9">
                Transform your storage facility operations with <br /> our
                state-of-the-art mobile SAP solutions.
              </h1>
              <p className="text-desktop-bodytext leading-desktop-bodytext font-desktop-bodytext">
                Contact us today to schedule a consultation and discover how our
                software can revolutionize your business, enabling increased
                efficiency, profitability, and customer satisfaction.
              </p>
            </div>
            <div className="relative w-5/12">
              <Image
                src={"/images/specify/bitmap-04.png"}
                width={771}
                height={516}
                unoptimized
                alt="Hero Image"
                className="max-w-none"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
