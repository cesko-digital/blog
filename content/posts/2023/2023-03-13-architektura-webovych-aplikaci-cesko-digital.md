---
title: "Architektura webových aplikací v Česko.Digital: Jak k ní přistupujeme?"
author: zoul
cover: xxx
date: 2023-03-13-05-24
slug: architektura-webovych-aplikaci-cesko-digital
description: Technické řešení aplikací bývá lepší řešit v konkrétní rovině, na
  míru potřebám zadavatele. Přesto se nám při vývoji webových aplikací v
  Česko.Digital ustálilo několik praktických principů a doporučovaných služeb, o
  které se chceme podělit.
lang: cs
---
Specifická situace Česko.Digital se dá shrnout do několika obecných principů:

* **Robustnost technického řešení.** Organizace, které k nám se svými projekty přicházejí, jsou vesměs malé a mají minimální kapacitu pro udržování a provoz svých aplikací. O ten se často stará jeden člověk, nezřídka externista, takže je potřeba volit robustní řešení, kde jsou například některé typy výpadků z principu vyloučené nebo se o jejich nápravu postará někdo jiný.
* **Technická i organizační přístupnost projektu.** Běžný komerční tým si může dovolit nového kolegu či kolegyni zaučovat klidně týdny nebo i měsíce, často má přímo celé úvazky vyhrazené na podporu nástrojů a procesů. U nás je zásadní, aby projekt kladl co nejmenší odpor novým přispěvatelům a ti se tak mohli co nejrychleji zapojit do hry. To znamená například minimum procesních překážek, dostatek vhodné automatizace nebo snadnou přístupnost a otevřenost systémů.
* **Mainstreamové technologie.** S předchozím principem souvisí též volba technologií. Pokud má být projekt dostatečně přístupný a otevřený, musí volit technologie, které jsou obecně známé, rozšířené a používané. Tento princip je důležitý i pro dlouhodobou udržitelnost projektů. Moderním technologiím jdeme naproti, ale nevybíráme je jen kvůli tomu, že jsou nové nebo v módě.

Dále popisujeme webovou architekturu [Jamstack](https://jamstack.org), která se nám v tomto kontextu dlouhodobě vyplácí, a v závěru i konkrétní námi doporučované technologie. Věříme, že zmíněná pozitiva se mohou hodit i projektům vznikajícím v jiných podmínkách.

# Statický web jako základ

**Nejjednodušší webovou aplikací je statický web**, tedy web generovaný předem, a ne na základě požadavku konkrétního návštěvníka. Takové řešení může mít nulové náklady na provoz, dokáže bez problémů prakticky neomezeně škálovat, je velmi rychlé, bezpečné, mívá minimum výpadků během provozu a je relativně dobře předatelné.

Počítáme s tím, že primární podklady k webu jsou uložené v Gitu a nahrané na centrální službu typu [GitHub](https://github.com) nebo [GitLab](https://about.gitlab.com/). Odsud se při vložení nového commitu spustí nějaká automatizace (například [GitHub Actions](https://github.com/features/actions)), která se postará o vygenerování nové verze webu a její nasazení.

**Pro samotné generování statických webů – tedy překlad z podkladů do HTML – existuje řada ověřených uživatelských nástrojů**, například [Jekyll](https://jekyllrb.com) (Ruby) nebo [Hugo](https://gohugo.io) (Go), případně programátorských frameworků jako [Next.js](https://nextjs.org).

Vygenerovaný výstup je podle naší zkušenosti ideální nahrát na nějakou CDN (content delivery network) nebo obecně řečeno službu, která se o distribuci webu postará sama, aby zadavatel nemusel řešit správu serveru. Touto službou mohou být v nejjednodušším případě [GitHub Pages](https://pages.github.com) (výhody: nulové náklady, integrace s GitHubem, možnost provozu za vlastní doménou); větší pohodlí a širší nabídku pak poskytují služby pro hosting statických webů typu [Vercel](https://vercel.com/) nebo [Netlify](https://www.netlify.com).

Můžete využít též klasické služby typu [AWS S3](https://aws.amazon.com/s3/) nebo jiné analogické služby pro ukládání statických dat s možností hostingu webu ([Google Cloud](https://cloud.google.com), [Azure](https://azure.microsoft.com/), …). Vyzkoušeli jsme si ale, že tím u jednodušších projektů zbytečně trpí pohodlí vývoje, klesá předvídatelnost nákladů, a naopak roste složitost celého řešení.

**Za zvláštní případ statického webu jde v tomto kontextu považovat i low-code a no-code nástroje** typu [solidpixels](https://www.solidpixels.com/cs) nebo [WebFlow](https://webflow.com/), ve kterých si web „naklikáte“. Jejich hlavní výhodou je, že nevyžadují tolik drahého času programátorů. Pokud si s nimi projekt – byť jen třeba v nějaké fázi vývoje nebo nějaké části – vystačí, může to být časově i finančně velmi dobré řešení.

Výsledná architektura je velmi robustní a předvídatelná a může dobře posloužit jako základ pro další funkcionalitu popisovanou níže.

# Správa obsahu

Podklady statického webu mohou být uložené přímo v repozitáři nebo se načítají přes API z externích služeb, takže výsledek není tak „statický“ nebo omezený, jak by se z názvu mohlo zdát.

**Pro správu obsahu můžete použít některý z nespočtu takzvaných headless content management systémů (CMS)**, od nejjednodušších typu [Netlify CMS](https://www.netlifycms.org/) až po složitější typu [Strapi](https://strapi.io/). Některé z nich spravují obsah ve vlastní databázi zpřístupněné přes API, jiné umějí obsah spravovat přímo v repozitáři. Velmi obecně řečeno je správa obsahu přímo v repozitáři obvykle technicky jednodušší a robustnější, ale je méně pohodlná při editaci obsahu. Pro volbu vhodného CMS je ovšem především potřeba dobře rozumět byznysovým potřebám projektu, například vědět, které části obsahu se budou měnit a jak často. Těžko zde dávat jasná doporučení čistě z technického úhlu.

![](https://lh6.googleusercontent.com/cd19M-NnT2A0VH_JJJSvcVuZNM7wyKwimHO1q_dw86PjlmUtm8RGyXbZ6Xkrbe3NBTtL4cfHuNz2EvC6VhRNli4IFrm3Qtrwm3jfotMalhTY2b3hctEYy_iWv02yPqN-KG3MFQU7Q9r6Mi7vxuDTaq4)

*Netlify CMS, jednoduché prostředí pro úpravu obsahu statického webu přímo v repozitáři.*

Jako „headless CMS“ lze použít nebo upravit i nástroje, které se tradičně používají pro dynamická řešení, například [WordPress](https://wordpress.org/) nebo [Drupal](https://www.drupal.org/).

**Při větší technické kompetenci obsluhy můžete zvolit i velmi „dřevní“ řešení a spravovat data přímo přes GitHub**. Pokud se oddělí kód od obsahu a použijí se snadno pochopitelné formáty dat, jako je [YAML](https://spacelift.io/blog/yaml) nebo [Markdown](https://www.markdownguide.org/), tak si se správou obsahu přes GitHub poradí i copywriterky a markeťáci. Díky automatizaci je náhled změn rovnou vidět na webu a spolupráce s vývojáři probíhá hladce. Třešničkou na dortu je pak to, že je i obsah verzovaný přes Git a odpadá nutnost integrovat další nástroje.

**Obecně lze vlastně za „CMS“ považovat libovolný systém, který umí data vystavit přes API** – například vznikající projekt [Moudrá síť](https://cesko.digital/projects/moudra-sit) používá jako zdroj dat svůj CRM systém postavený nad low-code platformou [Tabidoo](https://www.tabidoo.cloud/cs).

# Interaktivita na straně klienta

Pokud aplikaci potřebujete rozšířit o interaktivní prvky, dá se dnes velmi dobře použít kód na straně klienta. Technicky **jde stále o statický web, ale jeho součástí je JavaScript**, který po stažení ke klientovi zařídí potřebné „dynamické“ funkce, například filtrování dat, dynamickou navigaci a podobně.

Takto do velké míry funguje například [Volební kalkulačka](https://www.volebnikalkulacka.cz) ([GitHub](https://github.com/cesko-digital/volebni-kalkulacka-2022)), které se díky této architektuře podařilo s minimálními problémy pokrýt několik milionů návštěvníků a zobrazit desítky milionů stránek, aniž by si kdokoliv musel dělat hlavu se stabilitou serveru, náklady za přenos dat nebo výkonem webu pod náporem návštěvníků (ve špičkách to dělalo [stovky tisíc návštěvníků denně](https://plausible.io/volebnikalkulacka.cz?period=day&date=2023-01-14)). To vše v týmu složeném výhradně z dobrovolníků, kteří na projektu pracují ve volném čase, a s náklady v řádu nízkých desítek dolarů měsíčně.

**Kombinací statického webu s interaktivním klientem lze pokrýt překvapivě velký rozsah zadání.** Zároveň jde o architekturu s mnoha podstatnými výhodami. Takto postavené aplikace například bez problémů škálují, vůbec se jich netýká řada potenciálně ošemetných bezpečnostních problémů a obvykle netrpí na nečekané výpadky. Doporučujeme je proto i v případech, kdy je nutné kvůli tomuto řešení obětovat doplňkovou dynamickou funkcionalitu.

# Dynamický kód na serveru

Některé požadavky se pochopitelně nedají vyřešit statickým webem ani interaktivitou na straně klienta, například zápis dat do sdílené databáze nebo služby. Ani v tomto případě nemusíte nezbytně přejít na klasický model vyhrazeného stroje, o který se musí někdo starat a spravovat ho. Můžete zůstat do velké míry u statického webu a rozšířit ho o takzvané serverless funkce.

**Serverless funkce** (například [Vercel Serverless Functions](https://vercel.com/docs/concepts/functions/serverless-functions) nebo [Netlify Functions](https://www.netlify.com/products/functions/), obojí je abstrakce nad [AWS Lambda](https://aws.amazon.com/lambda/)) **nabízejí možnost spouštět dynamický kód na serveru, aniž by se programátor musel zabývat jeho provozem**. Programátor pouze napíše funkci, která přebere HTTP požadavek a vrátí HTTP odpověď; funkce jsou uložené v repozitáři vedle ostatních zdrojových kódů a podkladů aplikace a během nasazení vygenerovaného webu se „nějak“ dostanou na web, kde je může volat například klientská aplikace nebo služby třetích stran.

![](https://lh3.googleusercontent.com/tBMzKTogoorGfLtu2Psojr3V1zMSJHRkvYwCgk6vFHNHl6fZ11fm5hb7lkuvgCpr94TirtEzQZTWrjikkfXsdJ-UNlJK-DsLkp_EXUXaHR8sUQaqW6Dr4A7YsD02C70fXX9PxiwG8FIMIN_J_1JOulQ)

*Serverless funkce se dají použít pro integraci s jinými systémy, zde například se Slackem.*

**Hlavním omezením serverless funkcí jsou zejména** absence stavu (funkce si nemohou držet stav napříč více požadavky, existují vždy jen pro okamžik daného požadavku) a potenciálně též pomalejší studený start (první volání funkce po delší době může chvilku trvat). Na obojí se ovšem dá dívat také jako na výhodu – absence stavu mnohdy vede k rozumnější architektuře systému a pomalý studený start se dá vyřešit vhodným kešováním, které je tak či onak většinou potřeba.

**Naopak výhodou serverless funkcí jsou** nulová údržba, bezproblémové škálování, udržení omezeného povrchu pro útoky, a zejména to, že systém si díky nim může často ponechat jednodušší architekturu statického webu.

Výsledná aplikace tedy může mít podobu statického webu, ke kterému kód na straně klienta přidá interaktivní prvky (například chytrý formulář) a serverless funkce se následně postará o zpracování dat z odeslaného formuláře (například uložení do databáze). Takto přidala Volební kalkulačka do svého řešení možnost uložení výsledků a jejich sdílení s ostatními uživateli ([náhodný příklad](https://www.volebnikalkulacka.cz/share/d7e2bfab-14ad-40f3-84c5-659665df1a48)) pomocí [CockroachDB Serverless](https://www.cockroachlabs.com/get-started-cockroachdb/).

# Nasazování změn do produkce

**Každý commit do hlavní větve vede k nasazení nové verze systému.** Nebývá potřeba žádný formálnější release proces nad rámec běžných pull requestů – kdokoliv může poslat pull request a každý, kdo má právo zápisu do hlavní větve, může navrhované změny pomocí merge do hlavní větve snadno nasadit do produkce.

**Ještě před mergem u každého pull requestu proběhne sada automatických testů** – podle potřeby projektu to mohou být unit testy, integrační testy, nebo i end-to-end testy – a dotyčná verze kódu se samostatně nasadí na jedinečné testovací URL, abyste si mohli změny před mergem prohlédnout v praxi (viz například [Vercel Previews](https://vercel.com/features/previews)).

![](https://lh5.googleusercontent.com/928snNU7IORGIqodFl7f7ljBgTIAyL9uH_mvLuGM6lvDfQ7xjJcFKtyfLN7BTT_IbRgQjazs2yKCC9kR2UM3tJL_WwYE0-zABsi0eYIMr_UlTNIeVyeFN9Y2cP-JS2BQFJvHHhC0zcpSbPvXy-iONnY)

*Nasazování náhledových verzí webu a automatické testy, GitHub*

Tím, že lze z libovolného commitu snadno a rychle vyrobit samostatnou, izolovanou verzi aplikace, vzniká velmi dobrá analogie s verzovacím systémem. V Gitu jsou větve pouze ukazatelem na commit, a pokud chceme větev například vrátit o commit zpět, stačí přesunout tento ukazatel (git reset --hard). Podobně u statického webu je „produkční verze“ pouze ukazatelem na některou z vygenerovaných verzí webu. Pokud se například v nové verzi objeví chyba, jde tento „ukazatel“ snadno a rychle přehodit na předchozí, fungující verzi (viz například [Vercel Instant Rollback](https://vercel.com/docs/concepts/deployments/instant-rollback)).

**Ne všechny změny aplikace mají podobu nového commitu**, zejména pokud aplikace načítá obsah odjinud přes API, například z content-management systému (CMS). V takových případech jde zvolit pravidelné regenerování webu například pomocí [GitHub Actions](https://github.com/features/actions), nebo může CMS spustit regeneraci celého webu po změně obsahu pomocí webhooku (například [Vercel Deploy Hooks](https://vercel.com/docs/concepts/deployments/deploy-hooks)), anebo lze dokonce zařídit přegenerování pouze té části obsahu, která se měnila (viz [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) v Next.js).

# Technický stack Česko.Digital

Snažíme se respektovat technologie zvolené konkrétním projektem, ale vedle toho se nám časem vyprofilovala sada nástrojů, které často používáme a doporučujeme. Neznamená to, že jsou „nejlepší“, jen s nimi máme pozitivní zkušenosti, jsme schopni dobře posoudit jejich výhody a nevýhody pro daný projekt, můžeme je projektům nabídnout zdarma a v případě problémů s nimi umíme rychle pomoct. Primární je samozřejmě **rozumná architektura systému odpovídající požadavkům projektu**, teprve odsud by měl plynout výběr služeb a technologií.

Pro **správu kódu** používáme [GitHub](https://github.com/) (+ [GitHub Issues](https://github.com/features/issues) pro tickety a [GitHub Actions](https://github.com/features/actions) pro CI/CD). Jde sice o uzavřený software, ale má vstřícné licenční podmínky pro open source a umějí s ním pracovat prakticky všichni programátoři (a často nejen oni). Díky tomu má minimální práh pro zapojení, což je pro nás nejdůležitější. Zároveň je to dlouhodobě jeden z nejoblíbenějších vývojářských nástrojů vůbec.

Pro **hosting webů** používáme [Vercel](https://vercel.com/) (+ [Axiom](https://www.axiom.co/) pro logování a sledování metrik). Vercel jsme používali v začátcích Česko.Digital a zůstali jsme u něj zejména kvůli velkému vývojářskému komfortu a jasným, předvídatelným cenám (s [občasnými výjimkami](https://cesko-digital.slack.com/archives/CS7RPPVUL/p1676879267424139)). Axiom se nám líbí pro svou jednoduchost a bezpracnou integraci s Vercelem. Obojí je uzavřený software s rizikem vendor lock-inu, které zatím akceptujeme, protože výhody pro nás ve výsledku převažují. [Přehled architektury Vercelu](https://vercel.com/blog/behind-the-scenes-of-vercels-infrastructure) je mimochodem dobrá ilustrace principů, které popisujeme v celém tomto textu.

![](https://lh5.googleusercontent.com/JI7zSV8N-3rRHI4yHX5vb3G9m3Coy-LI_J2aSOs5zgR4k5e2nV2uemCDJGEErml4ehHOXexiCzt8v19QD9mBPAy4t_9gMCj16zmJCo7ik_yBtMWVA-vDBJ5jvSlzmIPe9FxZiZkT3qAGA_HhxqS4yw0)

*Monitoring systému v aplikaci Axiom*

Jako **programovací jazyk** nejčastěji doporučujeme [TypeScript](https://www.typescriptlang.org). Dlouhodobě se z dobrých důvodů prosazuje jako jednoznačná alternativa k JavaScriptu – typy jsou velká výhoda pro zapojení do projektu, orientaci v něm i dlouhodobou udržitelnost kódu. Velkou výhodou oproti dalším jazykům je, že může běžet na frontendu i na backendu – pokud jsou klientská aplikace i backend v jednom jazyce, mohou snadno sdílet kód a nedochází k jinde běžné duplikaci. Dělicí čára mezi frontendem a backendem navíc v poslední době není úplně pevná ([Server Side Rendering](https://nextjs.org/docs/basic-features/pages#server-side-rendering), [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components), …), takže se hodí možnost přestěhovat kus kódu podle potřeby z backendu na frontend nebo naopak.

Pro **rendering HTML** můžeme doporučit [React](https://reactjs.org), protože jde o léty osvědčenou, dospělou a konzervativní technologii, která má bezproblémovou podporu ve všech nástrojích a je hodně rozšířená mezi programátory. Obvykle React používáme rovnou v rámci frameworku [Next.js](https://nextjs.org). Zároveň respektujeme i jiné běžně používané technologie, konkrétně například zmíněná Volební kalkulačka používá [Vue](https://vuejs.org).

Pro **webovou analytiku** doporučujeme [Plausible Analytics](https://plausible.io/), protože nevyžadují cookies, jsou pro běžné použití srozumitelnější než Google Analytics, nabízejí možnost [sdílet statistiky veřejně](https://plausible.io/volebnikalkulacka.cz) a ukládají data v Evropské unii (případně si je můžete hostovat sami).

![](https://lh6.googleusercontent.com/ZVppEHBbd5z4x5E6OSc7NrfQbeQsZVM5RWQVflk6gRRuo16evAZgmxBgou_YYP4sT8Vltjj9-fceXcChnl_YGwcXB1VbvkUAX2pZ9jPUD1Yj5gj7BwY7wggC-46-GJssK85vCEESgjqaWx33Bvgxyeo)

*Statistiky návštěvnosti v Plausible Analytics*

U **content-management systémů a databází** nemáme jednu jasnou volbu a zřejmě ani nikdy mít nebudeme – jak bylo řečeno výše, tato volba je úzce vázaná na potřeby projektů a nejde rozhodnout obecně. Pro představu namátkou:

* Pro vlastní web máme data uložená zejména v [Airtable](https://airtable.com/).
* Články pro blog spravujeme v [Netlify CMS](https://www.netlifycms.org/).
* Web [Stojíme za Ukrajinou](https://www.stojimezaukrajinou.cz/) běží na [solidpixels](https://www.solidpixels.com/cs).
* Weby [Safezóna](https://www.safezona.cz/) a [Dáme roušky](https://damerousky.cz/) běží na [WebFlow](https://webflow.com/).
* Vznikající projekt [Moudrá síť](https://cesko.digital/projects/moudra-sit) má data uložená v [Tabidoo](https://www.tabidoo.cloud/cs).
* [Covid portál](https://covid.gov.cz/) používá pro správu dat [Drupal](https://www.drupal.org/).
* Pro krizový web Ministerstva zdravotnictví o covidu jsme použili [WordPress se statickou keší](https://blog.cesko.digital/2020/03/web-mzcr).

# Pojďme si o tom popovídat

Pokud máte otázky nebo byste s tímto textem chtěli divoce nesouhlasit :), [přidejte se k Česko.Digital](https://join.cesko.digital/) a zastavte se na našem Slacku v kanálu [\#ceskodigital-tech](https://cesko-digital.slack.com/archives/CS7RPPVUL), rádi si s vámi popovídáme. **Můžeme se také potkat osobně na některém z našich Hack Days**, které pořádáme pravidelně každou poslední sobotu v měsíci – sledujte [přehled událostí](https://cesko.digital/events) na našem (statickém) webu.



*K psaní textu přispěli svými poznámkami: František Pomkla, Martin Venyš, Milli Boskova, Eva Pavlíková, Petr Illek a Kryštof Korb. Díky!*

*Editorka: Silvie Mitlenerová*

*Korektorka: Romana Přibylová*