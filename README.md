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

### Images

Please try to avoid adding images directly to the repository. Česko.Digital has own data storage on [data.cesko.digital](https://data.cesko.digital). You can ask in [#p-ceskodigital_mktg](https://app.slack.com/client/TG21XF887/CMAS7H63D) Slack channel about new image upload or you can just attach links from other storage and responsible person will finalize images in a pull request before the merge. 

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

### Volunteers section (WIP)

You can also add volunteers to the article by adding this HTML: 
```html
<div class="volunteers">
    <div class="volunteer">
        <img width="80px" height="80px" src="https://data.cesko.digital/picture.jpg" alt=""/>
        <div class="name">John Doe</div>
        <div class="note">Software Developer</div>
    </div>
</div>
```

## How to Insert Press Release

Press Release is a kind of an [Article](#How-to-Insert-Article). Press Releases need to be saved in `content/press` directory. 

### Required fields

Press releases has same required fields as Articles. Just set `category: press`.

### Author

Author of Press Release should be the person, who added the press release. **Author is not visible on the website.**
