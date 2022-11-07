type GetLink<T extends Record<string, string>> = (
  key: keyof T,
  config?: {
    withOrigin?: boolean;
    queries?: Record<string, string | number>;
    hash?: string;
    lang?: string;
  }
) => string;

export const routes = <T extends Record<string, string>>({
  origin,
  links,
}: {
  origin: string;
  links: T;
}): {
  getLink: GetLink<T>;
} => {
  const getLink: GetLink<T> = (key, configs = {}) => {
    let link: string = links[key];

    let queriesFormatted = '';
    if (configs?.queries) {
      for (const [key, value] of Object.entries(configs.queries)) {
        if (link.includes(`:${key}`)) {
          link = link.replace(`:${key}`, value.toString());
        } else {
          queriesFormatted += `${queriesFormatted ? '&' : '?'}${key}=${value}`;
        }
      }
    }

    let url = '';
    if (configs?.withOrigin) {
      url += origin;
    }
    if (configs?.lang) {
      url += `/${configs?.lang}`;
    }
    url += link;
    url += queriesFormatted;
    if (configs?.hash) {
      url += `#${configs?.hash}`;
    }
    return url;
  };

  return {
    getLink,
  };
};

// const { getLink } = routes({
//   origin: 'https://www.google.com',
//   links: {
//     home: '/',
//     about: '/about/:foo',
//     contact: '/contact',
//     test: '/test/:bar',
//   },
// })

// getLink('test', {
//   queries: {},
// })
