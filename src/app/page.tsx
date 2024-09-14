import { MoveDown } from "lucide-react";
import ProductCard from "~/component/product-card";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center gap-4">
        <div>
          <h1 className="mt-32 text-center text-8xl font-bold uppercase tracking-tighter sm:text-9xl">
            Orugo
          </h1>
          <p className="text-center text-2xl uppercase tracking-widest sm:text-3xl">
            Estampación Botánica
          </p>
        </div>
        <a
          href="#productos"
          className="rounded bg-primary-600 px-4 py-2.5 text-2xl font-bold uppercase text-white"
        >
          Nuestros Productos
        </a>
      </div>
      <main className="mt-24 flex flex-col gap-16">
        <section>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-3xl font-bold uppercase tracking-tighter">
              <span className="text-primary-600">#</span> Productos Recientes
            </h2>
            <MoveDown strokeWidth={2.5} className="size-7" />
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <ProductCard isSpecial={false} />
            <ProductCard isSpecial={false} />
            <ProductCard isSpecial={true} />
            <ProductCard isSpecial={false} />
            <ProductCard isSpecial={false} />
            <ProductCard isSpecial={true} />
            <ProductCard isSpecial={false} />
            <ProductCard isSpecial={false} />
            <ProductCard isSpecial={true} />
          </div>
        </section>
      </main>
    </>
  );
}
