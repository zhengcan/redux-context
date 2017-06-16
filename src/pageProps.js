let pageProps = window.pageProps || {};
let baseUrl = pageProps.baseUrl;
if (baseUrl && baseUrl !== '/' && baseUrl.endsWith('/')) {
  baseUrl = pageProps.baseUrl = baseUrl.substr(0, baseUrl.length - 1);
}
export default pageProps;
