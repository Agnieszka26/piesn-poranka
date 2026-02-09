import { StaticImageData } from "next/image";

export type PriceCardProps = {
  title: string;
  tag?: string;
  image: StaticImageData;
  date?: string;
  features: { icon: string; text: string }[];
  attractions?: { icon: string; text: string }[];
  oldPrice?: number;
  price?: number;
  priceInfo?: string;
  availability?: string;
};
