export type GalleryItem = {
    id: number;
    created_at: string;
    name_image: string;
    image_url: string;
    description: string
}

export type ReviewItem = {
    id: number;
    author: string;
    text: string;
    rating: number;
    inserted_at: string;
}

export type OfferItem = {
    id: number;
    value: string;
}