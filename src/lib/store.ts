import { atom } from "recoil";

const imageArrayAtom = atom({
  key: "imageArrayAtom",
  default: import.meta.globEager(`/contents/**/**/*.(jpg|png|jpeg|gif)`)
});

const mdxAtom = atom({
  key: "mdxAtom",
  default: import.meta.globEager(`/contents/**/**/*.(md|mdx)`)
})

export { imageArrayAtom, mdxAtom }