export interface ISource {
  id: string | null;
  name: string;
}

export interface ITopNews {
  source: ISource;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ITopNewsResponse {
  status: string;
  totalResults: number;
  articles: ITopNews[];
}

export interface INewsParams {
  endpoint: string;
  options: {
    [key: string]: string | number | boolean;
  };
}

export interface INewsFilterParams {
  changeFilter: React.Dispatch<React.SetStateAction<string>>;
  searchValue: string;
}
