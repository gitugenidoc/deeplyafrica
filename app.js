const navItems = [
  ["home", "Home", "grid"],
  ["news", "News", "signal"],
  ["match-centre", "Match Centre", "chart"],
  ["competitions", "Competitions", "users"],
  ["caf-champions-league", "CAF Champions League", "calendar"],
  ["caf-confederation-cup", "CAF Confederation Cup", "pin"],
  ["afcon", "Africa Cup of Nations", "ball"],
  ["african-youth-football", "African Youth Football", "bolt"],
  ["wafcon", "WAFCON", "globe"],
  ["caf-womens-champions-league", "CAF Women's Champions League", "play"],
  ["fifa-competitions-african-teams", "FIFA Competitions - African Teams", "pie"],
  ["botola-pro-morocco", "Botola Pro Morocco", "user"],
  ["african-talents", "African Talents", "star"],
  ["football-intelligence", "Football Intelligence", "target"],
  ["editorial-team", "Editorial Team", "users"],
  ["editorial-policy", "Editorial Policy", "doc"],
  ["official-media-profile", "Official Media Profile", "badge"],
  ["media-kit", "Media Kit", "folder"],
  ["partnerships", "Partnerships", "hand"],
  ["contact", "Contact", "mail"]
];

const topTabs = [
  ["home", "Overview"],
  ["news", "Newsroom"],
  ["match-centre", "Match Centre"],
  ["competitions", "Competitions"],
  ["official-media-profile", "Media File"]
];

const competitions = [
  {
    name: "CAF Champions League",
    slug: "caf-champions-league",
    type: "Club Competition",
    region: "Africa",
    logo: "public/competitions/caf-champions-league-logo.png",
    description: "Match previews, reports, club files and tactical notes from Africa's top club stage.",
    sections: ["Latest Stories", "Match Previews", "Match Reports", "Club Profiles", "Tactical Analysis", "Moroccan Clubs in CAF CL", "Players to Watch", "Power Rankings"]
  },
  {
    name: "CAF Confederation Cup",
    slug: "caf-confederation-cup",
    type: "Club Competition",
    region: "Africa",
    logo: "public/competitions/caf-confederation-cup-logo.png",
    description: "Reports and club stories from Africa's most unpredictable continental tournament.",
    sections: ["Latest Updates", "Match Centre", "Moroccan Clubs", "North African Clubs", "West African Clubs", "Tactical Trends", "Underrated Players", "Competition Stories"]
  },
  {
    name: "Africa Cup of Nations",
    slug: "afcon",
    type: "National Teams",
    region: "Africa",
    logo: "public/competitions/caf-logo.svg",
    description: "Team guides, group reads, key players and match reports from Africa's flagship tournament.",
    sections: ["Road to AFCON", "Qualified Teams", "Group Analysis", "Nation Profiles", "Key Players", "Tactical Identity", "Fan Culture", "Match Reports"]
  },
  {
    name: "African Youth Football",
    slug: "african-youth-football",
    type: "Youth Football",
    region: "Africa",
    logo: "public/competitions/fifa-logo.svg",
    description: "U-17, U-20 and U-23 tracking, from AFCON qualifiers to FIFA youth tournaments.",
    sections: ["U-17 AFCON", "U-20 AFCON", "U-23 AFCON", "FIFA U-17 World Cup", "FIFA U-20 World Cup", "Olympic Football", "Rising Stars", "Youth Team Reports"]
  },
  {
    name: "WAFCON",
    slug: "wafcon",
    type: "Women's National Teams",
    region: "Africa",
    logo: "public/competitions/wafcon.svg",
    description: "National-team stories, player profiles and Morocco focus from African women's football.",
    sections: ["Latest Stories", "Match Previews", "Match Reports", "National Teams", "Morocco Women's Football", "Player Profiles", "Tactical Analysis", "Road to FIFA Women's World Cup"]
  },
  {
    name: "CAF Women's Champions League",
    slug: "caf-womens-champions-league",
    type: "Women's Club Competition",
    region: "Africa",
    logo: "public/competitions/wafcon.svg",
    description: "Club files, player watch and match reports from Africa's leading women's club stage.",
    sections: ["Latest News", "Club Profiles", "Match Reports", "Player Focus", "Women's Football Development", "Tactical Notes", "Moroccan Clubs", "Rising Stars"]
  },
  {
    name: "African Teams in FIFA Competitions",
    slug: "fifa-competitions-african-teams",
    type: "FIFA Competitions",
    region: "Global",
    logo: "public/competitions/fifa-logo.svg",
    description: "African teams across World Cups, youth tournaments, futsal, beach soccer and Club World Cup.",
    sections: ["FIFA World Cup", "FIFA Women's World Cup", "FIFA U-17 World Cup", "FIFA U-20 World Cup", "FIFA Club World Cup", "Futsal World Cup", "Beach Soccer World Cup", "African Qualified Teams"]
  },
  {
    name: "Botola Pro Morocco",
    slug: "botola-pro-morocco",
    type: "Domestic League",
    region: "Morocco",
    logo: "public/competitions/botola-pro-logo.png",
    description: "Matchday previews, weekly notes, club stories and talent watch from Morocco.",
    sections: ["Matchday Preview", "Weekly Report", "Moroccan Clubs in Africa", "Raja Casablanca", "Wydad AC", "AS FAR", "RS Berkane", "Transfer Watch"]
  }
];

const matches = [
  ["CAF Champions League", "21:00", "03 Jun", "RS Berkane", "Al Ahly", "Preview", "CAF CL"],
  ["Botola Pro", "20:00", "03 Jun", "Raja Casablanca", "FUS Rabat", "Live", "BOT"],
  ["WAFCON", "19:00", "04 Jun", "Morocco Women", "Nigeria Women", "Upcoming", "WAF"],
  ["FIFA U-20 World Cup", "17:30", "05 Jun", "Senegal U-20", "Japan U-20", "Preview", "FIFA"],
  ["CAF Confederation Cup", "20:30", "06 Jun", "Zamalek", "Stellenbosch", "Preview", "CAF CC"],
  ["AFCON Qualifiers", "18:00", "07 Jun", "Ghana", "Angola", "Upcoming", "AFCON"]
];

const articles = [
  ["Why the CAF Champions League remains Africa's toughest club competition", "CAF Champions League", "Anas SENHAJI", "Founder & Sport Media Manager", "8 min", "Africa's elite club tournament still tests travel, squad depth, tactical flexibility and emotional control."],
  ["Moroccan clubs and the modern identity of African club football", "CAF Champions League", "Anas SENHAJI", "Founder & Sport Media Manager", "7 min", "Raja, Wydad, AS FAR and RS Berkane continue to shape continental standards."],
  ["Tactical trends shaping the CAF Champions League", "CAF Champions League", "DeeplyAfrica Editorial Desk", "Editorial Desk", "6 min", "Compact blocks, rest-defense and set-piece details are changing the competition."],
  ["Why the CAF Confederation Cup is Africa's most unpredictable tournament", "CAF Confederation Cup", "DeeplyAfrica Editorial Desk", "Editorial Desk", "6 min", "Travel, rhythm and squad rotation make the tournament volatile."],
  ["AFCON: more than a tournament, a continental football identity", "Africa Cup of Nations", "Anas SENHAJI", "Founder & Sport Media Manager", "8 min", "AFCON carries football, memory, nationhood and tactical evolution in one competition."],
  ["African teams in FIFA competitions: why every category matters", "FIFA Competitions", "Anas SENHAJI", "Founder & Sport Media Manager", "8 min", "Senior, youth, women's, futsal, beach soccer and club tournaments all shape Africa's global football profile."],
  ["Botola Pro: Morocco's domestic engine behind continental success", "Botola Pro Morocco", "Anas SENHAJI", "Founder & Sport Media Manager", "7 min", "The Moroccan league creates weekly pressure that prepares clubs for African competition."],
  ["WAFCON and the rise of African women's football", "WAFCON", "DeeplyAfrica Editorial Desk", "Editorial Desk", "6 min", "WAFCON has become a major signal of the continent's women's football development."],
  ["African Talent Watch: five profiles to follow this season", "African Talents", "DeeplyAfrica Editorial Desk", "Editorial Desk", "6 min", "Five players to track by role, minutes, club situation and next-step readiness."]
];

const players = [
  ["Youssef Rahimi", "19", "Morocco", "AS FAR", "Central midfielder", "Press resistance, line-breaking passes", "Build-up connector", "High"],
  ["Awa Diarra", "20", "Mali", "AS Mande", "Forward", "Acceleration, box movement", "Final-third runner", "High"],
  ["Ibrahim Mensah", "18", "Ghana", "Dreams FC", "Centre-back", "Aerial timing, recovery pace", "Aggressive stopper", "Medium-high"],
  ["Nadia El Idrissi", "21", "Morocco", "Raja Women", "Full-back", "Overlap timing, crossing", "Wide outlet", "High"]
];

const icons = {
  grid: '<svg viewBox="0 0 24 24"><path d="M4 6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V6ZM4 16a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2Zm10 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-2Z"/></svg>',
  signal: '<svg viewBox="0 0 24 24"><path d="M8.1 16.4a5.5 5.5 0 0 1 7.8 0M12 20h.01M4.9 12.9c3.9-3.9 10.3-3.9 14.2 0M1.4 9.4c5.8-5.9 15.4-5.9 21.2 0"/></svg>',
  chart: '<svg viewBox="0 0 24 24"><path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2Zm0 0V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v10m-6 0a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2m0 0V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z"/></svg>',
  users: '<svg viewBox="0 0 24 24"><path d="M17 20h5v-2a3 3 0 0 0-5.4-1.9M17 20H7m10 0v-2c0-.7-.1-1.3-.4-1.9M7 20H2v-2a3 3 0 0 1 5.4-1.9M7 20v-2c0-.7.1-1.3.4-1.9m0 0a5 5 0 0 1 9.2 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><path d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M17.7 16.7 13.4 21a2 2 0 0 1-2.8 0l-4.3-4.3a8 8 0 1 1 11.4 0Z"/><path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>',
  ball: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4 3 2-1 4h-4L9 8l3-2Zm-6 7 4 3m8-3-4 3"/></svg>',
  bolt: '<svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7Z"/></svg>',
  globe: '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.7 0 3-4 3-9s-1.3-9-3-9m0 18c-1.7 0-3-4-3-9s1.3-9 3-9"/></svg>',
  play: '<svg viewBox="0 0 24 24"><path d="m10 8 6 4-6 4V8Z"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>',
  pie: '<svg viewBox="0 0 24 24"><path d="M11 3a9 9 0 1 0 9 10h-9V3Z"/><path d="M20.5 9H15V3.5A9 9 0 0 1 20.5 9Z"/></svg>',
  user: '<svg viewBox="0 0 24 24"><path d="M20 21a8 8 0 0 0-16 0M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/></svg>',
  star: '<svg viewBox="0 0 24 24"><path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6-5.4-2.8-5.4 2.8 1-6-4.4-4.3 6.1-.9L12 3Z"/></svg>',
  target: '<svg viewBox="0 0 24 24"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/><path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"/><path d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"/></svg>',
  doc: '<svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',
  badge: '<svg viewBox="0 0 24 24"><path d="M12 3 4 7v6c0 5 3.4 7.8 8 9 4.6-1.2 8-4 8-9V7l-8-4Z"/><path d="m9 12 2 2 4-4"/></svg>',
  folder: '<svg viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/></svg>',
  hand: '<svg viewBox="0 0 24 24"><path d="M7 11V6a2 2 0 0 1 4 0v5M11 10V5a2 2 0 0 1 4 0v7M15 11V7a2 2 0 0 1 4 0v7c0 5-3 8-8 8h-1a7 7 0 0 1-7-7v-2a2 2 0 0 1 4 0v1"/></svg>',
  mail: '<svg viewBox="0 0 24 24"><path d="M4 4h16v16H4z"/><path d="m22 6-10 7L2 6"/></svg>'
};

function esc(value) {
  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function initials(name) {
  return name.split(" ").filter(Boolean).slice(0, 2).map(part => part[0]).join("").toUpperCase();
}

function teamLogo(name) {
  const normalized = name.toLowerCase();
  if (normalized.includes("morocco")) {
    return `<span class="team-logo image-logo"><img src="public/competitions/frmf-logo.png" alt="${esc(name)} logo"></span>`;
  }
  return `<span class="team-logo">${initials(name)}</span>`;
}

function competitionLogoByCategory(category) {
  if (category.includes("Champions League")) return "public/competitions/caf-champions-league-logo.png";
  if (category.includes("Confederation")) return "public/competitions/caf-confederation-cup-logo.png";
  if (category.includes("Botola")) return "public/competitions/botola-pro-logo.png";
  if (category.includes("WAFCON")) return "public/competitions/wafcon.svg";
  if (category.includes("FIFA")) return "public/competitions/fifa-logo.svg";
  if (category.includes("Africa Cup")) return "public/competitions/caf-logo.svg";
  return "public/logo/deeplyafrica-real.png";
}

function renderNav() {
  document.getElementById("sidebarNav").innerHTML = navItems.map(([slug, label, icon]) => `
    <a class="side-link" href="#${slug}" data-route="${slug}" aria-label="${esc(label)}">
      ${icons[icon]}
      <span class="tip">${esc(label)}</span>
    </a>
  `).join("");
}

function renderTopTabs(route) {
  document.getElementById("topTabs").innerHTML = topTabs.map(([slug, label]) => `
    <a class="top-tab ${topTabActive(route, slug) ? "active" : ""}" href="#${slug}">${label}</a>
  `).join("");
}

function topTabActive(route, slug) {
  if (slug === "competitions") return competitions.some(item => item.slug === route) || route === "competitions";
  return route === slug;
}

function setActive(route) {
  document.querySelectorAll(".side-link").forEach(link => {
    link.classList.toggle("active", link.dataset.route === route);
  });
  renderTopTabs(route);
}

function heroCard(config) {
  const compA = config.logoA || "public/logo/deeplyafrica-real.png";
  const compB = config.logoB || selectedCompetition(config.route)?.logo || "public/logo/deeplyafrica-real.png";
  const visualLogo = config.visualLogo || compB;
  return `
    <section class="hero-match-card">
      <div class="hero-badges">
        <div class="competition-logo"><img src="${compA}" alt="${esc(config.badgeA || "DeeplyAfrica")}"></div>
        <div class="competition-logo"><img src="${compB}" alt="${esc(config.badgeB || "Competition")}"></div>
        ${config.logoC ? `<div class="competition-logo"><img src="${config.logoC}" alt="${esc(config.badgeC || "Competition")}"></div>` : ""}
      </div>

      <div class="hero-main">
        <div class="hero-label">${esc(config.rightTitle || "DeeplyAfrica Platform")}</div>
        <h1>${esc(config.leftTitle)}</h1>
        <p>${esc(config.description)}</p>
        <div class="hero-meta-row">
          <div class="time-pill">${miniIcon("clock")} ${esc(config.time || "21:00")}</div>
          <div class="date-pill">${miniIcon("calendar")} ${esc(config.date || "03 Jun 2026")}</div>
        </div>
      </div>

      <div class="hero-visual ${config.visualClass || ""}" data-mark="${esc(config.mark || "DA")}">
        <img src="${visualLogo}" alt="${esc(config.visualAlt || config.rightTitle)}">
      </div>

    </section>
  `;
}

function miniIcon(type) {
  if (type === "clock") return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v4l3 3"/><path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/></svg>';
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 7V3m8 4V3M5 11h14M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"/></svg>';
}

function gameRow(match) {
  const [competition, time, date, home, away, status, tag] = match;
  return `
    <div class="game-row">
      <div class="game-left">
        <div class="game-time"><strong>${time}</strong><span>${date}</span></div>
        <span class="live-badge">${status}</span>
        <span class="team">${teamLogo(home)}${esc(home)}</span>
      </div>
      <span class="vs-pill">VS</span>
      <div class="game-right">
        <span class="team">${teamLogo(away)}${esc(away)}</span>
        <span class="story-count">${esc(tag)}</span>
      </div>
    </div>
  `;
}

function matchListPanel(title = "Live Games", list = matches) {
  return `
    <!-- BEGIN: Live Games List -->
    <section class="match-section">
      <div class="match-tabs">
        <nav>
          <a class="active" href="#match-centre">${esc(title)}</a>
          <a href="#match-centre">Next Match</a>
          <a href="#match-centre">Finished</a>
          <a href="#match-centre">Schedule</a>
          <a href="#match-centre">Pinned <span style="color:#f84139">(1)</span></a>
        </nav>
        <a class="section-link" href="#match-centre">See All Live Games</a>
      </div>
      <div class="game-list">${list.map(gameRow).join("")}</div>
    </section>
    <!-- END: Live Games List -->
  `;
}

function rightMediaCard(mode = "media") {
  const isMedia = mode === "media";
  return `
    <div class="right-card">
      <div class="right-logo editorial-logo">
        <img src="public/logo/deeplyafrica-real.png" alt="DeeplyAfrica logo">
      </div>
      <div class="right-card-title">
        <span>${isMedia ? "Official file" : "Editorial desk"}</span>
        <h3>${isMedia ? "DeeplyAfrica Media Profile" : "African Football Desk"}</h3>
        <p>${isMedia ? "Representative, coverage scope, languages and contact channels for accreditation review." : "Daily coverage organized around competitions, match reports, talents and tactical notes."}</p>
      </div>
      <div class="option-group">
        <span class="option-label">${isMedia ? "Credibility checklist" : "Desk contents"}</span>
        <div class="info-line"><span>Representative</span><strong>Anas SENHAJI</strong></div>
        <div class="info-line"><span>Policy</span><strong>Published</strong></div>
        <div class="info-line"><span>Articles</span><strong>20 originals</strong></div>
        <div class="info-line"><span>Coverage</span><strong>CAF, FIFA, Botola</strong></div>
      </div>
      <div class="quick-actions">
        <a href="#official-media-profile">Media Profile</a>
        <a href="#editorial-policy">Editorial Policy</a>
        <a href="#media-kit">Media Kit</a>
      </div>
      <a class="primary-action" href="#official-media-profile" style="display:flex;align-items:center;justify-content:center;">Open Media File</a>
    </div>
  `;
}

function notificationsCard() {
  return `
    <div class="panel-card">
      <div class="panel-header">
        <h3>Editorial Desk Notes</h3>
        <a class="section-link" href="#news">Open Newsroom</a>
      </div>
      <div class="notice-list">
      ${notice("CAF", "Champions League desk keeps previews, reports and club files together.", "Desk")}
      ${notice("FIFA", "FIFA page separates senior, youth, women's, club, futsal and beach soccer coverage.", "Desk")}
      ${notice("Media", "Media profile lists representative, coverage scope, languages and contacts.", "File", true)}
      ${notice("Policy", "Editorial policy covers original reporting, attribution, corrections and media use.", "Policy")}
      </div>
    </div>
  `;
}

function notice(icon, text, time, red = false) {
  return `
    <div class="notice ${red ? "red" : ""}">
      <span class="notice-icon">${esc(icon)}</span>
      <p><strong>${esc(text.split(" ")[0])}</strong> ${esc(text.split(" ").slice(1).join(" "))}</p>
      <time>${time}</time>
    </div>
  `;
}

function storyCard(article) {
  const [title, category, author, role, readTime, summary] = article;
  const logo = competitionLogoByCategory(category);
  return `
    <article class="story-card">
      <div class="article-topline">
        <img src="${logo}" alt="${esc(category)} logo">
        <div>
          <div class="kicker">${esc(category)}</div>
          <p class="meta">${esc(author)} - ${esc(role)} - 03 Jun 2026 - ${esc(readTime)}</p>
        </div>
      </div>
      <h3>${esc(title)}</h3>
      <p>${esc(summary)}</p>
      <span class="insight-tag">Original DeeplyAfrica Insight</span>
    </article>
  `;
}

function panel(title, subtitle, body) {
  return `
    <section class="panel-card">
      <div class="panel-header">
        <div>
          <h2>${esc(title)}</h2>
          ${subtitle ? `<p>${esc(subtitle)}</p>` : ""}
        </div>
      </div>
      ${body}
    </section>
  `;
}

function selectedCompetition(route) {
  return competitions.find(item => item.slug === route);
}

function routeShell(leftContent, rightContent = rightMediaCard("media") + notificationsCard()) {
  return `
    <div class="left-column">${leftContent}</div>
    <aside class="right-column">${rightContent}</aside>
  `;
}

function renderHome() {
  const left = `
    ${heroCard({
      leftTitle: "African Football, Deeper Than the Score",
      rightTitle: "DeeplyAfrica",
      description: "Morocco-based digital sports media covering African football competitions, clubs, national teams, rising talents and FIFA tournaments involving African teams.",
      time: "Live Desk",
      date: "CAF / FIFA / Botola",
      shortDate: "Today",
      mark: "DA",
      logoB: "public/competitions/caf-champions-league-logo.png",
      logoC: "public/competitions/botola-pro-logo.png",
      visualLogo: "public/logo/deeplyafrica-real.png",
      visualAlt: "DeeplyAfrica logo",
      visualClass: "logo-hero"
    })}
    ${homeFocusStrip()}
    ${matchListPanel("Live Games", matches.slice(0, 5))}
    ${panel("Latest Stories", "Signed pieces from the DeeplyAfrica desk.", `<div class="story-grid">${articles.slice(0, 6).map(storyCard).join("")}</div>`)}
  `;
  return routeShell(left);
}

function homeFocusStrip() {
  const items = [
    ["CAF Champions League", "public/competitions/caf-champions-league-logo.png", "Previews, reports, club files"],
    ["CAF Confederation Cup", "public/competitions/caf-confederation-cup-logo.png", "North, West and Southern club stories"],
    ["Botola Pro Morocco", "public/competitions/botola-pro-logo.png", "Raja, Wydad, AS FAR, Berkane"],
    ["Morocco / FRMF", "public/competitions/frmf-logo.png", "National teams and Moroccan football"]
  ];
  return `
    <section class="focus-strip">
      ${items.map(([title, logo, text]) => `
        <a href="#${title.includes("Confederation") ? "caf-confederation-cup" : title.includes("Botola") ? "botola-pro-morocco" : title.includes("FRMF") ? "official-media-profile" : "caf-champions-league"}">
          <img src="${logo}" alt="${esc(title)} logo">
          <span><strong>${esc(title)}</strong><small>${esc(text)}</small></span>
        </a>
      `).join("")}
    </section>
  `;
}

function newsCategoryCards() {
  const items = [
    ["Latest", "The running desk for today's African football stories."],
    ["Match Reports", "Final whistle notes, key moments and what changed the match."],
    ["Match Previews", "Team news, form, tactical questions and players to watch."],
    ["Interviews", "Coaches, players, analysts and people inside the game."],
    ["Tactical Notes", "Shapes, pressing triggers, rest defense and set pieces."],
    ["African Clubs", "Club files from CAF competitions and domestic leagues."],
    ["National Teams", "Squads, qualifiers, AFCON cycles and FIFA windows."],
    ["Women's Football", "WAFCON, clubs, national teams and player profiles."],
    ["Youth Football", "U-17, U-20, U-23 and FIFA youth pathways."],
    ["Botola Pro", "Moroccan matchdays, club stories and talent watch."],
    ["FIFA Competitions", "African teams across FIFA tournaments in every category."]
  ];
  return items.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("");
}

function sectionCopy(section) {
  const copy = {
    "Latest Stories": "Newest articles from this desk.",
    "Match Previews": "Form, selection news and matchup questions.",
    "Match Reports": "Key moments, scoreline and post-match notes.",
    "Club Profiles": "Club identity, coach, squad and continental record.",
    "Tactical Analysis": "Shape, pressing, buildup and set-piece details.",
    "Moroccan Clubs in CAF CL": "Raja, Wydad, AS FAR and Berkane when they enter the frame.",
    "Players to Watch": "Profiles built around role, minutes and next step.",
    "Power Rankings": "Form table for teams and players after each round.",
    "Latest Updates": "Competition notes and matchday changes.",
    "Match Centre": "Fixtures, results and report links.",
    "Moroccan Clubs": "Moroccan clubs in continental context.",
    "North African Clubs": "Egypt, Morocco, Tunisia, Algeria and Libya focus.",
    "West African Clubs": "Stories from West African clubs in CAF football.",
    "Tactical Trends": "Patterns seen across recent rounds.",
    "Underrated Players": "Names to watch before they become obvious.",
    "Competition Stories": "Rivalries, travel, stadiums and turning points.",
    "Road to AFCON": "Qualifiers, dates and tournament buildup.",
    "Qualified Teams": "Team list with key facts and squad notes.",
    "Group Analysis": "Group balance, danger matches and likely scenarios.",
    "Nation Profiles": "Coach, squad core, style and recent form.",
    "Key Players": "The players who shape each national team.",
    "Tactical Identity": "How each team defends, builds and attacks.",
    "Fan Culture": "Supporters, stadium atmosphere and tournament identity.",
    "U-17 AFCON": "Early talent markers and federation pathways.",
    "U-20 AFCON": "Players closest to senior and club opportunities.",
    "U-23 AFCON": "Olympic route and senior-team candidates.",
    "FIFA U-17 World Cup": "African teams on the global youth stage.",
    "FIFA U-20 World Cup": "Squads, prospects and tournament reports.",
    "Olympic Football": "U-23 cycle and Olympic qualification path.",
    "Rising Stars": "Young players tracked by position and role.",
    "Youth Team Reports": "Team notes from youth tournaments.",
    "National Teams": "Squads, coaches and tournament windows.",
    "Morocco Women's Football": "Moroccan clubs and national team development.",
    "Player Profiles": "Role, strengths, club situation and next step.",
    "Road to FIFA Women's World Cup": "Qualification route and African contenders.",
    "Latest News": "Daily notes from the competition desk.",
    "Player Focus": "Individual profiles from the tournament.",
    "Women's Football Development": "Clubs, leagues and federation projects.",
    "Tactical Notes": "Specific moments and match plans.",
    "FIFA World Cup": "African national teams on the senior stage.",
    "FIFA Women's World Cup": "African women's national teams at FIFA level.",
    "FIFA Club World Cup": "African clubs in the global club event.",
    "Futsal World Cup": "African futsal teams and qualifiers.",
    "Beach Soccer World Cup": "African beach soccer teams and tournament notes.",
    "African Qualified Teams": "Qualified teams, dates and group details.",
    "Matchday Preview": "Botola fixtures, form and selection notes.",
    "Weekly Report": "Round summary from Morocco's top division.",
    "Moroccan Clubs in Africa": "Botola clubs in CAF competitions.",
    "Raja Casablanca": "Raja news, matchdays and continental file.",
    "Wydad AC": "Wydad news, matchdays and continental file.",
    "AS FAR": "AS FAR news, matchdays and continental file.",
    "RS Berkane": "Berkane news, matchdays and continental file.",
    "Transfer Watch": "Moves, rumors and squad-building notes."
  };
  return copy[section] || "Desk notes, articles and match links.";
}

function talentStreamCards() {
  const items = [
    ["Rising Stars", "Young players gaining minutes in club or national-team football."],
    ["Moroccan Talents", "Botola and academy profiles with first-team potential."],
    ["Diaspora Watch", "Eligible players developing outside the continent."],
    ["Women's Talents", "Profiles from WAFCON, clubs and domestic pathways."],
    ["Local League Talents", "Players still close to the local matchday environment."],
    ["U-17 Watch", "Early markers: role, technique, maturity and minutes."],
    ["U-20 Watch", "Players near senior-team and transfer-window attention."],
    ["Scouting Notes", "Strengths, weak points, tactical role and next step."]
  ];
  return items.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("");
}

function moduleCopy(item) {
  const copy = {
    "Tactical Trends": "What teams repeat: shape, pressure, buildup and set pieces.",
    "Player Watch": "Shortlists by position, role, minutes and club situation.",
    "Club Operations": "Recruitment, squad depth, travel and continental planning.",
    "Competition Mapping": "Fixtures, routes, groups and key match windows.",
    "FIFA Pathways": "How African teams move from qualifiers to FIFA tournaments.",
    "Morocco Focus": "Botola, FRMF teams and Moroccan clubs in Africa."
  };
  return copy[item] || "Desk notes for editors and match analysts.";
}

function mediaKitCopy(item) {
  const copy = {
    "About DeeplyAfrica": "Morocco-based digital sports media focused on African football.",
    "Mission": "Report African football with match context, names, dates and clear attribution.",
    "Editorial Focus": "CAF, AFCON, WAFCON, Botola Pro, FIFA competitions and talent watch.",
    "Competitions Covered": "Club, national-team, youth, women's and FIFA tournament desks.",
    "Audience": "African football fans, clubs, federations, media partners and brands.",
    "Content Formats": "Articles, reports, previews, interviews, profiles, visuals and social posts.",
    "Editorial Team": "Founder, editorial desk and contributors network.",
    "Past Coverage / Accreditations": "A place to list approved events, coverage history and credentials.",
    "Partnership Opportunities": "Campaigns, event coverage, newsletters and intelligence reports.",
    "Contact": "media@deeplyafrica.com and partnerships@deeplyafrica.com.",
    "Download PDF": "One file for sharing the official media profile."
  };
  return copy[item] || "Media kit section.";
}

function partnershipCopy(item) {
  const copy = {
    "Sponsored Content": "Clearly marked brand-backed editorial formats.",
    "Event Coverage": "On-site or remote matchday coverage packages.",
    "Tournament Visibility": "Content plans around groups, fixtures and knockout rounds.",
    "Club Storytelling": "Club identity, history, supporters and season narratives.",
    "Player Branding": "Profile pieces, visuals and social-first player stories.",
    "Social Media Campaigns": "Short-form posts built around fixtures and football moments.",
    "Visual Design": "Match cards, player cards, quote cards and tournament graphics.",
    "Football Intelligence Reports": "Concise reports on teams, players, trends and competitions.",
    "Newsletter Sponsorship": "Placement inside the DeeplyAfrica football briefing."
  };
  return copy[item] || "Partnership format.";
}

function renderNews() {
  const left = `
    ${heroCard({
      leftTitle: "News",
      rightTitle: "DeeplyAfrica Newsroom",
      description: "Match reports, previews, interviews and tactical notes from African competitions, clubs, national teams and players.",
      time: "Latest",
      date: "Editorial Desk",
      shortDate: "Newsroom",
      mark: "NW"
    })}
    ${panel("News Categories", "Clear desks for daily publishing.", `<div class="section-list">${newsCategoryCards()}</div>`)}
    ${panel("Signed Articles", "Byline, role, date, read time and category stay visible.", `<div class="story-grid">${articles.map(storyCard).join("")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("media") + editorialRulesCard());
}

function editorialRulesCard() {
  return panel("Editorial Rules", "", `
    <div class="notice-list">
      ${notice("1", "Original reporting is required for every DeeplyAfrica story.", "Policy")}
      ${notice("2", "Official source information must be clearly attributed.", "Policy")}
      ${notice("3", "Final verification remains under the editorial desk.", "Policy", true)}
    </div>
  `);
}

function renderMatchCentre() {
  const left = `
    ${heroCard({
      leftTitle: "Match Centre",
      rightTitle: "African Fixtures",
      description: "Today's matches, upcoming fixtures, latest results, CAF competitions, Botola Pro, WAFCON and African teams in FIFA competitions.",
      time: "21:00",
      date: "03 Jun 2026",
      shortDate: "Today",
      mark: "MC"
    })}
    ${matchListPanel("Today's Matches", matches)}
    ${panel("Match Reports", "Each fixture links to a preview or report module.", `<div class="story-grid">${articles.slice(0, 3).map(storyCard).join("")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("hub") + notificationsCard());
}

function renderCompetitions() {
  const left = `
    ${heroCard({
      leftTitle: "Competitions",
      rightTitle: "Competition Hubs",
      description: "Competition hubs for CAF, AFCON, youth football, women's football, FIFA pathways and Botola Pro Morocco.",
      time: "8 hubs",
      date: "Competition Desk",
      shortDate: "Hubs",
      mark: "CAF"
    })}
    ${panel("Competition Hubs", "Each hub has a clear editorial function.", `<div class="section-list">${competitions.map(item => `<article><h3><a href="#${item.slug}">${esc(item.name)}</a></h3><p>${esc(item.description)}</p></article>`).join("")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("hub") + notificationsCard());
}

function renderCompetitionPage(route) {
  const comp = selectedCompetition(route);
  const related = articles.filter(item => item[1] === comp.name || item[1].includes(comp.name.split(" ")[0]) || comp.name.includes(item[1]));
  const left = `
    ${heroCard({
      route,
      leftTitle: comp.name,
      rightTitle: "Intelligence Hub",
      description: comp.description,
      time: comp.region,
      date: comp.type,
      shortDate: comp.region,
      mark: comp.name.split(" ").slice(0, 2).map(word => word[0]).join(""),
      logoB: comp.logo,
      visualLogo: comp.logo,
      visualAlt: `${comp.name} logo`,
      visualClass: "logo-hero"
    })}
    ${panel("Desk Sections", "What this hub actually follows.", `<div class="section-list">${comp.sections.map(section => `<article><h3>${esc(section)}</h3><p>${esc(sectionCopy(section))}</p></article>`).join("")}</div>`)}
    ${panel("Latest Stories", "Recent pieces from this desk.", `<div class="story-grid">${(related.length ? related : articles.slice(0, 3)).map(storyCard).join("")}</div>`)}
  `;
  const right = competitionProfileCard(comp) + notificationsCard();
  return routeShell(left, right);
}

function competitionProfileCard(comp) {
  return `
    <div class="right-card">
      <div class="right-logo">
        <img src="${esc(comp.logo)}" alt="${esc(comp.name)} logo">
      </div>
      <div class="right-card-title">
        <span>${esc(comp.region)} desk</span>
        <h3>${esc(comp.name)}</h3>
        <p>${esc(comp.description)}</p>
      </div>
      <div class="option-group">
        <span class="option-label">Hub contents</span>
        <div class="info-line"><span>Type</span><strong>${esc(comp.type)}</strong></div>
        <div class="info-line"><span>Stories</span><strong>Latest</strong></div>
        <div class="info-line"><span>Analysis</span><strong>Match desk</strong></div>
        <div class="info-line"><span>Focus</span><strong>Players & clubs</strong></div>
      </div>
      <a class="primary-action" href="#news" style="display:flex;align-items:center;justify-content:center;">Open Related News</a>
    </div>
  `;
}

function renderAfricanTalents() {
  const left = `
    ${heroCard({
      leftTitle: "African Talents",
      rightTitle: "Player Watch",
      description: "Rising African footballers, Moroccan talents, diaspora players, women's football talents and local league prospects.",
      time: "Scouting",
      date: "Talent Desk",
      shortDate: "Player Watch",
      mark: "AT"
    })}
    ${panel("Player Cards", "Name, age, nationality, club, position, strengths, tactical role and potential.", `<div class="player-grid">${players.map(playerCard).join("")}</div>`)}
    ${panel("Talent Streams", "", `<div class="section-list">${talentStreamCards()}</div>`)}
  `;
  return routeShell(left, rightMediaCard("hub") + notificationsCard());
}

function playerCard(player) {
  const [name, age, nationality, club, position, strengths, role, potential] = player;
  return `
    <article class="player-card">
      <div class="kicker">${esc(nationality)} - ${esc(club)}</div>
      <h3>${esc(name)}</h3>
      <p>${esc(age)} years old - ${esc(position)}</p>
      <p><strong>Strengths:</strong> ${esc(strengths)}</p>
      <p><strong>Tactical Role:</strong> ${esc(role)}</p>
      <p class="meta">Potential: ${esc(potential)} - DeeplyAfrica note included</p>
    </article>
  `;
}

function renderFootballIntelligence() {
  const modules = ["Tactical Trends", "Player Watch", "Club Operations", "Competition Mapping", "FIFA Pathways", "Morocco Focus"];
  const left = `
    ${heroCard({
      leftTitle: "Football Intelligence",
      rightTitle: "Analysis Desk",
      description: "Tactics, player tracking, competition trends, club operations and African teams in FIFA cycles.",
      time: "Analysis",
      date: "Intelligence Desk",
      shortDate: "Forecasts",
      mark: "FI"
    })}
    ${panel("Intelligence Modules", "Tools for the editorial desk.", `<div class="stat-grid">${modules.map(item => `<article class="stat-card"><div class="kicker">Module</div><h3>${item}</h3><p>${esc(moduleCopy(item))}</p></article>`).join("")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("hub") + notificationsCard());
}

function renderEditorialTeam() {
  const left = `
    ${heroCard({
      leftTitle: "Editorial Team",
      rightTitle: "DeeplyAfrica Newsroom",
      description: "The people and roles behind DeeplyAfrica's African football desk.",
      time: "Team",
      date: "Media Desk",
      shortDate: "Editorial",
      mark: "ET"
    })}
    ${panel("Team Structure", "Named lead, editorial desk and contributor network.", `<div class="profile-grid">${profileCard("Anas SENHAJI", "Founder & Sport Media Manager", "Leads the platform, media operations and African football editorial direction from Morocco.")}${profileCard("DeeplyAfrica Editorial Desk", "Football Editor / Content Producer", "Handles match previews, reports, tactical notes and player profiles.")}${profileCard("Contributors Network", "Football Contributors and Match Analysts", "Writers, producers and analysts supporting Morocco and Africa coverage.")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("media") + editorialRulesCard());
}

function profileCard(name, role, text) {
  return `<article class="profile-card"><div class="kicker">${esc(role)}</div><h3>${esc(name)}</h3><p>${esc(text)}</p></article>`;
}

function renderEditorialPolicy() {
  const items = [
    ["Original Reporting", "Match previews, reports, interviews, player profiles and tactical notes are produced for DeeplyAfrica."],
    ["Source Attribution", "Official information from CAF, FIFA, federations or clubs is credited in the article."],
    ["Corrections Policy", "Corrections are reviewed by the editorial desk and updated clearly."],
    ["Image and Media Policy", "Images must be original, licensed, credited or approved for use."],
    ["Editorial Independence", "Commercial work does not decide editorial conclusions."]
  ];
  const left = `
    ${heroCard({
      leftTitle: "Editorial Policy",
      rightTitle: "Publishing Standards",
      description: "How DeeplyAfrica handles sourcing, corrections, images and editorial responsibility.",
      time: "Policy",
      date: "Human Responsibility",
      shortDate: "Standards",
      mark: "EP"
    })}
    ${panel("Policy Sections", "", `<div class="section-list">${items.map(([title, text]) => `<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join("")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("media") + notificationsCard());
}

function renderOfficialMediaProfile() {
  const rows = [
    ["Media outlet", "DeeplyAfrica"],
    ["Type", "Digital Sports Media Platform"],
    ["Country", "Morocco"],
    ["Main focus", "African Football"],
    ["Representative", "Anas SENHAJI"],
    ["Role", "Founder & Sport Media Manager"],
    ["Languages", "English, French, Arabic"],
    ["Coverage", "CAF competitions, AFCON, WAFCON, CAF Women's Champions League, Botola Pro Morocco, African teams in FIFA competitions"],
    ["Content formats", "Articles, interviews, match reports, tactical analysis, player profiles, visual storytelling, social media coverage"],
    ["Website", "deeplyafrica.com"],
    ["Email", "media@deeplyafrica.com"]
  ];
  const left = `
    ${heroCard({
      leftTitle: "Official Media Profile",
      rightTitle: "Accreditation File",
      description: "The practical file for verification, accreditation and media contacts.",
      time: "Official",
      date: "Media Profile",
      shortDate: "FIFA File",
      mark: "MP"
    })}
    ${panel("Profile Data", "", `<div class="section-list">${rows.map(([label, value]) => `<article><h3>${esc(label)}</h3><p>${esc(value)}</p></article>`).join("")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("media") + notificationsCard());
}

function renderMediaKit() {
  const sections = ["About DeeplyAfrica", "Mission", "Editorial Focus", "Competitions Covered", "Audience", "Content Formats", "Editorial Team", "Past Coverage / Accreditations", "Partnership Opportunities", "Contact", "Download PDF"];
  const left = `
    ${heroCard({
      leftTitle: "DeeplyAfrica Media Kit",
      rightTitle: "Media & Partnerships",
      description: "A compact file for federations, clubs, agencies and brand partners.",
      time: "PDF",
      date: "Media Kit",
      shortDate: "Kit",
      mark: "MK"
    })}
    ${panel("Media Kit Sections", "", `<div class="section-list">${sections.map(item => `<article><h3>${esc(item)}</h3><p>${esc(mediaKitCopy(item))}</p></article>`).join("")}</div><a class="primary-action" href="public/media-kit/deeplyafrica-media-kit.pdf" style="display:flex;align-items:center;justify-content:center;margin-top:14px;">Download PDF</a>`)}
  `;
  return routeShell(left, rightMediaCard("media") + notificationsCard());
}

function renderPartnerships() {
  const offers = ["Sponsored Content", "Event Coverage", "Tournament Visibility", "Club Storytelling", "Player Branding", "Social Media Campaigns", "Visual Design", "Football Intelligence Reports", "Newsletter Sponsorship"];
  const left = `
    ${heroCard({
      leftTitle: "Partner with DeeplyAfrica",
      rightTitle: "Commercial Desk",
      description: "Commercial formats for clubs, federations, brands, agencies and football events.",
      time: "Partner",
      date: "Commercial Desk",
      shortDate: "Offers",
      mark: "PT"
    })}
    ${panel("Partnership Offers", "", `<div class="section-list">${offers.map(item => `<article><h3>${esc(item)}</h3><p>${esc(partnershipCopy(item))}</p></article>`).join("")}</div>`)}
  `;
  return routeShell(left, rightMediaCard("media") + notificationsCard());
}

function renderContact() {
  const left = `
    ${heroCard({
      leftTitle: "Contact",
      rightTitle: "DeeplyAfrica Inbox",
      description: "Editorial inquiries, partnership requests, media accreditation checks and general contact.",
      time: "Contact",
      date: "Requests",
      shortDate: "Inbox",
      mark: "CT"
    })}
    ${panel("Send a Request", "", `<form class="contact-form"><input placeholder="Full Name"><input placeholder="Organization"><input placeholder="Email"><select><option>Editorial Inquiry</option><option>Partnership Request</option><option>Media Accreditation / Verification</option><option>General Contact</option></select><input placeholder="Subject"><textarea placeholder="Message"></textarea><button class="primary-action" type="button">Send request</button></form>`)}
  `;
  const right = panel("Emails", "", `<div class="notice-list">${notice("ED", "Editorial editorial@deeplyafrica.com", "Email")}${notice("ME", "Media media@deeplyafrica.com", "Email")}${notice("PA", "Partnerships partnerships@deeplyafrica.com", "Email", true)}${notice("GE", "General contact@deeplyafrica.com", "Email")}</div>`) + notificationsCard();
  return routeShell(left, right);
}

function renderRoute() {
  const route = (location.hash || "#home").replace("#", "");
  setActive(route);
  const content = document.getElementById("contentBody");

  if (route === "home") content.innerHTML = renderHome();
  else if (route === "news") content.innerHTML = renderNews();
  else if (route === "match-centre") content.innerHTML = renderMatchCentre();
  else if (route === "competitions") content.innerHTML = renderCompetitions();
  else if (selectedCompetition(route)) content.innerHTML = renderCompetitionPage(route);
  else if (route === "african-talents") content.innerHTML = renderAfricanTalents();
  else if (route === "football-intelligence") content.innerHTML = renderFootballIntelligence();
  else if (route === "editorial-team") content.innerHTML = renderEditorialTeam();
  else if (route === "editorial-policy") content.innerHTML = renderEditorialPolicy();
  else if (route === "official-media-profile") content.innerHTML = renderOfficialMediaProfile();
  else if (route === "media-kit") content.innerHTML = renderMediaKit();
  else if (route === "partnerships") content.innerHTML = renderPartnerships();
  else if (route === "contact") content.innerHTML = renderContact();
  else content.innerHTML = renderHome();
}

renderNav();
renderRoute();
window.addEventListener("hashchange", renderRoute);
