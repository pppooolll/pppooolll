import { atom } from "recoil";

interface portfolioAtomProps {
  name:string;
  tags:string[];
}

const imageArrayAtom = atom({
  key: "imageArrayAtom",
  default: import.meta.globEager(`/contents/**/**/*.(jpg|png|jpeg|gif)`)
});

const mdxAtom = atom({
  key: "mdxAtom",
  default: import.meta.globEager(`/contents/**/**/*.(md|mdx)`)
})

const portfolioAtom = atom({
  key:"portfolioAtom",
  default: {} as portfolioAtomProps
})

export { imageArrayAtom, mdxAtom, portfolioAtom }