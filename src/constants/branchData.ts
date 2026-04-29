export interface BranchType {
  key: string;
  countryKey: string;
  addressKey: string;
  flag: string;
  description?: string;
  image?: string;
  phone?: string;
  email?: string;
  instagram?: string;
  telegram?: string;
  facebook?: string;
  whatsapp?: string;
  tiktok?: string;
  youtube?: string;
  mapUrl?: string;
  gallery?: string[];
  branch?: string;
}

export const branchData: BranchType[] = [
  {
    key: "seoul",
    countryKey: "branches.list.seoul.country",
    addressKey: "branches.list.seoul.address",
    flag: "/icons/flag/korea01.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.seoul",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
    whatsapp: "https://wa.me/821087479313?text=%EC%95%88%EB%85%95%ED%95%98%EC%84%B8%EC%9A%94%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3892.026133610652!2d126.93312127640542!3d37.554039824843805!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c98be299409e9%3A0x7249189708246872!2z7JWE7J2067mE7YOA7JuM!5e1!3m2!1sru!2skr!4v1776387589918!5m2!1sru!2skr",
    gallery: [
      "/img/branch/seoul.png",
      "/img/branch/seoul1.png",
      "/img/branch/bangla.png",
    ],
  },
  {
    key: "uzbekistan",
    countryKey: "branches.list.uzbekistan.country",
    addressKey: "branches.list.uzbekistan.address",
    flag: "/icons/flag/uzbek01.png",
    phone: "+998 90 066-33-49",
    email: "seoul@itopedu.com",
    description: "branches.description.uzbek",
    instagram: "https://www.instagram.com/i_topedu_uz?igsh=MXc3cnQ3cjB1NHllNA==",
    telegram: "https://t.me/itopedu_rasmiy_kanal",
    facebook: "https://facebook.com/...",
    whatsapp: "https://wa.me/+99890066349?text=Salom%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.888704139484!2d69.24832017653988!3d41.305789701051744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b035b13c937%3A0x50c55421746fab3c!2zQmVzaHlvZ29jaCBrbydjaGFzaSAyMiwg0KLQvnNoa2VudCwgVG9zaGtlbnQsINCj0LfQsdC10LrQuNGB0YLQsNC9!5e1!3m2!1sru!2skr!4v1776387686412!5m2!1sru!2skr",
    gallery: [
      "/img/branch/uzbek.png",
      "/img/branch/uzbek1.png",
      "/img/branch/uzbek2.jpg",
    ],
  },
  {
    key: "kyrgyzstan",
    countryKey: "branches.list.kyrgyzstan.country",
    addressKey: "branches.list.kyrgyzstan.address",
    flag: "/icons/flag/kyrgz.png",
    phone: "+8210 5570 3193",
    email: "seoul@itopedu.com",
    description: "branches.description.kyryz",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp: "https://wa.me/821087479313?text=%D0%A1%D0%B0%D0%BB%D0%B0%D0%BC%D0%B0%D1%82%D1%81%D1%8B%D0%B7%D0%B1%D1%8B%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4650396990874!2d74.58296977660001!3d42.88014390208506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8191472b59f%3A0x678f7c7d4a152932!2zMTA5LzMg0YPQuy4g0KLRg9GA0YPRgdCx0LXQutC-0LLQsCwg0JHQuNGI0LrQtdC6IDcyMDAwMCwg0JrRi9GA0LPRi9C30YHRgtCw0L0!5e1!3m2!1sru!2skr!4v1776387753985!5m2!1sru!2skr",
    gallery: ["/img/branch/kyrgyz.jpg", "/img/branch/kyrgz1.png","/img/branch/kyrgyz2.jpg",],
  },
  {
    key: "kazakhstan",
    countryKey: "branches.list.kazakhstan.country",
    addressKey: "branches.list.kazakhstan.address",
    flag: "/icons/flag/kazak1.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.kazak",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp: "https://wa.me/821087479313?text=%D0%A1%D3%99%D0%BB%D0%B5%D0%BC%D0%B5%D1%82%D1%81%D1%96%D0%B7%20%D0%B1%D0%B5%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.476032015535!2d76.90258827661397!3d43.23892107912583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883693aeb5c2671%3A0x127b2bd872f014bd!2z0L_RgC3Rgi4g0JDQsdCw0Y8gNjgsINCQ0LvQvNCw0YLRiyAwNTAwMDAsINCa0LDQt9Cw0YXRgdGC0LDQvQ!5e1!3m2!1sru!2skr!4v1776387898896!5m2!1sru!2skr",
    gallery: ["/img/branch/kazak1.jpg", "/img/branch/kazak.png"],
  },
  {
    key: "japan",
    countryKey: "branches.list.japan.country",
    addressKey: "branches.list.japan.address",
    flag: "/icons/flag/japan.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.japan",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp: "https://wa.me/821087479313?text=%E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.718887001043!2d139.86944087634222!3d35.66159723105121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601887f3ad843835%3A0xc17d7f1f761ba0b6!2z0K_Qv9C-0L3QuNGPLCDjgJIxMzQtMDA4MyBUb2t5bywgRWRvZ2F3YSBDaXR5LCBOYWtha2FzYWksIDUtY2jFjW1l4oiSNDHiiJI0IO-8pe-8s-ODk-ODqw!5e1!3m2!1sru!2skr!4v1776387962341!5m2!1sru!2skr",
    gallery: ["/img/branch/japan.png", "/img/branch/japan1.png"],
  },
  {
    key: "vietnam",
    countryKey: "branches.list.vietnam.country",
    addressKey: "branches.list.vietnam.address",
    flag: "/icons/flag/vietnam.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.vetnam",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp:"https://wa.me/821087479313?text=Xin%20ch%C3%A0o%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4582.66619302231!2d105.79232336944705!3d21.019656446498804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0025b61e61%3A0x5cc28fd667c0edd6!2zRFUgSOG7jEMgSMOATiBRVeG7kEMgSE_DgE5HIFRIw4BOSA!5e1!3m2!1sru!2skr!4v1776388018919!5m2!1sru!2skr",
    gallery: ["/img/branch/vetnam.png", "/img/branch/vetnam1.png"],
  },
  {
    key: "mongolia",
    countryKey: "branches.list.mongolia.country",
    addressKey: "branches.list.mongolia.address",
    flag: "/icons/flag/mongol.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.mongol",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp:"https://wa.me/821087479313?text=%D0%A1%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B0%D0%B9%D0%BD%D0%B0%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.1239055682477!2d106.90388327748549!3d47.91938881359476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5d96925a4b29c199%3A0x5520406a746458dc!2zV1c5NCtQR1Yg0KfQuNC90LPRjdC70YLRjdC5INC00q_Sr9GA0Y3QsyAxMi0g0YAg0YXQvtGA0L7QviA3LzIgUGVhY2UgVG93ZXIsINCn0JQgLSAzINGF0L7RgNC-0L4sINCj0LvQsNC9LdCR0LDRgtC-0YAgMTUxNzIsINCc0L7QvdCz0L7Qu9C40Y8!5e1!3m2!1sru!2skr!4v1776387421611!5m2!1sru!2skr",
    gallery: ["/img/branch/mongol.jpg", "/img/branch/mongol1.jpg", "/img/branch/mongol2.jpg"],
  },
  {
    key: "myanmar",
    countryKey: "branches.list.myanmar.country",
    addressKey: "branches.list.myanmar.address",
    flag: "/icons/flag/myanmar.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.myanma",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp:"https://wa.me/821087479313?text=%E1%80%99%E1%80%84%E1%80%BA%E1%80%B9%E1%80%82%E1%80%9C%E1%80%AC%E1%80%95%E1%80%AB%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4699.404984123654!2d96.12600062590236!3d16.816482468999162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb34335a92f5%3A0xea3210d0410309d7!2sTimes%20City%20Yangon!5e1!3m2!1sru!2skr!4v1776388092131!5m2!1sru!2skr",
    gallery: ["/img/branch/myanmar.png", "/img/branch/myanmar1.png"],
  },
  {
    key: "nepal",
    countryKey: "branches.list.nepal.country",
    addressKey: "branches.list.nepal.address",
    flag: "/icons/flag/nepal.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.nepal",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp:  "https://wa.me/821087479313?text=%E0%A4%A8%E0%A4%AE%E0%A4%B8%E0%A5%8D%E0%A4%A4%E0%A5%87%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2173.269920276492!2d85.31815748886488!3d27.70412951876857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19856899d4bf%3A0x718e38cf74434fdf!2sBagbazar-28%2C%20Kathmandu!5e1!3m2!1sru!2skr!4v1776388142442!5m2!1sru!2skr",
    gallery: ["/img/branch/nepal1.jpg", "/img/branch/nepal2.png"],
  },
  {
    key: "sriLanka",
    countryKey: "branches.list.sriLanka.country",
    addressKey: "branches.list.sriLanka.address",
    flag: "/icons/flag/sriLanka.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.srilanka",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp:"https://wa.me/821087479313?text=%E0%B6%86%E0%B6%BA%E0%B7%94%E0%B6%B6%E0%B7%9D%E0%B7%80%E0%B6%B1%E0%B7%8A%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4873.856526943244!2d79.85277747581782!3d6.893538218750928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25bde85d9645f%3A0xea1ae792f1aaf0e1!2sUnity%20Plaza!5e1!3m2!1sru!2skr!4v1776388184350!5m2!1sru!2skr",
    gallery: ["/img/branch/srilanka.png"],
  },
  {
    key: "bangladesh",
    countryKey: "branches.list.bangladesh.country",
    addressKey: "branches.list.bangladesh.address",
    flag: "/icons/flag/bangladesh.png",
    phone: "02-534-1509",
    email: "seoul@itopedu.com",
    description: "branches.description.bangla",
    instagram: "https://instagram.com/...",
    telegram: "https://t.me/...",
    facebook: "https://facebook.com/...",
     whatsapp:"https://wa.me/821087479313?text=%E0%A6%B9%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A7%8B%20ITOP%20EDU",
    tiktok: "https://www.tiktok.com/...",
    youtube: "https://www.youtube.com/@itop_edu",
    mapUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15109.50614523189!2d90.39547549787585!3d23.79338295241973!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e0fe572ed%3A0x7d19e185f9bc8e35!2sThe%20Number%20House!5e1!3m2!1sru!2skr!4v1776388559987!5m2!1sru!2skr",
    gallery: ["/img/branch/bangla.png", "/img/branch/bangla1.png"],
  },
];
