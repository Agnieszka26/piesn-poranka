export type GalleryItem = {
  id: number;
  created_at: string;
  name_image: string;
  image_url: string;
  description: string;
};

export type ReviewItem = {
  id: number;
  author: string;
  text: string;
  rating: number;
  inserted_at: string;
};

export type OfferItem = {
  id: number;
  created_at: string;
  main_image: string;
  title: string;
  subtitle: string;
  description: string;
  images: string|null;
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

export type OfferItemForm = OfferItem & {
  file: FileList;
};