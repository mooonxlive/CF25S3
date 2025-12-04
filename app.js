const { useState, useEffect } = React;
const { Search, Clock, Calendar, Users, Phone, Mail, ChevronDown, ChevronUp } = lucide;

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDay, setSelectedDay] = useState('all');
  const [expandedArtist, setExpandedArtist] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 60000);
    return () => clearInterval(timer);
  }, []);

  const artists = [
    // FRIDAY - Dec 5
    {
      name: "Chung's Astrology",
      day: "Friday",
      date: "Dec 5, 2025",
      soundcheck: "16:00 - 17:00",
      showStart: "17:45",
      showEnd: "18:30",
      duration: "45 min",
      onsite: "15:45",
      contacts: [
        { name: "Billy Wong", phone: "+852 9685 7145" },
        { name: "Eric Wong", email: "ericwong88@gmail.com" }
      ],
      crew: 6,
      techNotes: [
        "Standard 5 piece band",
        "Festival backline approved",
        "Festival LD",
        "Artist VJ on stage - 1x HDMI stage right",
        "Artist VJ brings Macbook Pro with Resolume plus Akai controller"
      ]
    },
    {
      name: "Wendy Wander",
      day: "Friday",
      date: "Dec 5, 2025",
      soundcheck: "Soundcheck requested",
      showStart: "19:15",
      showEnd: "20:15",
      duration: "60 min",
      onsite: "17:15",
      changeover: "18:30 - 19:15 (45 min)",
      ldProgramming: "04/12/2025 19:00-21:00",
      contacts: [
        { name: "Alex Chu", email: "alexkmchu@hotmail.com", phone: "+852 9839 9493" }
      ],
      crew: 6,
      techCrew: [
        { name: "Jian FengYu", email: "w11223310@gmail.com" },
        { name: "Li Xiaomin", email: "p11017034@gmail.com" },
        { name: "May Su", email: "maymaysutw@gmail.com" },
        { name: "Johnny Chan", email: "johnnychan27@gmail.com" }
      ],
      techNotes: [
        "Standard 5 piece band",
        "Festival backline",
        "Artist LD",
        "Artist VJ with content"
      ]
    },
    {
      name: "Digitalism (DJ Set)",
      day: "Friday",
      date: "Dec 5, 2025",
      soundcheck: "14:30 - 15:30",
      showStart: "21:00",
      showEnd: "22:30",
      duration: "90 min",
      onsite: "14:00",
      setup: "19:20 - 20:15",
      changeover: "20:15 - 21:00 (45 min)",
      contacts: [
        { name: "Gilles Bouttens (TM)", email: "gilles.bouttens@lobbycall.com", phone: "+32 495 36 59 53" },
        { name: "Isi (Show Day Contact)", phone: "+49 174 1775829" }
      ],
      crew: 2,
      techNotes: [
        "DJ Setup - standard DJ monitor",
        "Side fills will be moved",
        "Festival backline",
        "Festival LD",
        "Festival VJ with artist content",
        "1x DJ Riser (8' x 2' x 3'H)"
      ]
    },
    // SATURDAY - Dec 6
    {
      name: "YRock",
      day: "Saturday",
      date: "Dec 6, 2025",
      soundcheck: "12:00 - 13:00",
      showStart: "13:15",
      showEnd: "13:45",
      duration: "30 min",
      onsite: "11:15",
      contacts: [
        { name: "Satoru Yonezawa (Neon Lit)", email: "yonezawa@lydianlabel.com", phone: "+852 5366 6964" }
      ],
      crew: 6,
      techCrew: [
        { name: "SHINGO TORATA", email: "shingo@soundcrew.co.jp" }
      ],
      techNotes: [
        "Japanese artist",
        "Festival backline",
        "Artist LD",
        "Festival VJ with artist content"
      ]
    },
    {
      name: "before the night ends",
      day: "Saturday",
      date: "Dec 6, 2025",
      soundcheck: "13:45 - 14:15",
      showStart: "14:15",
      showEnd: "14:45",
      duration: "30 min",
      onsite: "13:15",
      changeover: "30 min",
      contacts: [
        { phone: "+852 9282 2727" }
      ],
      crew: 5,
      techCrew: [
        { name: "Jamie", email: "Jamietamtck@gmail.com" }
      ],
      techNotes: [
        "HK Youth competition",
        "5 piece band",
        "Standard backline",
        "Festival LD",
        "Festival VJ with artist content"
      ]
    },
    {
      name: "AKASAKI",
      day: "Saturday",
      date: "Dec 6, 2025",
      soundcheck: "11:30 - 12:00 & 14:00 - 14:45",
      showStart: "15:30",
      showEnd: "16:15",
      duration: "45 min",
      onsite: "11:00",
      setup: "13:30",
      changeover: "14:45 - 15:30 (45 min)",
      ldProgramming: "06/12/2025 09:00-11:00",
      contacts: [
        { name: "Satoru Yonezawa (Neon Lit)", email: "yonezawa@lydianlabel.com", phone: "+852 5366 6964" }
      ],
      crew: 6,
      techCrew: [
        { name: "HIBIKI FURUKAWA", email: "h-furukawa@msi-japan.com" },
        { name: "YUZURU HAGA", email: "kkh.biglobe.ne.jp" },
        { name: "SORA YASUI (LD)", email: "yasui.sora@showdesignstudio.com" }
      ],
      techNotes: [
        "Artist extras: SHURE AD4D x1, Beta 58 Head x2, SHURE PSM1000 x1, SHURE P10R x5",
        "Artist LD",
        "Festival VJ"
      ],
      additionalCrew: 15
    },
    {
      name: "Soccer Mommy",
      day: "Saturday",
      date: "Dec 6, 2025",
      soundcheck: "10:15 - 11:00",
      showStart: "17:00",
      showEnd: "17:45",
      duration: "45 min",
      onsite: "15:00",
      changeover: "16:15 - 17:00 (45 min)",
      contacts: [
        { name: "Andrew Clarke (TM)", email: "andytylerclarke@gmail.com" }
      ],
      crew: 5,
      techCrew: [
        { name: "Andy Clarke", email: "andytylerclarke@gmail.com" }
      ],
      techNotes: [
        "5 piece band",
        "Festival backline",
        "Festival LD",
        "Festival VJ with artist content"
      ]
    },
    {
      name: "RIKON",
      day: "Saturday",
      date: "Dec 6, 2025",
      soundcheck: "17:00 - 17:45",
      showStart: "18:30",
      showEnd: "19:15",
      duration: "45 min",
      onsite: "09:00",
      setup: "16:30",
      changeover: "17:45 - 18:30 (45 min)",
      ldProgramming: "05/12/2025 23:00-01:00 (next day)",
      contacts: [
        { name: "Toru Hachiya", email: "toru.hachiya@sonymusic.co.jp" },
        { name: "Satoru Yonezawa (Neon Lit)", email: "yonezawa@lydianlabel.com", phone: "+852 5366 6964" }
      ],
      crew: 6,
      techCrew: [
        { name: "MITSURU TAJIKA", email: "tajika.mitsuru@gmail.com" },
        { name: "MOMIYAMA TAESHI", email: "momiyama@threezero.co.jp" },
        { name: "YUSUKE HONDA", email: "honda@akaricenter.jp" }
      ],
      techNotes: [
        "Artist LD",
        "Festival VJ with artist content"
      ],
      additionalCrew: 20
    },
    {
      name: "Bolis Pupul",
      day: "Saturday",
      date: "Dec 6, 2025",
      soundcheck: "N/A",
      showStart: "20:00",
      showEnd: "21:00",
      duration: "60 min",
      onsite: "18:00",
      setup: "18:15 - 19:15",
      changeover: "19:15 - 20:00 (45 min)",
      contacts: [
        { name: "Nico Van Der Eeken", email: "vandereekennico@gmail.com" },
        { name: "Thomas Braekevelt (Lights)", email: "thomas@devents.be" }
      ],
      crew: "Photographer & styling, no other technical crew",
      techNotes: [
        "Festival backline - very simple setup",
        "Artist LD - brought by artist, only available from changeover",
        "Artist has own visuals - discuss setup with Thomas in advance",
        "Artist VJ with content - 1x HDMI stage right"
      ]
    },
    {
      name: "Dave Clarke (DJ)",
      day: "Saturday",
      date: "Dec 6, 2025",
      soundcheck: "N/A",
      showStart: "21:15",
      showEnd: "22:45",
      duration: "90 min",
      onsite: "19:15",
      changeover: "21:00 - 21:15 (15 min)",
      contacts: [
        { name: "Contact", phone: "+44 (0) 207 400 4500" }
      ],
      crew: 1,
      techNotes: [
        "DJ Setup",
        "Side fills will be moved",
        "Festival backline",
        "Festival LD",
        "Festival VJ - Logo only",
        "1x DJ Riser (8' x 2' x 3'H)"
      ]
    },
    // SUNDAY - Dec 7
    {
      name: "Eric's Weekend",
      day: "Sunday",
      date: "Dec 7, 2025",
      soundcheck: "N/A",
      showStart: "13:30",
      showEnd: "14:00",
      duration: "30 min",
      onsite: "N/A",
      contacts: [
        { name: "Justin Siu (Band Member)", email: "Siu.justin218@gmail.com" },
        { name: "Eric's Weekend", email: "erickwoksweekend@gmail.com" }
      ],
      crew: 5,
      techNotes: [
        "HK Based 5 piece band",
        "Festival backline",
        "Festival LD",
        "Festival VJ with 30 min set video content"
      ]
    },
    {
      name: "Puuluup",
      day: "Sunday",
      date: "Dec 7, 2025",
      soundcheck: "N/A",
      showStart: "14:45",
      showEnd: "15:30",
      duration: "45 min",
      onsite: "12:45",
      changeover: "14:00 - 14:45 (45 min)",
      contacts: [],
      crew: "No crew info provided",
      techNotes: [
        "No riser needed",
        "2 pc band",
        "No backline needed - only 2x chairs and carpets",
        "Festival LD",
        "Festival VJ with artist content"
      ]
    },
    {
      name: "Bright Eyes",
      day: "Sunday",
      date: "Dec 7, 2025",
      soundcheck: "09:00 & 09:30 - 11:30",
      showStart: "16:30",
      showEnd: "17:15",
      duration: "45 min",
      onsite: "09:00",
      setup: "14:30",
      changeover: "15:30 - 16:20 (60 min)",
      inWings: "11:30",
      contacts: [
        { name: "Paul Clegg (TM)", email: "rpclegg@gmail.com", phone: "+1 818 983 4766" }
      ],
      crew: 6,
      techCrew: [
        { name: "MOGAN BROWN", email: "moganb@gmail.com" }
      ],
      techNotes: [
        "Festival will cover cost for MON console (5-7K)",
        "Festival backline",
        "Festival LD",
        "Festival VJ with artist content"
      ]
    },
    {
      name: "M4GANG with special guest FAMA",
      day: "Sunday",
      date: "Dec 7, 2025",
      soundcheck: "N/A",
      showStart: "18:00",
      showEnd: "19:10",
      duration: "70 min",
      onsite: "16:00",
      changeover: "17:15 - 18:00 (45 min)",
      contacts: [
        { name: "Luke", email: "oddfuturework@gmail.com" },
        { name: "Editor", email: "editor.luk.research@gmail.com" }
      ],
      crew: 15,
      crewDetails: [
        "M4GANG: LUK KA KIU (LUKE) - Producer",
        "CHAN TSZ MING - Visual Advisor",
        "S F Poon - Assistant Visual Operator",
        "WONG HOI FUNG - Lighting Advisor/Operator",
        "hui ting chun - Hair stylist",
        "FAMA: CHEN JIAN PING - Artist Manager 1",
        "CHUNG UEN TUNG - Artist Manager 2"
      ],
      techNotes: [
        "Festival backline",
        "Festival LD",
        "Festival VJ with artist content"
      ]
    },
    {
      name: "riria (DJ)",
      day: "Sunday",
      date: "Dec 7, 2025",
      soundcheck: "N/A",
      showStart: "19:30",
      showEnd: "21:00",
      duration: "90 min",
      onsite: "18:30",
      changeover: "19:10 - 19:30 (20 min)",
      contacts: [
        { phone: "+62 812-3654-9786" }
      ],
      crew: 1,
      techNotes: [
        "DJ Setup",
        "Side fills will be moved",
        "Festival backline",
        "Festival LD",
        "Festival VJ with artist content",
        "1x DJ Riser (8' x 2' x 3'H)"
      ]
    },
    {
      name: "Special Request (DJ)",
      day: "Sunday",
      date: "Dec 7, 2025",
      soundcheck: "N/A",
      showStart: "21:00",
      showEnd: "22:30",
      duration: "90 min",
      onsite: "20:00",
      changeover: "0 min",
      contacts: [
        { phone: "+62 812-3654-9786" }
      ],
      crew: 1,
      techNotes: [
        "DJ Setup",
        "Side fills will be moved",
        "Festival backline approved",
        "Festival LD",
        "Festival VJ - Logo only",
        "1x DJ Riser (8' x 2' x 3'H)"
      ]
    }
  ];

  const dayColors = {
    Friday: {
      gradient: 'from-blue-900 via-indigo-900 to-purple-900',
      card: 'bg-blue-600 bg-opacity-20',
      border: 'border-blue-400 border-opacity-30',
      badge: 'bg-blue-600',
      text: 'text-blue-200',
      textLight: 'text-blue-300',
      button: 'bg-blue-600',
      accent: 'text-blue-400'
    },
    Saturday: {
      gradient: 'from-emerald-900 via-teal-900 to-cyan-900',
      card: 'bg-emerald-600 bg-opacity-20',
      border: 'border-emerald-400 border-opacity-30',
      badge: 'bg-emerald-600',
      text: 'text-emerald-200',
      textLight: 'text-emerald-300',
      button: 'bg-emerald-600',
      accent: 'text-emerald-400'
    },
    Sunday: {
      gradient: 'from-orange-900 via-red-900 to-pink-900',
      card: 'bg-orange-600 bg-opacity-20',
      border: 'border-orange-400 border-opacity-30',
      badge: 'bg-orange-600',
      text: 'text-orange-200',
      textLight: 'text-orange-300',
      button: 'bg-orange-600',
      accent: 'text-orange-400'
    },
    all: {
      gradient: 'from-slate-900 via-purple-900 to-slate-900',
      card: 'bg-purple-600 bg-opacity-20',
      border: 'border-purple-400 border-opacity-30',
      badge: 'bg-purple-600',
      text: 'text-purple-200',
      textLight: 'text-purple-300',
      button: 'bg-purple-600',
      accent: 'text-purple-400'
    }
  };

  const currentColors = dayColors[selectedDay];

  const getNextAction = () => {
    const now = new Date();
    const allEvents = [];
    
    artists.forEach(artist => {
      const dayMap = { "Friday": 5, "Saturday": 6, "Sunday": 7 };
      const day = dayMap[artist.day];
      
      if (artist.soundcheck && artist.soundcheck !== "N/A" && artist.soundcheck !== "Soundcheck requested") {
        const scTime = artist.soundcheck.split(' - ')[0].split(' & ')[0];
        const [hours, minutes] = scTime.split(':');
        allEvents.push({
          time: new Date(2025, 11, day, parseInt(hours), parseInt(minutes), 0),
          event: `${artist.name} Soundcheck`,
          artist: artist.name
        });
      }
      
      if (artist.ldProgramming) {
        const ldDateStr = artist.ldProgramming.split(' ')[0];
        const ldTimeStr = artist.ldProgramming.split(' ')[1].split('-')[0];
        const [ldDay, ldMonth, ldYear] = ldDateStr.split('/');
        const [ldHours, ldMinutes] = ldTimeStr.split(':');
        
        allEvents.push({
          time: new Date(parseInt(ldYear), parseInt(ldMonth) - 1, parseInt(ldDay), parseInt(ldHours), parseInt(ldMinutes), 0),
          event: `${artist.name} LD Programming`,
          artist: artist.name
        });
      }
      
      if (artist.showStart && artist.showStart !== "N/A") {
        const [hours, minutes] = artist.showStart.split(':');
        allEvents.push({
          time: new Date(2025, 11, day, parseInt(hours), parseInt(minutes), 0),
          event: `${artist.name} Show`,
          artist: artist.name
        });
      }
    });
    
    allEvents.sort((a, b) => a.time - b.time);
    const nextEvent = allEvents.find(event => event.time > now);
    
    if (!nextEvent) {
      return { event: "Festival Complete", artist: "All shows finished", time: "✓" };
    }
    
    const diff = nextEvent.time - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    
    let timeString = days > 0 ? `${days}d ${hours}h` : hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
    
    return { event: nextEvent.event, artist: nextEvent.artist, time: timeString };
  };

  const filteredArtists = artists.filter(artist => {
    const matchesSearch = artist.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDay = selectedDay === 'all' || artist.day === selectedDay;
    return matchesSearch && matchesDay;
  });

  const nextAction = getNextAction();

  const Icon = ({ icon: IconComponent, ...props }) => {
    useEffect(() => {
      lucide.createIcons();
    }, []);
    return React.createElement('i', { 'data-lucide': IconComponent, ...props });
  };

  return React.createElement('div', {
    className: `min-w-full min-h-screen bg-gradient-to-br ${currentColors.gradient} p-4 md:p-8 transition-all duration-500`
  }, 
    React.createElement('div', { className: 'max-w-7xl mx-auto' },
      // Header
      React.createElement('div', { className: 'bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-6 mb-6 border border-white border-opacity-20' },
        React.createElement('h1', { className: 'text-3xl md:text-4xl font-bold text-white mb-2' }, 'S3 Park Stage Manager'),
        React.createElement('p', { className: currentColors.text }, 'Clockenflap 2025 - December 5-7'),
        
        React.createElement('div', { className: `mt-4 ${currentColors.card} rounded-lg p-4 border ${currentColors.border}` },
          React.createElement('div', { className: 'flex items-center justify-between flex-wrap gap-2' },
            React.createElement('div', { className: 'flex items-center gap-2' },
              React.createElement(Icon, { icon: 'clock', className: currentColors.text, size: 24 }),
              React.createElement('div', {},
                React.createElement('p', { className: `${currentColors.text} text-sm` }, 'Next Action'),
                React.createElement('p', { className: 'text-white font-semibold' }, nextAction.event)
              )
            ),
            React.createElement('div', { className: 'text-right' },
              React.createElement('p', { className: 'text-3xl font-bold text-white' }, nextAction.time),
              React.createElement('p', { className: `${currentColors.text} text-sm` }, nextAction.artist)
            )
          )
        )
      ),

      // Filters
      React.createElement('div', { className: 'bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 mb-6 border border-white border-opacity-20' },
        React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
          React.createElement('div', { className: 'relative' },
            React.createElement(Icon, { icon: 'search', className: `absolute left-3 top-1/2 transform -translate-y-1/2 ${currentColors.textLight}`, size: 20 }),
            React.createElement('input', {
              type: 'text',
              placeholder: 'Search artists...',
              value: searchTerm,
              onChange: (e) => setSearchTerm(e.target.value),
              className: 'w-full pl-10 pr-4 py-2 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none',
              style: { caretColor: 'white' }
            })
          ),
          React.createElement('div', { className: 'flex gap-2' },
            ['all', 'Friday', 'Saturday', 'Sunday'].map(day =>
              React.createElement('button', {
                key: day,
                onClick: () => setSelectedDay(day),
                className: `flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                  selectedDay === day
                    ? `${dayColors[day].button} text-white`
                    : `bg-white bg-opacity-20 ${currentColors.text} hover:bg-opacity-30`
                }`
              }, day.charAt(0).toUpperCase() + day.slice(1))
            )
          )
        )
      ),

      // Artist Cards
      React.createElement('div', { className: 'space-y-4' },
        filteredArtists.map((artist, index) => {
          const artistColors = dayColors[artist.day];
          const isExpanded = expandedArtist === index;
          
          return React.createElement('div', {
            key: index,
            className: 'bg-white bg-opacity-10 backdrop-blur-lg rounded-lg border border-white border-opacity-20 overflow-hidden'
          },
            // Artist Header
            React.createElement('div', {
              className: 'p-4 cursor-pointer hover:bg-white hover:bg-opacity-5 transition-all',
              onClick: () => setExpandedArtist(isExpanded ? null : index)
            },
              React.createElement('div', { className: 'flex items-center justify-between' },
                React.createElement('div', { className: 'flex-1' },
                  React.createElement('div', { className: 'flex items-center gap-3 flex-wrap' },
                    React.createElement('h3', { className: 'text-xl font-bold text-white' }, artist.name),
                    React.createElement('span', { className: `px-3 py-1 ${artistColors.badge} bg-opacity-50 rounded-full text-sm text-white` }, artist.day)
                  ),
                  React.createElement('div', { className: `flex items-center gap-4 mt-2 ${artistColors.text} text-sm flex-wrap` },
                    React.createElement('span', { className: 'flex items-center gap-1' },
                      React.createElement(Icon, { icon: 'clock', size: 16 }),
                      artist.showStart && artist.showStart !== "N/A" ? `${artist.showStart} - ${artist.showEnd}` : 'TBA'
                    ),
                    React.createElement('span', { className: 'flex items-center gap-1' },
                      React.createElement(Icon, { icon: 'users', size: 16 }),
                      typeof artist.crew === 'number' ? `${artist.crew} crew` : artist.crew
                    )
                  )
                ),
                React.createElement(Icon, { icon: isExpanded ? 'chevron-up' : 'chevron-down', className: 'text-white' })
              )
            ),

            // Expanded Details
            isExpanded && React.createElement('div', { className: 'border-t border-white border-opacity-20 p-4 bg-black bg-opacity-20' },
              React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-6' },
                // Schedule
                React.createElement('div', {},
                  React.createElement('h4', { className: `text-lg font-semibold text-white mb-3 flex items-center gap-2` },
                    React.createElement(Icon, { icon: 'calendar', className: artistColors.accent, size: 20 }),
                    'Schedule'
                  ),
                  React.createElement('div', { className: `space-y-2 ${artistColors.text}` },
                    artist.onsite && artist.onsite !== "N/A" && React.createElement('p', {}, 
                      React.createElement('span', { className: 'text-white font-medium' }, 'Onsite: '), artist.onsite
                    ),
                    artist.soundcheck && artist.soundcheck !== "N/A" && React.createElement('p', {}, 
                      React.createElement('span', { className: 'text-white font-medium' }, 'Soundcheck: '), artist.soundcheck
                    ),
                    artist.ldProgramming && React.createElement('p', {}, 
                      React.createElement('span', { className: 'text-white font-medium' }, 'LD Programming: '), artist.ldProgramming
                    ),
                    artist.showStart && artist.showStart !== "N/A" && React.createElement('p', {}, 
                      React.createElement('span', { className: 'text-white font-medium' }, 'Show: '), `${artist.showStart} - ${artist.showEnd}`
                    )
                  )
                ),

                // Contacts
                React.createElement('div', {},
                  React.createElement('h4', { className: `text-lg font-semibold text-white mb-3` }, 'Contacts'),
                  artist.contacts && artist.contacts.length > 0 
                    ? React.createElement('div', { className: 'space-y-2' },
                        artist.contacts.map((contact, i) =>
                          React.createElement('div', { key: i, className: `${artistColors.text} text-sm` },
                            contact.name && React.createElement('p', { className: 'text-white font-medium' }, contact.name),
                            contact.email && React.createElement('p', {},
                              React.createElement('a', { href: `mailto:${contact.email}`, className: 'hover:text-white' }, contact.email)
                            ),
                            contact.phone && React.createElement('p', {},
                              React.createElement('a', { href: `tel:${contact.phone}`, className: 'hover:text-white' }, contact.phone)
                            )
                          )
                        )
                      )
                    : React.createElement('p', { className: `${artistColors.textLight} text-sm` }, 'No contact information')
                ),

                // Tech Notes
                React.createElement('div', { className: 'md:col-span-2' },
                  React.createElement('h4', { className: 'text-lg font-semibold text-white mb-3' }, 'Technical Notes'),
                  React.createElement('ul', { className: 'space-y-2' },
                    artist.techNotes.map((note, i) =>
                      React.createElement('li', { key: i, className: `${artistColors.text} text-sm flex items-start gap-2` },
                        React.createElement('span', { className: artistColors.accent }, '•'),
                        note
                      )
                    )
                  )
                )
              )
            )
          );
        })
      ),

      // Summary
      React.createElement('div', { className: 'mt-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-lg p-4 border border-white border-opacity-20' },
        React.createElement('div', { className: 'grid grid-cols-2 md:grid-cols-4 gap-4 text-center' },
          React.createElement('div', {},
            React.createElement('p', { className: `${currentColors.text} text-sm` }, 'Total Acts'),
            React.createElement('p', { className: 'text-white text-2xl font-bold' }, artists.length)
          ),
          React.createElement('div', {},
            React.createElement('p', { className: `${currentColors.text} text-sm` }, 'Friday'),
            React.createElement('p', { className: 'text-white text-2xl font-bold' }, artists.filter(a => a.day === 'Friday').length)
          ),
          React.createElement('div', {},
            React.createElement('p', { className: `${currentColors.text} text-sm` }, 'Saturday'),
            React.createElement('p', { className: 'text-white text-2xl font-bold' }, artists.filter(a => a.day === 'Saturday').length)
          ),
          React.createElement('div', {},
            React.createElement('p', { className: `${currentColors.text} text-sm` }, 'Sunday'),
            React.createElement('p', { className: 'text-white text-2xl font-bold' }, artists.filter(a => a.day === 'Sunday').length)
          )
        )
      )
    )
  );
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
