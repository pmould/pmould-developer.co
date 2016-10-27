export interface Project {
  title: {
    rendered;
  },
  content: {
    rendered;
  },
  _links: {
    'wp:term': {
    [index: number] : {taxonomy: string;embeddable: boolean; href: string }
    }
  }
}

export interface Category {
  name;
}