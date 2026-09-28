export default function (c) {
  const { href } = c;
  return {
    title: 'Page not found',
    description: 'The page you were looking for could not be found.',
    body: `
<section class="page-hero">
  <div class="container">
    <span class="eyebrow">404</span>
    <h1>Page not found</h1>
    <p class="lead">Sorry, we couldn't find that page. 抱歉，找不到此頁面。</p>
    <div class="btn-row" style="margin-top:24px">
      <a class="btn btn-primary" href="${href('index')}">Go to homepage</a>
      <a class="btn btn-ghost" href="/zh/">返回中文首頁</a>
    </div>
  </div>
</section>
`,
  };
}
