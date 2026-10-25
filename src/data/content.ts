// src/data/content.ts
// ─────────────────────────────────────────────────────────────────────────────
// All wedding content in one file. Edit names, dates, venues, links here.
// The client should ONLY need to modify this file (and drop in photos/audio).
// ─────────────────────────────────────────────────────────────────────────────

export type Lang = 'gu' | 'en';

export interface ContentMap {
  gu: string;
  en: string;
}

// ── CONFIG FLAGS ─────────────────────────────────────────────────────────────
export const config = {
  /** Set to true for noindex robots.txt (private invitation) */
  privateInvitation: false,
  /** Show the "Designed by" credit in footer */
  showDesignerCredit: true,
  /** RSVP webhook URL (Formspree / Google Apps Script / Web3Forms) */
  rsvpWebhookUrl: '', // TODO(client): Add your webhook URL
  /** WhatsApp number for RSVP (with country code, no +) */
  whatsappNumber: '919687529362', // TODO(client): Confirm number
  /** Contact numbers (tap-to-call) */
  contactNumbers: ['96875 29362', '87330 66977'], // TODO(client): Confirm
};

// ── MANTRAS & SHLOKA ─────────────────────────────────────────────────────────
export const mantras: ContentMap = {
  gu: '॥ ૐ ગં ગણપતયે નમઃ ॥  ॥ ૐ ચામુંડાયૈ નમઃ ॥  ॥ શ્રી જાનકી વલ્લભો વિજયતે ॥  ॥ ૐ હં હનુમતે નમઃ ॥',
  en: '॥ Om Gan Ganapataye Namah ॥  ॥ Om Chamundayai Namah ॥  ॥ Shri Janaki Vallabho Vijayate ॥  ॥ Om Hanumate Namah ॥',
};

export const shloka: ContentMap = {
  gu: 'વક્રતુણ્ડ મહાકાય, સૂર્યકોટિ સમપ્રભઃ ।\nનિર્વિઘ્નં કુરુ મે દેવ સર્વકાર્યેષુ સર્વદા ॥',
  en: 'Vakratunda Mahakaya, Suryakoti Samaprabha,\nNirvighnam Kuru Me Deva Sarvakaryeshu Sarvada.',
};

// ── HERO ──────────────────────────────────────────────────────────────────────
export const hero = {
  title: { gu: 'મંગલ પરિણય', en: 'Auspicious Wedding' } as ContentMap,
  subtitle: { gu: '॥ શુભ વિવાહ ॥', en: '॥ Shubh Vivah ॥' } as ContentMap,
  groom: { gu: 'ડૉ. પ્રેમ (MBBS)', en: 'Dr. Prem (MBBS)' } as ContentMap,
  bride: { gu: 'ડૉ. પ્રિયંકા (M.S. ENT)', en: 'Dr. Priyanka (M.S. ENT)' } as ContentMap,
  date: {
    gu: 'તા. ૧૩-૧૨-૨૦૨૬, રવિવાર',
    en: '13th December 2026, Sunday',
  } as ContentMap,
  samvatDate: {
  } as ContentMap,
  scrollCue: { gu: 'નીચે જુઓ', en: 'Scroll Down' } as ContentMap,
};

// ── PRELOADER ────────────────────────────────────────────────────────────────
export const preloader = {
  title: { gu: '॥ શુભ વિવાહ ॥', en: '॥ Shubh Vivah ॥' } as ContentMap,
  welcome: {
    gu: 'અમારા આંગણે પધારજો',
    en: 'Welcome to our celebration',
  } as ContentMap,
  openButton: {
    gu: 'આમંત્રણ ખોલો',
    en: 'Open Invitation',
  } as ContentMap,
};

// ── BLESSINGS / FAMILY ───────────────────────────────────────────────────────
export const blessings = {
  heading: { gu: 'આશીર્વાદ', en: 'With the Blessings of' } as ContentMap,
  eldersNote: {
    gu: 'અંતરીક્ષમાંથી આશીર્વાદ',
    en: 'Blessings from the Heavens',
  } as ContentMap,
  elders: {
    gu: 'દાદા-દાદી, મમ્મી-પપ્પા અને સદગુરુ ॐ દેવ શ્રી શ્રી ૧૦૦૮ શત્રુઘ્નદાસ મહારાજ.',
    en: 'Grandparents, and Sadguru Om Dev Shri Shri 1008 Shatrughndas Maharaj.',
  } as ContentMap,
  invitationParagraph: {
    gu: 'મૂળ વતન હડિયાણા, હાલ-જામનગર નિવાસી અ.સૌ. નયનાબેન તથા શ્રી મગનભાઈ ઘેલાભાઈ પરમારના સુપુત્ર ડૉ. પ્રેમ ના શુભ લગ્ન ડૉ. પ્રિયંકા અ.સૌ. નિતાબેન તથા શ્રી સુરેશભાઈ ગોરધનભાઈ ખાણદરની સુપુત્રી સાથે રવિવાર તા. ૧૩-૧૨-૨૦૨૬ ના શુભ દિને નિરધારેલ છે. તો આ શુભ અવસરે નવદંપતી ને આશીર્વાદ આપવા સ્નેહભર્યું નિમંત્રણ છે.',
    en: 'Originally from Hadiyana, currently residing in Jamnagar, Mrs. Nayanaben and Shri Maganbhai Ghelabhai Parmar cordially invite you to the auspicious wedding of their son Dr. Prem with Dr. Priyanka , daughter of Mrs. Nitaben and Shri Sureshbhai Gordhanbhai Khandar, on the auspicious day of Sunday, 13th December 2026. We warmly invite you to bless the newlyweds on this joyous occasion.',
  } as ContentMap,
};

// ── FAMILY NAMES ─────────────────────────────────────────────────────────────
export const familyNames = {
  groomSide: {
    heading: { gu: 'વરપક્ષ', en: "Groom's Family" } as ContentMap,
    members: [
      { gu: 'સ્વ. ઘેલાભાઈ વાલાભાઈ પરમાર', en: 'Late Shri Ghelabhai Valabhai Parmar', relation: { gu: 'દાદાજી', en: 'Grandfather' } as ContentMap },
      { gu: 'સ્વ. વિજયાબેન ઘેલાભાઈ પરમાર', en: 'Late Smt. Vijayaben Ghelabhai Parmar', relation: { gu: 'દાદીમા', en: 'Grandmother' } as ContentMap },
      { gu: 'સ્વ. નવીનભાઈ ઘેલાભાઈ પરમાર', en: 'Late Shri Navinbhai Ghelabhai Parmar', relation: { gu: 'મોટા બાપુજી', en: 'Elder Uncle' } as ContentMap },
      { gu: 'ગં.સ્વ. મધુબેન નવીનભાઈ પરમાર', en: 'Late Smt. Madhuben Navinbhai Parmar', relation: { gu: 'મોટા બા', en: 'Elder Aunt' } as ContentMap },
      { gu: 'શ્રી મગનભાઈ ઘેલાભાઈ પરમાર', en: 'Shri Maganbhai Ghelabhai Parmar', relation: { gu: 'પિતાશ્રી', en: 'Father' } as ContentMap },
      { gu: 'અ.સૌ. નયનાબેન મગનભાઈ પરમાર', en: 'Smt. Nayanaben Maganbhai Parmar', relation: { gu: 'માતુશ્રી', en: 'Mother' } as ContentMap },
      { gu: 'શ્રી ભાવેશભાઈ નવીનભાઈ પરમાર', en: 'Shri Bhaveshbhai Navinbhai Parmar', relation: { gu: 'ભાઈ', en: 'Brother' } as ContentMap },
      { gu: 'અ.સૌ. વર્ષાબેન ભાવેશભાઈ પરમાર', en: 'Smt. Varshaben Bhaveshbhai Parmar', relation: { gu: 'ભાભી', en: 'Sister In Law' } as ContentMap },
      { gu: 'શ્રી સુનિલભાઈ નવીનભાઈ પરમાર', en: 'Shri Sunilbhai Navinbhai Parmar', relation: { gu: 'ભાઈ', en: 'Brother' } as ContentMap },
      { gu: 'અ.સૌ. રશ્મીબેન સુનિલભાઈ પરમાર', en: 'Smt. Rashmiben Sunilbhai Parmar', relation: { gu: 'ભાભી', en: 'Sister In Law' } as ContentMap },
    ],
  },
  brideSide: {
    heading: { gu: 'કન્યાપક્ષ', en: "Bride's Family" } as ContentMap,
    members: [
      { gu: 'શ્રી સુરેશભાઈ ગોરધનભાઈ ખાણદર', en: 'Shri Sureshbhai Gordhanbhai Khandar', relation: { gu: 'પિતાશ્રી', en: 'Father' } as ContentMap },
      { gu: 'અ.સૌ. નિતાબેન સુરેશભાઈ ખાણદર', en: 'Smt. Nitaben Sureshbhai Khandar', relation: { gu: 'માતુશ્રી', en: 'Mother' } as ContentMap },
      { gu: 'ડૉ. હાર્દિકભાઈ સુરેશભાઈ ખાણદર', en: 'Dr. Hardikbhai Sureshbhai Khandar', relation: { gu: 'ભાઈ', en: 'Brother' } as ContentMap },

    ],
  },
};

// ── DINNER INVITATION ────────────────────────────────────────────────────────
export const dinnerInvitation: ContentMap = {
  gu: 'ડૉ. પ્રેમના શુભ લગ્ન પ્રસંગે યોજેલ ભોજન સમારંભમાં આપશ્રી - બન્ને - સહકુટુંબ ને પધારવા અમારૂ ભાવભર્યું આમંત્રણ છે.\nતારીખ : ૧૩-૧૨-૨૦૨૬ રવિવાર, સમય : સાંજે ૭:૦૦ કલાકે\nસ્થળ : સ્ટાર લાઈટ પાર્ટી પ્લોટ, રાજ પાર્ક વિસ્તાર, જામનગર - રાજકોટ હાઈવે, જામનગર',
  en: 'On the auspicious occasion of Dr. Prem\'s wedding, we cordially invite you and your family to the dinner celebration.\nDate: 13-12-2026 Sunday, Time: 7:00 PM\nVenue: Star Light Party Plot, Raj Park Area, Jamnagar-Rajkot Highway, Jamnagar',
};

// ── CELEBRATIONS TIMELINE ────────────────────────────────────────────────────
export interface TimelineEvent {
  name: ContentMap;
  time: ContentMap;
  icon: string; // icon identifier
  calendarTitle: string;
  date: string; // ISO date string for .ics
  durationMinutes: number;
}

export interface TimelineDay {
  day: ContentMap;
  date: string; // ISO
  events: TimelineEvent[];
}

export const timeline: TimelineDay[] = [
  {
    day: { gu: 'શનિવાર · ૧૨ ડિસેમ્બર ૨૦૨૬', en: 'Saturday · 12 December 2026' },
    date: '2026-12-12',
    events: [
      {
        name: { gu: 'મંડપ મુહૂર્ત', en: 'Mandap Muhurat' },
        time: { gu: 'સવારે ૮:૦૦ કલાકે', en: '8:00 AM' },
        icon: 'mandap',
        calendarTitle: 'Mandap Muhurat - Prem & Priyanka Wedding',
        date: '2026-12-12T08:00:00+05:30',
        durationMinutes: 120,
      },
      {
        name: { gu: 'મામેરા', en: 'Mameru' },
        time: { gu: 'સવારે ૧૦:૦૦ કલાકે', en: '10:00 AM' },
        icon: 'mameru',
        calendarTitle: 'Mameru Ceremony - Prem & Priyanka Wedding',
        date: '2026-12-12T10:00:00+05:30',
        durationMinutes: 120,
      },
      {
        name: { gu: 'દાંડીયા રાસ', en: 'Dandiya Raas' },
        time: { gu: 'સાંજે ૮:૦૦ કલાકે', en: '8:00 PM' },
        icon: 'dandiya',
        calendarTitle: 'Dandiya Raas - Prem & Priyanka Wedding',
        date: '2026-12-12T20:00:00+05:30',
        durationMinutes: 180,
      },
      {
        name: { gu: 'હલ્દી', en: 'Haldi' },
        time: { gu: 'સાંજે ૦૬:૦૦ કલાકે', en: '6:00 PM' },
        icon: 'haldi',
        calendarTitle: 'Haldi Ceremony - Prem & Priyanka Wedding',
        date: '2026-12-12T18:00:00+05:30',
        durationMinutes: 180,
      },
    ],
  },
  {
    day: { gu: 'રવિવાર · ૧૩ ડિસેમ્બર ૨૦૨૬', en: 'Sunday · 13 December 2026' },
    date: '2026-12-13',
    events: [
      {
        name: { gu: 'સગાઈ વિધી', en: 'Sagai / Engagement' },
        time: { gu: 'સવારે ૮:૩૦ કલાકે', en: '8:30 AM' },
        icon: 'rings',
        calendarTitle: 'Engagement Ceremony - Prem & Priyanka Wedding',
        date: '2026-12-13T08:30:00+05:30',
        durationMinutes: 120,
      },
      {
        name: { gu: 'જાન પ્રયાણ', en: 'Jaan Prayan / Baraat Departure' },
        time: { gu: 'સાંજે ૪:૦૦ કલાકે', en: '4:00 PM' },
        icon: 'baraat',
        calendarTitle: 'Baraat - Prem & Priyanka Wedding',
        date: '2026-12-13T16:00:00+05:30',
        durationMinutes: 120,
      },
      {
        name: { gu: 'હસ્ત મેળાપ', en: 'Hast Melap / Wedding Ritual' },
        time: { gu: 'સાંજે ૭:૦૦ કલાકે', en: '7:00 PM' },
        icon: 'hands',
        calendarTitle: 'Hast Melap - Prem & Priyanka Wedding',
        date: '2026-12-13T19:00:00+05:30',
        durationMinutes: 60,
      },
      {
        name: { gu: 'ભોજન સમારંભ', en: 'Dinner Celebration' },
        time: { gu: 'સાંજે ૭:૦૦ કલાકે', en: '7:00 PM' },
        icon: 'dinner',
        calendarTitle: 'Wedding Dinner - Prem & Priyanka Wedding',
        date: '2026-12-13T19:00:00+05:30',
        durationMinutes: 180,
      },
    ],
  },
];

// ── VENUES ───────────────────────────────────────────────────────────────────
export interface Venue {
  label: ContentMap;
  name: ContentMap;
  address: ContentMap;
  mapsUrl: string; // TODO(client): Replace with exact pin
}

export const venues: Venue[] = [
  {
    label: { gu: 'શુભ લગ્ન સ્થળ', en: 'Wedding & Dinner Venue' },
    name: { gu: 'સ્ટાર લાઈટ પાર્ટી પ્લોટ', en: 'Star Light Party Plot' },
    address: {
      gu: 'રાજ પાર્ક વિસ્તાર, જામનગર - રાજકોટ હાઈવે, જામનગર',
      en: 'Raj Park Area, Jamnagar-Rajkot Highway, Jamnagar',
    },
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Star%20Light%20Party%20Plot%20Raj%20Park%20Jamnagar',
  },
  {
    label: { gu: 'શુભ નિવાસ સ્થાન', en: 'Residence' },
    name: { gu: '"ગુરૂકૃપા"', en: '"Gurukrupa"' },
    address: {
      gu: 'ઓશવાળ ટાઉનશીપ, શેરી નં. ૧, જૈન દેરાસર વાળી શેરી, વિજયનગર-નાઘેડી રોડ, ગોકુલનગર, જકાત નાકા, જામનગર - ૩૬૧૦૦૪',
      en: 'Oshwal Township, Street No. 1, Jain Derasar wali Sheri, Vijaynagar-Naghedi Road, Gokulnagar, Jakat Naka, Jamnagar - 361004',
    },
    mapsUrl: 'https://maps.app.goo.gl/RSvSHH8Qpav6F1tV6?g_st=iw',
  },
];

// ── DARSHANABHILASHI ─────────────────────────────────────────────────────────
export const darshanabhilashi = {
  heading: { gu: 'દર્શનાભીલાષી', en: 'Darshanabhilashi' } as ContentMap,
  members: [
    { gu: 'શ્રી હેત ભાવેશભાઈ પરમાર', en: 'Mr. Het Bhaveshbhai Parmar' },
    { gu: 'શ્રી મનન સુનિલભાઈ પરમાર', en: 'Mr. Manan Sunilbhai Parmar' },
  ],
};

// ── TAHUKO (POEM) ────────────────────────────────────────────────────────────
export const tahuko = {
  heading: { gu: 'ટહુકો', en: 'Tahuko' } as ContentMap,
  // TODO(client): Copy exact poem text from physical card image
  poem: {
    gu: `ફૂલો ની જેમ ખીલજો, તારા ની જેમ ચમકજો,
સૂર્ય જેવી તેજસ્વિતા, ચંદ્ર જેવી શીતળતા,
ગંગા જેવી પવિત્રતા, ધરતી જેવી સહનશીલતા,
સાગર જેવી ગંભીરતા, આકાશ જેવી વિશાળતા,
દાંપત્ય જીવનમાં મળજો,
ચિ. પ્રેમ અને ચિ. પ્રિયંકાના
દાંપત્ય જીવનના મંગલ ચરણ વેળાએ
આશીર્વાદ નિરંતર`,
    en: `Bloom like flowers, shine like stars,
Brilliance of the sun, coolness of the moon,
Purity of the Ganges, patience of the earth,
Depth of the ocean, vastness of the sky,
May you find all this in married life,
For Chi. Prem and Chi. Priyanka
On the auspicious beginning of their married life
Eternal blessings`,
  } as ContentMap,
  credit: '– પવિત્રા, નવ્યા, આરોહી, શ્લોક',
};

// ── FINALE ───────────────────────────────────────────────────────────────────
export const finale = {
  closing: {
    gu: 'સપ્રેમ આમંત્રણ',
    en: 'With Love & Gratitude',
  } as ContentMap,
  sender: {
    name: { gu: 'શ્રી મગનભાઈ ઘેલાભાઈ પરમાર', en: 'Shri Maganbhai Ghelabhai Parmar' } as ContentMap,
    address: {
      gu: '"ગુરૂકૃપા", ઓશવાળ ટાઉનશીપ, જામનગર - ૩૬૧૦૦૪',
      en: '"Gurukrupa", Oshwal Township, Jamnagar - 361004',
    } as ContentMap,
  },
  designerCredit: 'Designed by Bajrang Studio · 98248 40032',
  instagramUrl: 'https://www.instagram.com/bajrangstudiojamnagar/',
};

// ── SCRATCH REVEAL ───────────────────────────────────────────────────────────
export const scratchReveal = {
  heading: { gu: 'તારીખ જાણો', en: 'A Date With Forever' } as ContentMap,
  revealText: {
    gu: 'રવિવાર · ૧૩ ડિસેમ્બર ૨૦૨૬ · સાંજે ૭:૦૦ કલાકે',
    en: 'Sunday · 13 December 2026 · 7:00 PM',
  } as ContentMap,
  tapToReveal: { gu: 'સ્ક્રેચ કરો', en: 'Scratch to Reveal' } as ContentMap,
};

// ── COUNTDOWN ────────────────────────────────────────────────────────────────
export const countdown = {
  /** Hast Melap time */
  targetDate: '2026-12-13T19:00:00+05:30',
  labels: {
    days: { gu: 'દિવસો', en: 'Days' } as ContentMap,
    hours: { gu: 'કલાકો', en: 'Hours' } as ContentMap,
    minutes: { gu: 'મિનિટ', en: 'Minutes' } as ContentMap,
    seconds: { gu: 'સેકન્ડ', en: 'Seconds' } as ContentMap,
  },
  completedText: { gu: 'શુભ લગ્ન સંપન્ન', en: 'Blessed Wedding Completed' } as ContentMap,
};

// ── RSVP ─────────────────────────────────────────────────────────────────────
export const rsvp = {
  heading: { gu: 'RSVP', en: 'RSVP' } as ContentMap,
  subheading: {
    gu: 'કૃપા કરીને આપની ઉપસ્થિતિ જણાવો',
    en: 'Please let us know your attendance',
  } as ContentMap,
  fields: {
    name: { gu: 'નામ', en: 'Name' } as ContentMap,
    attending: {
      label: { gu: 'ઉપસ્થિતિ', en: 'Attendance' } as ContentMap,
      yes: { gu: 'હર્ષભેર ઉપસ્થિત રહીશું', en: 'Joyfully Attending' } as ContentMap,
      no: { gu: 'ઉપસ્થિત રહી શકીશું નહીં', en: 'Unable to Attend' } as ContentMap,
    },
    guests: { gu: 'મહેમાનોની સંખ્યા', en: 'Number of Guests' } as ContentMap,
    events: { gu: 'કયા પ્રસંગમાં', en: 'Events Attending' } as ContentMap,
    message: { gu: 'શુભેચ્છા સંદેશ', en: 'Your Message / Blessings' } as ContentMap,
    submit: { gu: 'મોકલો', en: 'Submit' } as ContentMap,
  },
  whatsappButton: {
    gu: 'WhatsApp પર RSVP કરો',
    en: 'RSVP on WhatsApp',
  } as ContentMap,
  successMessage: {
    gu: 'આભાર! આપનો સંદેશ મળ્યો. 🙏',
    en: 'Thank you! Your response has been received. 🙏',
  } as ContentMap,
};

// ── NAV LINKS ────────────────────────────────────────────────────────────────
export const navLinks = [
  { id: 'venue', label: { gu: 'સ્થળ', en: 'Venue' } as ContentMap },
  { id: 'gallery', label: { gu: 'વિધિ-પળો', en: 'Moments' } as ContentMap },
  { id: 'memories', label: { gu: 'યાદો', en: 'Memories' } as ContentMap },
  { id: 'rsvp', label: { gu: 'RSVP', en: 'RSVP' } as ContentMap },
];

// ── GALLERY ──────────────────────────────────────────────────────────────────
export const gallery = {
  heading: { gu: 'અમારી યાદો', en: 'Our Moments' } as ContentMap,
  groups: [
    {
      day: {
        gu: 'શનિવાર · ૧૨ ડિસેમ્બર ૨૦૨૬',
        en: 'Saturday · 12 December 2026',
      } as ContentMap,
      photos: [
        {
          src: '/images/gallery/couple-portrait.jpg',
          alt: '12-December-2026 || Time : 8:00 AM',
          caption: { gu: 'ગણપતિ પૂજન', en: 'Ganesh Poojan' } as ContentMap,
        },
        {
          src: '/images/gallery/rings-hands.jpg',
          alt: '12-December-2026 || Time : 10:00 AM',
          caption: { gu: 'મામેરા', en: 'Mamera' } as ContentMap,
        },
        {
          src: '/images/gallery/haldi-ceremony.jpg',
          alt: '12-December-2026 || Time : 5:00 PM',
          caption: { gu: 'પીઠી ચોળવાનો ઉત્સવ', en: 'Joyful Haldi Celebration' } as ContentMap,
        },
        {
          src: '/images/gallery/dandiya-raas.jpg',
          alt: '12-December-2026 || Time : 8:00 PM',
          caption: { gu: 'રંગભીનો દાંડીયા રાસ', en: 'Festive Dandiya Raas Night' } as ContentMap,
        },
      ],
    },
    {
      day: {
        gu: 'રવિવાર · ૧૩ ડિસેમ્બર ૨૦૨૬',
        en: 'Sunday · 13 December 2026',
      } as ContentMap,
      photos: [
        {
          src: '/images/gallery/mandap-decor.jpg',
          alt: '13-December-2026 || Time : 8:30 AM',
          caption: { gu: 'સગાઈ વિધિ', en: 'Engagement Ceremony' } as ContentMap,
        },
        {
          src: '/images/gallery/hast-melap.jpg',
          alt: '13-December-2026 || Time : 7:00 AM',
          caption: { gu: 'જાન પ્રયાણ', en: 'Jan Prayan' } as ContentMap,
        },
        {
          src: '/images/gallery/hast-melap.jpg',
          alt: '13-December-2026 || Time : 7:00 AM',
          caption: { gu: 'પવિત્ર હસ્તમેળાપ વિધિ', en: 'Sacred Hast Melap Ritual' } as ContentMap,
        },
      ],
    },
  ],
  photos: [
    {
      src: '/images/gallery/couple-portrait.jpg',
      alt: '12-December-2026 || Time : 8:00 AM',
      caption: { gu: 'ગણપતિ પૂજન', en: 'Ganesh Poojan' } as ContentMap,
    },
    {
      src: '/images/gallery/rings-hands.jpg',
      alt: '12-December-2026 || Time : 10:00 AM',
      caption: { gu: 'મામેરા', en: 'Mamera' } as ContentMap,
    },
    {
      src: '/images/gallery/haldi-ceremony.jpg',
      alt: '12-December-2026 || Time : 5:00 PM',
      caption: { gu: 'પીઠી ચોળવાનો ઉત્સવ', en: 'Joyful Haldi Celebration' } as ContentMap,
    },
    {
      src: '/images/gallery/dandiya-raas.jpg',
      alt: '12-December-2026 || Time : 8:00 PM',
      caption: { gu: 'રંગભીનો દાંડીયા રાસ', en: 'Festive Dandiya Raas Night' } as ContentMap,
    },
    {
      src: '/images/gallery/mandap-decor.jpg',
      alt: '13-December-2026 || Time : 8:30 AM',
      caption: { gu: 'સગાઈ વિધિ', en: 'Engagement Ceremony' } as ContentMap,
    },
    {
      src: '/images/gallery/hast-melap.jpg',
      alt: '13-December-2026 || Time : 7:00 AM',
      caption: { gu: 'જાન પ્રયાણ', en: 'Jan Prayan' } as ContentMap,
    },
    {
      src: '/images/gallery/hast-melap.jpg',
      alt: '13-December-2026 || Time : 7:00 AM',
      caption: { gu: 'પવિત્ર હસ્તમેળાપ વિધિ', en: 'Sacred Hast Melap Ritual' } as ContentMap,
    },
  ],
};

// ── COUPLE MEMORIES ("Better, Together") ─────────────────────────────────────
export const coupleMemories = {
  title: {
    gu: 'સદા સાથે, સદા પ્રેમ',
    en: 'Better, together.',
  } as ContentMap,
  subtitle: {
    gu: 'અમારી કેટલીક વહાલી યાદો.',
    en: 'A few of our favourite memories.',
  } as ContentMap,
  photos: [
    {
      src: '/Couple/1.jpeg',
      caption: { gu: 'એક મીઠી શરૂઆત', en: 'The sweetest beginning' } as ContentMap,
      rotation: -1.5,
    },
    {
      src: '/Couple/2.jpeg',
      caption: { gu: 'આપણી નાની-નાની પળો', en: 'Our little moments' } as ContentMap,
      rotation: 1.8,
    },
    {
      src: '/Couple/3.jpeg',
      caption: { gu: 'આજીવનના આશીર્વાદ', en: 'A lifetime of blessings' } as ContentMap,
      rotation: -1.2,
    },
    {
      src: '/Couple/4.jpeg',
      caption: { gu: 'મારું પ્રિય સ્થાન', en: 'My favourite place' } as ContentMap,
      rotation: 1.4,
    },
    {
      src: '/Couple/5.jpeg',
      caption: { gu: 'હાસ્ય, પ્રેમ અને સાથ', en: 'Laughter, love & forever' } as ContentMap,
      rotation: -1.6,
    },
    {
      src: '/Couple/6.jpeg',
      caption: { gu: 'સદા ચમકતી મુસ્કાન', en: 'Smiles that shine forever' } as ContentMap,
      rotation: 1.2,
    },
    {
      src: '/Couple/7.jpeg',
      caption: { gu: 'બે હૃદય, એક આત્મા', en: 'Two hearts, one soul' } as ContentMap,
      rotation: -1.4,
    },
    {
      src: '/Couple/8.jpeg',
      caption: { gu: 'તારી સાથેની દરેક પળ', en: 'Every moment with you' } as ContentMap,
      rotation: 1.6,
    },
    {
      src: '/Couple/9.jpeg',
      caption: { gu: 'હાથમાં હાથ, સદાય સાથે', en: 'Hand in hand, always' } as ContentMap,
      rotation: -1.1,
    },
    {
      src: '/Couple/10.jpeg',
      caption: { gu: 'અનંત યાત્રાનો પ્રારંભ', en: 'Forever starts today' } as ContentMap,
      rotation: 1.0,
    },
  ],
};

// ── WHATSAPP SHARE ───────────────────────────────────────────────────────────
export const shareMessage = {
  gu: `🌺 *મંગલ પરિણય* 🌺\n\nડૉ. પ્રેમ (MBBS) & ડૉ. પ્રિયંકા (M.S. ENT)\n\nતા. ૧૩-૧૨-૨૦૨૬, રવિવાર\nસ્થળ: સ્ટાર લાઈટ પાર્ટી પ્લોટ, જામનગર\n\nઆમંત્રણ જુઓ:`,
  en: `🌺 *Auspicious Wedding* 🌺\n\nDr. Prem (MBBS) & Dr. Priyanka (M.S. ENT)\n\n13th December 2026, Sunday\nVenue: Star Light Party Plot, Jamnagar\n\nView invitation:`,
} as ContentMap;
