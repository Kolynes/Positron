interface IJsonResponse {
    status: boolean;
    data?: any;
    error?: string | {[key: string]: string};
    hasNextPage?: boolean;
    nextPage?: number;
    previousPage?: number;
    numberOfPages?: number;
}