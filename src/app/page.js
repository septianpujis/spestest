import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center overflow-hidden">
      <nav className="bg-primary-p-100 flex flex-wrap w-full py-2 px-20 justify-between">
        <div className="text-primary-p-500 font-bold text-desktop-bodytext my-auto flex flex-nowrap">
          <Image
            src={"/images/vectors/icon-zap.svg"}
            unoptimized
            height={13}
            width={13}
            alt="icon"
            className="mr-[10px]"
          />
          STORAGE GPT
        </div>
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
          <button className="ml-base-space-7 bg-primary-p-300 text-primary-p-500 p-base-space-2 flex flex-nowrap">
            <Image
              src={"/images/vectors/icon-zap.svg"}
              unoptimized
              height={24}
              width={24}
              className="mr-[10px] w-6 h-6"
              alt="icon"
            />
            Contact Us
          </button>
        </div>
      </nav>
      <section className="bg-gradient-1 w-full text-neutral-n-000">
        <div className="container mx-auto flex flex-wrap py-16">
          <div className="w-1/2 my-auto flex flex-col pr-base-space-15">
            <h1 className="text-desktop-h-1 leading-desktop-h-1 font-desktop-h-1 mb-base-space-4">
              Automate your workflow <br />
              Quadruple your team Productivity
            </h1>
            <p className="text-desktop-subtitle leading-desktop-subtitle font-desktop-subtitle mb-base-space-11">
              We offer tailored mobile SAP software that optimizes operations,
              streamlines workflows, and maximizes profitability for storage
              facility businesses.
            </p>
            <button className="bg-primary-p-300 text-primary-p-500 p-base-space-2 flex flex-nowrap w-fit font-desktop-subtitle">
              <Image
                src={"/images/vectors/icon-zap.svg"}
                unoptimized
                height={24}
                width={24}
                className="mr-[10px] w-6 h-6"
                alt="icon"
              />
              Start Now
            </button>
          </div>
          <div className="w-1/2">
            <Image
              src={"/images/specify/bitmap-02.png"}
              width={612}
              height={409}
              unoptimized
              alt="Hero Image"
            />
          </div>
        </div>
      </section>
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
          <div className="grid w-full grid-cols-3  gap-x-[77px] gap-y-[86px] pr-[10rem]">
            <div className="flex flex-col max-w-[275px]">
              <Image
                src={"/images/vectors/icon-write.svg"}
                unoptimized
                width={24}
                height={24}
                alt="icon"
                className="mb-4"
              />
              <h4 className="font-desktop-h-4 text-desktop-h-4 leading-desktop-h-4 mb-4">
                Tailored Solutions:
              </h4>
              <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                We offer tailored mobile SAP software that optimizes operations,
                streamlines workflows, and maximizes profitability for storage
                facility businesses.
              </p>
            </div>
            <div className="flex flex-col max-w-[275px]">
              <Image
                src={"/images/vectors/icon-zap.svg"}
                unoptimized
                width={24}
                height={24}
                alt="icon"
                className="mb-4"
              />
              <h4 className="font-desktop-h-4 text-desktop-h-4 leading-desktop-h-4 mb-4">
                Enhanced Efficiency:
              </h4>
              <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                Streamline workflows, optimize resources, reduce costs, and
                improve productivity with our mobile SAP software.
              </p>
            </div>
            <div className="flex flex-col max-w-[275px]">
              <Image
                src={"/images/vectors/icon-zap.svg"}
                unoptimized
                width={24}
                height={24}
                alt="icon"
                className="mb-4"
              />
              <h4 className="font-desktop-h-4 text-desktop-h-4 leading-desktop-h-4 mb-4">
                Seamless Integration
              </h4>
              <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                Streamline workflows, optimize resources, reduce costs, and
                improve productivity with our mobile SAP software.
              </p>
            </div>
            <div className="flex flex-col max-w-[275px]">
              <Image
                src={"/images/vectors/icon-write.svg"}
                unoptimized
                width={24}
                height={24}
                alt="icon"
                className="mb-4"
              />
              <h4 className="font-desktop-h-4 text-desktop-h-4 leading-desktop-h-4 mb-4">
                Tailored Solutions:
              </h4>
              <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                Barcode scanning, RFID tracking, real-time reporting, and
                analytics are among the comprehensive features we offer to
                optimize your inventory management, order fulfillment, and
                shipping processes.
              </p>
            </div>
            <div className="flex flex-col max-w-[275px]">
              <Image
                src={"/images/vectors/icon-zap.svg"}
                unoptimized
                width={24}
                height={24}
                alt="icon"
                className="mb-4"
              />
              <h4 className="font-desktop-h-4 text-desktop-h-4 leading-desktop-h-4 mb-4">
                Dedicated Support:
              </h4>
              <p className="font-desktop-subtitle text-desktop-subtitle leading-desktop-subtitle">
                Our dedicated support team is always ready to assist you,
                providing technical support, training, and guidance for
                maximizing the potential of our mobile SAP solutions
              </p>
            </div>
            <div className="max-w-[275px] relative">
              <Image
                unoptimized
                alt="image"
                src={"images/specify/bitmap-04.png"}
                className="w-[1051px] h-[703px] absolute max-w-none "
                width={1051}
                height={703}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-neutral-n-1000 w-full text-neutral-n-000">
        <div className="container flex flex-wrap mx-auto py-base-space-13">
          <div className="w-7/12 pr-[115px]">
            <h1 className="text-desktop-h-1 leading-desktop-h-1 font-desktop-h-1 mb-base-space-9">
              Transform your storage facility operations with <br /> our
              state-of-the-art mobile SAP solutions.
            </h1>
            <p className="text-desktop-bodytext leading-desktop-bodytext font-desktop-bodytext mb-base-space-15">
              Contact us today to schedule a consultation and discover how our
              software can revolutionize your business, enabling increased
              efficiency, profitability, and customer satisfaction.
            </p>
          </div>
          <div className="relative w-5/12"></div>
        </div>
      </section>
    </main>
  );
}
