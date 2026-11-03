export const siteUrl = new URL(process.env.SYNDICATE_SITE_URL || 'https://bdimitry.github.io/syndicate-warpath/');
if (siteUrl.protocol !== 'https:' || siteUrl.username || siteUrl.password || siteUrl.search || siteUrl.hash || !siteUrl.pathname.endsWith('/')) {
  throw new Error('SYNDICATE_SITE_URL must be an HTTPS site URL ending with a slash.');
}
