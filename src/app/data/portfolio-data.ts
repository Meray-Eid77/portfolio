// All your personal content lives here. Edit this file to update the site.

export type Lang = 'en' | 'ar';
export type Localized = Record<Lang, string>;

export interface Project {
  title: Localized;
  description: Localized;
  features: Localized[];
  tech: string[];
  /** Optional screenshot, e.g. 'projects/ecommerce.png' (put the file in /public/projects). */
  image?: string;
  github?: string;
  live?: string;
}

export const profile = {
  name: 'Meray Eid',
  role: 'Full-Stack Developer',
  tagline: {
    en: 'I build modern, fast web applications — from the interface to the server.',
    ar: 'أبني تطبيقات ويب حديثة وسريعة، من الواجهة وحتى الخادم.',
  },
  bio: {
    en: 'I build complete web applications, from responsive, user-friendly interfaces to the APIs and databases behind them. I enjoy turning ideas into clean, fast and maintainable products.',
    ar: 'أبني تطبيقات ويب متكاملة، من واجهات متجاوبة وسهلة الاستخدام إلى الـ APIs وقواعد البيانات التي تعمل خلفها. أحب تحويل الأفكار إلى منتجات نظيفة وسريعة وسهلة الصيانة.',
  },
  skills: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS / SCSS', 'Node.js', 'REST APIs', 'SQL', 'Git'],
  email: 'meray.eid2003@gmail.com',
  github: 'https://github.com/Meray-Eid77',
  linkedin: 'https://www.linkedin.com/in/meray-eid',
};

export const services: { icon: 'frontend' | 'backend' | 'dashboard'; title: Localized; description: Localized }[] = [
  {
    icon: 'frontend',
    title: { en: 'Frontend', ar: 'الواجهات الأمامية' },
    description: {
      en: 'Fast, responsive interfaces built with Angular and TypeScript.',
      ar: 'واجهات سريعة ومتجاوبة باستخدام Angular و TypeScript.',
    },
  },
  {
    icon: 'backend',
    title: { en: 'Backend', ar: 'الخادم' },
    description: {
      en: 'REST APIs, authentication and databases that scale.',
      ar: 'واجهات REST API وتسجيل دخول وقواعد بيانات قابلة للتوسع.',
    },
  },
  {
    icon: 'dashboard',
    title: { en: 'Admin dashboards', ar: 'لوحات التحكم' },
    description: {
      en: 'Clear tools to manage products, orders and users.',
      ar: 'أدوات واضحة لإدارة المنتجات والطلبات والمستخدمين.',
    },
  },
];

export const projects: Project[] = [
  {
    title: { en: 'E-commerce Website', ar: 'متجر إلكتروني' },
    description: {
      en: 'A full online store where customers browse products, add them to the cart and place orders, plus an admin dashboard to manage the whole store.',
      ar: 'متجر إلكتروني متكامل يتصفح فيه الزبائن المنتجات ويضيفونها إلى السلة ويتمّون الطلب، مع لوحة تحكم لإدارة المتجر بالكامل.',
    },
    features: [
      { en: 'Product catalog with search and filters', ar: 'كتالوج منتجات مع بحث وفلترة' },
      { en: 'Shopping cart and checkout', ar: 'سلة مشتريات وإتمام الطلب' },
      { en: 'Admin dashboard for products, orders and users', ar: 'لوحة تحكم لإدارة المنتجات والطلبات والمستخدمين' },
      { en: 'Authentication and user roles', ar: 'تسجيل دخول وصلاحيات للمستخدمين' },
    ],
    tech: ['Angular', 'TypeScript', 'Node.js', 'REST API'],
    // image: 'projects/ecommerce.png',
    // github: 'https://github.com/your-username/ecommerce',
    // live: 'https://your-store.example.com',
  },
];
