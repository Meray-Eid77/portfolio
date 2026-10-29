import { Localized } from './portfolio-data';

// Fixed interface labels in both languages.
export const uiText = {
  nav: {
    about: { en: 'About', ar: 'نبذة' },
    projects: { en: 'Projects', ar: 'المشاريع' },
    contact: { en: 'Contact', ar: 'تواصل' },
    switchLang: { en: 'Switch to Arabic', ar: 'التبديل إلى الإنجليزية' },
  },
  hero: {
    status: { en: 'Open to opportunities', ar: 'أبحث عن فرص جديدة' },
    greeting: { en: "Hi, I'm", ar: 'مرحباً، أنا' },
    viewWork: { en: 'View my work', ar: 'شاهد أعمالي' },
    contactMe: { en: 'Hire me', ar: 'تواصل معي' },
    scroll: { en: 'Scroll down', ar: 'مرّر للأسفل' },
  },
  about: {
    eyebrow: { en: 'About', ar: 'نبذة' },
    title: { en: 'About me', ar: 'نبذة عني' },
    skills: { en: 'Tech stack', ar: 'التقنيات' },
    servicesEyebrow: { en: 'What I do', ar: 'ماذا أقدّم' },
  },
  projects: {
    eyebrow: { en: 'Work', ar: 'أعمالي' },
    title: { en: 'Featured projects', ar: 'مشاريع مختارة' },
    code: { en: 'Code', ar: 'الكود' },
    live: { en: 'Live demo', ar: 'عرض مباشر' },
  },
  contact: {
    eyebrow: { en: 'Contact', ar: 'تواصل' },
    title: { en: "Let's build something great", ar: 'لنصنع شيئاً رائعاً معاً' },
    text: {
      en: "Have a project in mind or a job opportunity? I'd be happy to hear from you.",
      ar: 'عندك مشروع أو فرصة عمل؟ يسعدني أن تتواصل معي.',
    },
    email: { en: 'Say hello', ar: 'راسلني' },
  },
  footer: {
    builtWith: { en: 'Built with Angular', ar: 'صُنع باستخدام Angular' },
  },
} satisfies Record<string, Record<string, Localized>>;
