---
title: "Od perfekcionismu k flexibilitě: Jak se vytvářela nová verze webu
  Nedlužím státu?"
author: zaneta
cover: https://data.cesko.digital/img/nedluzim_statu_1.5.png
date: 2021-10-12-03-03
slug: rozhovor-nova-verze-webu-nedluzim-statu
description: Od spuštění nové verze stránek projektu Nedlužím státu uběhl měsíc.
  A my jsme těsně předtím vyzpovídali dobrovolníky, kteří se na jeho tvorbě
  podíleli. UX designér Tomáš Svěrák a tech lead Míla Votradovec vám prozradí,
  proč přišli s úplně novým designem, jaké problémy je při vývoji potkaly a proč
  by chtěli web za pár let vypnout.
lang: cs
tags:
    - nedluzim-statu
---
### **Jak náročný byl přesun z vývojového prostředí v Česko.Digital pod zadavatele projektu, Radka Hábla? Kolik potřeboval času a naskytly se během projektu nějaké nesnáze?**

*Míla*: Samotný akt toho přesunu vlastně ani tak složitý nebyl, a to díky použité technologii a moderním standardům, které máme nastavené pro naši práci. Celá infrastruktura běží na AWS, což je cloud od Amazonu, a je popsaná ve verzovatelném kódu. Takže přesun trval asi jen den, když zahrnu přepis, přenastavení a zprovoznění. Komplikovanější už pak bylo nalézt shodu ohledně správnosti našeho řešení.

### **Tomáši, ty jsi do projektu Nedlužím státu nastoupil nově a přišel jsi úplně s novým pohledem na vzhled webu. Co jsi změnil a proč jsi nezůstal u původního vzhledu?**

*Tomáš*: Viděl jsem v tom projektu i jiné výzvy, než jen měnit vizuální design webu. Bylo třeba se podívat i na jeho funkcionalitu. Původní design navrhli zřejmě studenti střední školy, čemuž odpovídala úroveň zpracování. Nechci říct, že bylo všechno špatně, ale chyběla tomu technická stránka věci – pořád jde o aplikovaný design. Celkově proto web působil neučesaně, některé prvky postrádaly logiku. Proto bylo jednodušší web celý postavit od začátku. 

### **Kolik času jsi tím strávil?**

*Tomáš*: Odhaduji, že tak 20 až 40 hodin čistého času. Neměřil jsem to skrz nástroje. Někdy jsem nad tím seděl hodiny a jindy řešil jen detaily se zbytkem týmu.

### **Co si myslíš o přínosu UX designera při stavbě jakéhokoliv webu? Proč je důležitý a co je při této práci zásadní?**

To je dobrá otázka a sama by stačila na jeden samostatný rozhovor. Designér musí brát v potaz cíle zadavatele webu a cíle uživatelů. S ohledem na ně se snaží najít odpovídající řešení v rámci dostupné technologie. Zásadní je teda pochopit tyhle dvě hlavní strany a být si vědomý, co jde s technologií udělat. Což je na jednoho člověka hodně, a proto je UX výsledek spolupráce daleko více rolí.

Často se tvorba webu přirovnává ke stavbě domu – můžeš stavět dům nějaké velikosti, ale výsledek může být kino, škola, poliklinika nebo třeba divadlo. Musí se dát dohromady spousta informací – kdo ho bude obývat, kde bude dům stát, kde bude elektrika a kdo se v něm bude jak a proč pohybovat. Třeba jestli to budou lidé s hendikepem a podobně. Také se musí řídit platnými standardy a legislativou. A jedna věc je, že to architekt sebelíp vymyslí, ale druhá je, že to pak někdo cihlu po cihle postaví. A někdo úplně jiný pak uvidí, že tady je křivá zeď nebo třeba jen schody a žádná rampa pro vozíčkáře. 

Jako designér si samozřejmě myslím, že role UX designera je při tvorbě webu zásadní. Ve výsledku záleží na tom kdo, s jakým cílem a pro koho ten web vytváří. Lidé si obecně pod UX vybaví ale často jen to, jak ta věc vypadá. 

U [nedluzimstatu.cz](http://nedluzimstatu.cz/) se ukázalo, že některé nápady nebyly úplně dotažené. Jakmile po lidech chceme, aby vyplnili formulář, musíme se daleko více zaměřit na celý proces – musí to být formulář? Chápou, co a jak mají vyplnit, kde ty údaje vzít? Aby měli jistotu, že formulář byl odeslán, musí také vědět, kdo s jeho daty pracuje, atd. Tak se budu asi opakovat – ale rozhodně za mě bylo třeba řešit daleko víc věcí než jen vizuální design a to je práce UX designera.

*Míla*: Dodal bych k tomu, že i z mého pohledu jako vývojáře nebo tech leada je kritické, když se při stavbě webu na UX zapomene. Protože je prioritou mít všechny ty informace správně poskládané od začátku a nenarážet pak na logické chyby během vývoje. A v tom je UX design velmi důležitý až nezastupitelný. Všechno to pomůže odfiltrovat.

### **Dalším přínosem nového řešení webu je jeho digitalizace, kdy uživatel na podstránce s generováním žádostí zadá potřebné osobní údaje pouze jednou, a ty se již propíší do vybraných formulářů pro jednotlivé státní úřady. Jak probíhal vývoj této automatizace? A je něco, co se při tom nepovedlo hned napoprvé?**

*Míla*: Dovol mi to upřesnit: my si žádná data o uživatelích neukládáme. Uživatel zadá své údaje jen pro jednorázovou potřebu vygenerování těch formulářů, ale není to tak, že by měl formuláře předvyplněné při příští návštěvě webu třeba za půl roku. Na celém tom procesu přesunu bylo asi nejsložitější to, že se vlastně až skoro před dokončením prací přišlo s aktualizací UX a konkrétně s nápadem, že se budou formuláře posílat uživatelům e-mailem. A tak už do hotové služby, která generovala formuláře z uživatelských dat, bylo třeba doplnit funkci posílání e-mailů. V tomto bodě tam stres nastal.

*Tomáš*: V tomto bych na Mílu navázal a jsem rád, že zmínil to posílání formulářů e-mailem. Tento příklad přesně dokresluje význam UX, o kterém jsem mluvil. Na začátku jsme měli představu, že chceme generovat formuláře na základě dat, ale pak vyvstala otázka: A jak je k těm lidem vlastně dostaneme? Budou si je stahovat přímo z webu? Nebo je lepší je posílat e-mailem? Co je jednodušší z pohledu technického řešení? A co právní stránka? A přesně tady vidím význam UX, kdy UX designér přemýšlí nad tím celým jako procesem, kterým uživatel prochází, a dokáže se správně ptát.

### **Jak hodnotíte spolupráci UX a vývoje celkem? Co byste dnes možná udělali jinak?**

*Míla*: Spolupráci hodnotím naprosto kladně a vlastně to už zaznělo z Tomášových odpovědí. UX design otevírá možnosti vývoje, poskytuje informace i zpětnou vazbu, pokud se v oblasti vývoje něco nedaří. Komunikace fungovala oběma směry velmi dobře. 

A co bych dnes udělal jinak? Napadají mě jen procesní záležitosti, například lepší načasování pro převod pod jiného zadavatele, mít více času pro design webu jak z pohledu UX, tak toho technického. Zřejmě jsme řešili určité věci příliš dlouho. Nastavili bychom si priority jinak, kdybychom dopředu věděli, že se projekt po druhé fázi v Česko.Digital prostě nadobro uzavře a přejde do ruk zadavatele. Měl mít totiž tři fáze, ale v průběhu té druhé jsme zjistili, že třetí fáze je nadlouho a projekt už tehdy nebude pod Česko.Digital.

*Tomáš*: Souhlasím s tím, že spolupráce probíhala dobře, i když já jsem více spolupracoval s Davidem, který řešil frontend. Pokud jde o backend a generování formulářů, nepřišel mi ten proces až tak složitý. Spíše jsem zaznamenal komplikace typické pro neziskové či dobrovolnické projekty, kdy ti lidé, kteří na tom dělají, tomu věnují svůj volný čas, a málokdy je tak možnost si na to třeba společně v jeden den sednout a dohromady na tom makat. Tím, že jsme na tom každý dělali trochu v jiný čas, se to občas natahovalo a některé věci jsme pak museli dodělávat za chodu. Spolupráce by v tomto smyslu mohla určitě probíhat lépe.

### **Co se vám naopak povedlo a co byste doporučili jiným projektům Česko.Digital nebo odborníkům ve vaší oblasti?**

*Tomáš*: S ohledem na podmínky a možnosti, které jsme v tom projektu měli, mám z projektu nakonec dobrý pocit. Jsem teď jen zvědavý, jak poběží v reálném provozu. Vždy se něco povede a něco méně a časem se dílčí věci musí upravit, celý design je nutné průběžně rozvíjet a upravovat. 

Čistě sobecky, kdybych měl uvést, co se povedlo mně, pak by to byla změna v mém mentálním nastavení. Z mé práce v agentuře jsem zvyklý na určitý perfekcionismus – vše se nejdříve pečlivě plánuje, dělá se uživatelský výzkum, vše je v ideálním případě podložené daty. Navrhované řešení se intenzivně testuje a tak dál... Od toho jsem se tu musel oprostit a smířit se s omezenými časovými i personálními kapacitami, kdy za běhu může odejít vícero lidí. Testoval jsem to třeba jen s rodinou o víkendech.

*Míla*: Souhlasím s Tomem, že se projekt povedl jako celek a teprve čas ukáže, kolika lidem pomůže a jak projekt i fungování webu ohodnotí. A také bych vyzvedl náš tým, lidé z různých oborů, kteří tomu věnovali svůj volný čas, měli společný zájem na tom, aby se projekt povedl. 

Velkou zásluhu na tom, že tým odvedl dobrou práci, měl náš koordinátor, Tomáš Walek. Dal tomu potřebný řád a nastavil systém pro sdílení informací a úkolů. Lidi tak věděli, co mají dělat a kde informace mohou najít. A to bych asi doporučil i dalším projektům – ohlídat si koordinaci lidí v rámci týmu a zadávání úkolů, aby to bylo uchopené transparentně, ale pevně.

### **Jaký je váš nejemotivnější zážitek během vašeho působení na tomto projektu?**

*Míla*: Když se nám povedlo se na jednom Česko.Digital srazu potkat osobně. A já měl najednou možnost všechny ty lidi, které člověk znal jenom virtuálně, poznat osobně, popovídat si a dát si s nimi pivo.

*Tomáš*: Mně se asi žádné výraznější emoce nevybavují, protože jsem se na sraz bohužel nedostal. Možná, že jsem více prožíval moje začátky na projektu, kdy jsem byl v týmu nováčkem a snažil jsem se načerpat maximum informací. A také když jsem zjistil, kolik lidí do designu mluví, chce se k němu vyjádřit na společných callech, ale zaměňuje významově UX s vizuálním designem. Bylo trochu těžký nezačít to všem vysvětlovat, ale tím bych zabil celý call. Chci věřit, že ta silná a hezká emoce přijde, až se to spustí, dobře to poběží a my budeme vědět, že to pomůže spoustě lidí.

### **Co chcete projektu, potažmo jeho zadavateli popřát do následujících let?**

*Tomáš*: Aby fungoval bez problémů a podařilo se pro projekt postavit tým, který ho bude dál rozvíjet na každodenní bázi. Což by nutně vyžadovalo jejich finanční ohodnocení. Protože téma zadluženosti a exekucí mi přijde velmi aktuální a web nedluzimstatu.cz je výrazným krokem vpřed, aby se lidé do svízelných situací dostávali čím dál méně.

*Míla*: Já bych mu moc přál, abychom mohli za pár let tento projekt vypnout, protože ho už nebude potřeba, protože ten obrovský exekuční problém, který tu je, se povede vyřešit. A také aby se projektu časem zhostila státní správa a zaintegrovala do své struktury tým odborníků, kteří se o něj budou starat a udělají z něj standardní systém jako službu státu svým občanům. Tedy, že se jako Míla přihlásím do Portálu občana a tam hned uvidím, kterým institucím dlužím, a mohl to jednoduše vyřešit pomocí krásné grafiky a přívětivého 'user flow', který jsme tady společně vytvořili.
