export interface Pin {
  id: number;
  name: string;
  nickname: string;
  address: string;
  phoneNumber: string;
  url: string;
  instagram: string;
  otherInfo: string;
  position: [number, number];
}

export const pins:Pin[] = [
    {
        id: 1,
        name: '東京キリストの教会',
        nickname: 'Tokyo Church of Christ(TCC)',
        address: '〒151-0063 東京都渋谷区富ケ谷１丁目３０−１７',
        phoneNumber: '123-456-7890',
        url: 'https://tccnet.org/',
        instagram: '@example_instagram',
        otherInfo: 'Some additional info for Place 1',
        position: [35.665066539541485, 139.68841924300204], // Tokyo coordinates
    },
    {
        id: 2,
        name: '大阪中央キリストの教会',
        nickname: 'Osaka Center Church of Christ(OCCC)',
        address: '〒561-0815 大阪府豊中市豊南町南３丁目１０−２７',
        phoneNumber: '123-456-7890',
        url: 'https://osakaccc.com/',
        instagram: '@example_instagram',
        otherInfo: 'Some additional info for Place 2',
        position: [34.743575020943, 135.48036564030315], // Tokyo coordinates
      },
      {
        id: 3,
        name: '名古屋中央キリストの教会',
        nickname: 'Nagoya Center Church of Christ(NCCC)',
        address: '〒453-0821 名古屋市中村区大宮町2-25',
        phoneNumber: '090-2922-6142',
        url: 'https://tccnet.org/church_info/',
        instagram: '@example_instagram',
        otherInfo: 'Some additional info for Place 2',
        position: [35.16712729837098, 136.86420324489993], // Tokyo coordinates
      },
      {
        id: 4,
        name: '札幌キリストの教会',
        nickname: 'Sapporo Church of Christ(SCC)',
        address: '---',
        phoneNumber: '090-2922-6142',
        url: 'https://tccnet.org/church_info/',
        instagram: '@example_instagram',
        otherInfo: 'Some additional info for Place 2',
        position: [43.06830280615644, 141.35088886267712], // Tokyo coordinates
      },
      {
        id: 5,
        name: '杜の都 仙台キリストの教会',
        nickname: 'Sendai Church of Christ(SCC)',
        address: '〒982-0803 宮城県仙台市太白区金剛沢２丁目８−３１',
        phoneNumber: 'contact@sendai-church-of-christ.org',
        url: 'https://sendai-church-of-christ.org/',
        instagram: '@example_instagram',
        otherInfo: 'Some additional info for Place 2',
        position: [38.231947558920915, 140.84026483044968], // Tokyo coordinates
      },
      {
        id: 6,
        name: '福岡キリストの教会',
        nickname: 'Fukuoka Church of Christ(SCC)',
        address: '---',
        phoneNumber: 'fukuokachurch@googlegroups.com',
        url: 'https://tccnet.org/church_info/',
        instagram: '@example_instagram',
        otherInfo: 'Some additional info for Place 2',
        position: [33.58998492404206, 130.4190289366302], // Tokyo coordinates
      },
      {
        id: 7,
        name: '沖縄中央キリストの教会',
        nickname: 'Okinawa Center Church of Christ(OCC)',
        address: '〒453-0821 名古屋市中村区大宮町2-25',
        phoneNumber: 'https://line.me/R/ti/p/%40443keche',
        url: 'https://icoc.okinawa/',
        instagram: '@example_instagram',
        otherInfo: 'Some additional info for Place 2',
        position: [26.366247853093142, 127.81874116827113], // Tokyo coordinates
      }
    // Add more pins as needed
  ];
