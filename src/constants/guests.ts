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
    { formal: 'Dani, Kric e Ethan', husband: 'Dani', husbandKeys: ['dani', 'daniel'], wife: 'Kric', wifeKeys: ['kric', 'kriccia', 'kri'], child: 'Ethan', childKeys: ['ethan'], childPrefix: 'tu hijo' },
    { formal: 'Cris, Pau y Anto', husband: 'Cris', husbandKeys: ['cris', 'cristian'], wife: 'Pau', wifeKeys: ['pau', 'paula'], child: 'Anto', childKeys: ['anto', 'antonia'], childPrefix: 'tu hija' },
    { formal: 'Dani, Rubí y Cami', husband: 'Dani', husbandKeys: ['dani', 'daniel'], wife: 'Rubí', wifeKeys: ['rubi', 'rubby'], child: 'Cami', childKeys: ['cami', 'camila'], childPrefix: 'tu hija' },
    { formal: 'Juan, Aleja y Juanpa', husband: 'Juan', husbandKeys: ['juan', 'sebas', 'sebastian', 'juan sebastian'], wife: 'Aleja', wifeKeys: ['aleja', 'alejandra'], child: 'Juanpa', childKeys: ['juanpa'], childPrefix: 'tu hijo' },
    { formal: 'Pipe y Nata', husband: 'Pipe', husbandKeys: ['pipe', 'felipe'], wife: 'Nata', wifeKeys: ['nata', 'natalia'] },
    { formal: 'David, Lili, Sofi e Isa', husband: 'David', husbandKeys: ['david'], wife: 'Lili', wifeKeys: ['lili', 'liliana'], child: 'Sofi e Isa', childKeys: ['sofi', 'sofia', 'isa'], childPrefix: 'tus hijas' }
];

export const GUEST_PHOTOS: Record<string, string> = {
    'Dani, Kric e Ethan': '/DanikricEthan.jpg',
    'Cris, Pau y Anto': '/CrisPauAnto.jpg',
    'Dani, Rubí y Cami': '/DaniRubi.jpg',
    'Juan, Aleja y Juanpa': '/JuanAleja.jpg',
    'Pipe y Nata': '/NataPIpe.jpg',
    'David, Lili, Sofi e Isa': '/DavidLili sofia isabella.jpg'
};
