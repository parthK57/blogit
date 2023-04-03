export interface createBlogBody {
  title: string;
  content: string;
  image: string;
  blogStatus: string;
}

export interface updateBlogBody {
  id: string;
  title: string;
  content: string;
  image: string;
  blogStatus: string;
}