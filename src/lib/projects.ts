export type ProjectStatus = 'In Bau' | 'Verfügbar' | 'Verkauft';
export type ProjectType = 'Wohnung' | 'Gewerbe' | 'Gemischt';

export interface Project {
  slug: string;
  title: string;
  city: string;
  units: string;
  completion: string;
  status: ProjectStatus;
  type: ProjectType;
  image: string;
}

export const projects: Project[] = [
  {
    slug: 'salco-quartier-langen',
    title: 'SALCO Quartier',
    city: 'Langen',
    units: 'Haus ANNA (17 WE) + Haus HANS (13 WE Miete)',
    completion: 'In Bau',
    status: 'In Bau',
    type: 'Gemischt',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'aloja-barrio-cantan',
    title: 'Aloja/Barrio/Cantan',
    city: 'Langen',
    units: '54 WE + 2 Gewerbeeinheiten',
    completion: 'In Bau',
    status: 'In Bau',
    type: 'Gemischt',
    image: 'https://images.unsplash.com/photo-1600607687931-cebf0746e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'wilhelm-quartier-lampertheim',
    title: 'Wilhelm Quartier',
    city: 'Lampertheim',
    units: '25 WE + 2 Gewerbe',
    completion: 'Q1 2024',
    status: 'Verkauft',
    type: 'Gemischt',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'friedrichsdorf-neubau',
    title: 'Neubau Friedrichsdorf',
    city: 'Friedrichsdorf',
    units: '52 WE',
    completion: 'Q1 2024',
    status: 'Verkauft',
    type: 'Wohnung',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'balu-langen',
    title: "Ba'Lu Gemütlichkeit",
    city: 'Langen',
    units: '20 WE + 2 Gewerbe',
    completion: 'Q3 2023',
    status: 'Verkauft',
    type: 'Gemischt',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'amselpark-lampertheim',
    title: 'Der Amselpark',
    city: 'Lampertheim',
    units: '24 WE',
    completion: '2023',
    status: 'Verkauft',
    type: 'Wohnung',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'stadtquartier-langen',
    title: 'Stadtquartier',
    city: 'Langen',
    units: '54 WE + 2 Gewerbe',
    completion: 'Q3 2022',
    status: 'Verkauft',
    type: 'Gemischt',
    image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'b26-langen',
    title: 'B26...Die alte Post',
    city: 'Langen',
    units: '4 WE + 6 Gewerbe',
    completion: '2022',
    status: 'Verkauft',
    type: 'Gemischt',
    image: 'https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 't1-egelsbach',
    title: 'T1 - Wohnen',
    city: 'Egelsbach',
    units: '10 WE',
    completion: 'Mai 2022',
    status: 'Verkauft',
    type: 'Wohnung',
    image: 'https://images.unsplash.com/photo-1600607688969-a5bfcd64bd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'dieselstrasse-langen',
    title: 'Dieselstraße',
    city: 'Langen',
    units: '6 WE',
    completion: '2022',
    status: 'Verkauft',
    type: 'Wohnung',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
  },
];
