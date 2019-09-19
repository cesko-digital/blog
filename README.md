# blog-cesko-digital

Repository for Cesko.Digital blog 

## Setup
```shell script
yarn install
yarn develop
```


## Deploy

Blog is automatically deployed using [Netlify](https://www.netlify.com/):


[![Netlify Status](https://api.netlify.com/api/v1/badges/04cf950a-9616-455f-916e-2947c52c492a/deploy-status)](https://app.netlify.com/sites/blog-cesko-digital/deploys)

You can use following commands in case of failing deploy: 
```shell script
yarn build
```

## How to Insert Article

Articles need to be saved in `content/posts` directory. Article has these required fields: 

- `cover`
- `description`
- `date` in format `YYYY-MM-DD-HH-mm`
- `author` (author's id)

You can also add `slug` field which will override generated part of slug from title. Article URL does not depend on file position in content folder. URL format is `/year/month/slug`

DO NOT USE HEADING LEVEL 1:
```markdown
# Wrong
## Correct
### Correct
...
```

## How to Insert News

News need to be saved in `content/news` directory. News are saved as YAML file which can contain multiple news, see following example: 
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