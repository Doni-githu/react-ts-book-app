import { ReactNode } from "react";


export interface IBaseProps {
    children: ReactNode
}

interface ReadingMode {
    text: boolean;
    image: boolean;
}

interface IndustryIdentifier {
    type: string;
    identifier: string;
}

interface PanelizationSummary {
    containsEpubBubbles: boolean;
    containsImageBubbles: boolean;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

interface IVolumeInfo {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    readingModes: ReadingMode;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    panelizationSummary: PanelizationSummary,
    imageLinks: ImageLinks,
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string
}

interface Price {
    amount: number;
    currencyCode: string
}

interface Offer {
    finskyOfferType: number;
    listPrice: Price,
    retailPrice: Price,
}

interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
    listPrice: Price,
    retailPrice: Price,
    buyLink: string;
    offers: Offer[]
}



export interface IBook {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: IVolumeInfo;
    saleInfo: SaleInfo;
}

export interface IBookResponse {
    items: IBook[];
    kind: string;
    totalItems: number
}