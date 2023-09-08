import { ReactNode } from "react";


export interface IBaseProps {
    children: ReactNode,
}

export interface ReadingMode {
    text: boolean;
    image: boolean;
}

export interface IndustryIdentifier {
    type: string;
    identifier: string;
}

export interface ISearchUtilProps {
    term: string;
    length: number;
    orderBy: string;
    category: string;
}

export interface PanelizationSummary {
    containsEpubBubbles?: boolean;
    containsImageBubbles?: boolean;
}

export interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
}

export interface IVolumeInfo {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description?: string;
    industryIdentifiers?: IndustryIdentifier[];
    readingModes?: ReadingMode;
    pageCount: number;
    printType: string;
    categories: string[];
    maturityRating?: string;
    allowAnonLogging?: boolean;
    contentVersion?: string;
    panelizationSummary?: PanelizationSummary,
    imageLinks: ImageLinks,
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string
}

export interface Price {
    amount: number;
    currencyCode: string
}

export interface Offer {
    finskyOfferType: number;
    listPrice: Price,
    retailPrice: Price,
}

export interface SaleInfo {
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


export interface Option {
    title: string;
}

export interface ICustomSelectProps {
    options: Option[],
    getSelected: (value: string) => void,
    label?: string;
}
