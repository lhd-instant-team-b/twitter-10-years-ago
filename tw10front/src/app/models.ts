export class SearchQuery {
  keyword: string;
  range: number;
}

export class Tweet {
  id: number;
  text: string;
  post_url: string;
  created_at: string;
  image_list: string[];
}
