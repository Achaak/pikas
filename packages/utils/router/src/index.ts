type GetLink<T extends Record<string, string>> = (
  key: keyof T,
  config?: {
    withOrigin?: boolean;
    queries?: Record<string, number | string>;
    hash?: string;
    lang?: string;
    keepHash?: boolean;
    keepSearch?: boolean;
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
  const getLink: GetLink<T> = (
    key,
    configs = {
      withOrigin: false,
      keepHash: false,
      keepSearch: false,
    }
  ) => {
    let link: string = links[key];

    // Format query
    let queriesFormatted = '';
    if (configs.queries) {
      for (const [k, v] of Object.entries(configs.queries)) {
        if (link.includes(`:${k}`)) {
          link = link.replace(`:${k}`, v.toString());
        } else {
          queriesFormatted += `${queriesFormatted ? '&' : '?'}${k}=${v}`;
        }
      }
    }

    let url = '';

    //Origin
    if (configs.withOrigin) {
      url += origin;
    }

    // Lang
    if (configs.lang) {
      url += `/${configs.lang}`;
    }

    // Link
    url += link;

    // Queries
    url += queriesFormatted;

    // Search
    if (configs.keepSearch && typeof window !== 'undefined') {
      url += window.location.search;
    }

    // Hash
    if (configs.keepHash && typeof window !== 'undefined') {
      url += window.location.hash;
    } else if (configs.hash) {
      url += `#${configs.hash}`;
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
