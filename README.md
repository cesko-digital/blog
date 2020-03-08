# Česko.Digital Blog

## Setup

```shell script
yarn install
yarn develop
```

## Deploy

Blog is automatically deployed using [Netlify](https://www.netlify.com/):

[![Netlify Status](https://api.netlify.com/api/v1/badges/04cf950a-9616-455f-916e-2947c52c492a/deploy-status)](https://app.netlify.com/sites/blog-cesko-digital/deploys)

You can use the following commands in case of a failing deploy:

```shell script
yarn build
```

## How to Insert Article

Articles need to be saved in `content/posts` directory. 

### Required fields

Article has these required fields: 

- `cover` (as an URL)
- `description`
- `date` in format `YYYY-MM-DD-HH-mm`
- `author` (author's id)

You can also add a `slug` field which will override the generated part of slug from title. Article URL does not depend on file position in content folder. URL format is `/year/month/slug`

### Featured posts

You can use `featured: true` if you want to highlight older article on the main page. Please don't forget to remove this field for older articles if you are inserting a new one. 

### Headings
Do not use heading level 1:

```markdown
# Wrong
## Correct
### Correct
...
```

## How to Insert News Items

News items are stored in the `content/news.yaml` file in the following format:

```yaml
- type: news
  date: 2019-09-16-12-00
  text: Michal Bláha byl hostem podcastu Proti proudu. Poslechněte si jeho názory o e-govermentu.
  url: https://cesko.digital
- type: news
  date: 2019-09-25-12-00
  text: Dnes je setkání Česko.Digital
  url: https://cesko.digital
```
