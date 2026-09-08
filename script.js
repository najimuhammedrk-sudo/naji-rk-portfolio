const projects=[
 {n:'01',title:'N100 Financial Intelligence Platform',cats:['Analytics','Finance','Machine Learning','Business Intelligence','AI'],brief:'A Nifty 100 intelligence platform designed around financial ratios, screening, peer analytics, dashboards, NLP, ML, and API access.',metrics:['92 equities','11 sectors','33 KPIs','16 API endpoints'],tech:['Python','SQLite','pandas','FastAPI','Streamlit','Plotly','scikit-learn'],detail:'Built around 12 structured datasets, the platform includes an ETL pipeline, 16 data-quality rules, 1,118 ratio records, peer analysis across 11 groups, an 8-screen dashboard, NLP insight generation, KMeans clustering, and 110 automated PDF reports.'},
 {n:'02',title:'Bluestock Mutual Fund Analytics Capstone',cats:['Analytics','Finance'],brief:'Separate mutual-fund data ingestion capstone: validate 10 datasets, fetch live NAV through MFAPI, and validate AMFI scheme codes.',metrics:['10 datasets','Live NAV','AMFI validation'],tech:['Python','Pandas','NumPy','Requests','Jupyter'],github:'https://github.com/najimuhammedrk-sudo/bluestock-mf-capstone-day1',detail:'Day 1 focused on robust data ingestion, initial data-quality checks, and validating mutual fund scheme codes before downstream analysis.'},
 {n:'03',title:'Financial ESG Risk Sentinel: Corporate Bond Downgrade Prediction',cats:['Finance','AI','Machine Learning','Analytics'],brief:'A credit-risk analytical framework for predicting corporate bond downgrade risk through ESG and financial signals.',metrics:['2,200+ bond records','96% accuracy','0.99 ROC-AUC'],tech:['Random Forest','Machine Learning','ESG'],github:'https://github.com/najimuhammedrk-sudo/predictive-analytics',detail:'Random Forest analysis identified ESG Governance and Carbon Intensity as the strongest downgrade predictors.'},
 {n:'04',title:'Sales Analytics & Forecasting',cats:['Analytics','Machine Learning','Business Intelligence'],brief:'End-to-end retail forecasting and business intelligence solution over five years of transaction data.',metrics:['100,000 rows','₹250.84 Cr sales','3.18% MAPE'],tech:['Python','Pandas','Power BI','Random Forest'],github:'https://github.com/najimuhammedrk-sudo/functional-analytics',detail:'Repaired 79,888 corrupted Year values, validated operational logic, analyzed sales and margin performance, and built a 2-page Power BI dashboard. Random Forest was the best forecasting model; the 2024 forecast indicated -0.60% YoY growth.'},
 {n:'05',title:'Bollywood Market Intelligence & Performance Analytics',cats:['Analytics','Finance'],brief:'Mapped production budgets, genre trends, and returns across a multi-decade Bollywood dataset.',metrics:['Multi-decade dataset','Genre analysis','Investment segmentation'],tech:['Analytics','Finance'],detail:'Used genre-specific metrics to identify profit indicators and inform targeted investment segmentation.'},
 {n:'06',title:'FIFA 19 Player Analytics — Python',cats:['Analytics'],brief:'Player analytics focused on positional skill clusters and valuation drivers.',metrics:['18,000+ players','Skill clusters','Pricing logic'],tech:['Python','Analytics'],detail:'Linked in-game performance metrics to transfer-market pricing logic through segmentation.'},
 {n:'07',title:'Friday AI — E-Commerce Customer Support Chatbot',cats:['AI','Business'],brief:'Conversational AI for a growing online retailer’s common support journeys.',metrics:['Support automation','Customer experience','Business process'],tech:['IBM watsonx Assistant Lite','Conversational AI'],detail:'Designed for product information, pricing, offers, order status, delivery, payments, cancellations, returns, refunds, and exchanges—positioning AI as a customer-support and process-automation tool.'}
];

const certificates=[
 ['anthropic-ai-fluency.pdf','AI Fluency','Anthropic','AI'],['be10x-ai-tools.pdf','AI Tools','be10x','AI'],['bluestock-internship.pdf','Internship Credential','Bluestock Fintech','Business'],['deloitte-data-analytics.pdf','Data Analytics Job Simulation','Deloitte / Forage','Analytics','April 17, 2026'],['financial-analyst-modeling.pdf','Financial Analyst Modeling','', 'Finance'],['google-gemini-certified-student.pdf','Gemini Certified Student','Google','AI','May 18, 2026'],['ibm-big-data-101.pdf','Big Data 101','IBM Developer Skills Network / Lovely Professional University','Analytics','April 23, 2026'],['ibm-business-intelligence.pdf','Business Intelligence','IBM Developer Skills Network / Lovely Professional University','Business Intelligence','April 18, 2026'],['ibm-data-visualization.pdf','Data Visualization with Cognos Dashboard Embedded','IBM Developer Skills Network / Lovely Professional University','Business Intelligence','April 18, 2026'],['ibm-predictive-analytics.pdf','Predictive Analytics using SPSS Modeler - Advanced Course','IBM Developer Skills Network / Lovely Professional University','Analytics','April 18, 2026'],['ibm-prompt-engineering.pdf','Prompt Engineering for Everyone','IBM Developer Skills Network / Cognitive Class','AI','January 27, 2026'],['ibm-sectoral-analytics-finance.pdf','Sectoral Analytics Fundamental - Finance','IBM Developer Skills Network / Lovely Professional University','Finance','August 28, 2026'],['ibm-sectoral-analytics-human-resource.pdf','Sectoral Analytics Fundamentals - HR','IBM Developer Skills Network / Lovely Professional University','Business','August 28, 2026'],['ibm-sectoral-analytics-marketing.pdf','Sectoral Analytics Fundamentals - Marketing','IBM Developer Skills Network / Lovely Professional University','Business','August 28, 2026']
].map(([file,title,issuer,cat,date])=>({file,title,issuer,cat,date}));

const projectGrid=document.querySelector('#project-grid'),certGrid=document.querySelector('#certificate-grid'),modal=document.querySelector('#modal'),modalContent=document.querySelector('#modal-content');

function projectCard(p){return `<article class="project-card" data-cats="${p.cats.join('|')}"><div><span class="number">${p.n}</span><h3>${p.title}</h3><p>${p.brief}</p></div><div><div class="project-tags">${p.cats.map(x=>`<span>${x}</span>`).join('')}</div><button data-project="${p.n}">View case study ↗</button></div></article>`}function renderProjects(filter='all'){projectGrid.innerHTML=projects.filter(p=>filter==='all'||p.cats.includes(filter)).map(projectCard).join('')};

function certCard(c){return `<article class="certificate-card" data-cat="${c.cat}"><div><span class="number">${c.cat}</span><h3>${c.title}</h3><p>${c.issuer||'Credential PDF'}</p>${c.date?`<p>${c.date}</p>`:''}</div><button data-certificate="${c.file}">View Certificate ↗</button></article>`}function renderCerts(filter='all'){certGrid.innerHTML=certificates.filter(c=>filter==='all'||c.cat===filter).map(certCard).join('')};

function openProject(p){modalContent.innerHTML=`<div class="modal-inner"><span class="eyebrow">Project ${p.n}</span><h2>${p.title}</h2><p>${p.detail}</p><div class="modal-metrics">${p.metrics.map(m=>`<span>${m}</span>`).join('')}</div><div class="tags">${p.tech.map(t=>`<span>${t}</span>`).join('')}</div>${p.github?`<a class="github-link" target="_blank" rel="noopener" href="${p.github}">View on GitHub ↗</a>`:''}</div>`;
modal.showModal();
document.body.style.overflow='hidden'}function openCert(c){modalContent.innerHTML=`<div class="modal-inner"><iframe title="${c.title} certificate" src="assets/certificate/${c.file}#view=FitH" loading="lazy"></iframe></div>`;
modal.showModal();
document.body.style.overflow='hidden'}function closeModal(){modal.close();
modalContent.innerHTML='';
document.body.style.overflow=''};

document.addEventListener('click',e=>{const p=e.target.closest('[data-project]');
const c=e.target.closest('[data-certificate]');
if(p)openProject(projects.find(x=>x.n===p.dataset.project));
if(c)openCert(certificates.find(x=>x.file===c.dataset.certificate));
if(e.target.matches('.modal-close'))closeModal();
const filter=e.target.closest('.filters button');
if(filter){const group=filter.closest('.filters');
group.querySelectorAll('button').forEach(b=>b.classList.toggle('selected',b===filter));
group.dataset.filter==='projects'?renderProjects(filter.dataset.value):renderCerts(filter.dataset.value)}});
modal.addEventListener('cancel',()=>{modalContent.innerHTML='';
document.body.style.overflow=''});
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});

const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');
menu.setAttribute('aria-expanded',open);
menu.textContent=open?'×':'☰'});
nav.addEventListener('click',()=>{nav.classList.remove('open');
menu.setAttribute('aria-expanded','false');
menu.textContent='☰'});
document.querySelector('.theme-toggle').addEventListener('click',()=>{document.body.classList.toggle('dark');
localStorage.setItem('naji-theme',document.body.classList.contains('dark')?'dark':'light')});
if(localStorage.getItem('naji-theme')==='dark')document.body.classList.add('dark');

const links=[...document.querySelectorAll('nav a')],sections=links.map(a=>document.querySelector(a.getAttribute('href')));
sections.forEach(s=>{if(s)new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+s.id))}),{rootMargin:'-40% 0px -55% 0px'}).observe(s)});
const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){
  document.querySelectorAll('main .section:not(.hero)').forEach(section=>section.classList.add('reveal'));
  const revealObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');revealObserver.unobserve(entry.target)}}),{threshold:.1});
  document.querySelectorAll('main .section:not(.hero)').forEach(section=>revealObserver.observe(section));
  const metrics=document.querySelector('.metrics');
  const metricObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){metrics.classList.add('metric-visible');metricObserver.unobserve(metrics)}}),{threshold:.35});
  metricObserver.observe(metrics);
  document.addEventListener('pointermove',e=>{
    document.querySelector('.cursor-glow').style.left=e.clientX+'px';
    document.querySelector('.cursor-glow').style.top=e.clientY+'px';
    const x=(e.clientX/window.innerWidth-.5)*10,y=(e.clientY/window.innerHeight-.5)*10;
    document.querySelector('.hero').style.backgroundPosition=`calc(50% + ${x}px) calc(50% + ${y}px)`;
  });
}
renderProjects();
renderCerts();
