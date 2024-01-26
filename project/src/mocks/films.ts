import FilmInfo from '../types/film-info';

export const FILMS: FilmInfo[] = [
  {
    id: 0,
    name: 'Shutter Island',
    posterImage: 'img/shutter-island.jpg',
    previewImage: 'img/shutter-island.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://imdb-video.media-imdb.com/vi4064281/1434659607842-pgv4ql-1616202579819.mp4?Expires=1695825229&Signature=OiG7Qou2qbOJc3TTjpjrLdtaMRh8E5iSYW6CwRVynpGBZ3NGIL5uBIXQ0yoPOztsxC7AOWU~90eOIGecnxW5MU3QO52bDejA6N3EdAu7B~vJXLzfiun1Z0ia5mpg9LsRC5YbMfK-Cwm16a8LpUtErEJGhY71B5p2~qiQeNrMjG2h2POJwxMVUGyM4X2~DNaRb2fpRBjUXYBWuHAsYz--useAUyBjM8Vjeh0mYKscDg3nYYGVTrGtWj~H0aSBawV21ili5~KxqWeVfpRj0jqzlleBbYc6WwIvtz2P7DTZu6gcb8c8ZQPePpYbPO-hG-lcqgzOYLdhrnzvXccpg7gI1A__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'Teddy Daniels and Chuck Aule, two US marshals, are sent to an asylum on a remote island in order to investigate the disappearance of a patient, where Teddy uncovers a shocking truth about the place.',
    rating: 8.2,
    scoresCount: 618,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio',
      'Mark Ruffalo',
      'Ben Kingsley',
      'Michelle Williams',
      'Emily Mortimer',
      'Patricia Clarkson',
      'Max von Sydow'
    ],
    runTime: 139,
    genre: 'Thriller',
    released: 2010,
    isFavorite: true
  },
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/the-grand-budapest-hotel-poster.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray',
      'Edward Norton',
      'Jude Law',
      'Willem Dafoe',
      'Saoirse Ronan',
      'Tony Revoloru',
      'Tilda Swinton',
      'Tom Wilkinson',
      'Owen Wilkinson',
      'Adrien Brody',
      'Ralph Fiennes',
      'Jeff Goldblum'
    ],
    runTime: 100,
    genre: 'Drama',
    released: 2014,
    isFavorite: false
  },
  {
    id: 2,
    name: 'Revenant',
    posterImage: 'img/revenant.jpg',
    previewImage: 'img/revenant.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://imdb-video.media-imdb.com/vi3857035801/1434659607842-pgv4ql-1448904931914.mp4?Expires=1705415170&Signature=rTURVdkuRjQMcjZci7nWRY4Ud7CwJIEMx9jTDAatqt6rAmDyTU69kv0zqR-VrN2XIB2EgQYle4dbgKUqDJCDvNRPMEoQP2ZTtjNd0e1QnfIJtdRDDlDwP3570rqBGPk9Ptm2DV0AmWkM7ft0raa29KuUN9WE5oeVmzYefsYu9abULwgJhTGv4xXf3MHg7gZ7VrUDrLiH5ALYj5NX6iTUg1xlbiXQ8WBYdum0U8sCDEedlRxJ7a80Pd6T8uijUYXW~AlAZ2hVEMoqPcygEgBeFLnxLHC~cux1xSwzvkTR3x2aTYDOOWvtF3ogPVOL-gWR0bRIJ-ctXzm4wLY0Ouf79g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
    rating: 7.8,
    scoresCount: 216,
    director: 'Alejandro G. Iñárritu',
    starring: [
      'Leonardo DiCaprio',
      'Tom Hardy',
      'Domhnall Gleeson',
      'Will Poulter'
    ],
    runTime: 156,
    genre: 'Drama',
    released: 2015,
    isFavorite: false
  },
  {
    id: 3,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://imdb-video.media-imdb.com/vi1451538969/1434659607842-pgv4ql-1540474852592.mp4?Expires=1694266330&Signature=RYG7tVs~3LXwGrAxN8Bg~38muB9~x4mBfkL0ggHN-jvP5SFSUSS2i7r1aFZJZ9hGTvD8hG0WEf3wibr8VwzA4gnDFY-mEPSWwACLM5zzpRUvdMYo71HLId7WptNDDiwoPS8oni2oDawbFu8Z6uvF4I7N2mXdCN4F5A3oOT59P10gXDDMz90TUZywxEr-OTOwxOhp2ZydAwLoG8mD9MLP7bVbHY78Kkdtq9f0m2aO4~5uyDWqIP0uFU7xxss7IPCRInwSoIilPvfoRJytZYlUf46gsFjKN2thHu63E~AxN2UbGDzesB5AJxd9WzS5Eee7pLRpBt53TSkUHxVIJhhByQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'The story of the legendary British rock band Queen and lead singer Freddie Mercury, leading up to their famous performance at Live Aid',
    rating: 6.1,
    scoresCount: 307,
    director: 'Bryan Singer',
    starring: [
      'Rami Malek',
      'Lucy Boynton',
      'Gwilym Lee',
      'Ben Hardy',
      'Joe Mazzello',
      'Aidan Gillen',
      'Tom Hollander',
      'Mike Myers '
    ],
    runTime: 135,
    genre: 'Drama',
    released: 2018,
    isFavorite: true
  },
  {
    id: 4,
    name: 'Seven Years in Tibet',
    posterImage: 'img/seven-years-in-tibet.jpg',
    previewImage: 'img/seven-years-in-tibet.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://imdb-video.media-imdb.com/vi2667560729/1434659607842-pgv4ql-1571504759240.mp4?Expires=1694266266&Signature=tLW6wx2iAM15dW2UWEVYdPMkM3xXFgj68aSIxoZ6OQfp3oCFMxOtgO7cJHjuukEKALLx7e5sYc7Zt1tnRYSHYoaN9pkFIoPFqRuSuYHM3hY60~n5b0JPqZPgNyk5B7REEtnxGNXRd8Ujz4nM9eTDx3dIfNIBkC11GNudEQ8Iytw9acHYBedqKrEN9lEJMC5RAb3-KxiyR6iNnkTA3TDZwQSw-ADtPvtJY~hX0Js-53jtlltkpFpgglfit~tvwvmK0MrPrZHF4afq5RBxdELdPn6J627eF2Pmk6OZHH1McCr-rKtk-UBdLyBp7PFCXDOh9NKaayeYie-yJMsyM~ujKg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'True story of Heinrich Harrer, an Austrian mountain climber who became friends with the Dalai Lama at the time of China\'s takeover of Tibet.',
    rating: 6.2,
    scoresCount: 196,
    director: 'Jean-Jacques Annaud',
    starring: [
      'Brad Pitt',
      'David Thewlis',
      'BD Wong',
      'Mako',
      'Jamyang Jamtsho Wangchuk',
      'Lhakpa Tsamchoe',
      'Jetsun Pema'
    ],
    runTime: 136,
    genre: 'Adventure',
    released: 1997,
    isFavorite: false
  },
  {
    id: 5,
    name: 'Johnny English',
    posterImage: 'img/johnny-english.jpg',
    previewImage: 'img/johnny-english.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://11.react.pages.academy/static/film/video/traffic.mp4',
    description: 'After a sudden attack on MI5, Johnny English, Britain\'s most confident, yet unintelligent spy, becomes Britain\'s only spy.',
    rating: 4.8,
    scoresCount: 169,
    director: 'Peter Howitt',
    starring: [
      'Rowan Atkinson',
      'Natalie Imbruglia',
      'Ben Miller',
      'John Malkovich'
    ],
    runTime: 88,
    genre: 'Comedy',
    released: 2003,
    isFavorite: false
  },
  {
    id: 6,
    name: 'War of the Worlds',
    posterImage: 'img/war-of-the-worlds.jpg',
    previewImage: 'img/war-of-the-worlds.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://imdb-video.media-imdb.com/vi3487629593/1434659607842-pgv4ql-1564562207706.mp4?Expires=1694265898&Signature=uvDQWJ-XJWjuhDdo5mNNNVMDuG6YCSYft12T5kNuuViNQ2cCvbSamY7S0-PF1Txz3pHrk8pP6La6H00DSSeTFZPL8dSqkvBBZsXPttEGnohoDfinoNqHQ~suGmwDeNHvwfKstZzMzKrC3EsX6FB0UhrJqHhvuQVZ80F4pB1fKGqOEcHd0xZN1AmSRZa9y79~BHvHme~ngj4Uh2ec~phkB98Vr~f4T6qamNvwAiukocDqLVcqo0w2vUVy9ny-6oCmubahgwFAcEhOceu5PTzdmq6fqQkAujw~JlkrOusb8D72Myyv84Stlzt5ECHD~OwgVUllZ6AAyamhNclwGyow1Q__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'An alien invasion threatens the future of humanity. The catastrophic nightmare is depicted through the eyes of one American family fighting for survival.',
    rating: 7.5,
    scoresCount: 177,
    director: 'Steven Spielberg',
    starring: [
      'Tom Cruise',
      'Dakota Fanning',
      'Miranda Otto',
      'Tim Robbins'
    ],
    runTime: 116,
    genre: 'Thriller',
    released: 2005,
    isFavorite: false
  },
  {
    id: 7,
    name: 'No Country for Old Men',
    posterImage: 'img/no-country-for-old-men.jpg',
    previewImage: 'img/no-country-for-old-men.jpg',
    backgroundImage: '',
    backgroundColor: '',
    videoLink: '',
    previewVideoLink: 'https://imdb-video.media-imdb.com/vi2749088793/1434659607842-pgv4ql-1677908998394.mp4?Expires=1694265756&Signature=X53s3DJRVmiVADj5G2cRCDeOKSByhvPB1kcXyqJKeQfrCLHVx-xGQHO8f7PSn4kapCP2vtH4bF4jDGYOeU35SHhaG5yeZDE~oHQtbX7vEIf~2z2YKYpsCfLn7gGgRSGNb8DHjKQT0qM9dFAZHWejwROkAUxfBKOM5f-L0W6iUZcyZS9A0n6ZT70OT0UK32WwxyGn6JMD3lmfwmLEwnySKOJNLENWOKj8Om1Wvke5VA8FDYw7Ss1euI4Ja-ivVI5mgtjg2UDZ85HbvQ0A9ef0TP4sKvmOLlDgROTO-R~30-x1nZQJSEW3EKt0DIMbAABVvqaCX-1BN1V-6jZBjtDvKg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA',
    description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong...',
    rating: 9,
    scoresCount: 94,
    director: 'Joel Coen & Ethan Coen',
    starring: [
      'Tommy Lee Jones',
      'Javier Bardem',
      'Josh Brolin'
    ],
    runTime: 122,
    genre: 'Thriller',
    released: 2007,
    isFavorite: false
  }
];

