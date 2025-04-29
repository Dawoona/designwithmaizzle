/*
|-------------------------------------------------------------------------------
| Development config                      https://maizzle.com/docs/environments
|-------------------------------------------------------------------------------
|
| This is the base configuration that Maizzle will use when you run commands
| like `npm run build` or `npm run dev`. Additional config files will
| inherit these settings, and can override them when necessary.
|
*/

/** @type {import('@maizzle/framework').Config} */
export default {
  build: {
    content: ['emails/**/*.html'],
    static: {
      source: ['images/**/*.*'],
      destination: 'images',
    },
    css: {
      inline: true,
      attributeToStyle: ['width', 'height', 'bgcolor', 'background', 'align', 'valign'],
      purge: true,
      resolveCalc: true,
      resolveProps: true,
      safe: true,
      shorthand: true,
      sixHex: true,
      tailwind: {},
    },
  },
}
