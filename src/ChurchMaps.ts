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
    // Add more pins as needed
  ];
