import faker from 'faker';
import * as _ from 'lodash';

const types = ['improvement', 'info', 'error'];

const step = [
    {
        description: 'Priprava materiala Kontrola vara',
        order: 0,

type: 0,        actions: () => [
            {
                description: 'Preglej grelce pred začetkom menjave',
                order: 0,
                image: 'http://45.76.90.178:3333/1.png',
                type: 0
            }
        ]
    },
    {
        description: 'Vklop ročnega načina delovanja za postaje',
        order: 1,

type: 1,        actions: () => [
            {
                description: 'Pred posegom v stroj vklop koračnega delovanja!',
                order: 0,
                image: 'http://45.76.90.178:3333/2.png',
                type: 1
            }
        ]
    },
    {
        description: 'Praznjenje dozatorja ohišja, nastavitev senzorja za ohišje in vsutje ohišij v dozator',
        order: 2,

type: 1,        actions: () => [
            {
                description: 'Čiščenje dozatorja',
                order: 0,
                image: 'http://45.76.90.178:3333/3.png',
                type: 1
            }
        ]
    },
    {
        description: 'Praznjenje dozatorja grelca, nastavitev senzorja za grelec in vsutje grelcev v dozator',
        order: 3,

type: 1,        actions: () => [
            {
                description: 'Čiščenje dozatorja',
                order: 0,
                image: 'http://45.76.90.178:3333/4.png',
                type: 1
            }
        ]
    },
    {
        description: 'Pregled palet na žarjenju, Postaja za žarjenje mora biti prazna pred menjavo programa',
        order: 4,

type: 1,        actions: () => [
            {
                description: 'Način praznenja: Dodaj prazne palete',
                order: 0,
                image: 'http://45.76.90.178:3333/5.png',
                type: 1
            }
        ]
    },
    {
        description: 'Popis izmeta in dobrih kosov (števcev) + sortiranje izmeta v omaro za izmet, Število izmetih kosov se mora ujemati z števcem.',
        order: 5,

type: 1,        actions: () => [
            {
                description: 'Izmet sortiraj v plastične vrečke z priloženim izmetnim listkom',
                order: 0,
                image: 'http://45.76.90.178:3333/6.png',
                type: 1
            }
        ]
    },
    {
        description: 'Poročanje NOK in OK kosov v terminal in prijava na menjavo (začetek menjave)',
        order: 6,

type: 2,        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/7.png',
                type: 2
            }
        ]
    },
    {
        description: 'P2 - Kontrola ali menjava ščetke',
        order: 7,

type: 2,        actions: () => [
            {
                description: 'Kontrola nečistoč pod ščetkanjem- glej TC',
                order: 0,
                image: 'http://45.76.90.178:3333/8.png',
                type: 2
            }
        ]
    },
    {
        description: 'P3 - Menjava nastavkov na vstavljanju grelca, Vrsta prijemala in pozicija (leva, desna stran), vrsta zgornjega nastavka',
        order: 8,

type: 2,        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/9.png',
                type: 2
            }
        ]
    },
    {
        description: 'P4 - Menjava nastavkov na vtiskovanju grelca, Vrsta nastavkov',
        order: 9,

type: 2,        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/10.png',
                type: 2
            }
        ]
    },
    {
        description: 'P5 - Kontrola tesnila ali menjava tesnila in menjava nastavka, Vrsta nastavka',
        order: 10,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/11.png',
                type: 2
            }
        ]
    },
    {
        description: 'Nastavitev programa + program  kamere o-ring, Izbira prave kode',
        order: 11,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/12.png',
                type: 2
            }
        ]
    },
    {
        description: 'Nastavitev programa - predžarjenje, Izbira prave kode',
        order: 12,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/13.png',
                type: 2
            }
        ]
    },
    {
        description: 'P2 - Nastavitev postaje za mazanje, Pravilna nastavitev senzorja',
        order: 13,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/14.png',
                type: 2
            }
        ]
    },
    {
        description: 'Preverjanje vtiska+ kontrola sile vtiska',
        order: 14,
        type: 2,
        actions: () => [
            {
                description: 'S kljunastim merilom preveri globino vtiska',
                order: 0,
                image: 'http://45.76.90.178:3333/15.png',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola puščanja (56)',
        order: 15,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/16.png',
                type: 2
            }
        ]
    },
    {
        description: 'Nastavljanje senzorjev O-ringa, podložk in priključkov, Pravilna nastavitev senzorjev',
        order: 16,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/17.png',
                type: 2
            }
        ]
    },
    {
        description: 'P16 - Nastavljanje postaje fiksiranja, Vrsta nastavka, vrsta glave',
        order: 17,
        type: 2,
        actions: () => [
            {
                description: 'Na predhodni postaji ustavi palete (koračni način)',
                order: 0,
                image: 'http://45.76.90.178:3333/18.png',
                type: 2
            }
        ]
    },
    {
        description: 'P16 - Preverjanje pik + kontrola dolžine, Pozicija (center), velikost pik, pike morajo biti cele',
        order: 18,
        type: 2,
        actions: () => [
            {
                description: 'Še enkrat preveri globino vtiska',
                order: 0,
                image: 'http://45.76.90.178:3333/19.png',
                type: 2
            }
        ]
    },
    {
        description: ' P17 - Nastavitev kamere',
        order: 19,
        type: 2,
        actions: () => [
            {
                description: 'Nastavitev offseta na globino vtiska',
                order: 0,
                image: 'http://45.76.90.178:3333/20.png',
                type: 2
            }
        ]
    },
    {
        description: 'Preverjanje rezultatov kamere',
        order: 20,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/21.png',
                type: 2
            }
        ]
    },
    {
        description: 'Zagon linije',
        order: 20,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/22.png',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola delovanja linije',
        order: 21,
        type: 2,
        actions: () => [
            {
                description: 'Preveri sile, puščanje, globina vtiska',
                order: 0,
                image: 'http://45.76.90.178:3333/23.png',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola kamere o-ring',
        order: 22,
        type: 2,
        actions: () => [
            {
                description: 'Zaustavitev procesa če kamera ne deluje pravilno',
                order: 0,
                image: 'http://45.76.90.178:3333/24.png',
                type: 2
            }
        ]
    },
    {
        description: 'Polnjene in kontrola vseh dozatorjev',
        order: 23,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/25.png',
                type: 2
            }
        ]
    },
    {
        description: 'Izpolnjevanje prevzema - popis QC-ja iz linije',
        order: 24,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/26.png',
                type: 2
            }
        ]
    },
    {
        description: 'Menjava listka na koncu linije (koda izdelka)',
        order: 25,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/27.png',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola grafa žarjenja- karakteristike svečke',
        order: 26,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/28.png',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola uporosti, Višina kontakov',
        order: 27,
        type: 2,
        actions: () => [
            {
                description: 'Kontrola hlajenja pred postajo za kontrolo upornosti',
                order: 0,
                image: 'http://45.76.90.178:3333/29.png',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola napisa + mazanje navoja, Pravilen, čitljiv napis in pravilna pozicija napisa',
        order: 28,
        type: 2,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/30.png',
                type: 2
            }
        ]
    },
    {
        description: 'Odjava od menjave, prijava na novo kodo',
        order: 29,
        type: 1,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: 'http://45.76.90.178:3333/31.png',
                type: 1
            }
        ]
    },
    {
        description: 'Prevzem na Contour, Izvajanje meritev po QA',
        order: 30,
        type: 1,
        actions: () => [
            {
                description: 'Meritve napisati na prevzem procesa',
                order: 0,
                image: 'http://45.76.90.178:3333/32.png',
                type: 1
            }
        ]
    }
];

export const root = {
    steps: () => {
        return step;
    }
};
