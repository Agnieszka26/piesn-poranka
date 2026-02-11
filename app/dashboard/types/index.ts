export type GalleryItem = {
  id: number;
  created_at: string;
  name_image: string;
  image_url: string;
  description: string;
  position: number;
};

export type ReviewItem = {
  id: number;
  author: string;
  text: string;
  rating: number;
  inserted_at: string;
};

export type NewsItem = {
  id: number;
  created_at: string;
  main_image: string;
  title: string;
  subtitle: string;
  description: string;
  images: string|null| string[];
};

export type HeroImageItem = {
  id: number;
  image_name: string;
  image_url: string;
  status: "selected"|"disabled"
};

export type PendingImage = {
  id: string;
  file: File;
};

export type NewsItemForm = NewsItem & {
  file: FileList;
};

export type PriceItem = {
  key: PriceKey;
  id: number;
  date: string;
  name: string;
  price: number;
  oldPrice: number | null; 
}

export type PriceKey =
  | "SEZON_NISKI"
  | "FERIE_ZIMOWE"
  | "WIELKANOC"
  | "MAJOWKA"
  | "CZERWCOWKA"
  | "WAKACJE"
  | "BOZE_NARODZENIE"
  | "SYLWESTER"
  | "TRZECH_KROLI"
  | "JACUZZI"
  | "ZWIERZETA"
  | "RABATY";