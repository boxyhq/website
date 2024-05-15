import ScalarDocusaurus from '@scalar/docusaurus';

module.exports = async (context, options) => {
  const scalarDocusaurus = ScalarDocusaurus(context, options);
  const contentLoaded = scalarDocusaurus.contentLoaded;
  scalarDocusaurus.contentLoaded = async (params) => {
    await contentLoaded(params);

    // remove /api item from navbar
    context.siteConfig.themeConfig.navbar.items =
      context.siteConfig.themeConfig.navbar.items.slice(
        0,
        context.siteConfig.themeConfig.navbar.items.length - 1
      );
  };
  return scalarDocusaurus;
};
