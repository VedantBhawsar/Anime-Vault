"use client";
import Image from "next/image";
import { InView, useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import AnimeCard, { AnimeProp } from "./AnimeCard";

function LoadMore() {
  const { ref, inView } = useInView({
    delay: 200,
  });
  const [page, setPage] = useState(2);
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    async function fetchAnime() {
      const res = await fetch(
        `https://shikimori.one/api/animes?page=${page}&limit=8`
      );
      const responseData = await res.json();
      setData([...data, ...responseData]);
      setPage((prev) => prev + 1);
    }
    fetchAnime();
  }, [inView]);

  return (
    <>
      {data && (
        <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {data.map((item: AnimeProp, index: number) => (
            <AnimeCard key={item.id} anime={item} index={index} />
          ))}
        </section>
      )}
      <section className="flex justify-center items-center w-full">
        <div>
          <Image
            ref={ref}
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
