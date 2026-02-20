export interface Guest {
    formal: string;
    husband: string;
    husbandKeys: string[];
    wife: string;
    wifeKeys: string[];
    child?: string;
    childKeys?: string[];
    childPrefix?: string;
}

export const GUESTS: Guest[] = [
    { formal: 'Dani y Kric bebé Ethan', husband: 'Dani', husbandKeys: ['dani', 'daniel'], wife: 'Kric', wifeKeys: ['kric', 'kriccia', 'kri'], child: 'Ethan', childKeys: ['ethan'], childPrefix: 'tu hijo' },
    { formal: 'Cris y Pau bebé Anto', husband: 'Cris', husbandKeys: ['cris', 'cristian'], wife: 'Pau', wifeKeys: ['pau', 'paula'], child: 'Anto', childKeys: ['anto', 'antonia'], childPrefix: 'tu hija' },
    { formal: 'Dani y Rubby bebé Cami', husband: 'Dani', husbandKeys: ['dani', 'daniel'], wife: 'Rubby', wifeKeys: ['rubby'], child: 'Cami', childKeys: ['cami', 'camila'], childPrefix: 'tu hija' },
    { formal: 'Sebas y Ale bebé Juanpa', husband: 'Sebas', husbandKeys: ['sebas', 'sebastian'], wife: 'Ale', wifeKeys: ['ale', 'alejandra'], child: 'Juanpa', childKeys: ['juanpa', 'juan'], childPrefix: 'tu hijo' },
    { formal: 'Pipe y Nata', husband: 'Pipe', husbandKeys: ['pipe', 'felipe'], wife: 'Nata', wifeKeys: ['nata', 'natalia'] },
    { formal: 'David y Lili hijas Sofi e Isa', husband: 'David', husbandKeys: ['david'], wife: 'Lili', wifeKeys: ['lili', 'liliana'], child: 'Sofi e Isa', childKeys: ['sofi', 'sofia', 'isa'], childPrefix: 'tus hijas' },
    { formal: 'Sebas y Aleja', husband: 'Sebas', husbandKeys: ['sebas'], wife: 'Aleja', wifeKeys: ['aleja', 'alejandra'] }
];

export const GUEST_PHOTOS: Record<string, string> = {
    'Dani y Kric bebé Ethan': '/DanikricEthan.jpg',
    'Cris y Pau bebé Anto': '/CrisPauAnto.jpg',
    'Dani y Rubby bebé Cami': '/DaniRubi.jpg',
    'Sebas y Ale bebé Juanpa': '/JuanAleja.jpg',
    'Pipe y Nata': '/NataPIpe.jpg',
    'David y Lili hijas Sofi e Isa': '/DavidLili sofia isabella.jpg',
    'Sebas y Aleja': '/JuanAleja.jpg',
};
