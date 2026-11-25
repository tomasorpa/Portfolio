import React from 'react';
import { Button, Tag } from './ds.jsx';

const RESOURCES = {
  "img_portal_png": "/assets/portal.png",
  "img_motus_2_png": "/assets/motus_2.png",
  "dv_react": "/assets/icons/react.svg",
  "dv_tailwindcss": "/assets/icons/tailwindcss.svg",
  "dv_materialui": "/assets/icons/materialui.svg",
  "dv_html5": "/assets/icons/html5.svg",
  "dv_vitejs": "/assets/icons/vitejs.svg",
  "dv_typescript": "/assets/icons/typescript.svg",
  "dv_javascript": "/assets/icons/javascript.svg",
  "dv_css3": "/assets/icons/css3.svg",
  "dv_figma": "/assets/icons/figma.svg",
  "dv_nodejs": "/assets/icons/nodejs.svg",
  "dv_firebase": "/assets/icons/firebase.svg",
  "dv_mongodb": "/assets/icons/mongodb.svg",
  "dv_git": "/assets/icons/git.svg",
  "dv_slack": "/assets/icons/slack.svg",
  "dv_jira": "/assets/icons/jira.svg",
  "dv_confluence": "/assets/icons/confluence.svg",
  "si_claude_D97757": "/assets/icons/claude.svg",
  "si_mediapipe_0097A7": "/assets/icons/mediapipe.svg",
  "si_reactquery_FF4154": "/assets/icons/reactquery.svg",
  "si_express_ffffff": "/assets/icons/express.svg",
  "si_github_ffffff": "/assets/icons/github.svg",
  "si_airtable_18BFFF": "/assets/icons/airtable.svg",
  "img_klimate_png": "/assets/klimate.png",
  "cvPdf": "/assets/Tomas_Ortega_Palencia_CV.pdf",
  "transcriptPdf": "/assets/Georgian_Transcript.pdf",
  "img_expensetracker_png": "/assets/expensetracker.png",
  "img_calendarmock_png": "/assets/calendarmock.png",
  "img_petwebsitemock_png": "/assets/petwebsitemock.png",
  "img_translatormock_png": "/assets/translatormock.png",
  "img_quickblogmock_png": "/assets/quickblogmock.png",
  "img_journalmock_png": "/assets/journalmock.png"
};

const RES = (id, url) => RESOURCES[id] || url;
const DV = n => RES('dv_' + n, `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${n}/${n}-original.svg`);
const SI = (n, c) => RES('si_' + n + '_' + c, `https://cdn.simpleicons.org/${n}/${c}`);
const SKILLS = [
  ['AI & automation', [['Claude Code', SI('claude','D97757')], ['Claude Design', SI('claude','D97757')], ['MediaPipe', SI('mediapipe','0097A7')], ['AI APIs', '']]],
  ['Frontend & mobile', [['React', DV('react')], ['React Native CLI', DV('react')], ['Tailwind CSS', DV('tailwindcss')], ['Material UI', DV('materialui')], ['Vite', DV('vitejs')], ['TanStack Query', SI('reactquery','FF4154')]]],
  ['Languages', [['TypeScript', DV('typescript')], ['JavaScript', DV('javascript')], ['HTML', DV('html5')], ['CSS', DV('css3')]]],
  ['Design', [['UI/UX', ''], ['Design systems', ''], ['Figma', DV('figma')]]],
  ['Backend & data', [['Node.js', DV('nodejs')], ['Express.js', SI('express','ffffff')], ['MongoDB', DV('mongodb')], ['Firebase', DV('firebase')], ['REST APIs', '']]],
  ['Tools', [['Git', DV('git')], ['GitHub', SI('github','ffffff')], ['Airtable', SI('airtable','18BFFF')], ['Slack', DV('slack')], ['Jira', DV('jira')], ['Confluence', DV('confluence')]]],
];
const PROJECTS = [
  { id: 'portal', title: 'DevAccelerator Client Portal', img: RES('img_portal_png', 'assets/portal.png'), pos: 'left top', date: 'May 2026 - Present', status: 'Featured', desc: 'AI career platform: CV customisation, LinkedIn optimisation, job tracking and programme progress in one place.', techs: ['React', 'TypeScript', 'Claude Code', 'Claude Design', 'Airtable', 'Slack', 'UI/UX', 'Design systems', 'Figma', 'Git', 'GitHub', 'AI APIs', 'Confluence', 'Jira', 'Tailwind CSS'], featured: true, live: 'https://web.devaccelerator.app/' },
  { id: 'motus', title: 'MOTUS: AI movement coach', img: RES('img_motus_2_png', 'assets/motus-2.png'), pos: 'center 30%', date: '2026', status: 'Featured', desc: 'Tracks body landmarks through the phone camera, computes joint angles in real time and coaches you live.', techs: ['React Native CLI', 'TypeScript', 'MediaPipe', 'AI APIs', 'UI/UX', 'Git', 'GitHub', 'Figma', 'Tailwind CSS'], featured: true },
  { id: 'klimate', title: 'Klimate: weather dashboard', img: RES('img_klimate_png', 'assets/klimate.png'), pos: 'left top', date: '', desc: 'Weather app with favourites, city search and hourly temperature charts, built to learn TanStack Query.', techs: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'Figma', 'REST APIs', 'Git', 'GitHub'], repo: 'https://github.com/tomasorpa/WeatherApp', live: 'https://klimate-beryl.vercel.app/' },
  { id: 'quick-blog', title: 'Quick Blog', img: RES('img_quickblogmock_png', 'public/images/quickblogmock.png'), date: 'Aug - Sep 2025', desc: 'Blogging platform where admins write, publish and generate posts with AI, behind role-based login.', techs: ['React', 'Node.js', 'Express.js', 'MongoDB', 'AI APIs', 'REST APIs', 'JavaScript', 'Git', 'GitHub', 'Tailwind CSS'], repo: 'https://github.com/tomasorpa/quick-blog' },
  { id: 'expense', title: 'Expense Tracker', img: RES('img_expensetracker_png', 'public/images/expensetracker.png'), date: 'Jul - Aug 2025', desc: 'MERN expense manager with secure auth, persistent sessions and filterable financial history.', techs: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript', 'Git', 'GitHub', 'Tailwind CSS'], repo: 'https://github.com/tomasorpa/expense-tracker-backend' },
  { id: 'pets', title: 'Pet Adoption Center', img: RES('img_petwebsitemock_png', 'public/images/petwebsitemock.png'), date: 'May - Jun 2025', desc: 'Framework-free adoption site: dynamic listings, search and filters, and an inquiry flow in vanilla JavaScript.', techs: ['JavaScript', 'HTML', 'CSS', 'Node.js', 'MongoDB', 'Git', 'GitHub', 'Figma'], repo: 'https://github.com/tomasorpa/pet-adoption' },
  { id: 'translator', title: 'Google Translator Clone', img: RES('img_translatormock_png', 'public/images/translatormock.png'), date: 'Dec 2024 - Jan 2025', desc: 'Detects any input language and translates to English, Spanish or French through an AI translation API.', techs: ['React', 'TypeScript', 'Node.js', 'Express.js', 'AI APIs', 'REST APIs', 'Git', 'GitHub'], repo: 'https://github.com/tomasorpa/Translator-clone' },
  { id: 'calendar', title: 'Calendar App', img: RES('img_calendarmock_png', 'public/images/calendarmock.png'), date: 'Nov - Dec 2024', desc: 'Team calendar on the MERN stack with multi-user auth and real-time event create, edit and delete.', techs: ['React', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JavaScript', 'Git', 'GitHub'], repo: 'https://github.com/tomasorpa/calendar-app-backend' },
  { id: 'journal', title: 'Journal App', img: RES('img_journalmock_png', 'public/images/journalmock.png'), date: 'Sep - Oct 2024', desc: 'Personal journal with full CRUD, real-time Firebase sync and media uploads via Cloudinary.', techs: ['React', 'Material UI', 'Firebase', 'JavaScript', 'Git', 'GitHub'], repo: 'https://github.com/tomasorpa/JournalApp', live: 'https://journalapp-tomasorpa.vercel.app/' },
];
export default class Portfolio extends React.Component {
  static defaultProps = { accent: "claude-orange", heroLayout: "profile-card", timelineStyle: "line", expandFirstCase: false, animations: true, bookingUrl: "" };
  state = { open: null, sel: [], q: '', qFocus: false, qIdx: 0, gpaTip: false, vw: typeof window !== 'undefined' ? window.innerWidth : 1200, menu: false };
  toggleSkill(n) { this.setState(s => ({ sel: s.sel.includes(n) ? s.sel.filter(x => x !== n) : [...s.sel, n] })); }
  skillVals() {
    const sel = this.state.sel;
    const match = list => PROJECTS.filter(p => list.every(t => p.techs.includes(t)));
    const count = n => match(sel.includes(n) ? sel : [...sel, n]).length;
    const chipBase = { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '7px 12px 7px 10px', borderRadius: 20, fontFamily: 'inherit', fontSize: 14.5, whiteSpace: 'nowrap', transition: 'background .15s ease, border-color .15s ease, color .15s ease' };
    const skillGroups = SKILLS.map(([title, items]) => ({ title, items: items.map(([name, icon]) => {
      const c = count(name), on = sel.includes(name);
      return { name, icon, iconStyle: { width: 18, height: 18, flex: 'none', display: 'block', background: `url("${icon}") center / contain no-repeat` }, on, disabled: !c, count: c || '', title: c ? `${c} project${c > 1 ? 's' : ''} built with ${[...sel.filter(x => x !== name), name].join(' + ')}` : (sel.length ? 'No project combines this with your selection' : 'Used at work, no public project yet'),
        onClick: () => c && this.toggleSkill(name),
        style: { ...chipBase, cursor: c ? 'pointer' : 'default', border: '1px solid ' + (on ? 'var(--primary)' : 'var(--border)'), background: on ? 'rgba(var(--acc-rgb), 0.16)' : 'rgba(255,255,255,0.03)', color: on ? 'var(--text-strong)' : (c ? 'var(--label)' : 'var(--text-dim)') },
        countStyle: { minWidth: 18, height: 18, padding: '0 5px', boxSizing: 'border-box', borderRadius: 9, fontSize: 11, fontWeight: 600, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontVariantNumeric: 'tabular-nums', background: on ? 'var(--primary)' : 'rgba(255,255,255,0.08)', color: on ? '#fff' : 'var(--text-muted)' } };
    }) }));
    const list = sel.length ? match(sel) : [];
    const iconOf = n => { for (const [, items] of SKILLS) for (const [nm, ic] of items) if (nm === n) return ic; return ''; };
    const shownProjects = list.map(p => ({ ...p,
      status: p.featured ? 'Featured' : (p.live ? 'Live' : 'Archived'), tagVariant: p.featured || p.live ? 'accent' : 'quiet',
      imgStyle: { width: '100%', height: '100%', backgroundImage: `url("${p.img}")`, backgroundSize: 'cover', backgroundPosition: p.pos || 'center top' },
      techs: [...p.techs.filter(t => sel.includes(t)), ...p.techs.filter(t => !sel.includes(t) && !['Git', 'GitHub'].includes(t))].slice(0, 6).map(t => ({ name: t, style: { fontSize: 12, padding: '3px 9px', borderRadius: 20, whiteSpace: 'nowrap', border: '1px solid ' + (sel.includes(t) ? 'rgba(var(--acc-rgb), 0.5)' : 'var(--border)'), color: sel.includes(t) ? 'var(--primary-light)' : 'var(--text-dim)' } })),
      isCase: p.id === 'motus', liveHref: p.live || '', repoHref: p.repo || '', hasLive: !!p.live, hasRepo: !!p.repo,
      external: !p.featured, cta: p.featured ? 'Read case study' : 'View code on GitHub',
      onOpen: () => { if (p.featured) { this.setState({ open: p.id }); const el = document.getElementById('projects'); el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' }); } else window.open(p.repo, '_blank'); } }));
    const n = list.length;
    const q = this.state.q.trim().toLowerCase();
    const all = []; SKILLS.forEach(([, items]) => items.forEach(([nm, ic]) => { if (!all.find(x => x[0] === nm)) all.push([nm, ic]); }));
    const opts = all.filter(([nm]) => !sel.includes(nm) && count(nm) > 0 && (!q || nm.toLowerCase().includes(q)))
      .sort((a, b) => (q ? (a[0].toLowerCase().startsWith(q) ? 0 : 1) - (b[0].toLowerCase().startsWith(q) ? 0 : 1) : 0) || count(b[0]) - count(a[0])).slice(0, 6);
    const idx = Math.min(this.state.qIdx, Math.max(opts.length - 1, 0));
    const pick = nm => { this.toggleSkill(nm); this.setState({ q: '', qIdx: 0 }); };
    const suggestions = opts.map(([nm, ic], i) => ({ name: nm, icon: ic, count: count(nm), active: i === idx,
      iconStyle: { width: 16, height: 16, flex: 'none', display: 'block', background: `url("${ic}") center / contain no-repeat` },
      onPick: ev => { ev.preventDefault(); pick(nm); },
      style: { display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', borderRadius: 8, border: 0, cursor: 'pointer', fontFamily: 'inherit', fontSize: 14, whiteSpace: 'nowrap', color: 'var(--label)', background: i === idx ? 'var(--surface-hover)' : 'transparent' } }));
    const show = this.state.qFocus && (q.length > 0 || true);
    const techVals = {
      techQuery: this.state.q, suggestions, showSuggest: show && (opts.length > 0 || q.length > 0), noSuggest: show && q.length > 0 && !opts.length,
      techPlaceholder: sel.length ? 'Add technology…' : 'Type a technology…',
      onTechInput: ev => this.setState({ q: ev.target.value, qIdx: 0 }),
      onTechFocus: () => this.setState({ qFocus: true }),
      onTechBlur: () => this.setState({ qFocus: false }),
      onTechKey: ev => {
        if (ev.key === 'ArrowDown') { ev.preventDefault(); this.setState({ qIdx: Math.min(idx + 1, opts.length - 1) }); }
        else if (ev.key === 'ArrowUp') { ev.preventDefault(); this.setState({ qIdx: Math.max(idx - 1, 0) }); }
        else if (ev.key === 'Enter' && opts[idx]) { ev.preventDefault(); pick(opts[idx][0]); }
        else if (ev.key === 'Backspace' && !this.state.q && sel.length) this.toggleSkill(sel[sel.length - 1]);
        else if (ev.key === 'Escape') ev.target.blur();
      }
    };
    return { ...techVals, skillGroups, shownProjects, hasFilter: sel.length > 0, noFilter: sel.length === 0,
      filterSummary: sel.length ? `${n} project${n === 1 ? '' : 's'} using` : `${PROJECTS.length} projects behind this toolkit`,
      selChips: sel.map(name => { const icon = iconOf(name); return { name, icon, title: `Remove ${name}`, iconStyle: { width: 15, height: 15, flex: 'none', display: 'block', background: `url("${icon}") center / contain no-repeat` }, onRemove: () => this.toggleSkill(name) }; }),
      clearFilter: () => this.setState({ sel: [] }) };
  }
  toggle(k) { this.setState(s => ({ open: s.open === k ? null : k })); }
  serpRef = React.createRef();
  componentDidMount() { this.onResize = () => this.setState({ vw: window.innerWidth, menu: window.innerWidth < 760 ? this.state.menu : false }); window.addEventListener('resize', this.onResize); this.applyTheme(); this.themeT = setTimeout(() => this.applyTheme(), 50); this.anim = setTimeout(() => this.setupMotion(), 400); this.measureSerp(); this.ro = new ResizeObserver(() => this.measureSerp()); this.roT = setInterval(() => this.watchSerp(), 500); }
  componentDidUpdate() { this.watchSerp(); this.applyTheme(); }
  applyTheme() {
    const el = document.querySelector('.dos-shell'); if (!el) return;
    const red = (this.props.accent ?? 'claude-orange') === 'canada-red';
    const purple = (this.props.accent ?? 'claude-orange') === 'purple';
    const claude = (this.props.accent ?? 'claude-orange') === 'claude-orange';
    const v = claude
      ? { '--primary': '#c15f3c', '--primary-hover': '#a94f30', '--primary-light': '#d97757', '--acc-rgb': '217, 119, 87', '--acc-light-rgb': '217, 119, 87', '--input-focus-ring': '0 0 0 3px rgba(217, 119, 87, 0.28)' }
      : purple
      ? { '--primary': '#9333ea', '--primary-hover': '#7e22ce', '--primary-light': '#c084fc', '--acc-rgb': '168, 85, 247', '--acc-light-rgb': '192, 132, 252', '--input-focus-ring': '0 0 0 3px rgba(168, 85, 247, 0.25)' }
      : red
      ? { '--primary': '#ff0000', '--primary-hover': '#d90000', '--primary-light': '#ff5c5c', '--acc-rgb': '255, 0, 0', '--acc-light-rgb': '255, 92, 92', '--input-focus-ring': '0 0 0 3px rgba(255, 0, 0, 0.25)' }
      : { '--primary': '#1e73be', '--primary-hover': '#1a66ab', '--primary-light': '#6ec1e3', '--acc-rgb': '30, 115, 190', '--acc-light-rgb': '110, 193, 227', '--input-focus-ring': '0 0 0 3px rgba(30, 115, 190, 0.22)' };
    Object.entries(v).forEach(([k, val]) => el.style.setProperty(k, val));
  }
  watchSerp() { const el = this.serpRef.current; if (el && el !== this.roEl) { this.roEl && this.ro.unobserve(this.roEl); this.roEl = el; this.ro.observe(el); this.measureSerp(); } }
  measureSerp() {
    const box = this.serpRef.current; if (!box) return;
    const W = box.clientWidth, r = 22, L = 8, Rt = W - 8;
    const pts = [...box.querySelectorAll('[data-serp-item]')].map(it => ({ x: it.offsetLeft + it.offsetWidth / 2, y: it.offsetTop }));
    if (!pts.length) return;
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const a = pts[i], b = pts[i + 1], right = i % 2 === 0, ex = right ? Rt : L, s = right ? 1 : -1;
      d += ` H ${ex - s * r} Q ${ex} ${a.y} ${ex} ${a.y + r} V ${b.y - r} Q ${ex} ${b.y} ${ex - s * r} ${b.y} H ${b.x}`;
    }
    if (d !== this.state.serpD) this.setState({ serpD: d });
  }
  componentWillUnmount() { clearTimeout(this.anim); window.removeEventListener('resize', this.onResize); clearTimeout(this.fallback); clearInterval(this.roT); this.ro && this.ro.disconnect(); this.io && this.io.disconnect(); this.mo && this.mo.disconnect(); }
  setupMotion() {
    if (this.props.animations === false || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const main = document.querySelector('main#top'); if (!main) return;
    const ease = 'cubic-bezier(.2,.7,.2,1)';
    const prime = (el, delay, dist) => {
      if (el.__rv) return; el.__rv = 1;
      el.style.opacity = '0'; el.style.transform = `translateY(${dist}px)`;
      el.style.transition = `opacity .7s ${ease} ${delay}ms, transform .8s ${ease} ${delay}ms`;
      this.io.observe(el);
    };
    const primeLine = (el, delay) => {
      if (el.__rv) return; el.__rv = 1;
      el.style.transformOrigin = 'top'; el.style.transform = 'scaleY(0)';
      el.style.transition = `transform 1s ${ease} ${delay}ms`;
      this.io.observe(el);
    };
    this.io = new IntersectionObserver(es => es.forEach(e => {
      if (!e.isIntersecting) return;
      if (e.target.dataset.serpPath) { e.target.style.strokeDashoffset = '0'; this.io.unobserve(e.target); return; }
      e.target.style.opacity = ''; e.target.style.transform = e.target.dataset.line ? 'scaleY(1)' : 'none';
      this.io.unobserve(e.target);
    }), { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    const scan = () => {
      main.querySelectorAll('section[data-screen-label^="Hero"]').forEach(h => {
        const kids = h.querySelectorAll(':scope > *, :scope > div:first-child > *');
        [...kids].filter(k => !k.querySelector(':scope > h1') || k.tagName === 'H1').forEach((k, i) => prime(k, i * 90, 20));
      });
      main.querySelectorAll('section:not([data-screen-label^="Hero"]) > *, section:not([data-screen-label^="Hero"]) > div > *').forEach(el => {
        if (el.tagName === 'OL' || el.tagName === 'DL') return;
        const grid = el.parentElement && getComputedStyle(el.parentElement).display === 'grid';
        prime(el, grid ? [...el.parentElement.children].indexOf(el) * 110 : 0, 28);
      });
      main.querySelectorAll('ol > li').forEach(li => {
        prime(li, 0, 24);

      });
      main.querySelectorAll('ol > [data-line]').forEach(l => primeLine(l, 200));
      main.querySelectorAll('[data-serp-path]').forEach(p => { if (p.__rv) return; p.__rv = 1; p.style.strokeDasharray = '1'; p.style.strokeDashoffset = '1'; p.style.transition = 'stroke-dashoffset 2.2s cubic-bezier(.4,0,.2,1) 200ms'; this.io.observe(p); });
      main.querySelectorAll('[data-serp-item]').forEach(it => prime(it, 0, 24));
      main.querySelectorAll('[data-screen-label^="Case study"]').forEach(c => prime(c, 0, 16));
    };
    scan();
    this.mo = new MutationObserver(() => scan());
    this.mo.observe(main, { childList: true, subtree: true });
    this.fallback = setTimeout(() => main.querySelectorAll('*').forEach(el => { if (el.__rv && el.style.opacity === '0') { el.style.opacity = ''; el.style.transform = 'none'; } if (el.dataset && el.dataset.line) el.style.transform = 'scaleY(1)'; if (el.dataset && el.dataset.serpPath) el.style.strokeDashoffset = '0'; }), 6000);
  }
  renderVals() {
    const e = React.createElement;
    const pulseDot = e('span', { style: { position: 'relative', width: 12, height: 12, marginTop: 6, flex: 'none', zIndex: 1 } },
      e('span', { style: { position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--primary-light)', animation: 'beacon 1.8s cubic-bezier(.2,.6,.3,1) infinite' } }),
      e('span', { style: { position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--primary-light)', boxShadow: '0 0 0 4px rgba(217,119,87,0.18)', animation: 'beaconCore 1.8s ease-in-out infinite' } }));
    const layout = this.props.heroLayout ?? "profile-card";
    const open = this.state.open ?? (this.props.expandFirstCase ? "motus" : null);
    const tipOn = this.state.gpaTip;
    const gpaTip = e('span', { role: 'tooltip', style: { position: 'absolute', bottom: 'calc(100% + 8px)', right: 0, transform: `translateY(${tipOn ? 0 : 4}px) scale(${tipOn ? 1 : 0.96})`, opacity: tipOn ? 1 : 0, pointerEvents: 'none', transition: 'opacity .15s ease, transform .15s ease', background: 'var(--text-strong)', color: 'var(--page-bg)', fontSize: 12.5, fontWeight: 500, padding: '6px 10px', borderRadius: 6, whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(0,0,0,.35)', zIndex: 5 } },
      'View transcript',
      e('span', { style: { position: 'absolute', top: '100%', right: 18, width: 8, height: 8, background: 'var(--text-strong)', transform: 'translateY(-50%) rotate(45deg)', borderRadius: 1 } }));
    const narrow = this.state.vw < 760;
    return {
      gpaTip,
      isWide: !narrow, isNarrow: narrow,
      menuOpen: narrow && this.state.menu, menuClosed: !(narrow && this.state.menu),
      toggleMenu: () => this.setState(s => ({ menu: !s.menu })),
      closeMenu: () => this.setState({ menu: false }),
      gpaEnter: () => { clearTimeout(this.tipT); this.tipT = setTimeout(() => this.setState({ gpaTip: true }), 150); },
      gpaLeave: () => { clearTimeout(this.tipT); this.setState({ gpaTip: false }); },
      ...this.skillVals(),
      pulseDot,
      isRed: (this.props.accent ?? 'claude-orange') === 'canada-red',
      serpRef: this.serpRef,
      serpD: this.state.serpD || '',
      isSerpentine: (this.props.timelineStyle ?? 'line') === 'serpentine',
      isLineTimeline: (this.props.timelineStyle ?? 'line') !== 'serpentine',
      isStatement: layout === "statement",
      isCard: layout === "profile-card",
      motusOpen: open === "motus",
      portalOpen: open === "portal",
      motusLabel: open === "motus" ? "Close case study" : "Read case study",
      portalLabel: open === "portal" ? "Close case study" : "Read case study",
      motusIcon: open === "motus" ? "x" : "chevronDown",
      portalIcon: open === "portal" ? "x" : "chevronDown",
      toggleMotus: () => this.toggle("motus"),
      togglePortal: () => this.toggle("portal"),
      cvHref: RES('cvPdf', 'assets/Tomas_Ortega_Palencia_CV.pdf'),
      transcriptHref: RES('transcriptPdf', 'assets/Georgian_Transcript.pdf'),
      openCV: () => window.open("/assets/Tomas_Ortega_Palencia_CV.pdf", "_blank"),
      openTranscript: () => window.open("/assets/Georgian_Transcript.pdf", "_blank"),
      openRecs: () => window.open("https://www.linkedin.com/in/tomasortegap/details/recommendations/", "_blank"),
      openCerts: () => window.open("https://www.linkedin.com/in/tomasortegap/details/certifications/", "_blank"),
      openLinkedIn: () => window.open("https://www.linkedin.com/in/tomasortegap", "_blank"),
      bookCall: () => { window.location.href = this.props.bookingUrl || "mailto:tomasorpa@gmail.com?subject=Let%27s%20book%20a%20call"; }
    };
  }

  render() {
    const v = this.renderVals();
    return (
      <>
      <div className="dos-shell" style={{minHeight: "100vh", background: "radial-gradient(900px 600px at 85% -5%, rgba(var(--acc-rgb), 0.10), transparent 70%), radial-gradient(800px 600px at 0% 100%, rgba(var(--acc-rgb), 0.05), transparent 70%), var(--page-bg)", backgroundAttachment: "fixed", color: "var(--text)", fontFamily: "var(--font-body)"}}>
        <header style={{position: "sticky", top: "0", zIndex: "10", background: "#0a0c10", borderBottom: "1px solid var(--border)"}}>
          <nav style={{maxWidth: "1080px", margin: "0 auto", padding: "0 clamp(16px, 4vw, 24px)", minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px"}}>
            <a href="#top" aria-label="Tomas Ortega Palencia, back to top" style={{flex: "none", display: "flex", alignItems: "center"}}>
              <img src="/assets/TOP-icon-blanco.webp" alt="" width="40" height="40" style={{display: "block", width: "40px", height: "40px"}} />
            </a>
            <div style={{display: "flex", alignItems: "center", gap: "clamp(10px, 3vw, 28px)", justifyContent: "flex-end", minWidth: "0", flexShrink: "1"}}>
              {(v.isWide) ? (<>
                <div style={{display: "flex", gap: "24px", fontSize: "14.5px", whiteSpace: "nowrap", minWidth: "0"}}>
                  <a href="#experience" style={{color: "var(--text-muted)"}} className="h0">
                    {"Experience"}
                  </a>
                  <a href="#projects" style={{color: "var(--text-muted)"}} className="h1">
                    {"Projects"}
                  </a>
                  <a href="#skills" style={{color: "var(--text-muted)"}} className="h2">
                    {"Skills"}
                  </a>
                  <a href="#education" style={{color: "var(--text-muted)"}} className="h3">
                    {"Education"}
                  </a>
                  <a href="#contact" style={{color: "var(--text-muted)"}} className="h4">
                    {"Contact"}
                  </a>
                </div>
              </>) : null}
              <Button onClick={v.bookCall}>
                <span style={{whiteSpace: "nowrap"}}>
                  {"Book a call"}
                </span>
              </Button>
              {(v.isNarrow) ? (<>
                <button type="button" onClick={v.toggleMenu} aria-label="Menu" aria-expanded={v.menuOpen} style={{width: "40px", height: "40px", flex: "none", display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: "10px", border: "1px solid var(--border-strong)", background: "rgba(255,255,255,0.04)", color: "var(--text-strong)", cursor: "pointer"}}>
                  {(v.menuClosed) ? (<>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M4 7h16" />
                      <path d="M4 12h16" />
                      <path d="M4 17h16" />
                    </svg>
                  </>) : null}
                  {(v.menuOpen) ? (<>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </>) : null}
                </button>
              </>) : null}
            </div>
          </nav>
          {(v.menuOpen) ? (<>
            <div style={{borderTop: "1px solid var(--border)", padding: "8px 20px 16px", display: "flex", flexDirection: "column", background: "#0a0c10"}}>
              <a href="#experience" onClick={v.closeMenu} style={{padding: "14px 4px", fontSize: "16px", color: "var(--label)", borderBottom: "1px solid var(--border)"}} className="h5">
                {"Experience"}
              </a>
              <a href="#projects" onClick={v.closeMenu} style={{padding: "14px 4px", fontSize: "16px", color: "var(--label)", borderBottom: "1px solid var(--border)"}} className="h6">
                {"Projects"}
              </a>
              <a href="#skills" onClick={v.closeMenu} style={{padding: "14px 4px", fontSize: "16px", color: "var(--label)", borderBottom: "1px solid var(--border)"}} className="h7">
                {"Skills"}
              </a>
              <a href="#education" onClick={v.closeMenu} style={{padding: "14px 4px", fontSize: "16px", color: "var(--label)", borderBottom: "1px solid var(--border)"}} className="h8">
                {"Education"}
              </a>
              <a href="#contact" onClick={v.closeMenu} style={{padding: "14px 4px", fontSize: "16px", color: "var(--label)", borderBottom: "1px solid var(--border)"}} className="h9">
                {"Contact"}
              </a>
            </div>
          </>) : null}
        </header>
        <main id="top">
          {(v.isStatement) ? (<>
            <section data-screen-label="Hero: statement" style={{maxWidth: "1080px", margin: "0 auto", padding: "clamp(88px, 14vw, 160px) clamp(20px, 4vw, 24px) clamp(72px, 12vw, 140px)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
              <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "28px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px"}}>
                {(v.isRed) ? (<>
                  <span aria-label="Canada" style={{display: "inline-block", width: "16px", height: "16px", flex: "none", background: "var(--primary)", WebkitMask: "url(\"/assets/60faf1e7-c903-46be-ab83-7d5ef38cef4f.svg\") center / contain no-repeat", mask: "url(\"/assets/60faf1e7-c903-46be-ab83-7d5ef38cef4f.svg\") center / contain no-repeat"}} />
                </>) : null}
                <span>
                  {"AI Product Engineer · Toronto"}
                </span>
              </div>
              <h1 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(40px, 6vw, 72px)", lineHeight: "1.02", letterSpacing: "-0.035em", color: "var(--text-strong)", margin: "0", maxWidth: "900px", textWrap: "balance"}}>
                {"I design and ship AI products, end to end."}
              </h1>
              <p style={{fontSize: "clamp(18px, 1.8vw, 21.5px)", lineHeight: "1.6", color: "var(--text-muted)", maxWidth: "620px", margin: "32px 0 0", textWrap: "pretty"}}>
                {"From the first user flow to production React and TypeScript, with Claude Code and agentic workflows doing the heavy lifting in between."}
              </p>
              <div style={{display: "flex", gap: "12px", marginTop: "44px", flexWrap: "wrap", justifyContent: "center"}}>
                <Button onClick={v.bookCall}>
                  <span style={{whiteSpace: "nowrap"}}>
                    {"Book a call"}
                  </span>
                </Button>
                <Button variant="ghost" external={true} onClick={v.openLinkedIn}>
                  <span style={{whiteSpace: "nowrap"}}>
                    {"LinkedIn"}
                  </span>
                </Button>
                <a className="dos-btn dos-btn--ghost dos-btn--out" href={v.cvHref} target="_blank" rel="noopener" style={{whiteSpace: "nowrap", textDecoration: "none"}}>
                  {"View CV "}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17 17 7" />
                    <path d="M7 7h10v10" />
                  </svg>
                </a>
              </div>
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "0", width: "100%", maxWidth: "900px", marginTop: "clamp(56px, 10vw, 110px)", borderTop: "1px solid var(--border)"}}>
                <div style={{padding: "28px 20px 0", display: "flex", flexDirection: "column", gap: "6px"}}>
                  <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                    {"Currently"}
                  </div>
                  <div style={{fontSize: "15.5px", color: "var(--label)"}}>
                    {"Junior AI Product Engineer at DevAccelerator"}
                  </div>
                </div>
                <div style={{padding: "28px 20px 0", display: "flex", flexDirection: "column", gap: "6px"}}>
                  <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                    {"Shipped"}
                  </div>
                  <div style={{fontSize: "15.5px", color: "var(--label)"}}>
                    {"Client Portal · MOTUS"}
                  </div>
                </div>
                <div style={{padding: "28px 20px 0", display: "flex", flexDirection: "column", gap: "6px"}}>
                  <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                    {"Open to"}
                  </div>
                  <div style={{fontSize: "15.5px", color: "var(--label)"}}>
                    {"AI product & frontend roles · Remote"}
                  </div>
                </div>
              </div>
            </section>
          </>) : null}
          {(v.isCard) ? (<>
            <section data-screen-label="Hero: profile card" style={{maxWidth: "1080px", margin: "0 auto", padding: "clamp(72px, 12vw, 140px) clamp(20px, 4vw, 24px) clamp(72px, 11vw, 120px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(40px, 7vw, 72px)"}}>
              <div className="hero-intro" style={{flex: "1 1 440px", minWidth: "0"}}>
                <div className="hero-intro-eyebrow" style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "10px"}}>
                  {(v.isRed) ? (<>
                    <span aria-label="Canada" style={{display: "inline-block", width: "16px", height: "16px", flex: "none", background: "var(--primary)", WebkitMask: "url(\"/assets/60faf1e7-c903-46be-ab83-7d5ef38cef4f.svg\") center / contain no-repeat", mask: "url(\"/assets/60faf1e7-c903-46be-ab83-7d5ef38cef4f.svg\") center / contain no-repeat"}} />
                  </>) : null}
                  <span style={{color: "#d97757"}}>
                    {"AI Product Engineer · Toronto"}
                  </span>
                </div>
                <h1 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(36px, 4.8vw, 56px)", lineHeight: "1.04", letterSpacing: "-0.035em", color: "var(--text-strong)", margin: "0", textWrap: "balance"}}>
                  {"I design and ship AI products, end to end."}
                </h1>
                <p className="hero-intro-text" style={{fontSize: "19px", lineHeight: "1.65", color: "var(--text-muted)", maxWidth: "520px", margin: "28px 0 0", textWrap: "pretty"}}>
                  {"From the first user flow to production React and TypeScript, with Claude Code and agentic workflows doing the heavy lifting in between."}
                </p>
                <div className="hero-intro-actions" style={{display: "flex", gap: "12px", marginTop: "40px", flexWrap: "wrap"}}>
                  <Button onClick={v.bookCall}>
                    <span style={{whiteSpace: "nowrap"}}>
                      {"Book a call"}
                    </span>
                  </Button>
                  <Button variant="ghost" external={true} onClick={v.openLinkedIn}>
                    <span style={{whiteSpace: "nowrap"}}>
                      {"LinkedIn"}
                    </span>
                  </Button>
                </div>
              </div>
              <div className="hero-card" style={{flex: "0 1 380px", minWidth: "0", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "24px", boxShadow: "var(--shadow)", padding: "clamp(22px, 5vw, 32px)", display: "flex", flexDirection: "column", gap: "28px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
                  <img src="/assets/38769e49-aa34-4265-9765-1f5c727d3bd9.webp" alt="Tomas Ortega Palencia" style={{width: "96px", height: "96px", flex: "none", borderRadius: "50%", objectFit: "cover", objectPosition: "center 20%", background: "#f1f5f9", border: "1px solid var(--border-strong)", display: "block"}} />
                  <div style={{minWidth: "0"}}>
                    <div style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "21px", letterSpacing: "-0.02em", color: "var(--text-strong)"}}>
                      {"Tomas Ortega Palencia"}
                    </div>
                    <div style={{fontSize: "14.5px", color: "var(--text-muted)", marginTop: "4px"}}>
                      {"AI Product Engineer"}
                    </div>
                    <div style={{fontSize: "13.5px", color: "var(--text-dim)", marginTop: "2px"}}>
                      {"Toronto, ON · Remote-friendly"}
                    </div>
                  </div>
                </div>
                <div style={{display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)"}}>
                  <div style={{padding: "18px 8px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textAlign: "center", minWidth: "0"}}>
                    <div style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "27px", letterSpacing: "-0.02em", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums"}}>
                      {"2+"}
                    </div>
                    <div style={{fontSize: "12.5px", color: "var(--text-dim)", whiteSpace: "nowrap"}}>
                      {"Years shipping"}
                    </div>
                  </div>
                  <div style={{padding: "18px 8px", borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textAlign: "center", minWidth: "0"}}>
                    <div style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "27px", letterSpacing: "-0.02em", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums"}}>
                      {"4"}
                    </div>
                    <div style={{fontSize: "12.5px", color: "var(--text-dim)", whiteSpace: "nowrap"}}>
                      {"Roles"}
                    </div>
                  </div>
                  <div style={{padding: "18px 8px", borderLeft: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2px", textAlign: "center", minWidth: "0"}}>
                    <div style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "27px", letterSpacing: "-0.02em", color: "var(--text-strong)", fontVariantNumeric: "tabular-nums"}}>
                      {"+18"}
                    </div>
                    <div style={{fontSize: "12.5px", color: "var(--text-dim)", whiteSpace: "nowrap"}}>
                      {"Certifications"}
                    </div>
                  </div>
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "18px"}}>
                  <div style={{display: "flex", gap: "14px", alignItems: "center"}}>
                    <span style={{width: "34px", height: "34px", flex: "none", borderRadius: "9px", background: "rgba(var(--acc-rgb), 0.16)", color: "var(--primary-light)", display: "inline-flex", alignItems: "center", justifyContent: "center"}}>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                      </svg>
                    </span>
                    <div style={{minWidth: "0", display: "flex", flexDirection: "column", gap: "2px"}}>
                      <span style={{fontSize: "11.5px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                        {"Open to"}
                      </span>
                      <span style={{fontSize: "15px", color: "var(--label)"}}>
                        {"AI product & frontend roles · Remote "}
                      </span>
                    </div>
                  </div>
                </div>
                <a className="dos-btn dos-btn--block" href={v.cvHref} target="_blank" rel="noopener" style={{justifyContent: "center", textDecoration: "none", color: "#fff"}}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                    <path d="M10 9H8" />
                    <path d="M16 13H8" />
                    <path d="M16 17H8" />
                  </svg>
                  <span>
                    {"View CV"}
                  </span>
                </a>
              </div>
            </section>
          </>) : null}
          <section id="experience" data-screen-label="Experience" style={{maxWidth: "1080px", margin: "0 auto", padding: "clamp(72px, 11vw, 120px) clamp(20px, 4vw, 24px)", borderTop: "1px solid var(--border)"}}>
            <div style={{display: "flex", flexWrap: "wrap", gap: "48px 80px"}}>
              <div style={{flex: "0 1 260px"}}>
                <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "16px"}}>
                  {"Experience"}
                </div>
                <h2 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 38px)", lineHeight: "1.08", letterSpacing: "-0.03em", color: "var(--text-strong)", margin: "0"}}>
                  {"Where I've built."}
                </h2>
              </div>
              {(v.isLineTimeline) ? (<>
                <ol style={{flex: "1 1 480px", minWidth: "0", listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", position: "relative"}}>
                  <span data-line="1" style={{position: "absolute", left: "9px", top: "12px", bottom: "8px", width: "2px", borderRadius: "2px", background: "linear-gradient(to bottom, var(--primary-light), rgba(var(--acc-rgb), 0.55) 45%, rgba(var(--acc-rgb), 0))"}} />
                  <li style={{display: "grid", gridTemplateColumns: "20px minmax(0, 1fr)", gap: "24px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      {" "}
                      {v.pulseDot}
                      {" "}
                    </div>
                    <div style={{paddingBottom: "56px"}}>
                      <div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                        <span>
                          {"Sep 2026 - Present · Remote"}
                        </span>
                        <Tag variant="accent">
                          {"Promoted"}
                        </Tag>
                      </div>
                      <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                        {"Junior AI Product Engineer"}
                      </h3>
                      <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                        <img src="/assets/4cbcec18-1f1e-4437-b0ca-9346aca6e889.png" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block"}} />
                        <span>
                          {"DevAccelerator"}
                        </span>
                      </div>
                      <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                        <li>
                          {"Lead end-to-end product design and AI-assisted development, turning requirements into user flows, polished interfaces and production-ready components."}
                        </li>
                        <li>
                          {"Integrate AI across spec, design, build, review and testing with Claude Code and Claude Design."}
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{display: "grid", gridTemplateColumns: "20px minmax(0, 1fr)", gap: "24px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      <span style={{width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--primary)", background: "var(--page-bg)", marginTop: "6px", flex: "none", boxSizing: "border-box", position: "relative"}} />
                    </div>
                    <div style={{paddingBottom: "56px"}}>
                      <div style={{fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                        {"May 2026 - Sep 2026 · Remote"}
                      </div>
                      <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                        {"Junior AI Frontend Engineer"}
                      </h3>
                      <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                        <img src="/assets/4cbcec18-1f1e-4437-b0ca-9346aca6e889.png" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block"}} />
                        <span>
                          {"DevAccelerator"}
                        </span>
                      </div>
                      <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                        <li>
                          {"Built the Client Portal from an empty repo to production: dashboards, job tracker, implementation checklists, progress tracking and AI features."}
                        </li>
                        <li>
                          {"Owned 100% of the portal's UI/UX, validating every flow with teammates and the founder before implementation."}
                        </li>
                        <li>
                          {"Automated internal processes with n8n and Claude Code across Airtable, Slack and HubSpot; used Git worktrees for parallel agentic development."}
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{display: "grid", gridTemplateColumns: "20px minmax(0, 1fr)", gap: "24px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      <span style={{width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--primary)", background: "var(--page-bg)", marginTop: "6px", flex: "none", boxSizing: "border-box", position: "relative"}} />
                    </div>
                    <div style={{paddingBottom: "56px"}}>
                      <div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                        <span>
                          {"May 2025 - May 2026 · Toronto, ON"}
                        </span>
                        <Tag variant="quiet">
                          {"Internship"}
                        </Tag>
                      </div>
                      <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                        {"Frontend Developer"}
                      </h3>
                      <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                        <img src="/assets/a908f52e-c36a-4550-baba-b15e4e3a4912.jpg" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block", objectFit: "cover", background: "#fff"}} />
                        <span>
                          {"Tech Forge Canadian Consulting Inc."}
                        </span>
                      </div>
                      <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                        <li>
                          {"Developed responsive React interfaces and reusable components with Tailwind CSS and Material UI."}
                        </li>
                        <li>
                          {"Refactored legacy frontend code, cutting component size and complexity by up to 73%."}
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li style={{display: "grid", gridTemplateColumns: "20px minmax(0, 1fr)", gap: "24px"}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                      <span style={{width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--primary)", background: "var(--page-bg)", marginTop: "6px", flex: "none", boxSizing: "border-box", position: "relative"}} />
                    </div>
                    <div>
                      <div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                        <span>
                          {"Jan 2024 - Oct 2024 · Toronto, ON"}
                        </span>
                        <Tag variant="quiet">
                          {"Volunteer"}
                        </Tag>
                      </div>
                      <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                        {"Web Developer"}
                      </h3>
                      <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                        <img src="/assets/430a8d85-ffe1-43df-b051-f0884927a4ff.jpg" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block", objectFit: "cover", background: "#fff"}} />
                        <span>
                          {"Sai Dham Food Bank"}
                        </span>
                      </div>
                      <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "16px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                        <li>
                          {"Built and optimized responsive pages with React, JavaScript, CSS and WordPress to support the food bank's digital initiatives."}
                        </li>
                      </ul>
                    </div>
                  </li>
                </ol>
              </>) : null}
              {(v.isSerpentine) ? (<>
                <div ref={v.serpRef} style={{flex: "1 1 100%", minWidth: "0", position: "relative", padding: "0 28px"}}>
                  <svg width="100%" height="100%" style={{position: "absolute", inset: "0", overflow: "visible", pointerEvents: "none"}}>
                    <defs>
                      <lineargradient id="serpGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" style={{stopColor: "var(--primary-light)"}} />
                        <stop offset="0.5" style={{stopColor: "var(--primary)", stopOpacity: "0.6"}} />
                        <stop offset="1" style={{stopColor: "var(--primary)", stopOpacity: "0"}} />
                      </lineargradient>
                    </defs>
                    <path data-serp-path="1" d={v.serpD} pathLength="1" fill="none" stroke="url(#serpGrad)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <div style={{display: "flex", flexDirection: "column", gap: "36px"}}>
                    <div data-serp-item="1" style={{position: "relative", width: "calc(50% - 36px)", minWidth: "min(100%, 300px)", boxSizing: "border-box", paddingTop: "44px", marginLeft: "0"}}>
                      <div data-serp-dot="1" style={{position: "absolute", top: "0", left: "50%", width: "12px", height: "12px", margin: "-6px 0 0 -6px", display: "flex"}}>
                        {v.pulseDot}
                      </div>
                      <div style={{background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow)", padding: "24px 26px", transition: "transform .18s ease, border-color .18s ease"}} className="h10">
                        <div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                          <span>
                            {"Sep 2026 - Present · Remote"}
                          </span>
                          <Tag variant="accent">
                            {"Promoted"}
                          </Tag>
                        </div>
                        <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                          {"Junior AI Product Engineer"}
                        </h3>
                        <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                          <img src="/assets/4cbcec18-1f1e-4437-b0ca-9346aca6e889.png" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block"}} />
                          <span>
                            {"DevAccelerator"}
                          </span>
                        </div>
                        <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                          <li>
                            {"Lead end-to-end product design and AI-assisted development, turning requirements into user flows, polished interfaces and production-ready components."}
                          </li>
                          <li>
                            {"Integrate AI across spec, design, build, review and testing with Claude Code and Claude Design."}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div data-serp-item="1" style={{position: "relative", width: "calc(50% - 36px)", minWidth: "min(100%, 300px)", boxSizing: "border-box", paddingTop: "44px", marginLeft: "auto"}}>
                      <div data-serp-dot="1" style={{position: "absolute", top: "0", left: "50%", width: "12px", height: "12px", margin: "-6px 0 0 -6px", display: "flex"}}>
                        <span style={{width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--primary)", background: "var(--page-bg)", boxSizing: "border-box", position: "relative", zIndex: "1"}} />
                      </div>
                      <div style={{background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow)", padding: "24px 26px", transition: "transform .18s ease, border-color .18s ease"}} className="h11">
                        <div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                          <span>
                            {"May 2026 - Sep 2026 · Remote"}
                          </span>
                        </div>
                        <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                          {"Junior AI Frontend Engineer"}
                        </h3>
                        <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                          <img src="/assets/4cbcec18-1f1e-4437-b0ca-9346aca6e889.png" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block"}} />
                          <span>
                            {"DevAccelerator"}
                          </span>
                        </div>
                        <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                          <li>
                            {"Built the Client Portal from an empty repo to production: dashboards, job tracker, implementation checklists, progress tracking and AI features."}
                          </li>
                          <li>
                            {"Owned 100% of the portal's UI/UX, validating every flow with teammates and the founder."}
                          </li>
                          <li>
                            {"Automated internal processes with n8n and Claude Code across Airtable, Slack and HubSpot."}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div data-serp-item="1" style={{position: "relative", width: "calc(50% - 36px)", minWidth: "min(100%, 300px)", boxSizing: "border-box", paddingTop: "44px", marginLeft: "0"}}>
                      <div data-serp-dot="1" style={{position: "absolute", top: "0", left: "50%", width: "12px", height: "12px", margin: "-6px 0 0 -6px", display: "flex"}}>
                        <span style={{width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--primary)", background: "var(--page-bg)", boxSizing: "border-box", position: "relative", zIndex: "1"}} />
                      </div>
                      <div style={{background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow)", padding: "24px 26px", transition: "transform .18s ease, border-color .18s ease"}} className="h12">
                        <div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                          <span>
                            {"May 2025 - May 2026 · Toronto, ON"}
                          </span>
                          <Tag variant="quiet">
                            {"Internship"}
                          </Tag>
                        </div>
                        <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                          {"Frontend Developer"}
                        </h3>
                        <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                          <img src="/assets/a908f52e-c36a-4550-baba-b15e4e3a4912.jpg" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block", objectFit: "cover", background: "#fff"}} />
                          <span>
                            {"Tech Forge Canadian Consulting Inc."}
                          </span>
                        </div>
                        <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                          <li>
                            {"Developed responsive React interfaces and reusable components with Tailwind CSS and Material UI."}
                          </li>
                          <li>
                            {"Refactored legacy frontend code, cutting component size and complexity by up to 73%."}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div data-serp-item="1" style={{position: "relative", width: "calc(50% - 36px)", minWidth: "min(100%, 300px)", boxSizing: "border-box", paddingTop: "44px", marginLeft: "auto"}}>
                      <div data-serp-dot="1" style={{position: "absolute", top: "0", left: "50%", width: "12px", height: "12px", margin: "-6px 0 0 -6px", display: "flex"}}>
                        <span style={{width: "12px", height: "12px", borderRadius: "50%", border: "2px solid var(--primary)", background: "var(--page-bg)", boxSizing: "border-box", position: "relative", zIndex: "1"}} />
                      </div>
                      <div style={{background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow)", padding: "24px 26px", transition: "transform .18s ease, border-color .18s ease"}} className="h13">
                        <div style={{display: "flex", gap: "10px", alignItems: "center", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                          <span>
                            {"Jan 2024 - Oct 2024 · Toronto, ON"}
                          </span>
                          <Tag variant="quiet">
                            {"Volunteer"}
                          </Tag>
                        </div>
                        <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "10px 0 8px"}}>
                          {"Web Developer"}
                        </h3>
                        <div style={{display: "flex", alignItems: "center", gap: "10px", fontSize: "15.5px", color: "var(--label)"}}>
                          <img src="/assets/430a8d85-ffe1-43df-b051-f0884927a4ff.jpg" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block", objectFit: "cover", background: "#fff"}} />
                          <span>
                            {"Sai Dham Food Bank"}
                          </span>
                        </div>
                        <ul style={{margin: "16px 0 0", paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px", lineHeight: "1.65", color: "var(--text-muted)"}}>
                          <li>
                            {"Built and optimized responsive pages with React, JavaScript, CSS and WordPress to support the food bank's digital initiatives."}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </>) : null}
            </div>
          </section>
          <section id="projects" data-screen-label="Projects" style={{maxWidth: "1080px", margin: "0 auto", padding: "clamp(72px, 11vw, 120px) clamp(20px, 4vw, 24px)", borderTop: "1px solid var(--border)"}}>
            <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "16px"}}>
              {"Selected projects"}
            </div>
            <h2 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 38px)", lineHeight: "1.08", letterSpacing: "-0.03em", color: "var(--text-strong)", margin: "0 0 56px", maxWidth: "640px"}}>
              {"Two products, designed and built end to end."}
            </h2>
            <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 380px), 1fr))", gap: "32px"}}>
              <article style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <div style={{aspectRatio: "4 / 3", borderRadius: "20px", overflow: "hidden", background: "radial-gradient(70% 70% at 50% 40%, rgba(var(--acc-rgb), 0.22), transparent 70%), var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingTop: "32px", boxSizing: "border-box"}}>
                  <img src="/assets/motus_2.png" alt="MOTUS tracking body landmarks during a seated hamstring stretch" style={{height: "100%", width: "auto", borderRadius: "18px 18px 0 0", boxShadow: "var(--shadow)", display: "block"}} />
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "10px", padding: "0 4px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap"}}>
                    <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "0"}}>
                      {"MOTUS: AI movement coach"}
                    </h3>
                  </div>
                  <p style={{fontSize: "16px", lineHeight: "1.6", color: "var(--text-muted)", margin: "0", textWrap: "pretty"}}>
                    {"Tracks body landmarks through the phone camera, computes joint angles in real time and coaches you live."}
                  </p>
                  <div style={{fontSize: "13.5px", color: "var(--text-dim)"}}>
                    {"React Native CLI · TypeScript · MediaPipe · AI"}
                  </div>
                  <div style={{marginTop: "6px"}}>
                    <Button variant="ghost" iconRight={v.motusIcon} onClick={v.toggleMotus}>
                      <span style={{whiteSpace: "nowrap"}}>
                        {v.motusLabel}
                      </span>
                    </Button>
                  </div>
                </div>
              </article>
              <article style={{display: "flex", flexDirection: "column", gap: "20px"}}>
                <div style={{aspectRatio: "4 / 3", borderRadius: "20px", overflow: "hidden", background: "radial-gradient(70% 70% at 50% 40%, rgba(var(--acc-rgb), 0.22), transparent 70%), var(--surface)", border: "1px solid var(--border)", display: "flex", alignItems: "flex-end", justifyContent: "flex-end", padding: "40px 0 0 40px", boxSizing: "border-box"}}>
                  <img src="/assets/portal.png" alt="DevAccelerator Client Portal: Cover Letter Improver, step 1 of 3" style={{width: "100%", height: "100%", objectFit: "cover", objectPosition: "left top", borderRadius: "14px 0 0 0", border: "1px solid var(--border-strong)", borderRight: "0", borderBottom: "0", display: "block"}} />
                </div>
                <div style={{display: "flex", flexDirection: "column", gap: "10px", padding: "0 4px"}}>
                  <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", flexWrap: "wrap"}}>
                    <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "20px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "0"}}>
                      {"DevAccelerator Client Portal"}
                    </h3>
                    <Tag variant="quiet">
                      {"In production"}
                    </Tag>
                  </div>
                  <p style={{fontSize: "16px", lineHeight: "1.6", color: "var(--text-muted)", margin: "0", textWrap: "pretty"}}>
                    {"An AI career platform: CV customisation, LinkedIn optimisation, job tracking and programme progress in one place."}
                  </p>
                  <div style={{fontSize: "13.5px", color: "var(--text-dim)"}}>
                    {"React · TypeScript · Tailwind CSS · Claude Code"}
                  </div>
                  <div style={{marginTop: "6px", display: "flex", gap: "6px 18px", flexWrap: "wrap", alignItems: "center"}}>
                    <Button variant="ghost" iconRight={v.portalIcon} onClick={v.togglePortal}>
                      <span style={{whiteSpace: "nowrap"}}>
                        {v.portalLabel}
                      </span>
                    </Button>
                    <a className="dos-btn dos-btn--ghost dos-btn--out" href="https://web.devaccelerator.app/" target="_blank" rel="noopener" style={{whiteSpace: "nowrap", textDecoration: "none"}}>
                      {"Visit live site "}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
            {(v.motusOpen) ? (<>
              <div data-screen-label="Case study: MOTUS" style={{marginTop: "48px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "24px", boxShadow: "var(--shadow)", padding: "clamp(28px, 4vw, 48px)"}}>
                <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "12px"}}>
                  {"Case study"}
                </div>
                <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(22px, 2.4vw, 27px)", letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "0 0 36px"}}>
                  {"MOTUS: coaching form in real time"}
                </h3>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "36px 56px", maxWidth: "880px"}}>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Problem"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"People exercising alone, especially beginners and older adults, get no feedback on their form, so routines feel risky and are easy to abandon."}
                    </p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Role"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"Co-builder in a 3-person team across 3 countries, working across the mobile app, the pose-tracking pipeline and the interface."}
                    </p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Process"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"MediaPipe landmarks feed live joint-angle calculations that trigger coaching cues. AI personalises each routine to the user's mobility profile, behind an accessibility-first UI."}
                    </p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Result"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"A working on-device coach that counts reps, tracks sets and corrects form as you move."}
                    </p>
                  </div>
                </div>
              </div>
            </>) : null}
            {(v.portalOpen) ? (<>
              <div data-screen-label="Case study: Client Portal" style={{marginTop: "48px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "24px", boxShadow: "var(--shadow)", padding: "clamp(28px, 4vw, 48px)"}}>
                <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "12px"}}>
                  {"Case study"}
                </div>
                <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(22px, 2.4vw, 27px)", letterSpacing: "-0.02em", color: "var(--text-strong)", margin: "0 0 36px"}}>
                  {"DevAccelerator Client Portal: empty repo to production"}
                </h3>
                <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 300px), 1fr))", gap: "36px 56px", maxWidth: "880px"}}>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Problem"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"Developers in the programme juggled CVs, LinkedIn, applications and checklists across scattered tools, with no single view of their progress."}
                    </p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Role"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"Owned 100% of the UI/UX and built the frontend from an empty repo, with the same person defining the flow, designing the screen and shipping the component."}
                    </p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Process"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"Validated every flow with the founder before building. Claude Design for the design pipeline, Claude Code for implementation, n8n automations into Airtable, Slack and HubSpot."}
                    </p>
                  </div>
                  <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                    <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                      {"Result"}
                    </div>
                    <p style={{fontSize: "15.5px", lineHeight: "1.7", color: "var(--text-muted)", margin: "0"}}>
                      {"Live in production: CV and cover-letter tools, LinkedIn optimisation, a job tracker, implementation checklists and progress tracking."}
                    </p>
                  </div>
                </div>
              </div>
            </>) : null}
          </section>
          <section id="skills" data-screen-label="Skills" style={{maxWidth: "1080px", margin: "0 auto", padding: "clamp(72px, 11vw, 120px) clamp(20px, 4vw, 24px)", borderTop: "1px solid var(--border)"}}>
            <div style={{display: "flex", flexWrap: "wrap", gap: "48px 80px"}}>
              <div style={{flex: "0 1 260px", display: "flex", flexDirection: "column", gap: "16px"}}>
                <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)"}}>
                  {"Skills"}
                </div>
                <h2 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 38px)", lineHeight: "1.08", letterSpacing: "-0.03em", color: "var(--text-strong)", margin: "0"}}>
                  {"The toolkit."}
                </h2>
                <p style={{fontSize: "15px", lineHeight: "1.65", color: "var(--text-muted)", margin: "0", maxWidth: "260px", textWrap: "pretty"}}>
                  {"Every tool links to the projects where I used it. Pick one or more to see the work."}
                </p>
              </div>
              <dl style={{flex: "1 1 480px", minWidth: "0", margin: "0", display: "flex", flexDirection: "column"}}>
                {(v.skillGroups || []).map((g, __i_g) => (<React.Fragment key={__i_g}>
                  <div style={{display: "flex", flexWrap: "wrap", gap: "12px 32px", padding: "20px 0", borderBottom: "1px solid var(--border)"}}>
                    <dt style={{flex: "0 0 180px", fontSize: "15.5px", fontWeight: "500", color: "var(--label)", paddingTop: "7px"}}>
                      {g.title}
                    </dt>
                    <dd style={{flex: "1 1 280px", margin: "0", display: "flex", flexWrap: "wrap", gap: "8px"}}>
                      {(g.items || []).map((s, __i_s) => (<React.Fragment key={__i_s}>
                        <button type="button" onClick={s.onClick} disabled={s.disabled} aria-pressed={s.on} title={s.title} style={s.style}>
                          {(s.icon) ? (<>
                            <span aria-hidden="true" style={s.iconStyle} />
                          </>) : null}
                          <span>
                            {s.name}
                          </span>
                          {(s.count) ? (<>
                            <span style={s.countStyle}>
                              {s.count}
                            </span>
                          </>) : null}
                        </button>
                      </React.Fragment>))}
                    </dd>
                  </div>
                </React.Fragment>))}
              </dl>
            </div>
            <div style={{marginTop: "48px", display: "flex", flexDirection: "column", gap: "28px"}}>
              <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", flexWrap: "wrap", minHeight: "32px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "15px", color: "var(--text-muted)", fontVariantNumeric: "tabular-nums"}}>
                  <span style={{whiteSpace: "nowrap"}}>
                    {v.filterSummary}
                  </span>
                  {(v.selChips || []).map((c, __i_c) => (<React.Fragment key={__i_c}>
                    <button type="button" onClick={c.onRemove} title={c.title} style={{display: "inline-flex", alignItems: "center", gap: "7px", padding: "5px 8px 5px 9px", borderRadius: "20px", border: "1px solid var(--primary)", background: "rgba(var(--acc-rgb), 0.16)", color: "var(--text-strong)", fontFamily: "inherit", fontSize: "13.5px", cursor: "pointer", whiteSpace: "nowrap"}} className="h14">
                      {(c.icon) ? (<>
                        <span aria-hidden="true" style={c.iconStyle} />
                      </>) : null}
                      <span>
                        {c.name}
                      </span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{opacity: ".7"}}>
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </React.Fragment>))}
                  <div style={{position: "relative", flex: "0 1 220px", minWidth: "160px"}}>
                    <div style={{display: "flex", alignItems: "center", gap: "8px", height: "34px", padding: "0 12px", borderRadius: "20px", border: "1px dashed var(--border-strong)", background: "rgba(255,255,255,0.03)", color: "var(--text-dim)"}} className="h15">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{flex: "none"}}>
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                      <input type="text" value={v.techQuery} onChange={v.onTechInput} onKeyDown={v.onTechKey} onFocus={v.onTechFocus} onBlur={v.onTechBlur} placeholder={v.techPlaceholder} aria-label="Add a technology to the filter" autoComplete="off" spellCheck="false" style={{flex: "1", minWidth: "0", height: "100%", border: "0", outline: "none", background: "transparent", color: "var(--text-strong)", fontFamily: "inherit", fontSize: "14px"}} />
                    </div>
                    {(v.showSuggest) ? (<>
                      <div role="listbox" style={{position: "absolute", top: "calc(100% + 6px)", left: "0", minWidth: "100%", width: "max-content", maxWidth: "280px", zIndex: "6", background: "var(--surface)", border: "1px solid var(--border-strong)", borderRadius: "12px", boxShadow: "var(--shadow)", padding: "6px", display: "flex", flexDirection: "column", gap: "2px"}}>
                        {(v.suggestions || []).map((o, __i_o) => (<React.Fragment key={__i_o}>
                          <button type="button" role="option" aria-selected={o.active} onMouseDown={o.onPick} style={o.style}>
                            {(o.icon) ? (<>
                              <span aria-hidden="true" style={o.iconStyle} />
                            </>) : null}
                            <span style={{flex: "1", textAlign: "left"}}>
                              {o.name}
                            </span>
                            <span style={{fontSize: "12px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                              {o.count}
                            </span>
                          </button>
                        </React.Fragment>))}
                        {(v.noSuggest) ? (<>
                          <div style={{padding: "8px 10px", fontSize: "13.5px", color: "var(--text-dim)"}}>
                            {"No matching technology"}
                          </div>
                        </>) : null}
                      </div>
                    </>) : null}
                  </div>
                </div>
                {(v.hasFilter) ? (<>
                  <Button variant="ghost" icon="x" onClick={v.clearFilter}>
                    <span style={{whiteSpace: "nowrap"}}>
                      {"Clear filter"}
                    </span>
                  </Button>
                </>) : null}
              </div>
              {(v.noFilter) ? (<>
                <div style={{border: "1px dashed var(--border-strong)", borderRadius: "20px", padding: "48px 24px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "10px"}}>
                  <div style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.015em", color: "var(--text-strong)"}}>
                    {"Pick a tool to see the proof."}
                  </div>
                  <div style={{fontSize: "15px", color: "var(--text-muted)", maxWidth: "440px", textWrap: "pretty"}}>
                    {"The numbers next to each tool count the projects I built with it."}
                  </div>
                </div>
              </>) : null}
              <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: "24px"}}>
                {(v.shownProjects || []).map((p, __i_p) => (<React.Fragment key={__i_p}>
                  <article style={{background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform .18s ease, border-color .18s ease"}} className="h16">
                    <div style={{aspectRatio: "16 / 10", background: "var(--surface-hover)", borderBottom: "1px solid var(--border)", overflow: "hidden"}}>
                      <div role="img" aria-label={p.title} style={p.imgStyle} />
                    </div>
                    <div style={{padding: "22px 24px 24px", display: "flex", flexDirection: "column", gap: "12px", flex: "1"}}>
                      <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", gap: "10px", flexWrap: "wrap", fontSize: "13px", color: "var(--text-dim)", fontVariantNumeric: "tabular-nums"}}>
                        <span>
                          {p.date}
                        </span>
                        <Tag variant={p.tagVariant}>
                          {p.status}
                        </Tag>
                      </div>
                      <h3 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "18px", letterSpacing: "-0.015em", color: "var(--text-strong)", margin: "0"}}>
                        {p.title}
                      </h3>
                      <p style={{fontSize: "14px", lineHeight: "1.6", color: "var(--text-muted)", margin: "0", textWrap: "pretty"}}>
                        {p.desc}
                      </p>
                      <div style={{display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "2px"}}>
                        {(p.techs || []).map((t, __i_t) => (<React.Fragment key={__i_t}>
                          <span style={t.style}>
                            {t.name}
                          </span>
                        </React.Fragment>))}
                      </div>
                      <div style={{marginTop: "auto", paddingTop: "8px"}}>
                        <div style={{display: "flex", gap: "6px 18px", flexWrap: "wrap", alignItems: "center"}}>
                          {(p.isCase) ? (<>
                            <Button variant="ghost" onClick={p.onOpen}>
                              <span style={{whiteSpace: "nowrap"}}>
                                {"Read case study"}
                              </span>
                            </Button>
                          </>) : null}
                          {(p.hasLive) ? (<>
                            <a className="dos-btn dos-btn--ghost dos-btn--out" href={p.liveHref} target="_blank" rel="noopener" style={{whiteSpace: "nowrap", textDecoration: "none"}}>
                              {"Visit live site "}
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17 17 7" />
                                <path d="M7 7h10v10" />
                              </svg>
                            </a>
                          </>) : null}
                          {(p.hasRepo) ? (<>
                            <a className="dos-btn dos-btn--ghost dos-btn--out" href={p.repoHref} target="_blank" rel="noopener" style={{whiteSpace: "nowrap", textDecoration: "none"}}>
                              {"View code "}
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M7 17 17 7" />
                                <path d="M7 7h10v10" />
                              </svg>
                            </a>
                          </>) : null}
                        </div>
                      </div>
                    </div>
                  </article>
                </React.Fragment>))}
              </div>
            </div>
          </section>
          <section id="education" data-screen-label="Education" style={{maxWidth: "1080px", margin: "0 auto", padding: "clamp(72px, 11vw, 120px) clamp(20px, 4vw, 24px)", borderTop: "1px solid var(--border)"}}>
            <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "16px"}}>
              {"Education"}
            </div>
            <h2 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(28px, 3.2vw, 38px)", lineHeight: "1.08", letterSpacing: "-0.03em", color: "var(--text-strong)", margin: "0 0 48px"}}>
              {"Where I learned."}
            </h2>
            <div style={{display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "18px"}}>
              <div className="edu-card" style={{background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow)", padding: "28px", display: "flex", flexDirection: "column", gap: "20px"}}>
                <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                  <span style={{width: "34px", height: "34px", flex: "none", borderRadius: "9px", background: "rgba(var(--acc-rgb), 0.16)", color: "var(--primary-light)", display: "inline-flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
                      <path d="M22 10v6" />
                      <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
                    </svg>
                  </span>
                  <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                    {"Diploma"}
                  </div>
                  <div style={{marginLeft: "auto", display: "flex", gap: "8px", flexWrap: "wrap", flexDirection: "column"}}>
                    <Tag variant="accent">
                      {"Dean’s List"}
                    </Tag>
                    <a href={v.transcriptHref} target="_blank" rel="noopener" aria-label="GPA 81.75, view transcript" onMouseEnter={v.gpaEnter} onMouseLeave={v.gpaLeave} onFocus={v.gpaEnter} onBlur={v.gpaLeave} style={{position: "relative", display: "inline-flex", textDecoration: "none", cursor: "pointer", borderRadius: "20px"}}>
                      <Tag variant="quiet">
                        <span style={{display: "inline-flex", alignItems: "center", gap: "4px"}}>
                          {"GPA 81.75"}
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </span>
                      </Tag>
                      {" "}
                      {v.gpaTip}
                      {" "}
                    </a>
                  </div>
                </div>
                <div style={{display: "flex", flexWrap: "wrap", alignItems: "stretch", justifyContent: "space-evenly", gap: "0px"}}>
                  <div style={{flex: "1 1 300px", minWidth: "0"}}>
                    <div style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "19px", letterSpacing: "-0.015em", color: "var(--text-strong)"}}>
                      {"Computer Programming Diploma"}
                    </div>
                    <div style={{fontSize: "15.5px", color: "var(--label)", marginTop: "8px", display: "flex", alignItems: "center", gap: "10px"}}>
                      <img src="/assets/2fd8841a-6a02-403b-a556-9178c48dab1d.jpg" alt="" style={{width: "24px", height: "24px", borderRadius: "6px", flex: "none", display: "block", objectFit: "cover", background: "#fff"}} />
                      <span>
                        {"Georgian College at ILAC"}
                      </span>
                    </div>
                    <div style={{fontSize: "13.5px", color: "var(--text-dim)", marginTop: "4px", fontVariantNumeric: "tabular-nums"}}>
                      {"Jan 2024 - Sep 2025 · Toronto, ON"}
                    </div>
                  </div>
                  <a className="dos-btn dos-btn--ghost dos-btn--out" href="https://www.linkedin.com/in/tomasortegap/details/recommendations/" target="_blank" rel="noopener" style={{whiteSpace: "nowrap", textDecoration: "none", marginLeft: "auto", alignSelf: "flex-end", flex: "none"}}>
                    {"Teacher recommendation "}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </a>
                  <div style={{flex: "0 1 auto", display: "flex", gap: "8px 16px", flexWrap: "wrap", alignItems: "center"}}>
                  </div>
                </div>
              </div>
            </div>
            <div className="edu-card" style={{marginTop: "18px", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: "20px", boxShadow: "var(--shadow)", padding: "28px", display: "flex", flexDirection: "column", gap: "20px"}}>
              <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap"}}>
                <div style={{display: "flex", alignItems: "center", gap: "14px"}}>
                  <span style={{width: "34px", height: "34px", flex: "none", borderRadius: "9px", background: "rgba(var(--acc-rgb), 0.16)", color: "var(--primary-light)", display: "inline-flex", alignItems: "center", justifyContent: "center"}}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  </span>
                  <div style={{fontSize: "12px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--text-dim)"}}>
                    {"Certifications"}
                  </div>
                </div>
                <Tag variant="accent">
                  {"+18 certifications"}
                </Tag>
              </div>
              <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px"}}>
                <div className="cert-chip" style={{display: "inline-flex", flex: "0 0 auto", alignItems: "center", gap: "12px", padding: "14px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", fontSize: "15px", fontWeight: "500", color: "var(--label)", whiteSpace: "nowrap"}}>
                  <img src="/assets/f6bfedb8-5cc3-428c-baa4-75b9915dd5bb.svg" alt="" style={{width: "22px", height: "22px", display: "block", flex: "none"}} />
                  {"LinkedIn Learning"}
                </div>
                <div className="cert-chip" style={{display: "inline-flex", flex: "0 0 auto", alignItems: "center", gap: "12px", padding: "14px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", fontSize: "15px", fontWeight: "500", color: "var(--label)", whiteSpace: "nowrap"}}>
                  <img src="/assets/a4d03dde-2744-4dde-99c4-d5787e9d279a.svg" alt="" style={{width: "22px", height: "22px", display: "block", flex: "none"}} />
                  {"Udemy"}
                </div>
                <div className="cert-chip" style={{display: "inline-flex", flex: "0 0 auto", alignItems: "center", gap: "12px", padding: "14px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", fontSize: "15px", fontWeight: "500", color: "var(--label)", whiteSpace: "nowrap"}}>
                  <img src="/assets/c5140354-d0a8-4d73-b632-b70a499f6fc8.svg" alt="" style={{width: "22px", height: "22px", display: "block", flex: "none"}} />
                  {"Coursera"}
                </div>
                <div className="cert-chip" style={{display: "inline-flex", flex: "0 0 auto", alignItems: "center", gap: "12px", padding: "14px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", fontSize: "15px", fontWeight: "500", color: "var(--label)", whiteSpace: "nowrap"}}>
                  <img src="/assets/1f317fe4-4bdb-427b-a28a-2f7e75c0d34d.svg" alt="" style={{width: "22px", height: "22px", display: "block", flex: "none"}} />
                  {"Meta"}
                </div>
                <div className="cert-chip" style={{display: "inline-flex", flex: "0 0 auto", alignItems: "center", gap: "12px", padding: "14px 20px", borderRadius: "12px", background: "rgba(255,255,255,0.03)", border: "1px solid var(--border)", fontSize: "15px", fontWeight: "500", color: "var(--label)", whiteSpace: "nowrap"}}>
                  <img src="/assets/9b09fd47-0631-4813-9dc4-f119043b9836.svg" alt="" style={{width: "22px", height: "22px", display: "block", flex: "none"}} />
                  {"Anthropic"}
                </div>
              </div>
              <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "12px 20px", flexWrap: "wrap", paddingTop: "4px", textAlign: "center"}}>
                <span style={{fontSize: "14.5px", color: "var(--text-muted)"}}>
                  {"JavaScript, React, CSS, MongoDB, AI and modern web development."}
                </span>
                <Button variant="ghost" external={true} onClick={v.openCerts}>
                  <span style={{whiteSpace: "nowrap"}}>
                    {"View all on LinkedIn"}
                  </span>
                </Button>
              </div>
            </div>
          </section>
          <section id="contact" data-screen-label="Contact" style={{maxWidth: "1080px", margin: "0 auto", padding: "clamp(80px, 12vw, 140px) clamp(20px, 4vw, 24px) clamp(88px, 14vw, 160px)", borderTop: "1px solid var(--border)", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <div style={{fontSize: "12.5px", fontWeight: "600", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--primary-light)", marginBottom: "24px"}}>
              {"Contact"}
            </div>
            <h2 style={{fontFamily: "var(--font-title)", fontWeight: "700", fontSize: "clamp(32px, 4.4vw, 52px)", lineHeight: "1.05", letterSpacing: "-0.035em", color: "var(--text-strong)", margin: "0", maxWidth: "760px", textWrap: "balance"}}>
              {"Let's build something people actually use."}
            </h2>
            <p style={{fontSize: "19px", lineHeight: "1.6", color: "var(--text-muted)", margin: "24px 0 0", maxWidth: "520px"}}>
              {"Open to AI product and frontend roles · remote or in Toronto."}
            </p>
            <div style={{display: "flex", gap: "12px", marginTop: "40px", flexWrap: "wrap", justifyContent: "center"}}>
              <Button onClick={v.bookCall}>
                <span style={{whiteSpace: "nowrap"}}>
                  {"Book a call"}
                </span>
              </Button>
              <Button variant="ghost" external={true} onClick={v.openLinkedIn}>
                <span style={{whiteSpace: "nowrap"}}>
                  {"LinkedIn"}
                </span>
              </Button>
              <a className="dos-btn dos-btn--ghost dos-btn--out" href={v.cvHref} target="_blank" rel="noopener" style={{whiteSpace: "nowrap", textDecoration: "none"}}>
                {"View CV "}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17 17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </a>
            </div>
            <a href="mailto:tomasorpa@gmail.com" style={{marginTop: "28px", fontFamily: "var(--font-mono)", fontSize: "14.5px"}}>
              {"tomasorpa@gmail.com"}
            </a>
          </section>
        </main>
        <footer style={{borderTop: "1px solid var(--border)"}}>
          <div style={{maxWidth: "1080px", margin: "0 auto", padding: "28px 24px", display: "flex", justifyContent: "space-between", gap: "16px", flexWrap: "wrap", fontSize: "13.5px", color: "var(--text-dim)"}}>
            <span style={{display: "flex", alignItems: "center", gap: "8px"}}>
              <span>
                {"© 2026 Tomas Ortega Palencia"}
              </span>
            </span>
            <span>
              {"Designed in Claude Design · Built with Claude Code"}
            </span>
          </div>
        </footer>
      </div>
      </>
    );
  }
}
