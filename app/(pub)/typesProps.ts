import { StaticImageData } from "next/image";
import { PriceKey } from "../dashboard/types";

export type PriceCardProps = {
  key: PriceKey;
  title: string;
  tag?: string;
  image: StaticImageData;
  date?: string;
  features: { icon: string; text: string }[];
  attractions?: { icon: string; text: string }[];
  oldPrice: number | null;
  price?: number;
  priceInfo?: string;
  availability?: string;
  
};
