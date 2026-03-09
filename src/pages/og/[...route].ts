import { OGImageRoute } from 'astro-og-canvas';

const pages = {
  index: {
    title: 'Bruno Alves — Full Stack Developer / AI Systems',
    description:
      'Portfolio de Bruno Alves. 6+ anos criando produtos digitais, apps e sistemas com IA aplicada.',
  },
};

export const { getStaticPaths, GET } = await OGImageRoute({
  param: 'route',
  pages,
  getImageOptions: (_path, page) => ({
    title: page.title,
    description: page.description,
    bgImage: {
      path: './public/images/og.png',
      fit: 'cover',
    },
    font: {
      title: { size: 0 },
      description: { size: 0 },
    },
  }),
});
