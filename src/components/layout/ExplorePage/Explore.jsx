'use client';

import { useState } from "react";
import BreedersList from "./BreedersList";
import CategotyList from "./CategoriesList";
import PostList from "./PostList";
import ShortsList from "./ShortsList";

export function Explore() {
  const [tag, setTag] = useState('Shorts');
  return (
    <>
      {tag == 'Breeders' && <BreedersList activeTag={tag} setActiveTag={setTag} />}
      {tag == 'Posts' && <PostList activeTag={tag} setActiveTag={setTag} />}
      {tag == 'Categories' && <CategotyList activeTag={tag} setActiveTag={setTag} />}
      {tag == 'Sellers' && <CategotyList activeTag={tag} setActiveTag={setTag} />}
      {tag == 'Shorts' && <ShortsList activeTag={tag} setActiveTag={setTag} />}


    </>
  )
}