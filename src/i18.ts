import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  uz: {
    translation: {
      navbar: {
        home: "Asosiy",
        about: "Haqimizda",
        consultation: "Online konsultatsiya",
        title: "Koreyada o‘qish yo‘lingizni biz bilan boshlang",
        desc: "Chet eldan hujjat topshirishdan tortib til kurslari, bakalavr, magistr va PhD dasturlarigacha — biz sizni har bosqichda qo‘llab-quvvatlaymiz.",
      },
      banner: {
        line1: "Itop Edu bilan Koreyada o‘qing",
        line2: "To‘liq yordam A dan Z gacha (Viza • Qabul • Grant)",
        line3: "Kelajagingizni bugundan boshlang",
        line4: "Koreys tili • Bakalavr • Magistr • PhD",
        line5: "Bepul professional konsultatsiya",
      },
      footer: {
        description:
          "ITOP EDU Koreyada tahsil olishni boshlayotgan xalqaro talabalarni qo‘llab-quvvatlaydi. Viza, qabul, yashash va ish topishgacha yordam beramiz.",
        explore: "Bo‘limlar",
        contact: "Aloqa",
        location: "Seul, Janubiy Koreya",
        phone: "+82-2-534-1509",
        email: "info@itopedu.com",
        hours: "Du - Ju / 9:00 - 18:00",
        copyright: "© 2026 ITOP EDU. Barcha huquqlar himoyalangan.",
        privacy: "Maxfiylik siyosati",
        terms: "Foydalanish shartlari",
      },
      branches: {
        title: "Chet el filiallarimiz",
        description: {
          seoul:
            "Seuldagi asosiy filial bo‘lib, universitetga qabul jarayonining barcha bosqichlarida maslahat va to‘liq yordam ko‘rsatadi.",

          uzbek:
            "O‘zbekiston filiali Koreyada o‘qishni rejalashtirayotgan talabalarga maslahat va to‘liq qo‘llab-quvvatlashni taqdim etadi, jumladan universitetga qabul va viza rasmiylashtirishda yordam beradi.",

          kyryz:
            "Qirg‘iziston filiali talabalarga professional maslahat, hujjatlarni tayyorlashda yordam va Koreyada o‘qish uchun bosqichma-bosqich yo‘l-yo‘riq ko‘rsatadi.",

          kazak:
            "Qozog‘iston filiali ishonchli ta’lim konsultatsiya xizmatlarini taklif etib, talabalarga universitet tanlash va xorijda o‘qishga tayyorgarlik ko‘rishda yordam beradi.",

          japan:
            "Yaponiya filiali talabalarga Koreya universitetlariga qabul, til tayyorgarligi va muvaffaqiyatli xorijda o‘qish uchun akademik rejalashtirishda yordam beradi.",

          vetnam:
            "Vyetnam filiali talabalarga keng qamrovli yordam ko‘rsatadi, jumladan maslahat, hujjat topshirish jarayonlari va Koreyada o‘qishga moslashishda ko‘maklashadi.",

          mongol:
            "Mo‘g‘uliston filiali talabalarga Koreyada o‘qish maqsadlariga erishishda individual maslahat va qabul jarayonida yordam ko‘rsatadi.",

          myanma:
            "Myanma filiali talabalarga Koreyada o‘qishning har bir bosqichida — tayyorgarlikdan tortib muvaffaqiyatli o‘qishga kirishgacha — yo‘l-yo‘riq ko‘rsatadi.",

          nepal:
            "Nepal filiali talabalarga to‘liq qo‘llab-quvvatlashni taqdim etadi, jumladan universitet tanlash, hujjatlarni tayyorlash va viza olishda yordam beradi.",

          srilanka:
            "Shri-Lanka filiali professional maslahat xizmatlarini ko‘rsatib, talabalarga Koreyada oliy ta’lim olish imkoniyatlarini yaratishda yordam beradi.",

          bangla:
            "Bangladesh filiali talabalarga Koreyada o‘qish uchun to‘liq yo‘l-yo‘riq beradi, jumladan qabul jarayoni va moslashishda yordam ko‘rsatadi.",
        },
        list: {
          seoul: {
            country: "Janubiy Koreya",
            address: "Seul, Mapo-gu, Seogang-ro, Ivy Tower, 802-xona",
          },
          uzbekistan: {
            country: "O‘zbekiston",
            address: "Toshkent, Shayxontohur, Beshyog’och 22, 209-xona",
          },
          kyrgyzstan: {
            country: "Qirg‘iziston",
            address: "Bishkek, Turusbekov ko‘chasi 109/3",
          },
          kazakhstan: {
            country: "Qozog‘iston",
            address: "Almaty, Abaya prospekti 68",
          },
          japan: {
            country: "Yaponiya",
            address: "Tokyo, Edogawa-ku, Nakakasai",
          },
          vietnam: {
            country: "Vetnam",
            address: "Hanoi, Mo Lao urban area",
          },
          mongolia: {
            country: "Mongoliya",
            address: "Ulaanbaatar, Peace Tower",
          },
          myanmar: {
            country: "Myanma",
            address: "Yangon, Time City",
          },
          nepal: {
            country: "Nepal",
            address: "Kathmandu, Bagbazar 28",
          },
          sriLanka: {
            country: "Shri Lanka",
            address: "Colombo, Galle Road",
          },
          bangladesh: {
            country: "Bangladesh",
            address: "Dhaka, Banani",
          },
        },
        foot: {
          top: "Filial bilan bog‘lanish",
          bot: "Yopish",
        },
      },
      visaStats: {
        title: "Viza statistikasi",
        total: "Jami",
        growth: "O‘sish",
      },
      statistics: {
        reliable: "Ishonchli xizmat",
        free: "Bepul konsultatsiya",
        support: "Ariza yordami",
        contract: "Shartnoma asosida",
      },
      about: {
        title: "Itop Edu Oilasi",
        team: "Jamoa",
        services: "Xizmatlarimiz",
        youtubeTitle: "Videolarimizni tomosha qiling",
        office: "Jabubiy Koreya ofisimiz",
        office2: "Uzbekiston ofisimiz",
        address: "Manzil",
        openMap: "Google Maps’da ochish",

        roles: {
          president: "RAHBAR",
          manager: "MENEJER",
          uzbek: "O‘ZBEKISTON",
        },

        serviceTabs: {
          language: "D-4",
          bachelor: "Bakalavr",
          master_phd: "Magistr & PHD",
          other_visa: "Boshqalar",
        },
      },
      other: {
        license: "Litsenziya va shartnomalar",
        partners: "Hamkor universitetlar",
        ourResults: "Natijalarimiz",
      },
      faq: {
        faqButton: {
          showMore: "KO'PROQ SAVOLLAR",
          hide: "SAVOLLARNI YASHIRISH",
        },
        faqTitle: "Ko'p So'raladigan Savollar",
        q1: {
          question: "Qanday hujjatlar kerak bo'ladi?",
          answer:
            "1. Talabaning zagran pasporti\n2. Ota-onasining pasportlari\n3. Metrka\n4. IELTS yoki TOPIK\n5. Attestat yoki diplom\n6. Rasm",
        },

        q2: {
          question: "Koreyaga ketgungacha bo‘lgan jarayon qanday?",
          answer:
            "1. Hujjatlarni tayyorlash\n2. Universitet tanlash\n3. Online registration\n4. Interview\n5. Natija\n6. Viza\n7. Uchish",
        },
        q3: {
          question: "Viza chiqishiga 100% kafolat berasizlarmi?",
          answer:
            "Hech bir agentlik viza chiqishiga 100% kafolat bera olmaydi. Viza qarori Koreya elchixonasi yoki immigratsiya tomonidan qabul qilinadi. Bizning vazifamiz — hujjatlarni to‘g‘ri va talabga mos tayyorlash. Agar barcha hujjatlar to‘g‘ri topshirilgan bo‘lsa-yu viza rad etilsa, to‘lov 100% qaytariladi.",
        },

        q4: {
          question: "Study Plan’ni yozib berasizlarmi?",
          answer:
            "Biz Study Plan’ni yozib bermaymiz. Sizga uni qanday yozish kerakligini o‘rgatamiz. Siz yozganingizdan so‘ng biz tekshirib, xatolarini tuzatib yakuniy shaklga keltiramiz.",
        },

        q5: {
          question: "Nechta universitetga topshirasizlar?",
          answer:
            "Odatda 2 ta universitetga hujjat topshiramiz. Bittasini talaba tanlaydi, ikkinchisini biz tavsiya qilamiz. Ikkalasi ham bo‘lmasa 3-universitetga bepul topshiramiz. Qo‘shimcha topshirish uchun to‘lov talab qilinadi.",
        },

        q6: {
          question: "Universitetga suhbat bo‘ladimi?",
          answer:
            "Suhbat faqat ayrim universitetlarda bo‘ladi. Biz oldindan tayyorlab beramiz: savollar, javoblar va mock intervyu. Elchixona bilan suhbat bo‘lmaydi, viza faqat hujjatlar asosida beriladi.",
        },

        q7: {
          question: "Bitirgandan keyin diplom O‘zbekistonda tan olinadimi?",
          answer:
            "TOP-1000 universitet diplomlari tan olinadi. Boshqa universitetlar akreditatsiya talab qiladi. Hozir ish beruvchilar ko‘proq bilim va tajribaga e’tibor beradi.",
        },

        q8: {
          question: "Viza universitet reytingiga qarab beriladimi?",
          answer:
            "Yo‘q. Asosiy omil — hujjatlar to‘g‘ri tayyorlangan bo‘lishi va universitet qora ro‘yxatda bo‘lmasligi. Reyting hal qiluvchi emas.",
        },

        q9: {
          question: "Yosh chegarasi bormi?",
          answer:
            "Rasmiy yosh chegarasi yo‘q. Amaliyotda bakalavr 25 yoshgacha, magistratura 40 yoshgacha tavsiya qilinadi. Asosiy narsa — hujjat sifati.",
        },

        q10: {
          question: "Oxirgi qabul qachongacha davom etadi?",
          answer:
            "Bahorgi semestr odatda dekabr oxirigacha davom etadi. Muddat har yili o‘zgaradi. Erta topshirish imkoniyatni oshiradi.",
        },

        q11: {
          question: "Koreyaga borgandan keyin ish topib berasizlarmi?",
          answer:
            "Biz o‘qishga yuboramiz, ishga emas. Ish topib berish majburiyatimiz yo‘q. Ammo qonuniy ishlash bo‘yicha bepul seminarlar beramiz.",
        },

        q12: {
          question: "Koreyada oyiga $2,000–$3,000 topsa bo‘ladimi?",
          answer:
            "Noqonuniy ish xavfli. Qonuniy ishlarda $1000–$1200 topish mumkin. Biz faqat xavfsiz yo‘llarni o‘rgatamiz.",
        },

        q13: {
          question: "Talabalar uchun qanday qonuniy ishlar bor?",
          answer:
            "Do‘kon (CU, GS25, 7-Eleven)\nRestoran / Cafe\nSklad va logistika\nKiyim do‘koni\nTozalash ishlari\nRepetitorlik\nFreelance (IT, dizayn, tarjima)",
        },

        q14: {
          question: "Koreyada oylik harajatlar qancha?",
          answer:
            "Uy: $200–$500\nOvqat: $150–$300\nTransport: $30–$50\nSug‘urta: $10–$30\nTelefon: $20–$30\nUmumiy: $400–$800",
        },

        q15: {
          question: "Farzandim o‘zini ta’minlay oladimi?",
          answer:
            "Ha. Daromad ~$1000, xarajat ~$800. Harakat qilsa bemalol yetadi. Ta’til paytida ko‘proq topish mumkin.",
        },

        q16: {
          question: "Talaba o‘zini ta’minlay oladimi?",
          answer:
            "Ha. Daromad ~$1000, xarajat ~$800. Harakat qilsa bemalol eplaydi.",
        },
      },
      aboutservice: {
        services: "Xizmatlar",
        serviceTabs: {
          language: "Til kursi",
          bachelor: "Bakalavr",
          master_phd: "Magistratura / PhD",
          other_visa: "Boshqa vizalar",
        },
        serviceData: {
          LANGUAGE_COURSE: [
            {
              title: "D-4-1 Til kursi",
              description: "Xorijiy talabalar uchun Koreys tili asosiy kursi",
            },
            {
              title: "D-4-7 Dastur",
              description: "Koreyada maxsus til tayyorlov dasturi",
            },
            {
              title: "TeleX Visa",
              description: "TeleX viza arizasi va konsultatsiya",
            },
          ],
          BACHELOR: [
            {
              title: "D-2-1 Qabul",
              description: "Bakalavr dasturlariga kirish yordami",
            },
            {
              title: "D-2-2 Qabul",
              description: "Xalqaro talabalar uchun universitet yo‘naltirish",
            },
            {
              title: "Transfer Dastur",
              description: "Kollejdan universitetga o‘tish (3-kurs)",
            },
          ],
          MASTER_PHD: [
            {
              title: "Magistratura (Koreyada)",
              description: "Koreyada magistratura dasturiga ariza",
            },
            {
              title: "E-Visa Magistr",
              description: "Magistrdan keyin E-viza yo‘riqnomasi",
            },
            {
              title: "PhD Qabul",
              description: "PhD uchun to‘liq qo‘llab-quvvatlash",
            },
          ],
          OTHER_VISA: [
            {
              title: "E-7 Ish vizasi",
              description: "Ish va E-7 visa jarayoni",
            },
            {
              title: "D-10 Viza",
              description: "Job seeker viza konsultatsiyasi",
            },
          ],
        },
      },
    },
  },
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        consultation: "Online Consultation",
        title: "Start your journey to study in Korea with us",
        desc: "From applying from abroad to language courses, bachelor's, master's, and PhD programs in Korea — we provide full support every step of the way.",
      },
      banner: {
        line1: "Study in Korea with Itop Edu",
        line2: "Full Support A to Z (Visa • Admission • Scholarship)",
        line3: "Start Your Future Today",
        line4: "Korean Language • Bachelor • Master • PhD",
        line5: "Free Professional Consultation",
      },
      footer: {
        description:
          "ITOP EDU supports international students starting their academic journey in Korea. From visa and admission to settlement and career guidance, we provide full support.",
        explore: "Explore",
        contact: "Contact us",
        location: "Seoul, South Korea",
        phone: "+82-2-534-1509",
        email: "info@itopedu.com",
        hours: "Mon - Fri / 9:00 - 18:00",
        copyright: "© 2026 ITOP EDU. All rights reserved.",
        privacy: "Privacy Policy",
        terms: "Terms & Conditions",
      },
      branches: {
        title: "Our Branches Abroad",
        description: {
          seoul:
            "The main branch in Seoul provides consultation and full support throughout the university admission process.",

          uzbek:
            "The Uzbekistan branch provides consultation and full support for students planning to study in Korea, including assistance with university admission and visa processing.",

          kyryz:
            "The Kyrgyzstan branch offers professional consultation, document preparation assistance, and step-by-step guidance for studying in Korea.",

          kazak:
            "The Kazakhstan branch provides reliable educational consulting services, helping students choose universities and prepare for studying abroad.",

          japan:
            "The Japan branch assists students with admission to Korean universities, language preparation, and academic planning for successful study abroad.",

          vetnam:
            "The Vietnam branch provides comprehensive support, including consultation, application processing, and adaptation to studying in Korea.",

          mongol:
            "The Mongolia branch helps students achieve their study goals in Korea through personalized consultation and admission support.",

          myanma:
            "The Myanmar branch guides students through every stage of studying in Korea, from preparation to successful enrollment.",

          nepal:
            "The Nepal branch offers full support, including university selection, document preparation, and visa assistance.",

          srilanka:
            "The Sri Lanka branch provides professional consulting services, helping students access higher education opportunities in Korea.",

          bangla:
            "The Bangladesh branch offers complete guidance for studying in Korea, including admission and settlement support.",
        },
        list: {
          seoul: {
            country: "South Korea",
            address: "Room 802, Ivy Tower, 136, Seogang-ro, Mapo-gu, Seoul",
          },
          uzbekistan: {
            country: "Uzbekistan",
            address:
              "Room 209, 22 Beshyogoch Street, Shaykhantahur District, Tashkent",
          },
          kyrgyzstan: {
            country: "Kyrgyzstan",
            address: "Room 501, 5th Floor, 109/3 Turusbekov Street, Bishkek",
          },
          kazakhstan: {
            country: "Kazakhstan",
            address:
              "Office 41, Avenue City Business Center, 68 Abaya Avenue, Almaty",
          },
          japan: {
            country: "Japan",
            address: "1F ESBuilding 5-41-4, Nakakasai, Edogawa-Ku, Tokyo",
          },
          vietnam: {
            country: "Vietnam",
            address: "VA.03B-10, Hoang Thanh Villas, Ha Noi",
          },
          mongolia: {
            country: "Mongolia",
            address: "Ulaanbaatar, Peace Tower, 11th floor",
          },
          myanmar: {
            country: "Myanmar",
            address: "Room A338, Time City, Yangon",
          },
          nepal: {
            country: "Nepal",
            address: "Bagbazar 28, Kathmandu",
          },
          sriLanka: {
            country: "Sri Lanka",
            address: "Unity Plaza Building, Galle Road, Colombo",
          },
          bangladesh: {
            country: "Bangladesh",
            address: "House-96, Banani, Dhaka",
          },
        },
        foot: {
          top: "Contact branch",
          bot: "Close",
        },
      },
      visaStats: {
        title: "Visa Statistics",
        total: "Total",
        growth: "Growth",
      },
      statistics: {
        reliable: "Reliable Service",
        free: "Free Consultation",
        support: "Application Support",
        contract: "Contract-Based Service",
      },
      about: {
        title: "Itop Edu Family",
        team: "Team",
        services: "Our Services",
        youtubeTitle: "Watch Our Videos",
        office: "Our office in South Korea",
        office2: "Our office in Uzbekistan",
        address: "Address",
        openMap: "Open in Google Maps",

        roles: {
          president: "PRESIDENT",
          manager: "MANAGER",
          uzbek: "UZBEKISTAN",
        },

        serviceTabs: {
          language: "D-4",
          bachelor: "Bachelor",
          master_phd: "Master & PHD",
          other_visa: "Other",
        },
      },
      other: {
        license: "License and Contracts",
        partners: "Partner Universities",
        ourResults: "Our Results",
      },
      faq: {
        faqButton: {
          showMore: "SHOW MORE QUESTIONS",
          hide: "HIDE QUESTIONS",
        },
        faqTitle: "Frequently Asked Questions",
        q1: {
          question: "What documents are required?",
          answer:
            "1. Student passport copy\n2. Parents' passport copies\n3. Birth certificate copy\n4. IELTS or TOPIK certificate\n5. Diploma or transcript\n6. Photo",
        },

        q2: {
          question: "What is the process before going to Korea?",
          answer:
            "1. Prepare documents\n2. Choose university\n3. Online registration & application fee\n4. Submit documents\n5. Interview\n6. Result (Pass/Fail)\n7. Invoice & payment\n8. CoA (Admission letter)\n9. Visa\n10. Departure to Korea",
        },

        q3: {
          question: "Do you guarantee visa approval?",
          answer:
            "No agency can guarantee a visa. The decision is made by the Korean embassy. We only prepare your documents properly. If rejected after correct submission, we refund 100%.",
        },

        q4: {
          question: "Do you write the Study Plan?",
          answer:
            "We do not write it for you. We teach you how to write it. Then we check and correct it to finalize.",
        },

        q5: {
          question: "How many universities do you apply to?",
          answer:
            "Usually 2 universities. One chosen by student, one recommended by us. If both fail, we apply to a 3rd for free.",
        },

        q6: {
          question: "Is there an interview?",
          answer:
            "Only some universities require interviews. We prepare you with mock interviews. Embassy interview is not required for visa.",
        },

        q7: {
          question: "Is the diploma recognized?",
          answer:
            "Top 1000 universities are generally recognized. Others require accreditation. Employers focus more on skills.",
        },

        q8: {
          question: "Is visa based on university ranking?",
          answer:
            "No. Documents quality and university status matter more than ranking.",
        },

        q9: {
          question: "Is there an age limit?",
          answer:
            "No official limit. Usually under 25 for bachelor, under 40 for master is preferred.",
        },

        q10: {
          question: "When is the last admission deadline?",
          answer:
            "Spring semester usually ends in December. Early application is recommended.",
        },

        q11: {
          question: "Do you provide jobs after arrival?",
          answer:
            "We support education, not job placement. We provide free seminars on legal work options.",
        },

        q12: {
          question: "Can you earn $2000–$3000 in Korea?",
          answer:
            "Illegal work is risky. Legal jobs pay around $1000–$1200. We only teach safe methods.",
        },

        q13: {
          question: "What legal jobs are available for students?",
          answer:
            "Convenience stores\nRestaurants/Cafes\nWarehouse/logistics\nClothing stores\nCleaning jobs\nTutoring\nFreelance (IT/design/translation)",
        },

        q14: {
          question: "Monthly expenses in Korea?",
          answer:
            "Rent: $200–$500\nFood: $150–$300\nTransport: $30–$50\nInsurance: $10–$30\nPhone: $20–$30\nTotal: $400–$800",
        },

        q15: {
          question: "Can my child support themselves?",
          answer:
            "Yes. Income ~$1000, expenses ~$800. With effort they can manage easily.",
        },

        q16: {
          question: "Can a student support themselves?",
          answer:
            "Yes. Income ~$1000, expenses ~$800. They can manage with effort.",
        },
      },
      aboutservice: {
        services: "Services",
        serviceTabs: {
          language: "Language Course",
          bachelor: "Bachelor",
          master_phd: "Master / PhD",
          other_visa: "Other Visa",
        },
        serviceData: {
          LANGUAGE_COURSE: [
            {
              title: "D-4-1 Language Course",
              description:
                "Basic Korean language course for international students",
            },
            {
              title: "D-4-7 Program",
              description: "Specialized language training program in Korea",
            },
            {
              title: "TeleX Visa",
              description: "TeleX visa application support and consultation",
            },
          ],
          BACHELOR: [
            {
              title: "D-2-1 Admission",
              description:
                "Admission support for undergraduate programs in Korea",
            },
            {
              title: "D-2-2 Admission",
              description: "University guidance for international students",
            },
            {
              title: "Transfer Program",
              description:
                "Transfer from college to university (3rd year entry)",
            },
          ],
          MASTER_PHD: [
            {
              title: "Master (In Korea)",
              description: "Apply for master programs in Korea",
            },
            {
              title: "E-Visa Master",
              description: "E-visa guidance after graduation",
            },
            {
              title: "PhD Admission",
              description: "Full support for PhD application",
            },
          ],
          OTHER_VISA: [
            {
              title: "E-7 Employment Visa",
              description: "Job placement and visa processing support",
            },
            {
              title: "D-10 Visa Support",
              description: "Job seeker visa consultation",
            },
          ],
        },
      },
    },
  },
  kr: {
    translation: {
      navbar: {
        home: "홈",
        about: "회사 소개",
        consultation: "온라인 상담",
        title: "한국 유학의 여정을 저희와 함께 시작하세요",
        desc: "해외 지원부터 어학 과정, 학사, 석사, 박사 과정까지 — 모든 과정을 완벽하게 지원합니다.",
      },
      banner: {
        line1: "아이탑에듀와 함께 한국 유학",
        line2: "A부터 Z까지 완벽 지원 (비자 • 입학 • 장학금)",
        line3: "지금 바로 당신의 미래를 시작하세요",
        line4: "한국어 • 학사 • 석사 • 박사",
        line5: "무료 전문 상담",
      },
      footer: {
        description:
          "ITOP EDU는 유학생들의 한국 유학 시작을 지원합니다. 비자, 입학, 정착, 진로까지 모든 과정을 지원합니다.",
        explore: "탐색",
        contact: "문의하기",
        location: "대한민국 서울",
        phone: "+82-2-534-1509",
        email: "info@itopedu.com",
        hours: "월 - 금 / 9:00 - 18:00",
        copyright: "© 2026 ITOP EDU. All rights reserved.",
        privacy: "개인정보처리방침",
        terms: "이용약관",
      },
      branches: {
        title: "해외 지사",
        description: {
          seoul:
            "서울에 위치한 본사로, 대학 입학 과정 전반에 걸쳐 상담과 전폭적인 지원을 제공합니다.",

          uzbek:
            "우즈베키스탄 지사는 한국 유학을 계획하는 학생들에게 상담과 전반적인 지원을 제공하며, 대학 입학 및 비자 발급 과정까지 도와드립니다.",

          kyryz:
            "키르기스스탄 지사는 학생들에게 전문적인 상담, 서류 준비 지원, 그리고 한국 유학을 위한 단계별 안내를 제공합니다.",

          kazak:
            "카자흐스탄 지사는 신뢰할 수 있는 교육 컨설팅 서비스를 제공하며, 학생들의 대학 선택과 해외 유학 준비를 지원합니다.",

          japan:
            "일본 지사는 학생들의 한국 대학 입학, 어학 준비, 그리고 성공적인 유학을 위한 학업 계획 수립을 지원합니다.",

          vetnam:
            "베트남 지사는 상담, 지원서 접수, 한국 유학 적응까지 포함한 종합적인 지원을 제공합니다.",

          mongol:
            "몽골 지사는 맞춤형 상담과 입학 지원을 통해 학생들이 한국 유학 목표를 달성할 수 있도록 돕습니다.",

          myanma:
            "미얀마 지사는 준비 과정부터 성공적인 입학까지 한국 유학의 모든 단계에서 학생들을 지원합니다.",

          nepal:
            "네팔 지사는 대학 선택, 서류 준비, 비자 지원을 포함한 전반적인 도움을 제공합니다.",

          srilanka:
            "스리랑카 지사는 전문적인 상담 서비스를 통해 학생들이 한국에서의 고등교육 기회를 얻을 수 있도록 지원합니다.",

          bangla:
            "방글라데시 지사는 한국 유학을 위한 입학 및 정착 지원을 포함한 전반적인 안내를 제공합니다.",
        },
        list: {
          seoul: {
            country: "대한민국",
            address: "서울 마포구 서강로 아이비타워 802호",
          },
          uzbekistan: { country: "우즈베키스탄", address: "타슈켄트" },
          kyrgyzstan: { country: "키르기스스탄", address: "비슈케크" },
          kazakhstan: { country: "카자흐스탄", address: "알마티" },
          japan: { country: "일본", address: "도쿄" },
          vietnam: { country: "베트남", address: "하노이" },
          mongolia: { country: "몽골", address: "울란바토르" },
          myanmar: { country: "미얀마", address: "양곤" },
          nepal: { country: "네팔", address: "카트만두" },
          sriLanka: { country: "스리랑카", address: "콜롬보" },
          bangladesh: { country: "방글라데시", address: "다카" },
        },
        foot: {
          top: "지사 연락하기",
          bot: "닫기",
        },
      },
      visaStats: {
        title: "비자 통계",
        total: "전체",
        growth: "성장",
      },
      statistics: {
        reliable: "신뢰 서비스",
        free: "무료 상담",
        support: "지원 도움",
        contract: "계약 서비스",
      },
      about: {
        title: "Itop Edu Family",
        team: "팀",
        services: "서비스",
        youtubeTitle: "우리 영상을 시청하세요",
        office: "대한민국 사무실",
        office2: "우즈베키스탄 사무실",
        address: "주소",
        openMap: "구글 지도에서 열기",

        roles: {
          president: "대표",
          manager: "매니저",
          uzbek: "우즈베키스탄",
        },

        serviceTabs: {
          language: "D-4",
          bachelor: "학사",
          master_phd: "석사 & 박사",
          other_visa: "기타",
        },
      },
      other: {
        license: "라이선스 및 계약",
        partners: "협력 대학교",
        ourResults: "우리의 성과",
      },
      faq: {
        faqButton: {
          showMore: "더 많은 질문 보기",
          hide: "질문 숨기기",
        },
        faqTitle: "자주 묻는 질문",
        q1: {
          question: "필요한 서류는 무엇인가요?",
          answer:
            "1. 여권 사본\n2. 부모님 여권 사본\n3. 주민등록등본\n4. IELTS 또는 TOPIK\n5. 졸업증명서\n6. 사진",
        },

        q2: {
          question: "한국 가기 전 과정은 무엇인가요?",
          answer:
            "1. 서류 준비\n2. 대학 선택\n3. 온라인 지원\n4. 서류 제출\n5. 인터뷰\n6. 결과\n7. 비용 결제\n8. 입학 허가서\n9. 비자\n10. 출국",
        },

        q3: {
          question: "비자 100% 보장인가요?",
          answer:
            "어떤 기관도 비자를 100% 보장할 수 없습니다. 우리는 서류를 정확하게 준비합니다. 거절 시 100% 환불됩니다.",
        },

        q4: {
          question: "Study Plan을 작성해 주나요?",
          answer:
            "직접 작성하지 않고 작성 방법을 알려드립니다. 이후 검토 및 수정합니다.",
        },

        q5: {
          question: "몇 개 대학에 지원하나요?",
          answer: "보통 2개 대학에 지원합니다. 추가 1개는 무료입니다.",
        },

        q6: {
          question: "인터뷰가 있나요?",
          answer:
            "일부 대학만 인터뷰가 있습니다. 우리는 모의 인터뷰로 준비시켜드립니다.",
        },

        q7: {
          question: "학위는 인정되나요?",
          answer:
            "상위 1000대 대학은 일반적으로 인정됩니다. 나머지는 인증이 필요합니다.",
        },

        q8: {
          question: "비자는 대학 순위로 결정되나요?",
          answer: "아니요. 서류의 정확성이 더 중요합니다.",
        },

        q9: {
          question: "나이 제한이 있나요?",
          answer:
            "공식 제한은 없습니다. 보통 학사는 25세 이하, 석사는 40세 이하가 일반적입니다.",
        },

        q10: {
          question: "마감일은 언제인가요?",
          answer: "봄 학기는 보통 12월에 마감됩니다.",
        },

        q11: {
          question: "도착 후 취업을 도와주나요?",
          answer: "저희는 취업이 아닌 학업을 지원합니다.",
        },

        q12: {
          question: "월 2000~3000달러 가능하나요?",
          answer:
            "불법 근무는 위험합니다. 합법적으로는 약 $1000–$1200 가능합니다.",
        },

        q13: {
          question: "학생 가능한 합법적 일자리?",
          answer:
            "편의점\n식당/카페\n물류창고\n의류 매장\n청소\n과외\n프리랜서",
        },

        q14: {
          question: "월 생활비는?",
          answer:
            "집: $200–$500\n식비: $150–$300\n교통: $30–$50\n보험: $10–$30\n전화: $20–$30\n총: $400–$800",
        },

        q15: {
          question: "자녀가 생활 가능할까요?",
          answer: "네. 수입 ~$1000, 지출 ~$800입니다.",
        },

        q16: {
          question: "학생이 생활 가능할까요?",
          answer: "네. 충분히 가능합니다.",
        },
      },
      aboutservice: {
        services: "서비스",
        serviceTabs: {
          language: "어학연수",
          bachelor: "학사",
          master_phd: "석사 / 박사",
          other_visa: "기타 비자",
        },
        serviceData: {
          LANGUAGE_COURSE: [
            {
              title: "D-4-1 어학연수",
              description: "외국인 학생을 위한 한국어 기초 과정",
            },
            {
              title: "D-4-7 프로그램",
              description: "한국 내 전문 언어 교육 프로그램",
            },
            {
              title: "TeleX 비자",
              description: "TeleX 비자 신청 및 상담 지원",
            },
          ],
          BACHELOR: [
            {
              title: "D-2-1 입학",
              description: "학부 과정 입학 지원",
            },
            {
              title: "D-2-2 입학",
              description: "유학생 대학 입학 안내",
            },
            {
              title: "편입 프로그램",
              description: "전문대에서 대학으로 편입",
            },
          ],
          MASTER_PHD: [
            {
              title: "한국 석사 과정",
              description: "한국 석사 과정 지원",
            },
            {
              title: "E-비자 석사",
              description: "석사 후 E-비자 안내",
            },
            {
              title: "박사 과정",
              description: "박사 지원 전체 서포트",
            },
          ],
          OTHER_VISA: [
            {
              title: "E-7 취업 비자",
              description: "취업 및 비자 지원",
            },
            {
              title: "D-10 비자",
              description: "구직 비자 상담",
            },
          ],
        },
      },
    },
  },
  ru: {
    translation: {
      navbar: {
        home: "Главная",
        about: "О нас",
        consultation: "Онлайн консультация",
        title: "Начните свой путь обучения в Корее с нами",
        desc: "От подачи документов из-за рубежа до языковых курсов, бакалавриата, магистратуры и PhD — мы поддержим вас на каждом этапе.",
      },
      banner: {
        line1: "Учитесь в Корее с Itop Edu",
        line2: "Полная поддержка от А до Я (Виза • Поступление • Стипендия)",
        line3: "Начните своё будущее уже сегодня",
        line4: "Корейский язык • Бакалавр • Магистр • PhD",
        line5: "Бесплатная профессиональная консультация",
      },
      footer: {
        description:
          "ITOP EDU поддерживает иностранных студентов, начинающих обучение в Корее. От визы и поступления до адаптации и карьеры.",
        explore: "Разделы",
        contact: "Контакты",
        location: "Сеул, Южная Корея",
        phone: "+82-2-534-1509",
        email: "info@itopedu.com",
        hours: "Пн - Пт / 9:00 - 18:00",
        copyright: "© 2026 ITOP EDU. Все права защищены.",
        privacy: "Политика конфиденциальности",
        terms: "Условия использования",
      },
      branches: {
        title: "Наши зарубежные филиалы",
        description: {
          seoul:
            "Главный филиал в Сеуле, предоставляющий консультации и полную поддержку в процессе поступления в университет.",
          uzbek:
            "Филиал в Узбекистане предоставляет консультации и полную поддержку студентам, планирующим обучение в Корее, включая помощь с поступлением в университет и оформлением визы.",
          kyryz:
            "Филиал в Кыргызстане оказывает студентам профессиональные консультации, помощь в подготовке документов и пошаговое сопровождение для обучения в Корее.",
          kazak:
            "Филиал в Казахстане предлагает надежные образовательные консультационные услуги, помогая студентам выбрать университет и подготовиться к обучению за рубежом.",
          japan:
            "Филиал в Японии помогает студентам с поступлением в корейские университеты, языковой подготовкой и академическим планированием для успешного обучения за границей.",
          vetnam:
            "Филиал во Вьетнаме предоставляет комплексную поддержку студентам, включая консультации, оформление заявок и адаптацию к обучению в Корее.",
          mongol:
            "Филиал в Монголии помогает студентам достичь целей обучения в Корее благодаря персонализированным консультациям и поддержке при поступлении.",
          myanma:
            "Филиал в Мьянме сопровождает студентов на каждом этапе обучения в Корее — от подготовки до успешного зачисления.",
          nepal:
            "Филиал в Непале предоставляет всестороннюю поддержку студентам, включая выбор университета, подготовку документов и визовое сопровождение.",
          srilanka:
            "Филиал на Шри-Ланке оказывает профессиональные консультационные услуги, помогая студентам получить возможности для высшего образования в Корее.",
          bangla:
            "Филиал в Бангладеш оказывает студентам полное сопровождение для обучения в Корее, включая помощь с поступлением и адаптацией.",
        },
        list: {
          seoul: {
            country: "Южная Корея",
            address: "Сеул, Mapo-gu, Ivy Tower 802",
          },
          uzbekistan: { country: "Узбекистан", address: "Ташкент" },
          kyrgyzstan: { country: "Киргизия", address: "Бишкек" },
          kazakhstan: { country: "Казахстан", address: "Алматы" },
          japan: { country: "Япония", address: "Токио" },
          vietnam: { country: "Вьетнам", address: "Ханой" },
          mongolia: { country: "Монголия", address: "Улан-Батор" },
          myanmar: { country: "Мьянма", address: "Янгон" },
          nepal: { country: "Непал", address: "Катманду" },
          sriLanka: { country: "Шри-Ланка", address: "Коломбо" },
          bangladesh: { country: "Бангладеш", address: "Дакка" },
        },
        foot: {
          top: "Связаться с филиалом",
          bot: "Закрыть",
        },
      },
      visaStats: {
        title: "Визовая статистика",
        total: "Всего",
        growth: "Рост",
      },
      statistics: {
        reliable: "Надёжный сервис",
        free: "Бесплатная помощь",
        support: "Поддержка заявок",
        contract: "Контрактный сервис",
      },
      about: {
        title: "СЕМЬЯ ITOP EDU",
        team: "Команда",
        services: "Наши услуги",
        youtubeTitle: "Смотрите наши видео",
        office: "Наш офис в Южной Корее",
        office2: "Наш офис в Узбекистане",
        address: "Адрес",
        openMap: "Открыть в Google Maps",

        roles: {
          president: "ПРЕЗИДЕНТ",
          manager: "МЕНЕДЖЕР",
          uzbek: "УЗБЕКИСТАН",
        },

        serviceTabs: {
          language: "D-4",
          bachelor: "Бакалавр",
          master_phd: "Магистр & PHD",
          other_visa: "Другие",
        },
      },
      other: {
        license: "Лицензия и договоры",
        partners: "Партнёрские университеты",
        ourResults: "Наши результаты",
      },
      faq: {
        faqButton: {
          showMore: "ПОКАЗАТЬ БОЛЬШЕ ВОПРОСОВ",
          hide: "СКРЫТЬ ВОПРОСЫ",
        },
        faqTitle: "Часто задаваемые вопросы",
        q1: {
          question: "Какие документы нужны?",
          answer:
            "1. Паспорт студента (копия)\n2. Паспорта родителей (копия)\n3. Свидетельство о рождении (копия)\n4. IELTS или TOPIK сертификат\n5. Аттестат или диплом (оригинал)\n6. Фото",
        },

        q2: {
          question: "Какой процесс перед поездкой в Корею?",
          answer:
            "1. Подготовка документов\n2. Выбор университета\n3. Онлайн регистрация и оплата заявки\n4. Подача документов и рассмотрение\n5. Интервью\n6. Результат (Pass / Fail)\n7. Инвойс и оплата контракта\n8. CoA (письмо о зачислении)\n9. Виза\n10. Вылет в Корею",
        },

        q3: {
          question: "Гарантируете ли вы получение визы на 100%?",
          answer:
            "Ни одно агентство не может гарантировать визу на 100%. Решение принимает посольство или иммиграционная служба Кореи. Наша задача — правильно подготовить документы. Если виза будет отказана после правильной подачи, мы возвращаем 100% оплаты.",
        },

        q4: {
          question: "Вы пишете Study Plan?",
          answer:
            "Мы не пишем Study Plan за вас. Мы обучаем, как его правильно написать. После этого проверяем, исправляем ошибки и доводим до финального варианта.",
        },

        q5: {
          question: "Сколько университетов вы подаете?",
          answer:
            "Обычно подаем в 2 университета. Один выбирает студент, второй рекомендуем мы. Если оба не проходят, подаем в 3-й бесплатно. Дополнительные подачи — платные.",
        },

        q6: {
          question: "Есть ли собеседование?",
          answer:
            "Собеседование есть только в некоторых университетах. Мы заранее готовим студентов с помощью mock-интервью. Интервью в посольстве не требуется — виза выдается по документам.",
        },

        q7: {
          question: "Признается ли диплом?",
          answer:
            "Дипломы университетов из топ-1000 обычно признаются. Другие требуют аккредитации. Работодатели больше ценят навыки и опыт.",
        },

        q8: {
          question: "Виза зависит от рейтинга университета?",
          answer:
            "Нет. Главное — правильно оформленные документы и чтобы университет не был в черном списке. Рейтинг не является решающим фактором.",
        },

        q9: {
          question: "Есть ли возрастные ограничения?",
          answer:
            "Официального ограничения нет. На практике бакалавриат до 25 лет, магистратура до 40 лет. Главное — качество документов.",
        },

        q10: {
          question: "Когда последний срок подачи?",
          answer:
            "Весенний семестр обычно заканчивается в конце декабря. Сроки могут меняться каждый год. Ранняя подача увеличивает шансы.",
        },

        q11: {
          question: "Помогаете ли вы с работой после приезда?",
          answer:
            "Мы занимаемся только обучением, не трудоустройством. Но проводим бесплатные семинары по легальной работе.",
        },

        q12: {
          question: "Можно ли зарабатывать $2000–$3000 в Корее?",
          answer:
            "Нелегальная работа опасна. Легально можно зарабатывать около $1000–$1200. Мы обучаем только безопасным способам.",
        },

        q13: {
          question: "Какие легальные работы доступны студентам?",
          answer:
            "Магазины (CU, GS25, 7-Eleven)\nРестораны / кафе\nСклады и логистика\nОдежные магазины\nУборка\nРепетиторство\nФриланс (IT, дизайн, перевод)",
        },

        q14: {
          question: "Сколько стоят ежемесячные расходы в Корее?",
          answer:
            "Жильё: $200–$500\nПитание: $150–$300\nТранспорт: $30–$50\nСтраховка: $10–$30\nТелефон: $20–$30\nИтого: $400–$800",
        },

        q15: {
          question: "Сможет ли мой ребёнок себя обеспечивать?",
          answer:
            "Да. Доход около $1000, расходы около $800. При старании этого достаточно. Во время каникул можно зарабатывать больше.",
        },

        q16: {
          question: "Может ли студент себя обеспечить?",
          answer:
            "Да. Доход около $1000, расходы около $800. При усилиях студент справляется самостоятельно.",
        },
      },
      aboutservice: {
        services: "Услуги",
        serviceTabs: {
          language: "Языковой курс",
          bachelor: "Бакалавриат",
          master_phd: "Магистратура / PhD",
          other_visa: "Другие визы",
        },
        serviceData: {
          LANGUAGE_COURSE: [
            {
              title: "Языковой курс D-4-1",
              description:
                "Базовый курс корейского языка для иностранных студентов",
            },
            {
              title: "Программа D-4-7",
              description: "Специальная программа обучения в Корее",
            },
            {
              title: "TeleX виза",
              description: "Консультация и поддержка по визе TeleX",
            },
          ],
          BACHELOR: [
            {
              title: "Поступление D-2-1",
              description: "Поддержка поступления в бакалавриат",
            },
            {
              title: "Поступление D-2-2",
              description: "Помощь с поступлением в университет",
            },
            {
              title: "Программа перевода",
              description: "Перевод из колледжа в университет",
            },
          ],
          MASTER_PHD: [
            {
              title: "Магистратура в Корее",
              description: "Подача в магистратуру в Корее",
            },
            {
              title: "E-виза магистратура",
              description: "Оформление E-визы после магистратуры",
            },
            {
              title: "Поступление в PhD",
              description: "Полная поддержка для PhD",
            },
          ],
          OTHER_VISA: [
            {
              title: "Рабочая виза E-7",
              description: "Поддержка трудоустройства и визы",
            },
            {
              title: "Виза D-10",
              description: "Консультация по визе соискателя работы",
            },
          ],
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "uz", // default til
  fallbackLng: "uz",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
