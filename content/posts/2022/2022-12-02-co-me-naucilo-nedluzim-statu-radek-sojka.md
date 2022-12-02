---
title: "Co mě naučilo Nedlužím státu: Radek Sojka a jeho tipy a fuckupy z pozice
  projektového koordinátora"
author: lukas.n
tags:
  - nedluzim-statu
cover: https://data.cesko.digital/img/clanek-co-me-naucilo-nedluzim-statu/co-me-naucilo-nedluzim-statu.png
date: 2022-12-02-12-15
slug: co-me-naucilo-nedluzim-statu-radek-sojka
description: V první půlce roku 2021 jsem pracoval na pozici dobrovolnického
  projektového koordinátora pro projekt Nedlužím státu. Během období leden–září
  2021 jsme přidávali na web několik nových funkcí a kompletně předělali design
  stránek pro vylepšení uživatelské zkušenosti. Po skončení fáze vývoje a
  vypuštění nové verze webu do světa jsme si našli čas na retrospektivu
  projektu. Právě o klíčové body retrospektivy a jejich výstup bych se s vámi
  rád podělil v následujícím článku. Budu doufat, že to někomu přinese inspiraci
  či vhled do problému, se kterým se třeba právě v rámci nějakého projektu
  potýká.
lang: cs
---
# Komunikace a trackování úkolů

Hlavním komunikačním kanálem byl po celou dobu projektu **Slack**, ve kterém celé Česko.Digital žije a funguje. Zde se řešilo probíhající dění na projektu, především věci, které potřebovaly rychlou reakci nebo se objevily ex post z již zadaných úkolů. Díky možnosti označit jednotlivé členy v konverzaci mohl mít celý tým přehled o probíhajícím dění na projektu.

V některých případech však delší komunikace ve Slackovém vlákně mohla vést ke zmatkům a ztrátě původní myšlenky/zadání. Snažil jsem se **průběžně podobné konverzace převádět na tickety/kartičky do Trella** a případně z nich vytáhnout hlavní body, na kterých jsme se shodli.

**Trello** nám sloužilo ke **sledování plnění úkolů**. Zde jsem označoval členy týmu, pro které byl daný úkol určen, zadával deadliny, vytvářel checklisty u náročnějších úkolů a případně vedl diskuzi ohledně úkolu samotného.

Trello jsme měli organizováno jako **Kanban** (vizuální systém správy úkolů, slovo Kanban pochází z japonštiny v doslovném překladu znamená něco jako „karty, které jsou vidět“, pozn. red.), můžete ho vidět na obrázku. Každých 14 dní jsme se pak potkávali na **pravidelné týmové schůzce, během které se úkoly revidovaly a aktualizovaly**.

![](https://data.cesko.digital/img/clanek-co-me-naucilo-nedluzim-statu/1.png)

# Projektový tým a zastupitelnost

Klíčovým prvkem pro mě a celý projekt byl projektový tým. Jednalo se o několik lidí z jednotlivých oblastí (vývoj, UX, grafika, marketing, copy, zadavatel a další), kteří pracovali na projektu po celou jeho dobu. K nim jsem se spolu s koordinátory z Česko.Digital snažil **sehnat zástupce, tzv. tandem**, kteří by jim pomáhali a v případě výpadku práci převzali. 

Dobrým zdrojem byly jednotlivé specializované kanály v Slacku Česko.Digital, bohužel především v oblasti vývoje jsme se však potýkali s relativně vysokou mírou fluktuace (kromě IT developera Davida Němce, který na projektu dokonce pokračuje i po jeho dokončení v Česko.Digital).

Dalším stěžejním bodem byla **oscilace pracovního vytížení dobrovolníků**. Nepodařilo se mi po celou dobu projektu udržet určitou „střední“ hladinu vytížení (pro představu bych to popsal jako: „mám práci, vím co dělat, je toho dost, ale stíhám a nejsem přetížen/a“). Klidnější období na začátku projektu totiž pár týdnů před spuštěním projektu vystřídal sprint, kdy se pracovalo snad každý den. Doporučuji si proto **pohlídat termíny a zástupy a síly týmu rozložit plynuleji**.

# Spuštění projektu

Spuštění projektu je zásadním okamžikem, kdy jednak spatří světlo světa dlouhodobá práce celého týmu a jednak se snaží celý tým (i interní kmenový tým z Česko.Digital) projekt co nejlépe „prodat“ veřejnosti.

Doporučil bych si do detailu **pohlídat, co launch pro všechny zúčastněné strany (Česko.Digital, projektový tým, spřátelené třetí stany a média/veřejnost) znamená**. Za Nedlužím státu měla [výborně připravenou časovou osu](https://cesko-digital.atlassian.net/l/cp/GR5GK15Z) naše marketingová koordinátorka Jana Kneschke, popřípadě [na této stránce](https://cesko-digital.atlassian.net/wiki/spaces/NS/pages/189925307/F+ze+projektu) se dají vidět vypracované fáze projektu.

![](https://data.cesko.digital/img/clanek-co-me-naucilo-nedluzim-statu/2.png)

Před samotným launchem je dobré mít **aplikaci/stránku již nějakou dobu v provozu** a vyhradit si čas na testing, ideálně uživatelské testování. My jsme si na tuto „generálku“  udělali čas až den předem, což přineslo zbytečný stres.

# Vývoj x design

**Spolupráci mezi vývojem a designem** jsem vnímal jako zásadní pro úspěch projektu. Obě strany by se měly dobře chápat a rozumět podnětům a zadáním, které si navzájem předkládají (což v některých případech znamenalo třeba i denní synchronizaci nad úkolem a komplexním procesem spolupráce).

Důležitým nástrojem pro vývoj a design se stala **Figma**, ve které jsme připravili kompletní grafický návrh a odladili styly jednotlivých webových elementů.

![](https://data.cesko.digital/img/clanek-co-me-naucilo-nedluzim-statu/3.png)

V rámci služeb (backend vývoje) jsem však udělal chybu z hlediska rozložení práce. Měli jsme připravené jasné zadání pro design, na které navazoval vývoj statických a dynamických částí frontendu. Dále jsme věděli, jaké služby na backend budeme potřebovat. Jejich design a vývoj mohl začít paralelně, následně jsme je mohli otestovat na simulovaných datech a mít tak vše připraveno.

Ale nestalo se tak. Troufám si tvrdit, že toto pochybení stálo projekt před spuštěním týden času a mě osobně několik krušných chvil. Učíme se ale z vlastních chyb!

# Vize x roadmap

Nedílnou součástí projektu je jeho vize. Tohle celému týmu perfektně připomněl UX designér Tomáš Svěrák, který nás díky svým podnětům dovedl k **revizi vize** projektu, pak k **redefinici mise** pro fázi 1.5 a ve finálním důsledku také ke kompletnímu redesignu webu. **Pravidelné připomenutí vize nebo alespoň mise** projektu navíc pomůže celému týmu udržet si přehled, jakým směrem se ubírá. Vizi a misi je také dobré aktualizovat vzhledem k dosaženým cílům nebo novým zjištěním.

Pokud vás zajímá pokračování příběhu Nedlužím státu, tak ho můžete vidět na [www.nedluzimstatu.cz](http://www.nedluzimstatu.cz/). Doufám, že vám tento článek v něčem pomohl, rád také zodpovím dotazy ohledně článku, ideálně na LinkedInu – [tady je můj profil](https://www.linkedin.com/in/radek-sojka/).

#### Článek vznikl v rámci projektu [Tvořit může každý](https://cesko-digital.atlassian.net/wiki/spaces/RED/pages/816677293/Projekt+Tvo+it+m+e+ka+d).

*Editorka: Kateřina Sikorová*

*Korektor: Karolína Krhutová*