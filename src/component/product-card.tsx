interface Props {
  isSpecial: boolean;
}

export default function ProductCard(props: Readonly<Props>) {
  return (
    <article
      className={`flex flex-col gap-2 ${props.isSpecial && "col-span-2"}`}
    >
      <div
        className={`aspect-square w-full rounded-lg bg-gradient-to-t from-neutral-400 to-neutral-200 ${
          props.isSpecial ? "aspect-video" : "aspect-square"
        }`}
      ></div>
      <div className="flex flex-col gap-4 p-2">
        <h3 className="text-2xl leading-[1]">Producto 1</h3>
        <p className="line-clamp-2 text-lg leading-[1.5] text-neutral-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          doloribus libero doloremque, maiores voluptate non illo sit dolorum
          esse voluptatem deserunt. Amet nam asperiores dolor aliquam obcaecati
          facere dolores veritatis.
        </p>
        <p className="text-xl leading-[1]">$ 1.000</p>
      </div>
    </article>
  );
}
