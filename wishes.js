const wishes = [
  {
    name: "Aown",
    message: "My Dearest Masooma ❤️\n\nToday, the world shines a little brighter, because the most beautiful soul I know was born. Even though distance keeps us apart, my heart has never been closer to yours. Every beat whispers your name, every smile I imagine is yours, and every dream I have includes you.\n\nYou are my laughter, my peace, my home, my everything. On your birthday, I wish for you all the happiness the universe can hold, all the love your heart can carry, and every dream you secretly wish for to come true. May Allah bless you with health, joy, and endless smiles.\n\nI promise to stand by you, even across the miles, and cherish every moment we share. I love you more than words, more than stars, more than time itself.\n\nHappy Birthday, my love — today, tomorrow, and always. ❤️\n\nForever Yours,\nAown"
  },

  {
    name: "Hadi",
    message: "Happy birthday Masooma bhabhi! 🎉\nMola apko lambi zindagi de aur isi tarah hasti muskarti mere bhai ke sath akhari saans tak rahein Insha’Allah.\nMola Ghazi AS ke sadqay aapki har wish puri ho.\nOnce again happy birthday! Treat de 😂😂"
  },

  {
    name: "Rida Kumail",
    message: "Happy Birthday Bhabhi ❤️\nWishing you a year filled with happiness, peace, and Allah’s countless blessings.\nMay your life always be full of love and smiles.\nAmeen 🌸✨"
  },

  {
    name: "Mama",
    message: "Meri pyari beti Masooma 🤍\nAllah tumhe hamesha khush rakhe, tumhara ghar abaad rahe aur tumhari har dua qubool ho.\nBohat sara pyar aur duayein 💕"
  },

  {
    name: "Papa",
    message: "Meri masooma beti 🤍\nTum mere dil ka tukra ho.\nAllah tumhe dunya ki har khushi de, hamesha muskurati raho aur har buri nazar se mahfooz raho.\nBohat sara pyar 💖"
  },

  {
    name: "Sasur G",
    message: "Happy birthday Golden Sultan ♥️\nHamesha khush raho."
  },

  {
    name: "Sasu Maa",
    message: "Happy birthday Masooma betaa 🤍\nAap bohat achii biwi aur bohat achii bahu hain ♥️\nAllah aapko hamesha khush rakhe aur humesha abaad rakhe.\nIllahi Ameen 🥹"
  },

  {
    name: "Esha",
    message: "Happy birthday bhabhi ♥️\nYour vibe is sooo lit, MashAllah ✨\nIn Sha Allah jo aap chahte ho apni life mein wo sab achieve karo 🥹\nAllah aapko bohat ziada khushiyan de.\nHamesha khush raho ♥️\n— Aapki Esha 🤍"
  },

  {
    name: "Zain",
    message: "HAPPY BIRTHDAY 🎂🧁🍾\nKeep your nose clean 😆😂"
  },

  {
    name: "Hina",
    message: "Hi beautiful cousin ❣️\nHappiest Birthday 🎂\nMay this year bring you lots of happiness and success.\nStay healthy, wealthy, energetic, and blessed 🥰✨"
  },

  {
    name: "Rubab Malik",
    message: "Happy Birthday Esha Api 🤍\nStay blessed and pretty always.\nMay all your wishes come true — and don’t forget to send gifts when you fly abroad 😂♥️\nAmeen"
  },

  {
    name: "Asad Ali",
    message: "Janam din mubarak meri pyari beti 💕\nPapa jaani loves you a lot."
  },

  {
    name: "Manoooo",
    message: "Happy Birthday dear Masooma api 😘\nMay Allah bless you with peace, good health, and endless happiness.\nMay your heart always be full of faith and gratitude.\nWishing you a beautiful year ahead 🤍✨"
  },

  {
    name: "Nuchi Phopho",
    message: "Happy birthday beti ❤️\nKhush raho, abaad raho."
  },

  {
    name: "Farah",
    message: "Happiest birthday Masooma 🌸\nMay your life be filled with grace, happiness, and peaceful moments.\nWishing you good health and beautiful days ahead.\nStay blessed 🤍"
  },

  {
    name: "Khala Naila",
    message: "Salgirah Mubarak ho beti 🤍\nAllah tumhari umar daraz kare aur tumhe har khushi naseeb ho.\nBohat sara pyar aur duayein 💕"
  },

  {
    name: "Naqi",
    message: "Happy Birthday Esha Api 🤍\nAllah aapko hamesha khush rakhe aur aapki har dua puri ho.\nBohat sara pyar 💖"
  },

  {
    name: "Anti Rahila",
    message: "Salgirah Mubarak meri masooma beti 🤍\nAllah tumhe buri nazar se bachaye aur hamesha khush rakhe.\nBohat sara pyar aur duayein 💕"
  },

  {
    name: "Syed Mubashir",
    message: "Happy Birthday 🎉\nWishing you a fantastic year ahead filled with happiness and success.\nStay blessed always 🌸"
  },

  {
    name: "Abdullah",
    message: "Happy Birthday bhabi Masooma 🎉💐\nAllah aapko hamesha sehat, khushi, aur kamyabi ata farmaye.\nDooriyon ke bawajood aap dono ka rishta aur pyar hamesha mazboot rahe.\nInshaAllah bohat jald Ireland aur Pakistan ki yeh doori bhi khatam ho.\nAmeen 🤍"
  },

  {
    name: "Khaleeque",
    message: "Salgirah Mubarak 🤍\nAllah aapko hamesha abaad rakhe.\n\nPhool khilte rahein zindagi ki raah mein,\nHansi chamakti rahe aapki nigaah mein,\nHar qadam pe mile khushi ki bahaar aapko,\nYe dua hai meri har pal, har saal aapko 🌸"
  },

  {
    name: "Arbaz",
    message: "Janam din ki dher saari shubhkaamnayein 🎉\nAllah aapki har ichha puri kare aur aap hamesha muskurati rahein.\nStay blessed 🤍"
  },

  {
    name: "From the Rest of the World 🌍",
    message: "Happy Birthday 🎂\nYour potential is limitless and your journey is just beginning.\nBelieve in yourself and make this year your masterpiece ✨"
  },

  {
    name: "Sono",
    message: "Happy birthday Esha 🎈🌹\nAllah Pak tumhein hamesha khush rakhein.\nLots of prayers and best wishes 🤍"
  },

  {
    name: "Anza",
    message: "Happy birthday to you, Masooma api 🎈😍😘\nAap bohat achi hain.\nAllah aapke naseeb hamesha ache rakhein aur aapko kabhi gham na de.\nAmeen 🤍\nYou’re the best sister-in-law ✨"
  },

  {
    name: "Honey",
    message: "Happy birthday best Bhabhi of the world 🤍\nStay blessed and happy always and forever.\nKeep shining and smiling always ✨\nMay Allah protect you from evil eyes and fulfill all your wishes and dreams.\nAmeen 🌸\nEnjoy your day 😊"
  },

  {
    name: "Sunny & Wafa",
    message: "Happy Birthday 🤍\nWishing you good health, peace, and happiness always.\nLots of love from both of us 💕"
  }
];
