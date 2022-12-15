---
title: Kolik životů má vaše aplikace? Přinášíme 8 tipů, jak ji zabezpečit před
  kyberútoky
author: stefan.prokop
cover: https://data.cesko.digital/img/clanek-8-tipu-pred-kyberutoky/cover.png
date: 2022-12-15-10-14
slug: 8-tipu-zabezpeceni-aplikace-pred-kyberutoky
description: Únik dat z aplikace Clubhouse, manipulace s cizími auty Nissan nebo
  krádež peněženek na Solaně. Jak bezpečné jsou dnešní aplikace a co pro to
  (ne)dělají firmy a programátoři? Začněte se zabývat bezpečností svých aplikací
  a přemýšlet nad daty, se kterými pracujete. V článku se dozvíte, jak na to.
lang: cs
---
# Jak jsou na tom firmy s bezpečností?

Zamysleme se pro začátek nad otázkou: **Jaká firma je pro vás synonymem online zabezpečení?** Napadl vás Google? Komerční banka? Avast? Vybavila se vám nějaká firma okamžitě, nebo jste spíše přemýšleli a lovili v paměti? J**ak si ale můžete být jistí, že má daná firma tak dobré zabezpečení, že jsou data jejích uživatelů opravdu v bezpečí?**

Téma „kyberbezpečnost“ není nové, ale pořádně se o něm začalo mluvit až s příchodem covidu, který firmy donutil přemístit se do online prostředí. Druhým spouštěčem byly nedávné kyberútoky spojené s válkou na Ukrajině. Pokud jste nepracovali v odvětví, kde je kladen velký důraz na zabezpečení, nebo jste se kyberbezpečností cíleně nezabývali, nebrali jste možná dosud toto téma vážně. Bezpečnost pravděpodobně berete spíše jako „feature“ než povinnost.

Ať ale pracujete s jakýmikoli citlivými nebo osobními daty, měli byste být ostražitější a zabezpečení věnovat zvýšenou pozornost. Zde však nastává druhý problém – něco to stojí. A pak přicházejí na scénu myšlenky (a bohužel i praxe) mnoha firem: „*Bezpečnost je drahá a nepřináší téměř žádnou byznysovou hodnotu. Potřebujeme dodávat nové funkcionality a ne se zdržovat zabezpečením nebo návrhem bezpečné infrastruktury.*“

I když je stále spousta interních systémů a databází volně přístupná z internetu odkudkoliv, většina firem už se naučila používat firewall, VPN, nastavovat granulárnější oprávnění pro jednotlivé služby, účty a zaměstnance. V některých firmách je povinnost pravidelně měnit hesla, používat private/public klíče, ale také testovat proti phishingu, nebo zaměstnance na téma kyberbezpečnosti školit.

Co ale ještě zaběhnuté není, je **psaní bezpečného kódu**. K čemu je databáze schovaná za VPN, když je API endpoint náchylný na SQL injection? K čemu je dobře nastavená granularita oprávnění Google Cloud Platform, když aplikace špatně řídí přístup k datům jednotlivých uživatelů (špatné ACL)?

![](https://lh4.googleusercontent.com/4BASEaWoAQM7GNKUPkPcm01IJlViUm6JXrC_H-yJphYGk8aLltbg8wA1Kof_zMUSACxA0NO9Q_2sVPSQGSEiprVkhb1kiuZtnU7H-qx-qPhoMGmd-cCw4H74AOtFSMiMa-_CEhb4IapekFCpKNghtvQVNRILzik_f1bw7dX6sGs6Y7Ryv02J9eQa3Bng3Q)

*Zdroj: [Dan Nelson](https://unsplash.com/@danny144?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText), Unsplash*

**Většina programátorů bohužel nemá příliš velké znalosti v oblasti bezpečného vývoje**. Není to jejich chyba, bezpečnost je obor sám pro sebe a je potřeba se problematice aktivně věnovat. **Každý vývojář by však měl znát projekt** [**OWASP** a jeho Top 10 zranitelností](https://owasp.org/www-project-top-ten/).

Seznam zranitelností je pravidelně aktualizován a je dobrým výchozím bodem, na co se v aplikacích zaměřit. **Nejčastější problémy souvisejí s autorizací a autentizací uživatelů**. Mimo samotný seznam je také důležitá komunikace programátora a projekťáka. Programátor by se měl nad každým zadáním zamyslet a identifikovat možné bezpečnostní hrozby, společně je s projekťákem vyhodnotit a navýšit rozpočet nebo podniknout jiné vhodné kroky.

Spousta programátorů si ale i tak říká: „*Mně se to přece nemůže stát…*“. Pojďme se podívat na to, co už se stalo a může se stát i vám.

# Jak vypadají bezpečnostní zranitelnosti v praxi?

Projděme si společně reálné „hacky“, ke kterým v minulosti došlo. Zkuste se u každého příkladu zamyslet nad dopadem a vžít se do situace poškozeného.

## [Clubhouse data leak](https://cybernews.com/security/clubhouse-data-leak-1-3-million-user-records-leaked-for-free-online/)

Sociální síť, která je populární díky tomu, že je dostupná výhradně prostřednictvím pozvánky. Byla ze začátku navržena tak, že každému, kdo měl access token, dovolila zobrazit si účet jakéhokoliv uživatele a získat o něm veškerá data. Pomocí získaných uživatelských dat bylo možné scrapovat celý systém a získat tak osobní údaje prakticky všech uživatelů této platformy.

## [Slope wallet incident](https://solana.com/news/8-2-2022-application-wallet-incident)

Slope finance umožňuje uživatelům vytvářet krypto peněženky na Solana blockchainu. V srpnu 2022 bylo necelých 10 000 peněženek odcizeno. Během 4 hodin zmizely cca 4 miliony dolarů v krypto aktivech. Šlo o únik privátních klíčů (seedů) těchto peněženek. Slope finance používá Sentry monitoring systém, kam zapisují veškeré aplikační logy. Když jste si přes Slope vytvořili peněženku, do systému Sentry byl zapsán váš seed v plain textu. Spekuluje se, že útočníkem byl právě někdo z řad Sentry pracovníků – dosud se na něj ale nepřišlo.

## [Nissan remote attack](https://www.securityweek.com/api-flaw-exposes-nissan-leaf-cars-remote-attacks)

Většina aut v dnešní době umožňuje uživatelům a také třetím stranám spravovat auta prostřednictvím API. Uživatelé mohou svá auta odemykat, zamykat, startovat nebo kontrolovat GPS polohu prostřednictvím mobilní aplikace. Aplikace od Nissanu nevyžadovala žádné přihlášení, pouze znalost VIN kódu auta. Znali jste cizí VIN kód? Manipulovat s autem dotyčné osoby nebyl žádný problém.

## Další případy

* Například potenciální [zranitelnost Boeingu](https://www.reuters.com/business/aerospace-defense/potential-hack-some-boeing-planes-fixed-researchers-2022-08-13/) (2022), kde bylo možné měnit pilotům data na palubních počítačích.
* [Krádež 320 milionů dolarů](https://www.theverge.com/2022/2/3/22916111/wormhole-hack-github-error-325-million-theft-ethereum-solana) ve wrapped Ethereu (wETH) z Wormhole bridge kvůli chybějící podmínce porovnávající vlastníka accountu (2022).
* U GitLabu bylo možné, aby [nepřihlášený uživatel získal osobní data](https://thehackernews.com/2022/03/new-security-vulnerability-affects.html) registrovaných uživatelů (2022).
* AWS [přes Cloudformation](https://orca.security/resources/blog/aws-cloudformation-vulnerability/) umožňovalo přístup například k /etc/passwd souboru některého z AWS serverů (2022).

A to je jen drobný výčet. **S přibývajícím počtem API, single-page aplikací a mobilních aplikací bude takových případů nejspíš přibývat**. Co se s tím dá dělat?

# Jak s bezpečností začít?

1. **Zamyslete se nad svými daty** – pracujete s recepty, články, telefonními čísly, e-maily, kreditními kartami nebo zdravotními záznamy? K datům je zapotřebí přistupovat zodpovědně. Každý typ informací vyžaduje různé úrovně zabezpečení. S tím také souvisí strategie pro odstraňování starých nebo nepotřebných dat – co neukládáme, to nám nemohou ukrást.
2. **Vyhodnoťte rizika** – co se stane, když tato data uniknou? Jaké to bude mít následky a dopady? Na základě softwarové architektury projektu proveďte modelování hrozeb. Rozeberte, na jakých úrovních a v jakých částech aplikace mohou nastat které problémy. Jen díky této činnosti dokážete nalezená rizika eliminovat.
3. **Sestavte krizový plán** – jak budete komunikovat s veřejností a svými uživateli? Jakou máte zodpovědnost vůči zákazníkům? Co na to právníci? Zamyslete se nad tím, co budete dělat, když vás někdo hackne. Sestavte si checklist. Budete potřebovat kontaktovat úřady kvůli GDPR? Jakým způsobem to dáte vědět svým zákazníkům? Budete potřebovat forenzní analýzu? Již zmíněný model rizik vám pomůže odpovědět na tyto a další otázky.
4. **Zvažte statickou analýzu kódu** – využijte [CodeQL](https://codeql.github.com/), která je součástí GitHubu, nebo jinou službu poskytující statickou analýzu kódu. Statická analýza kódu sice nikdy nenahradí penetrační test nebo audit, ale je to další způsob, jak snížit riziko. Dokáže totiž na základě určitých vzorů najít některé typy zranitelností v kódu a upozornit na ně.
5. **Nechte si udělat security audit od nezávislé společnosti** – tým pentesterů vám dokáže aplikaci spolehlivě otestovat na různé typy zranitelností. Výsledkem jejich práce bude report s nálezy a doporučením, jak nalezené zranitelnosti opravit. Dále můžete požádat o konzultaci bezpečnostní odborníky nebo si zaplatit security code review.
6. **Přemýšlejte do budoucnosti** – kdo budou vaši uživatelé za 10 let? Jaké mají role a s jakými daty pracují nebo mohou pracovat? Pokud stavíte aplikaci, se kterou máte dlouhodobější plány, takřka nikdy aplikace nezůstane ve stavu, v jakém je teď. Bude se dále rozvíjet, budou přibývat funkcionality, požadavky, uživatelé atd. Díky pohledu do budoucna je možné navrhnout efektivní architekturu projektu a tím zabránit některým hrozbám, nebo se na ně alespoň lépe připravit.
7. **Zamyslete se nad komplexitou aplikace** – nepotřebujete náhodou security odborníky nebo architekty, kteří vám systém navrhnou, nebo alespoň zkonzultují? Ve valné většině firem neexistuje cybersecurity tým. Tuto činnost většinou zastanou vývojáři nebo administrátoři, kteří však nedokáží sledovat trendy v cybersecurity oblasti. Pokud pracujete s velkým množstvím citlivých dat nebo se zdravotními či finančními údaji, může se vás týkat i nějaká legislativní regulace. V takovém případě je vhodné sestavit kyberbezpečnostní tým nebo si najmout odborníky.
8. **Investujte do vývojářů** – dejte jim čas na seznámení se se zranitelnostmi, rozpočet na OWASP Top 10 a zvažte „how to write secure code“ školení pro vaše vývojáře. Jak už bylo zmíněno, vývojářům se těžce sledují trendy v oboru a ještě k tomu trendy v cybersecurity. Zařiďte jim školení, kde budou zasvěceni do kybernetické bezpečnosti a způsobů, jak psát bezpečný kód.

V dalším článku se zaměříme na autorizaci, která je problémem číslo jedna současných aplikací. Vyhlížejte další články z této série na našem blogu a vydejte se po stopách nejčastějších zranitelností moderních aplikací.

*Korektor: Zuzana Konečná*