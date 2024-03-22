interface DataType {
  id: number;
  page: string;
  widget_title: string;
  widget_class?: string;
  widget_class2?: string;
  footer_link: {
    link: string;
    link_title: string;
  }[];
}

const footer_data: DataType[] = [
  {
    id: 1,
    page: 'home_3',
    widget_title: 'Links',
    footer_link: [
      { link: '/', link_title: 'Home' },
      { link: '/dashboard/membership', link_title: 'Membership' },
      { link: '/about_us_01', link_title: 'About Company' },
      { link: '/pricing_02', link_title: 'Pricing' },
      { link: '/dashboard', link_title: 'Dashboard' },
    ],
  },
  {
    id: 2,
    widget_class: 'col-xxl-3 col-xl-4',
    page: 'home_3',
    widget_title: 'Legal',
    footer_link: [
      { link: '/faq', link_title: 'Terms & conditions' },
      { link: '/faq', link_title: 'Cookie' },
      { link: '/faq', link_title: 'Privacy policy' },
      { link: '/faq', link_title: 'Faq’s' },
    ],
  },
  {
    id: 3,
    page: 'home_3',
    widget_title: 'New Listing',
    footer_link: [
      { link: '/search', link_title: '​Buy Apartments' },
      { link: '/search', link_title: 'Buy Condos' },
      { link: 'search', link_title: 'Rent Houses' },
      { link: 'search', link_title: 'Rent Industrial' },
      { link: '/search', link_title: 'Buy Villas' },
      { link: '/search', link_title: 'Rent Office' },
    ],
  },
];

export default footer_data;
