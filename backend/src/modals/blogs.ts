export interface createBlogBody {
  title: string;
  content: string;
  image: string;
  blogstatus: string;
  tags: string;
}

export interface updateBlogBody {
  id: string;
  title: string;
  content: string;
  image: string;
  blogStatus: string;
  tags: string;
}