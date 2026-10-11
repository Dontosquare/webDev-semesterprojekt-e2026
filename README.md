# GameCreators ApS – Produkthjemmeside & Salgsplatform

Webshop og marketingplatform for GameCreators ApS' håndholdte spillekonsoller. Kunder kan oprette en konto, gennemse produktet, lægge en konsol i kurv og gennemføre en bestilling uden betaling. Administratoren styrer produkter, ordrer og brugere i et admin-panel.

Projektet er udviklet som semesterprojekt i Webdev E2026 og er en fiktiv case.

## Links

| | |
| --- | --- |
| Live demo | `SOON` |
| GitHub-repository | `https://github.com/Dontosquare/webDev-semesterprojekt-e2026` |
| Rapport | `SOON` |

## Gruppemedlemmer

- `Joachim Pors Knudsen`
- `Lucas Mejer Mortensen`
- `Frederik Cao`
- `Anders Bakdal`
- `Tom Christensen`

## Testlogins til censor og eksaminator

| Rolle | E-mail | Adgangskode |
| --- | --- | --- |
| Admin | `[INDSÆT]` | `[INDSÆT]` |
| Kunde | `[INDSÆT]` | `[INDSÆT]` |

Disse konti findes i seed-data og databaseeksporten. Brug kun testdata; ingen rigtige personoplysninger indgår i projektet.

## Funktioner

**Kunde**
- Opret konto og log ind
- Forside med hero-sektion, produktfremhævning og call-to-action
- Produktside med tekniske specifikationer, billeder og spil
- "Om produktet"-sektion med den tekniske baggrund forklaret tilgængeligt
- Kurv og bestilling uden betaling
- Ordrebekræftelse på e-mail med unikt ordrenummer og resumé
- Oversigt over egne ordrer og kontostatus

**Admin**
- Overblik over indkomne ordrer og opdatering af ordrestatus (modtaget, behandles, afsendt)
- CRUD på produkter: navn, beskrivelse, pris, billeder og lagerantal
- CRUD på brugere

**Ikke-funktionelt**
- Adgangskoder gemmes hashed med bcrypt
- Responsivt design til mobil og desktop
- Optimeret billedupload (resize, WebP og flere størrelser)

## Teknisk stack

| Område | Valg |
| --- | --- |
| Backend | Node.js med Express, MVC-arkitektur |
| Template engine | Handlebars (express-handlebars) |
| Database | MySQL 8 |
| ORM | Sequelize med migrations og seeders |
| DAO | Rå SQL til særlige queries (admin-statistik) |
| Login og roller | express-session, middleware til rolle- og adgangsstyring |
| Hashing | bcrypt |
| E-mail | Nodemailer |
| Billedupload | Multer og Sharp |
| Hosting | `SOON` |

## Mappestruktur

```
.
├─ app.js                Express-opsætning
├─ config/               database, mail og session
├─ routes/               URL'er der peger på controllere
├─ controllers/          styrer flowet mellem model og view
├─ models/               Sequelize-modeller og relationer
├─ dao/                  rå SQL til særlige queries
├─ services/             mailservice, billedbehandling, ordrenummer
├─ middleware/           login, roller, upload og fejlhåndtering
├─ views/                Handlebars: layouts, partials, sider, admin, e-mails
├─ public/               css, js og statiske billeder
├─ uploads/              uploadede produktbilleder (ikke i Git)
├─ migrations/           databaseskema
├─ seeders/              demodata og testkonti
├─ database/dump.sql     eksport af databasen
└─ .env.example          eksempel på miljøvariabler
```

## Kom i gang lokalt

### Forudsætninger

- Node.js `Version 22`
- MySQL 8
- En SMTP-konto til test, fx Mailtrap

### Installation

```bash
git clone [INDSÆT REPO-URL]
cd [MAPPENAVN]
npm install
```

### Miljøvariabler

Kopiér eksempelfilen og udfyld værdierne:

```bash
cp .env.example .env
```

| Variabel | Beskrivelse |
| --- | --- |
| `PORT` | Port serveren kører på |
| `DB_HOST`, `DB_PORT` | Databaseserver |
| `DB_NAME`, `DB_USER`, `DB_PASSWORD` | Database og login |
| `SESSION_SECRET` | Lang tilfældig tekst til sessioner |
| `SMTP_HOST`, `SMTP_PORT` | Mailserver |
| `SMTP_USER`, `SMTP_PASS` | Mailserverens login |
| `MAIL_FROM` | Afsenderadresse på ordrebekræftelser |

`.env` er udelukket fra Git og må aldrig committes.

### Database

**Valg A: importér eksporten** (hurtigst, indeholder testdata)

```bash
mysql -u <bruger> -p -e "CREATE DATABASE <databasenavn> CHARACTER SET utf8mb4;"
mysql -u <bruger> -p <databasenavn> < database/dump.sql
```

**Valg B: kør migrations og seeders**

```bash
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```

### Start serveren

```bash
npm start
```

Åbn derefter `http://localhost:<PORT>`.

## Datamodel

Databasen består af tabellerne `roles`, `users`, `addresses`, `products`, `product_images`, `product_specs`, `games`, `product_games`, `cart_items`, `order_statuses`, `orders` og `order_items`. ER-diagrammet ligger i rapporten og som billedfil i `docs/er-diagram.png` (`[JUSTÉR STI]`).

Ordreoprettelse sker i én transaktion: lager kontrolleres og trækkes, ordre og ordrelinjer oprettes, kurven tømmes, og først derefter sendes bekræftelsesmailen.

## Roller og adgang

| Rolle | Rettigheder |
| --- | --- |
| Kunde | Oprette konto og logge ind, bestille konsol, se egne ordrer og kontostatus |
| Admin | Fuld adgang til produkter, ordrer og brugere samt opdatering af ordrestatus |

Adgang håndteres med middleware (`requireAuth` og `requireRole`), og alle `/admin`-ruter er beskyttet.

## Sikkerhed

- Adgangskoder hashes med bcrypt og gemmes aldrig i klartekst
- Parametriserede queries via ORM og DAO
- Sikre HTTP-headers, CSRF-beskyttelse og rate limiting på login
- Inputvalidering på formularer
- Kunder kan kun se egne ordrer

## Deployment

Applikationen er deployet på `[PLATFORM]`. Miljøvariabler er sat i hostingplatformens indstillinger, og uploadede billeder gemmes på `[VEDVARENDE DISK ELLER SKYLAGER]`, så de overlever nye deployments.

## Dokumentation

Rapporten indeholder blandt andet:

- brugermapping, observationsguide og interviewguide med refleksion
- informationsarkitektur og refleksion over affordances
- UI-design efter GRID-principper og mockups
- valg af database, ER-diagram og normalisering

## Kendte begrænsninger

- Der er ingen betalingsløsning; bestillinger gennemføres uden betaling, som casen foreskriver
- `[TILFØJ EVENTUELLE ØVRIGE BEGRÆNSNINGER]`

## Licens og brug

Projektet er udviklet til undervisningsbrug. GameCreators ApS er en fiktiv virksomhed, og produktdata og billeder er leveret til casen.
