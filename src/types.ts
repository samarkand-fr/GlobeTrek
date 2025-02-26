// types.ts
export type Content =
  | { type: 'paragraph'; text: string }
  | { type: 'image'; src: string; alt: string; width: number; height: number }
  | { type: 'heading'; text: string };

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  content: Content[];
  latestRead: BlogPost[];  // New field for latest read articles
}

 