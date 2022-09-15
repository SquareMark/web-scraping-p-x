url('http://books.toscrape.com/index.html')

$x('//article[@class="product_pod"]/h4/a/@title').map(x => x.value)

$x('//article[@class="product_pod"]/div[@class="product_price"]/p[@class="price_color"]/text()').map(x => x.wholeText)

$x('//div[@class="side_categories"]/ul[@class="nav nav-list"]/li/ul/li/a/text()').map(x => x.wholeText)

$x('/html/body/div/div/div[2]/div[2]/article/p/text()[2]').map(x => x.wholeText)

$x('//*[@id="content_inner"]/article/div[1]/div[2]/p[2]/text()[2]').map(x => x.wholeText.trim())
