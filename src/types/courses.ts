export type Tag = string;

export interface Course {
  id: string;
  name: string;
  image: string; // path
  bgColor: string; // in HEX
  tags: Tag[];
}
