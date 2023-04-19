export declare const svgBuilder: (path: string) =>
  | {
      name: string
      transformIndexHtml: (html: string) => string
    }
  | undefined
