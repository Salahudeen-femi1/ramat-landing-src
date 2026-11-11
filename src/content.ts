// All copy and data live here so the page can be edited without touching components.
import jollofImg from './assets/jollof.webp';
import friedriceImg from './assets/friedrice.webp';
import stewImg from './assets/stew.webp';

export const brand = {
  name: 'Ramat Pickup',
  kitchen: 'Ramat Kitchen',
  area: 'Saki West',
  tagline: 'Fresh meals, ready when you are.',
  sampleCode: 'RP-4827',
};

export const nav = [
  { label: 'Menu', href: '#menu' },
  { label: 'How it works', href: '#how' },
  { label: 'Why pickup', href: '#why' },
  { label: 'FAQ', href: '#faq' },
];

export const trust = [
  { kind: 'fresh', title: 'Cooked fresh', text: 'Your meal is prepared after you order, not before.' },
  { kind: 'time', title: 'About 20 minutes', text: 'A live countdown tells you when to leave home.' },
  { kind: 'pay', title: 'Secure payment', text: 'Pay in the app with Moniepoint. Nothing to settle at the counter.' },
  { kind: 'code', title: 'One pickup code', text: 'Show it at the counter and collect. That is the whole queue.' },
] as const;

export const menu = {
  meals: [
    { name: 'Jollof Rice', note: 'Smoky party-style jollof, cooked to order.', price: 2000, image: jollofImg },
    { name: 'Fried Rice', note: 'Mixed vegetables and prawns.', price: 2000, image: friedriceImg },
    { name: 'Assorted Pepper Stew', note: 'Rich, slow-cooked stew with assorted meat.', price: 2500, image: stewImg },
    { name: 'Chapman', note: 'Chilled, fizzy and fruity.', price: 1500, image: null as string | null },
  ],
  extras: [
    { name: 'Fried Chicken', price: 1500 },
    { name: 'Plantain', price: 500 },
    { name: 'Beef', price: 1000 },
    { name: 'Egg', price: 300 },
  ],
};

export const steps = [
  {
    title: 'Choose your meal',
    text: 'Browse the menu, add extras like fried chicken or plantain, and set your quantity.',
  },
  {
    title: 'Pay in the app',
    text: 'Pick a pickup time, then pay securely with Moniepoint. No cash at the counter.',
  },
  {
    title: 'Watch it come together',
    text: 'Follow your order from received to preparing to ready, with a live time estimate.',
  },
  {
    title: 'Show your code',
    text: 'Walk in, show your pickup code, and collect your meal. That is all.',
  },
];

export const benefits = [
  {
    icon: 'flame',
    title: 'Hot, not reheated',
    text: 'Your meal is prepared once your order is confirmed, so it reaches you at its best.',
  },
  {
    icon: 'wallet',
    title: 'No delivery fees',
    text: 'You collect it yourself, so there is no rider to wait for and no delivery charge to pay.',
  },
  {
    icon: 'timer',
    title: 'You know when',
    text: 'The app tells you when your order is ready, so you leave home at the right moment.',
  },
] as const;

export const faqs = [
  {
    q: 'How does pickup work?',
    a: 'Order in the app, pay, and wait for the "Ready for pickup" update. Then go to the counter at Ramat Kitchen, Saki West, and show your pickup code.',
  },
  {
    q: 'How do I pay?',
    a: 'Payment happens in the app through Moniepoint. You pay before you arrive, so there is nothing to settle at the counter.',
  },
  {
    q: 'How long does an order take?',
    a: 'Most orders are ready in about 20 minutes. The app shows a live estimate and updates it as the kitchen works.',
  },
  {
    q: 'Can I customise my meal?',
    a: 'Yes. Add extras such as fried chicken, plantain, beef or egg on the meal page. Your total updates as you choose.',
  },
  {
    q: 'Do you deliver?',
    a: 'No. Ramat Pickup is pickup only, which keeps food hot and removes delivery fees.',
  },
  {
    q: 'What is the pickup code for?',
    a: 'It confirms your order at the counter. You get it as soon as your payment goes through, and you can find it again under Orders.',
  },
];

/**
 * Add real customer quotes here and the Testimonials section appears
 * automatically. It stays hidden while this list is empty, so the page
 * never shows invented reviews.
 */
export const testimonials: { quote: string; name: string; detail?: string }[] = [];

export const footerLinks = [
  { label: 'Menu', href: '#menu' },
  { label: 'How it works', href: '#how' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
];

export const naira = (n: number) => '₦' + n.toLocaleString('en-US');
