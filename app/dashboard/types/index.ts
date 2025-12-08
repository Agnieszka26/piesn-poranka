export type GalleryItem = {
    id: number;
    title: string;
    description: string;
    path: string;
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