---
title: 'Rychlost a spolupráce: Jak jsme během 14 dní spustili nový Covid portál'
cover: https://data.cesko.digital/img/20320f87.jpeg
author: zoul
date: 2020-12-01-09-03
slug: covid-portal
lang: cs
description: 'Společně se státní správou jsme vytvořili nový Covid portál ČR, který už za první víkend pilotního provozu zaznamenal čtvrt milionu návštěvníků a za tři týdny své existence překročil 7 milionů zobrazených stránek. Jak se nám podařilo různorodý tým s desítkami členů ze tří různých stran uřídit a v šibeničním termínu dvou týdnů projekt skutečně dodat?'
---

Nejednotné informace o opatřeních rozptýlené po různých vládních webech, navíc psané odborným jazykem. Chybějící snaha o přehlednost a uživatelskou vstřícnost. Dala se situace zlepšit [dalším webem](https://xkcd.com/927/)? Shodli jsme se, že ano – pokud bude soustředit informace ze všech zdrojů ve srozumitelné formě. Po tweetu Dominika Feriho jsme proto 23. října [nabídli pomoc](https://twitter.com/evapavlikova/status/1319619822007865344) a o 14 dní později spustili v pilotním režimu nový [covid.gov.cz](https://covid.gov.cz).

<blockquote class="twitter-tweet"><p lang="cs" dir="ltr">Dominiku, radi pomuzeme s <a href="https://twitter.com/CeskoDigital?ref_src=twsrc%5Etfw">@CeskoDigital</a>, pomahali jsme ministerstvu uz na jare.<br><br>Cc <a href="https://twitter.com/vdzurilla?ref_src=twsrc%5Etfw">@vdzurilla</a></p>&mdash; Eva Pavlikova 📿 (@evapavlikova) <a href="https://twitter.com/evapavlikova/status/1319619822007865344?ref_src=twsrc%5Etfw">October 23, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Mohli jsme vycházet ze zkušeností získaných začátkem roku při [tvorbě webu pro MZČR](https://blog.cesko.digital/2020/03/novinky). Trvali jsme na tom, že veškerá komunikace bude probíhat otevřeně v našem Slacku, aby mezi jednotlivými stranami nevznikaly komunikační bariéry. Také jsme si ujasnili, že nepracujeme pro stát, ale spolupracujeme s ním. A pochopitelně jsme nechtěli, aby byl projekt jakkoliv politizován.

Hlavní výzvou bylo uřídit velký, decentralizovaný, různorodý tým složený z dobrovolníků Česko.Digital, obsahového týmu Dominika Feriho a vývojářů státní agentury NAKIT tak, abychom během slíbených 14 dní dokázali projekt dodat. Klíčové bylo vybrat minimum nezbytných funkcí, bez kterých se web neobejde, a zbytek nápadů – jakkoliv často kvalitních a důležitých – odložit na později. A pak uhájit vybrané priority před rozšiřováním.

Ve Slacku bylo zapojeno několik set dobrovolníků. Postupně jsme se proto rozdělili na několik týmů a samostatných kanálů (například obsah, frontend nebo UX), aby byla diskuze zvladatelná. Většinu věcí rozhoduje komunita sama, konsenzuálně, bez prosazování autority zvenčí. Koordinátoři fungují jako mediátoři; sledují, jestli byla všechna otevřená témata skutečně dořešena, hlídají kontext a termíny. Klíčová je trpělivost a empatie. K tomu, abychom projekt udrželi pohromadě, nám hodně pomohly pravidelné společné synchronizační videokonference, zpočátku někdy i dvě tři denně – a následně menší konference v jednotlivých týmech pro rozdělení práce. Kromě Slacku používáme pro koordinaci a vývoj [Confluence](https://wiki.cesko.digital/x/PhEY), [Trello](https://trello.com/b/XOOBy51q), [GitHub](https://github.com/cesko-digital/covid.gov.cz) a [Google Meet](https://meet.google.com).

Technicky jsme původně chtěli použít Wordpress, se kterým jsme měli [dobré zkušenosti](https://blog.cesko.digital/2020/03/web-mzcr) u webu MZČR. Rychle se ale ukázalo, že pro uložení plánovaných dat není ideální, a tak jsme se dostali k Drupalu. Přes něj se opatření vkládají do databáze, odkud si je přes API načítá webová aplikace napsaná pomocí frameworků React a Gatsby. Díky důslednému oddělení frontendu a backendu se jednak otvírá možnost použití dat v dalších aplikacích (například eRoušce), jednak se tím usnadnilo nasazení aplikace na státní infrastruktuře.

Spolupráce se státem není jednoduchá, ale přesně tyto společné projekty ukazují, že je možná. A jde o užitečnou zkušenost pro obě strany – mohli jsme státu ukázat agilní vývoj moderního webu a sami jsme naopak získali lepší pochopení pro omezení a možnosti veřejné správy. Hodně pomohla společná komunikace ve Slacku, kde vůbec nebylo poznat, kdo je z NAKIT a kdo dobrovolník Česko.Digital. Všichni jsme měli stejný cíl.

Budoucnost projektu teď vidíme v propojování s dalšími místy, kde lidé hledají informace o covidu. Připravujeme například spolupráci s eRouškou, s aplikacemi Záchranka nebo YourPass. Další logicky navazující fází by mohlo být sjednocení znalostní báze informací o covidu. To znamená mít všude jednotnou srozumitelnou komunikaci, ať už se občan ptá přes telefonní linku, hledá na webu, nebo přijde na jakékoli informační místo. Aktuálně jednáme o tom, jaký díl této další práce si vezme NAKIT a jaký komunita.

Chcete se na dalším rozvoji a zlepšování portálu podílet? [Přidejte se k Česko.Digital](https://join.cesko.digital/) a ozvěte se v kanálu [#p-informacni-web-ceska](https://cesko-digital.slack.com/archives/C01DGSL4JFN)!

## Koordinátoři

Eva Pavlíková, Radko Jiroušek, Adéla Kalusová

## Obsahový tým

Dominik Feri, Karolína Drachovská, Petr Matějů, Tereza Křížová, Martina Kolská, Vojtěch Dobeš, Arian Ebrahimi, Jana Soukupová, Michaela Černá

## Překlady

Tereza Polednová, Madeline Hůlková, Amelia Liliana Hůlková, Vojtěch Půček, Terka Marušincová, Nikola Karafiát, Paula Procházková, Viktor Šimek

## Kód

Filip Brebera, Marek Vantuch, Miro Michalicka, Karel Koudelka, Petr Illek, Andrei Fidelman, David Veselý, Rosťa Klein, Vít Kološ, Michal Vašíček, Josef Kolář, David Rychlý, Jan Hájek, Maroš Beťko, Martin Nuc, Alexej Sidorenko, Tomáš Znamenáček, Vít Moravský, Jiří Vyhnálek, Egor Kalinichev, Luděk Kvapil, Michal Kučera, Lukáš Caldr, JNetrh

## UX

Matěj Stehlík, Vlastimír Havlíček, Ján Dugovič, Tom Adamec, Jiří Flachs, Václav Kocián

## NAKIT

Honza Vlasák, Jan Hůlek, Lukáš Trnka, Martin Horváth, Matěj Stehlík, Pavel Burian, Pavel Čech, Vladimír Dzurilla, Lenka Melounová

## Ve Slacku pomáhali

Adam Martiška, Adéla Kalusová, Albert Zikmund, Alena H., Alexander Semerenko, Alžběta Hemerková, Andrea Dobšíková, Andrea Punčochářová, Andreas Gajdošík, Andrew Y, Anit, Barbora Truksová, Benedikt Kotmel, BoB Marvan, Bohdan Kopčák, Clara Horakova, Cyril Brom, Dana Beneda, Dana Bérová, Dana Bimková, Daniel Benda, Daniel Chomát, Daniel Cyrus, Daniel Koppl, Daniel Pospisil, Daniel Srb, Daniel Zábojník, Dark_Unicorn, David Šimek, devnu11, Eduard Hlava, Eliška B., Eva Pavlíková, Filip Maleňák, fmalenak, Frankie Pernicka, Hana Prokšová, Honza Cibulka, Honza Kubant, Honza Murin, Honza Páv, Honza Slavík, Iva Endrychová, Ivana Vantuchová, Jakub Beneš, Jakub Blatný, Jakub Jeník, Jakub Krupka, Jakub Mares, Jakub Melicher, Jakub Netrh, Jakub Onderka, Jakub Šnorbert, Jakub Šťástka, Jakub Tomasek, Jan Böhm, Jan Cafourek, Jan Hobler, Jan Jirousek, Jan Killian, Jan Kohout, Jan Křemen, Jan Kryšpín, Jan Kvapil, Jan Kysela, Jan Macura, Jan Mazal, Jan Pechar, Jan Prerovsky, Jan Šablatura, Jan Soukup, Jan Sromek, Jan Štefanides, Jan Týřl, Jan Vančura, Jan Vrzal, Jana Burzyková, Jaroslav Hrách, Jindřich Oukropec, Jiří Heller, Jiří Kaizr, Jiří Svoboda, Jiří Zeman, Jirka Kadlčík, Jirka Nečas, Jirka Setnička, Jitka Morávková, Josef Bátrla, Juanluis Lozano, Julia To, Kamila Lepkova, Karla Pokorná, Karol Brániková, Karolína Fialová, Karolína Vyskočilová, Kateřina Jiřinová, Kateřina Peřinová, Kateřina Synková, Kateřina Voláková, Kateřina Vrbková, Klara Horton, Ladislav Prskavec, Lenka Svobodová, Lenny Kavalířová, Leopold Podmolík, Lucie Buricova, Lucie Pezlarová, Lucie Smolka, Lucie Trávníčková, Lucie Zajíčková, Luděk Rašek, Lukas Chadraba, Lukas Erlebach, Lukáš Lejsek, Lukáš Linhart, Lukáš Sochor, Magdalena Janikova, Mahulena Kopecká, Marek Lecián, Marek Řehulka, Markéta Horáková, Markéta Rýcová, Markéta Zadražilová, Martin Hassman, Martin Kopeček, Martin Kopta, Martin Slavíček, Martina Habová, Martina Kamenická, Martina Malinová, Matej Hasa, Matyáš Procházka, Michael Zeleny, Michaela Biňovská, Michal Bláha, Michal Gebauer, Michal Kleiner, Michal Krsek, Michal Kuk, Michal M., Michal Puchmertl, Michal Špitálský, Milan Fafek, Miro Botur, Miroslav Palanský, MoniKr, Nada Chalupova, Nguyen Ngoc Van, Nicole Fryčová, Ondra Koupil, Ondrej Kokes, Ondřej Machulda, Ondřej Nádvorník, Ondřej Vajda, Osman Salih, Patrik Braborec, Pavel Chroust, Pavel Mikšíček, Pavel Peroutka, Pavlína Koutecká, Petr Bechyně, Petr Bílek, Petr Chocholouš, Petr Doležal, Petr Heřmanský, Petr Hrudka, Petr Jakubec, Petr Knedlík, Petr Kučera, Petr Mynář, Petr Reichl, Petr Tykal, Petra Hejduková, Radek Baloun, Radek Berka, Radek Podrazky, Radka Horáková, Radko Jiroušek, Roman Faltýn, Romana Pokorná, Šimon Leitgeb, Simona Sušková, Stanislav Dušek, Stanislav Volcik, Tereza Aronová, Tereza Havránková, Tereza Navarová, Tereza Polednova, Tereza Tomanova, Terézia Palaščáková, Tomáš Fejfar, Tomáš Vavrda, Tomáš Zadák, Václav Heřman, Václav Jirovský, Veronika Tomášová, Viktor Daňko, Viktor Krejčíř, Vilem Frcek, Vít Svojše, Vladimír Smitka, Vojtěch Jurásek, Vojtěch Kaniok, Vojtěch Pavelka, Vojtěch Sladký, Vojtěch Sucharda, yuri a Zbyněk Fridrich.

*Tento článek vznikl s velkým přispěním Martina Hassmana a Lucie Trávníčkové.*