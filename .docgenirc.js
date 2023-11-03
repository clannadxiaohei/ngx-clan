/**
 * @type {import('@docgeni/core').DocgeniConfig}
 */
module.exports = {
  mode: "lite",
  title: "ngx-clan",
  description: "",
  docsDir: "docs",
  navs: [
    null,
    {
      title: "Components",
      path: "components",
      lib: "ngx-clan",
      locales: {},
    },
  ],
  libs: [
    {
      name: "ngx-clan",
      rootDir: "projects/ngx-clan",
      include: [""],
      exclude: [],
      apiMode: "automatic",
      categories: [],
    },
  ],
};
