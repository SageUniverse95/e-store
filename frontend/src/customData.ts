export interface IDescription {
    [key: string] : string,
    material: string;
    width: string;
    height: string;
    season: string;
    country: string;
}

export interface IAdvantages {
    title: string;
    subTitle: string;
    typePicture: string;
}

export const description: IDescription = {
    material: 'Нейлон, полеуретан',
    width: '26см',
    height: '32 см',
    season: 'Лето',
    country: 'USA',
};

export const IAdvantages: IAdvantages[] = [
    {
        title: 'Free delivery',
        subTitle: 'Free shipping on all order',
        typePicture: 'LocalShipping',
    },
    {
        title: 'Online Support 24/7',
        subTitle: 'Support online 24 hours a day',
        typePicture: 'SupportAgent',
    },
    {
        title: 'Money Return',
        subTitle: 'Back guarantee under 7 days',
        typePicture: 'Money',
    },
    {
        title: 'Member Discount',
        subTitle: 'On every order over $120.00',
        typePicture: 'Discount',
    },
];
