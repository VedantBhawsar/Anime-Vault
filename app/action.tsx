"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export async function fetchAnime(page: number) {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8`
  );
  const data = await res.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
}
