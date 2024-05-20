Tohle repo obsahuje obsah a kód blogu Česko.Digital, produkční verze běží na [blog.cesko.digital](https://blog.cesko.digital).

# Použité technologie

Jde o převážně statický web napsaný v kombinaci [TypeScript](https://www.typescriptlang.org), [React](https://reactjs.org) a [Next.js](https://nextjs.org). Výsledek běží na [Vercelu](https://vercel.com/).

Celek tedy funguje zhruba tak, že načteme hromadu souborů z repository, přes Next.js a React vygenerujeme hromadu HTML a všechno to nahrneme na Vercel. Po stažení ke klientovi zase „obživne“ React aplikace, ale interaktivitu na straně klienta používáme minimálně.

Pro jednodušší práci s texty používáme [Netlify CMS](https://www.netlifycms.org), tedy „headless CMS“, které umí spravovat přímo data uložená tady v repu.

# Hacking

Základní použití je jednoduché:

```bash
$ git clone git@github.com:cesko-digital/blog.git
$ cd blog
$ npm install
$ npm run dev
```

# Kontakt

Nejvíc se probere na Slacku v kanálu [\#run-ceskodigital_web](https://cesko-digital.slack.com/archives/CHG9NA23D). Pokud nejste na Slacku Česko.Digital, [můžete se přidat tady](https://join.cesko.digital).
