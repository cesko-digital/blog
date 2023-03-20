---
title: 94 % aplikací trpí nedostatečnou autorizací – přinášíme 10 tipů, jak je
  zabezpečit
author: stefan.prokop
cover: https://data.cesko.digital/img/clanek-bezpecnost-aplikaci/bezpecnost-aplikaci.png
date: 2023-03-20-12-01
slug: nedostatecna-autorizace-aplikaci
description: Jak může jedna chybějící podmínka způsobit pád letadla nebo únik 2
  TB dat? Co je to autorizace a proč je nedostatečná u 94 % webových aplikací?
  Přečtěte si, jak autorizaci implementovat, testovat a zabezpečit.
lang: cs
---
# Co je to autorizace?

Blíží se prázdniny, a tak si říkáte, kam letos poletíte na dovolenou. Kouknete na internet, a protože jste milovníci korálových útesů, tak vám hned padne do oka Austrálie. Najdete si nejvhodnější trasu, koupíte letenku a čekáte, až přijde den D. V den odletu se konečně dostanete do letadla, ale s udivením koukáte, že na vašem sedadle už někdo sedí! Přece jste to vy, kdo je k tomu místu **autorizovaný**. Je to napsané na palubním lístku!

Autorizace je proces, při kterém se ověřuje, zda má „dotyčný“ **dostatečná oprávnění** pro vykonání nějaké akce. Často si ji zaměňujeme s autentizací, která se však podstatně liší. Před vstupem na palubu letadla vám kontrolovali pas oproti palubnímu lístku. Podívali se, že se jména na obou místech shodují a porovnali také váš obličej s fotkou v pasu. Ověřovali, zda jste opravdu ten, za koho se vydáváte – **autentizace** je tedy proces **ověření identity**. Jde ale většinou ruku v ruce s autorizací.

Typickým příkladem autorizace na webu je administrátorské rozhraní, správa osobního profilu nebo editace článku. Do administrace máte přístup pouze s uživatelskou rolí admin, osobní profil můžete upravit, jen pokud jste vlastníkem profilu, a článek můžete změnit, pokud jste jeho autorem nebo šéfredaktorem.

![](https://data.cesko.digital/img/clanek-bezpecnost-aplikaci/1.jpg)

*Zdroj: [Kelly Sikkema](https://unsplash.com/@kellysikkema?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText), Unsplash*

# Kdy nastává chyba?

**Důvodů, proč k této zranitelnosti dochází, je hodně.** Může jít o neúplné zadání, špatné požadavky, zanedbaný nebo žádný softwarový návrh. Vývojový tým nemá dostatečné zkušenosti nebo může pravidla pro řízení přístupu špatně definovat, případně programátor zapomene kontrolu implementovat. Problém ale také může souviset s tlakem na rychlost dodání, s budgetem nebo nejasně definovaným zadáním a požadavkům na funkcionalitu.

Abyste zranitelnosti dokázali předejít, **začněte s tím už ve fázi návrhu projektu**. Definujte si požadavky a nebojte se poradit se s odborníky. Chyba autorizace je velmi nebezpečná také kvůli svému dopadu. Ten může být malý, ale také kritický.

Útočníkovi se může povést zobrazit si neveřejnou stránku, spravovat profil jiného uživatele atd. Pár měsíců zpátky (říjen 2022) vlivem této zranitelnosti [Microsoftu unikly](https://thehackernews.com/2022/10/microsoft-confirms-server.html) více jak 2 TB citlivých dat. **Důvodem byla jedna chybějící podmínka**. Data obsahovala objednávky, dokumenty podepsané zákazníky, detaily o partnerech a další. Důsledkem byl i únik dat z [českého ministerstva financí](https://twitter.com/MinFinCZ/status/1584927731753566208).

[V předchozím článku](https://blog.cesko.digital/2022/12/8-tipu-zabezpeceni-aplikace-pred-kyberutoky) jsem psal o [zranitelnosti v autech Nissan](https://www.securityweek.com/api-flaw-exposes-nissan-leaf-cars-remote-attacks), kde jste mohli ovládat cizí auto, pokud jste znali jeho VIN kód, nebo že [na palubních počítačích pilotů letadel Boeing](https://www.reuters.com/business/aerospace-defense/potential-hack-some-boeing-planes-fixed-researchers-2022-08-13/) bylo možné měnit různé údaje. Oba příklady souvisí s nedostatečnou autorizací. Zranitelnost Boeingu naštěstí nikdo nezneužil. Tým Boeingu na ni přišel sám a opravil ji, ale vidíte, že následky mohou být opravdu katastrofální. Nejen že můžete porušit právní regulace jako je GDPR, nakládání se zdravotními nebo finančními záznamy, ale v některých případech můžete mít na svědomí lidské životy.

![](https://data.cesko.digital/img/clanek-bezpecnost-aplikaci/2.png)

*Zdroj: [FLY:D](https://unsplash.com/photos/mT7lXZPjk7U), Unsplash*

# Je implementace drahá?

**Pokud bezpečnost řešíte už v rané fázi projektu, pak je cena přímo úměrná vašim požadavkům.** Pokud ji ale chcete řešit později, jako bývá častým zvykem, nebo až v případě, kdy dojde k problému, pak se připravte na drahou „srandu“.

Zejména **autorizace je velmi specifická**. Je to robustní mechanismus, který bez správné  implementace nelze dál rozšiřovat. Re-implementace autorizačního modulu vás může vyjít na víc peněz a času než vývoj dosavadní aplikace. **Vyplatí se vám tedy přepsat aplikaci celou.**

* Vždy je důležité myslet na to, kam aplikace směřuje. Kde ji vidíte za pár let? Jaké má funkcionality a uživatele?
* Jak je kritická – je to blog, nový Uber nebo bankovní systém?
* Modelujte hrozby a najměte si schopný tým – od projekťáka, architekta, přes vývojáře až po testery.
* Nejdůležitější však je nešetřit na bezpečnosti a nestresovat vývojáře tlakem na rychlost dodání.

# Jak se dá zranitelnost testovat?

Testování není jednoduché. **Vyžadujte specifikaci a přesné zadání** systému nebo dané funkcionality. Zjistěte, jak se má systém chovat, kdo má přístup do jakých částí a jaké akce může provádět. **Bez takové specifikace není co testovat**, respektive testujete náhodně. I když se vám podaří něco objevit, musíte to konzultovat se zadavatelem, protože si nejspíš nejste jisti, jestli jde o správné chování.

Autorizace vyžaduje testování všech existujících variant. Musíte si být opravdu 100% jistí, že jste tuto funkcionalitu správně implementovali. V případě, že to budete dělat pokaždé, když se přidá nová funkcionalita, ztrácíte tím čas i peníze. Rozhodně tedy **napište automatické testy** rovnou pro celý autorizační mechanismus.

# Jak zranitelnosti předcházet?

1. **Implementujte autorizaci zejména na backendu.** Cokoliv, co je na serveru, nemůže útočník změnit. Pokud je autorizace pouze na frontendu, dá se velmi snadno obejít.
2. **Zajistěte princip deny-by-default.** Zakažte přístup na všechny stránky kromě veřejně dostupných. Pokaždé, když přidáváte novou funkcionalitu, vypněte ji ve výchozím stavu, dokud nebude pečlivě otestovaná.
3. **Implementujte centralizovaný autorizační mechanismus.** Máte podmínky roztroušené po celé aplikaci? Snadno na nějakou zapomenete a nedokážete s jistotou říct, kdo má jaká oprávnění. Implementujte tedy řízení přístupu jako samostatný modul a vynuťte jeho používání napříč celou aplikací (je vhodné ho přidat například jako middleware).
4. **Vynucujte vlastnictví záznamů.** Aplikace často porovnávají, jestli má uživatel právo číst, smazat nebo upravit daný záznam. Co když tím ale dáváme možnost smazat záznam, který nám nepatří? Vyžadujte, aby se ID uživatele shodovalo s ID tvůrce daného záznamu.
5. **Implementujte aplikační limity na základě doménových požadavků.** Autorizace není jen o řízení přístupů uživatelů, ale také o tom, jakým způsobem můžete aplikaci používat. Představte si endpoint, který přijímá parametr limit, aby bylo možné stránkovat záznamy. Je v pořádku, když nastavím tento limit na hodnotu 1.000.000? Je v pořádku nahrát do aplikace tisíce fotek nebo souborů najednou? Rate limitingem také předcházíte automatizovaným útokům.
6. **Logujte a notifikujte.** Zalogujte každé selhání řízení přístupu a analyzujte ho. Zvažte v takových případech notifikování správců systému a na základě logů podnikněte další akce.
7. **Invalidujte session po odhlášení uživatele.**
8. **Nastavte JWT token na krátkou životnost.**
9. **Napište unit a integration testy** na celý mechanismus řízení přístupu, jako je popsáno výše. Měl by mít 100% test coverage.
10. **Konzultujte implementaci a návrh s odborníky**, i když máte dostatečné zkušenosti. Pohled z venku může odhalit další nedostatky.

# Už brzy se můžete těšit na další článek ze série

Zaměříme se v něm na návrh aplikace. Ačkoli se to nezdá, nedostatečný nebo podceněný softwarový návrh je dalším zdrojem zranitelnosti, a to dokonce čtvrtým nejrozšířenějším! Tak vyhlížejte další články, ať jste v obraze!

*Editorka: Zuzana Pitříková*

*Korektorka: Adéla Vilímcová*