import { Accordion, AccordionItem, Button, Image, Link } from "@heroui/react";
import {
  ArrowCircleDown,
  ArrowCircleRight,
  CaretLeft,
  IconContext,
} from "@phosphor-icons/react";
import Navbar from "./components/Navbar";
import { advantages, faqs, footer, products } from "./data/data";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden bg-blue [padding:calc(6rem+150px)_0_300px]">
        {/* === accent === */}
        <div className="absolute -left-[146px] -top-[18px] size-[487px] rounded-full bg-cyan blur-[150px]" />
        <div className="absolute -bottom-[70px] -right-[226px] size-[572px] rounded-full bg-cyan blur-[150px]" />

        <div className="container relative flex justify-center">
          <div className="grid w-full max-w-[895px] gap-20 text-white">
            <div className="grid gap-2">
              <h1 className="text-[72px] font-bold leading-[100%]">
                Pharma Metrocity Group:
              </h1>
              <p className="text-[28px] font-medium leading-[150%]">
                Sebagai payung inovasi di dunia kesehatan. Kami menghubungkan
                mahasiswa, tenaga medis, dan masyarakat dengan solusi digital
                yang lebih cerdas, efisien, dan terpercaya.
              </p>
            </div>

            <div className="inline-flex items-center gap-10">
              <Button
                as={Link}
                href="#about-us"
                startContent={<ArrowCircleDown weight="fill" size={48} />}
                className="h-16 rounded-full border-2 border-white bg-transparent text-[20px] font-medium capitalize leading-[150%] text-white"
              >
                Kenali lebih dekat
              </Button>

              <div className="hidden items-center gap-6 md:inline-flex">
                <div className="h-[2px] w-[360px] rounded-full bg-white" />
                <div className="h-[2px] w-[50px] rounded-full bg-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about-us"
        className="relative z-40 -mt-[150px] overflow-hidden rounded-t-[80px] bg-white md:rounded-t-[150px]"
      >
        <div className="container grid gap-24 py-[200px]">
          <div className="grid justify-items-center gap-14">
            <h1 className="title max-w-[900px] text-center">
              Transformasi kesehatan, satu inovasi dalam satu waktu.
            </h1>

            <div className="grid items-start justify-between gap-12 md:grid-cols-2 md:gap-24">
              <p className="description">
                Sebagai payung inovasi di dunia kesehatan, Pharma Metrocity
                Group tidak hanya menghubungkan, tetapi juga membangun solusi
                digital yang terintegrasi dan berkelanjutan. Kami menghadirkan
                platform yang mendukung setiap aspek kesehatan, mulai dari
                edukasi, komunitas, hingga layanan berbasis teknologi untuk
                mahasiswa, tenaga medis, dan masyarakat luas.
              </p>

              <p className="description">
                Saat ini, kami terus mengembangkan beberapa produk yang berfokus
                pada edukasi dan komunitas kesehatan. Ke depannya, Pharma
                Metrocity Group akan terus menghadirkan inovasi baru yang dapat
                memberikan dampak lebih luas di industri kesehatan, menciptakan
                ekosistem yang lebih cerdas, efisien, dan terpercaya. 🚀
              </p>
            </div>
          </div>

          <div className="grid items-start gap-8 md:grid-cols-2">
            <IconContext.Provider
              value={{
                weight: "duotone",
                size: 64,
                className: "text-blue",
              }}
            >
              {advantages.map((item) => (
                <div
                  key={item.id}
                  className={`grid gap-6 rounded-[32px] bg-white p-8 shadow-[4px_4px_24px_rgba(0,0,0,0.15)] ${item.id === 2 || item.id === 3 ? "border-l-[12px] border-blue" : "border-none"}`}
                >
                  <item.icon />

                  <div className="grid gap-2">
                    <h2 className="max-w-[350px] text-[28px] font-bold leading-[120%] text-black">
                      {item.title}
                    </h2>
                    <p className="description">{item.desc}</p>
                  </div>
                </div>
              ))}
            </IconContext.Provider>
          </div>
        </div>
      </section>

      <section id="products" className="container grid gap-[72px] pb-[200px]">
        <h1 className="title mx-auto max-w-[800px] text-center">
          Ekosistem yang terintegrasi dan berkelanjutan
        </h1>

        <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="relative overflow-hidden rounded-[32px] bg-blue p-8 shadow-[4px_4px_24px_rgba(0,0,0,0.15)]"
            >
              <div className="relative z-10 grid gap-12">
                <Image
                  src={product.icon}
                  alt="product icon"
                  width={170}
                  height={170}
                />

                <div className="grid gap-2">
                  <h2 className="text-[32px] font-bold text-white">
                    {product.title}
                  </h2>
                  <p className="text-lg font-medium leading-[180%] text-white">
                    {product.desc}
                  </p>
                </div>

                <Button
                  endContent={<ArrowCircleRight weight="fill" size={48} />}
                  onPress={() => window.open(product.link, "_blank")}
                  className="h-16 w-max rounded-full border-2 border-white bg-transparent text-[20px] font-medium capitalize leading-[150%] text-white"
                >
                  Lihat lebih detail
                </Button>
              </div>

              <div className="absolute -right-[185px] -top-[131px] size-[500px] rounded-full bg-cyan blur-[150px]" />
            </div>
          ))}
        </div>
      </section>

      <section id="faqs" className="container grid gap-[72px] pb-[200px]">
        <h1 className="title mx-auto max-w-[800px] text-center">
          Pertanyaan yang sering diajukan tentang kami
        </h1>

        <Accordion
          motionProps={{
            variants: {
              enter: {
                y: 0,
                opacity: 1,
                height: "auto",
                transition: {
                  height: {
                    type: "spring",
                    stiffness: 500,
                    damping: 30,
                    duration: 1,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 1,
                  },
                },
              },
              exit: {
                y: -10,
                opacity: 0,
                height: 0,
                transition: {
                  height: {
                    easings: "ease",
                    duration: 0.25,
                  },
                  opacity: {
                    easings: "ease",
                    duration: 0.3,
                  },
                },
              },
            },
          }}
          defaultExpandedKeys={["0"]}
        >
          {faqs.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              indicator={
                <CaretLeft weight="bold" size={22} className="text-black" />
              }
              classNames={{
                title: "text-[20px] text-black font-bold md:text-[24px]",
                indicator: "text-black",
                content: "description pb-8",
              }}
            >
              {item.desc}
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section
        id="contacts"
        className="relative mb-[200px] overflow-hidden bg-blue"
      >
        <div className="container relative z-10 flex flex-wrap items-center justify-between gap-8 py-48">
          <h1 className="max-w-[900px] flex-1 text-[46px] font-bold capitalize leading-[110%] text-white md:text-[58px]">
            Follow sosial media kita untuk informasi selengkapnya
          </h1>

          <Button
            endContent={<ArrowCircleRight weight="fill" size={48} />}
            className="h-16 w-max rounded-full border-2 border-white bg-transparent text-[20px] font-medium capitalize leading-[150%] text-white"
          >
            Cek sosial media
          </Button>
        </div>

        {/* === accent === */}
        <div className="absolute -bottom-[150px] -left-[80px] size-[500px] rounded-full bg-cyan blur-[150px]" />
        <div className="absolute -right-[35px] -top-[186px] size-[572px] rounded-full bg-cyan blur-[150px]" />
      </section>

      <footer className="container grid gap-[200px]">
        <div className="flex flex-wrap items-start justify-between gap-16">
          <div className="grid gap-2">
            <a href="#" className="text-[48px] font-bold text-black">
              Pharma<span className="text-blue">.</span>
            </a>
            <p className="text-lg font-medium text-gray">
              Membangun inovasi Kesehatan
              <br />
              dari Hulu ke Hilir
            </p>
          </div>

          <div className="flex flex-wrap items-start gap-12 md:gap-24">
            {footer.map((item, index) => (
              <div key={index} className="grid gap-4">
                <h2 className="text-[24px] font-bold text-black">
                  {item.label}
                </h2>
                <ul className="grid gap-1">
                  {item.list.map((subitem, index) => (
                    <a
                      key={index}
                      href={subitem.href}
                      className="w-max text-lg font-medium text-gray hover:text-blue hover:underline"
                    >
                      {subitem.label}
                    </a>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center border-t-2 border-gray/20 p-6 text-center">
          <p className="text-lg font-medium capitalize text-gray">
            &copy; Pharma Metrocity Group {new Date().getFullYear()}. All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
}
