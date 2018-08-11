import { Item } from '../models/Item';

export class ItemsService {

  bookList : Item[] = [
    {
      name: 'Malte week-end',
      description: [
        'ISBN: 978-2-06-722734-7',
        'Collection: LeGuide Vert'
      ],
      isAvailable: false
    },
    {
      name: 'Les montagnes hallucinées',
      description: [
        'ISBN: 2-290-31905-8',
        'Auteur: HP Lovecraft'
      ],
      isAvailable: true
    },
    {
      name: '365 jours de fête',
      description: [
        'ISBN: 978-2-01-231249-4',
        'Auteur: Pippa Middleton'
      ],
      isAvailable: true
    },
    {
      name: 'Union Européenne et Droit International',
      description: [
        'ISBN: 978-2-233-00665-3',
        'Auteurs: Myriam Benlolo-Carabot, Ulas Candas, Eglantine Cujo'
      ],
      isAvailable: true
    }
  ];

  diskList : Item[] = [
    {
      name: 'SteamBoy',
      description: [
        'Durée: 2h11',
        'Scénariste: Katsuhiro Ôtomo'
      ],
      isAvailable: true
    },
    {
      name: 'Origine',
      description: [
        'Durée: 2h30',
        'Réalisateur: Keiichi Sugiyama'
      ],
      isAvailable: false
    }
  ];

  changeStatus(list: string, index: number) {
    if (list == 'books') {
      this.bookList[index].isAvailable =
        ! this.bookList[index].isAvailable;;
    };
    if (list == 'disks') {
      this.diskList[index].isAvailable =
        ! this.diskList[index].isAvailable;;
    };
  }
}

// Vous aurez un service qui centralise les données des livres
// et des CD (créez deux array séparés, codés en dur, contenant
// plusieurs éléments), ainsi qu'une seule méthode pour prêter
// et rendre un élément.
