import faker from 'faker';
import * as _ from 'lodash';

const types = ['improvement', 'info', 'error'];

const step = [
    {
        description: 'Priprava materiala Kontrola vara',
        order: 0,
        actions: () => [
            {
                description: 'Preglej grelce pred začetkom menjave',
                order: 0,
                image: '',
                type: 0
            }
        ]
    },
    {
        description: 'Vklop ročnega načina delovanja za postaje',
        order: 1,
        actions: () => [
            {
                description: 'Pred posegom v stroj vklop koračnega delovanja!',
                order: 0,
                image: '',
                type: 1
            }
        ]
    },
    {
        description: 'Praznjenje dozatorja ohišja, nastavitev senzorja za ohišje in vsutje ohišij v dozator',
        order: 2,
        actions: () => [
            {
                description: 'Čiščenje dozatorja',
                order: 0,
                image: '',
                type: 1
            }
        ]
    },
    {
        description: 'Praznjenje dozatorja grelca, nastavitev senzorja za grelec in vsutje grelcev v dozator',
        order: 3,
        actions: () => [
            {
                description: 'Čiščenje dozatorja',
                order: 0,
                image: '',
                type: 1
            }
        ]
    },
    {
        description: 'Pregled palet na žarjenju, Postaja za žarjenje mora biti prazna pred menjavo programa',
        order: 4,
        actions: () => [
            {
                description: 'Način praznenja: Dodaj prazne palete',
                order: 0,
                image: '',
                type: 1
            }
        ]
    },
    {
        description: 'Popis izmeta in dobrih kosov (števcev) + sortiranje izmeta v omaro za izmet, Število izmetih kosov se mora ujemati z števcem.',
        order: 5,
        actions: () => [
            {
                description: 'Izmet sortiraj v plastične vrečke z priloženim izmetnim listkom',
                order: 0,
                image: '',
                type: 1
            }
        ]
    },
    {
        description: 'Poročanje NOK in OK kosov v terminal in prijava na menjavo (začetek menjave)',
        order: 6,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'P2 - Kontrola ali menjava ščetke',
        order: 7,
        actions: () => [
            {
                description: 'Kontrola nečistoč pod ščetkanjem- glej TC',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'P3 - Menjava nastavkov na vstavljanju grelca, Vrsta prijemala in pozicija (leva, desna stran), vrsta zgornjega nastavka',
        order: 8,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'P4 - Menjava nastavkov na vtiskovanju grelca, Vrsta nastavkov',
        order: 9,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'P5 - Kontrola tesnila ali menjava tesnila in menjava nastavka, Vrsta nastavka',
        order: 10,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Nastavitev programa + program  kamere o-ring, Izbira prave kode',
        order: 11,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Nastavitev programa - predžarjenje, Izbira prave kode',
        order: 12,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'P2 - Nastavitev postaje za mazanje, Pravilna nastavitev senzorja',
        order: 13,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Preverjanje vtiska+ kontrola sile vtiska',
        order: 14,
        actions: () => [
            {
                description: 'S kljunastim merilom preveri globino vtiska',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola puščanja (56)',
        order: 15,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Nastavljanje senzorjev O-ringa, podložk in priključkov, Pravilna nastavitev senzorjev',
        order: 16,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'P16 - Nastavljanje postaje fiksiranja, Vrsta nastavka, vrsta glave',
        order: 17,
        actions: () => [
            {
                description: 'Na predhodni postaji ustavi palete (koračni način)',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'P16 - Preverjanje pik + kontrola dolžine, Pozicija (center), velikost pik, pike morajo biti cele',
        order: 18,
        actions: () => [
            {
                description: 'Še enkrat preveri globino vtiska',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: ' P17 - Nastavitev kamere',
        order: 19,
        actions: () => [
            {
                description: 'Nastavitev offseta na globino vtiska',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Preverjanje rezultatov kamere',
        order: 20,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Zagon linije',
        order: 20,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola delovanja linije',
        order: 21,
        actions: () => [
            {
                description: 'Preveri sile, puščanje, globina vtiska',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola kamere o-ring',
        order: 22,
        actions: () => [
            {
                description: 'Zaustavitev procesa če kamera ne deluje pravilno',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Polnjene in kontrola vseh dozatorjev',
        order: 23,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Izpolnjevanje prevzema - popis QC-ja iz linije',
        order: 24,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Menjava listka na koncu linije (koda izdelka)',
        order: 25,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola grafa žarjenja- karakteristike svečke',
        order: 26,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola uporosti, Višina kontakov',
        order: 27,
        actions: () => [
            {
                description: 'Kontrola hlajenja pred postajo za kontrolo upornosti',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Kontrola napisa + mazanje navoja, Pravilen, čitljiv napis in pravilna pozicija napisa',
        order: 28,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 2
            }
        ]
    },
    {
        description: 'Odjava od menjave, prijava na novo kodo',
        order: 29,
        actions: () => [
            {
                description: 'No description',
                order: 0,
                image: '',
                type: 1
            }
        ]
    },
    {
        description: 'Prevzem na Contour, Izvajanje meritev po QA',
        order: 30,
        actions: () => [
            {
                description: 'Meritve napisati na prevzem procesa',
                order: 0,
                image: '',
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
