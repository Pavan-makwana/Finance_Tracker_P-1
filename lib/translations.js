// lib/translations.js
export const translations = {
  en: {
    // Navigation & Common
    dashboard: "Dashboard",
    add_transaction: "Add Transaction",
    login: "Login",
    signup: "Sign Up",
    tour: "Tour",
    language: "Language",
    currency: "Currency",

    // Hero
    hero_badge: "Finora 2.0 is live • Smart Wealth OS",
    hero_title_1: "Master Your Money with",
    hero_title_gradient: "Real-Time Intelligence",
    hero_subtitle:
      "Stop losing track of subscriptions and fragmented bank balances. Finora provides an intelligent cockpit to monitor multi-account cash flows, set spending guardrails, and build compounding wealth.",
    start_free: "Start for Free",
    live_demo: "View Live Demo",
    trust_free: "100% Free Forever",
    trust_privacy: "Bank-Grade Privacy",
    trust_sync: "Instant Account Sync",

    // Stats Bar
    stat_tracked_val: "₹25 Cr+",
    stat_tracked_lbl: "Money Tracked",
    stat_accuracy_val: "99.98%",
    stat_accuracy_lbl: "Calculation Accuracy",
    stat_transactions_val: "15,000+",
    stat_transactions_lbl: "Smart Transactions",
    stat_rating_val: "4.9 / 5.0",
    stat_rating_lbl: "User Satisfaction",

    // Bento Grid Features
    features_badge: "Powerful Features",
    features_title: "Everything You Need for Complete Financial Freedom",
    features_desc:
      "Engineered with clean architectural principles to eliminate financial anxiety and bring effortless clarity to your daily transactions.",
    bento1_title: "Multi-Account Aggregation in One Single View",
    bento1_desc:
      "Connect your Savings accounts, Checking accounts, Cash reserves, and investments. Switch your primary default account anytime with one tap, and get a total unified net worth calculation updated in real time.",
    bento1_badge1: "Checking",
    bento1_badge2: "Savings",
    bento1_badge3: "Cash Wallets",
    bento2_title: "Can I Afford It? Instant Decision Engine",
    bento2_desc:
      "Type what you want to buy. Finora checks your daily burn rate and tells you in plain green or red if it's safe to purchase without going broke.",
    bento3_title: "Subscription Radar & Recurring Alerts",
    bento3_desc:
      "Flag daily, weekly, monthly, or yearly recurring commitments so you never forget an upcoming renewal or subscription.",
    bento4_title: "Smart Bank Statement & Receipt Reader",
    bento4_desc:
      "Drop any bank statement PDF, CSV, or bill photo. Finora parses all items into categorized transactions with zero typing.",
    bento5_title: "Zero Compromise Privacy",
    bento5_desc:
      "Your data is never sold or shared. Encrypted storage with enterprise authentication keeps you entirely in control.",

    // Interactive Simulator
    sim_badge: "Interactive Wealth Simulator",
    sim_title: "See How Much You Could Build with",
    sim_subtitle:
      "Proper expense tracking typically uncovers 15–30% in monthly spending leaks. Simulate your compounding potential below.",
    sim_inflow_label: "Your Monthly Inflow",
    sim_rate_label: "Monthly Savings Target",
    sim_monthly_savings: "Monthly Saved",
    sim_3y_label: "Projected Net Worth in 3 Years",
    sim_5y_label: "Projected Net Worth in 5 Years",
    sim_annual_label: "Annual Direct Savings",
    sim_compounding_note: "Assuming prudent investing with a 10% annual compounding return.",
    sim_cta: "Start Building Wealth Free",

    // How It Works
    how_title: "Get Started in Under 60 Seconds",
    how_subtitle: "No complex setup, no tedious bank sync delays.",
    step1_title: "Add Your Accounts",
    step1_desc:
      "Create your primary checking, savings, or cash accounts with their initial balances.",
    step2_title: "Log & Categorize",
    step2_desc:
      "Add incomes or expenses with fast category tags, calendar pickers, and recurring switches.",
    step3_title: "Gain Instant Clarity",
    step3_desc:
      "Monitor your cash flow charts, evaluate net savings, and hit your monthly budget goals effortlessly.",

    // FAQs
    faq_badge: "Got Questions?",
    faq_title: "Frequently Asked Questions",
    faq_subtitle: "Everything you need to know about tracking your finances with Finora.",
    faq1_q: "Is my personal financial data secure and private?",
    faq1_a:
      "Absolutely. Finora does not ask for or store sensitive net-banking credentials or debit card PINs. All stored data is encrypted at rest and in transit using industry-standard SSL encryption and secured with Clerk enterprise authentication.",
    faq2_q: "Can I manage multiple bank accounts and cash wallets?",
    faq2_a:
      "Yes! Finora lets you add unlimited accounts—including Savings, Current, Cash, and Investment accounts. You can also designate a default account and view segregated statements for each.",
    faq3_q: "How does the monthly limit and budget guardrail work?",
    faq3_a:
      "You can set a target monthly budget with a single click. As you record transactions, Finora automatically computes your percentage utilization and color-codes your progress (green for safe, amber for 80%, and red when exceeded).",
    faq4_q: "Can I track recurring bills and subscriptions?",
    faq4_a:
      "Yes. When adding an expense or income, simply toggle 'Recurring Transaction' and select the interval (Daily, Weekly, Monthly, or Yearly). Finora flags upcoming debits so you are never surprised.",
    faq5_q: "Can I export my financial data for tax season or Excel?",
    faq5_a:
      "Yes! Every account includes a one-click CSV export that formats all dates, descriptions, categories, and amounts directly compatible with Excel, Google Sheets, and accounting software.",
    faq6_q: "Is Finora available as a mobile app (PWA)?",
    faq6_a:
      "Yes! Finora is built as a Progressive Web App (PWA) and native Android package. You can install it directly onto your Android, iPhone, Windows, or Mac home screen with one tap.",

    // CTA Banner
    cta_title: "Ready to Take Control of Your Financial Future?",
    cta_subtitle:
      "Join thousands of individuals and families who make informed financial decisions every day with Finora. Free forever, no commitments.",
    cta_button: "Open Finora Free",

    // Dashboard
    dashboard_title: "Financial Dashboard",
    dashboard_subtitle: "Real-time wealth tracking and multi-account overview.",
    overview: "Financial Overview",
    your_accounts: "Your Accounts",
    add_account: "Add New Account",
    monthly_limit: "Monthly Limit",
    total_amount: "Total Amount",
    monthly_income: "Monthly Income",
    monthly_expenses: "Monthly Expenses",
    net_savings: "Net Savings",
    financial_health: "Financial Health Score",
    health_excellent: "Excellent Financial Pulse",
    quick_shortcuts: "Quick Log Shortcuts",

    // Account & Transactions
    current_balance: "Current Balance",
    back_dashboard: "Back to Dashboard",
    total_inc: "Total Income",
    total_exp: "Total Expenses",
    net_bal: "Net Balance",
    search_tx: "Search transactions...",
    all_types: "All Types",
    all_tx: "All Transactions",
    export_csv: "Export CSV",
    no_tx_found: "No transactions found",

    // Transaction Form
    expense: "Expense",
    income: "Income",
    amount: "Amount",
    account: "Account",
    category: "Category",
    date: "Date",
    description: "Description / Notes",
    recurring_tx: "Recurring Transaction",
    recurring_desc: "Flag as repeating commitment or subscription",
    save_tx: "Save Transaction",
    update_tx: "Update Transaction",
    cancel: "Cancel",

    // Onboarding
    onboarding_welcome: "Welcome to Finora",
    onboarding_welcome_sub: "Your intelligent personal finance and wealth management system.",
    onboarding_step1_title: "Set Your Preferred Currency",
    onboarding_step1_desc: "Choose the primary currency you wish to view your account balances in.",
    onboarding_step2_title: "Set a Monthly Spending Target",
    onboarding_step2_desc: "Establish a healthy monthly limit. Finora will alert you before you exceed thresholds.",
    onboarding_step3_title: "You are All Set!",
    onboarding_step3_desc: "Add your bank accounts, log incomes and expenses, and watch your compounding wealth grow.",
    next_step: "Next Step",
    previous: "Back",
    finish: "Start Using Finora",
    skip: "Skip Tour",

    // Footer & Legal
    footer_desc:
      "Finora is an intelligent personal wealth and cash flow operating system designed to give you clarity, eliminate financial leaks, and compound your wealth.",
    nav_title: "Navigation",
    nav_home: "Home",
    nav_dashboard: "Dashboard",
    nav_add_tx: "Add Transaction",
    sec_title: "Security & Privacy",
    sec_badge: "Bank-Grade Encryption",
    sec_desc: "Your financial data is encrypted and completely confidential.",
    privacy_policy: "Privacy Policy",
    terms_of_service: "Terms of Service",
    all_rights_reserved: "All rights reserved.",
  },

  hi: {
    // Navigation & Common
    dashboard: "डैशबोर्ड",
    add_transaction: "लेन-देन जोड़ें",
    login: "लॉग इन",
    signup: "साइन अप",
    tour: "टूर",
    language: "भाषा",
    currency: "मुद्रा",

    // Hero
    hero_badge: "Finora 2.0 लाइव है • स्मार्ट वेल्थ सिस्टम",
    hero_title_1: "अपने पैसे को नियंत्रित करें",
    hero_title_gradient: "रीयल-टाइम इंटेलिजेंस के साथ",
    hero_subtitle:
      "सब्सक्रिप्शन और बिखरे हुए बैंक बैलेंस का हिसाब रखना बंद करें। Finora आपको सभी खातों को ट्रैक करने, बजट सीमा तय करने और बचत बढ़ाने में मदद करता है।",
    start_free: "मुफ्त में शुरू करें",
    live_demo: "लाइव डेमो देखें",
    trust_free: "हमेशा के लिए 100% मुफ्त",
    trust_privacy: "बैंक-ग्रेड सुरक्षा",
    trust_sync: "तुरंत सिंक",

    // Stats Bar
    stat_tracked_val: "₹25 करोड़+",
    stat_tracked_lbl: "पैसे ट्रैक किए गए",
    stat_accuracy_val: "99.98%",
    stat_accuracy_lbl: "गणना सटीकता",
    stat_transactions_val: "15,000+",
    stat_transactions_lbl: "सफल लेन-देन",
    stat_rating_val: "4.9 / 5.0",
    stat_rating_lbl: "उपयोगकर्ता संतुष्टि",

    // Bento Grid Features
    features_badge: "शक्तिशाली फीचर्स",
    features_title: "वित्तीय स्वतंत्रता के लिए सब कुछ जो आपको चाहिए",
    features_desc:
      "वित्तीय चिंता को दूर करने और आपके दैनिक लेन-देन में पूर्ण स्पष्टता लाने के लिए निर्मित।",
    bento1_title: "एक ही दृश्य में सभी बैंक खाते",
    bento1_desc:
      "अपने बचत खाते, चालू खाते, नकद और निवेश जोड़ें। एक टैप से डिफ़ॉल्ट खाता बदलें और रीयल-टाइम कुल संपत्ति देखें।",
    bento1_badge1: "चालू खाता",
    bento1_badge2: "बचत खाता",
    bento1_badge3: "कैश वॉलेट",
    bento2_title: "क्या मैं यह खरीद सकता हूँ? तुरंत कैलकुलेटर",
    bento2_desc:
      "जो खरीदना चाहते हैं उसकी कीमत दर्ज करें। Finora रीयल-टाइम में हरा या लाल संकेत देकर बताएगा कि क्या यह सुरक्षित है।",
    bento3_title: "सब्सक्रिप्शन रडार",
    bento3_desc:
      "दैनिक, साप्ताहिक, मासिक या वार्षिक भुगतानों को चिह्नित करें ताकि कोई रिन्यूअल न छूटे।",
    bento4_title: "स्मार्ट बैंक स्टेटमेंट और रसीद रीडर",
    bento4_desc:
      "अपना बैंक पीडीएफ या रसीद फोटो ड्रॉप करें। Finora बिना किसी टाइपिंग के सभी लेन-देन दर्ज कर देता है।",
    bento5_title: "शून्य समझौता गोपनीयता",
    bento5_desc:
      "आपका डेटा कभी बेचा या साझा नहीं किया जाता। एन्क्रिप्टेड स्टोरेज के साथ आप पूर्ण नियंत्रण में हैं।",

    // Interactive Simulator
    sim_badge: "इंटरएक्टिव वेल्थ सिम्युलेटर",
    sim_title: "देखें आप कितनी संपत्ति बना सकते हैं",
    sim_subtitle:
      "उचित व्यय ट्रैकिंग आमतौर पर 15-30% वित्तीय लीकेज को रोकती है। नीचे अपनी बचत की गणना करें।",
    sim_inflow_label: "आपकी मासिक आय",
    sim_rate_label: "मासिक बचत लक्ष्य",
    sim_monthly_savings: "मासिक बचत",
    sim_3y_label: "3 वर्षों में अनुमानित संपत्ति",
    sim_5y_label: "5 वर्षों में अनुमानित संपत्ति",
    sim_annual_label: "वार्षिक प्रत्यक्ष बचत",
    sim_compounding_note: "10% वार्षिक चक्रवृद्धि रिटर्न के आधार पर अनुमानित।",
    sim_cta: "मुफ्त में बचत शुरू करें",

    // How It Works
    how_title: "60 सेकंड के भीतर शुरू करें",
    how_subtitle: "कोई जटिल सेटअप नहीं, कोई लंबा इंतजार नहीं।",
    step1_title: "अपने खाते जोड़ें",
    step1_desc: "अपने मुख्य बचत या चालू खाते उनके प्रारंभिक बैलेंस के साथ दर्ज करें।",
    step2_title: "दर्ज करें और वर्गीकृत करें",
    step2_desc: "आय या खर्च को श्रेणियों और आवर्ती विकल्पों के साथ तेजी से जोड़ें।",
    step3_title: "तुरंत स्पष्टता पाएं",
    step3_desc: "कैश फ्लो चार्ट देखें, बचत का विश्लेषण करें और अपने लक्ष्यों को प्राप्त करें।",

    // FAQs
    faq_badge: "कोई सवाल?",
    faq_title: "अक्सर पूछे जाने वाले प्रश्न",
    faq_subtitle: "Finora के साथ अपने वित्त को ट्रैक करने के बारे में सब कुछ।",
    faq1_q: "क्या मेरा वित्तीय डेटा सुरक्षित और गोपनीय है?",
    faq1_a:
      "बिल्कुल। Finora संवेदनशील नेट-बैंकिंग पासवर्ड या डेबिट कार्ड पिन कभी नहीं मांगता। सारा डेटा उद्योग-मानक एन्क्रिप्शन और क्लर्क प्रमाणीकरण द्वारा सुरक्षित है।",
    faq2_q: "क्या मैं कई बैंक खाते प्रबंधित कर सकता हूँ?",
    faq2_a:
      "हाँ! आप बचत, चालू, नकद और निवेश खाते जोड़ सकते हैं और किसी को भी प्राथमिक डिफ़ॉल्ट खाता बना सकते हैं।",
    faq3_q: "मासिक बजट सीमा कैसे काम करती है?",
    faq3_a:
      "आप एक क्लिक में मासिक लक्ष्य निर्धारित कर सकते हैं। Finora खर्च का प्रतिशत ट्रैक करता है और सीमा के पास पहुंचते ही रंगीन अलर्ट दिखाता है।",
    faq4_q: "क्या मैं आवर्ती बिलों और सब्सक्रिप्शन को ट्रैक कर सकता हूँ?",
    faq4_a:
      "हाँ, किसी भी लेन-देन को आवर्ती के रूप में सेट करें और अंतराल चुनें। Finora आपको आगामी भुगतानों की याद दिलाएगा।",
    faq5_q: "क्या मैं टैक्स और एक्सेल के लिए डेटा डाउनलोड कर सकता हूँ?",
    faq5_a:
      "हाँ! प्रत्येक खाते में एक-क्लिक CSV निर्यात उपलब्ध है जो एक्सेल और गूगल शीट्स के अनुकूल है।",
    faq6_q: "क्या Finora मोबाइल ऐप के रूप में उपलब्ध है?",
    faq6_a:
      "हाँ! Finora प्रोग्रेसिव वेब ऐप (PWA) और एंड्रॉइड ऐप के रूप में उपलब्ध है। आप इसे एक टैप में इंस्टॉल कर सकते हैं।",

    // CTA Banner
    cta_title: "अपने वित्तीय भविष्य पर नियंत्रण पाने के लिए तैयार हैं?",
    cta_subtitle:
      "हजारों लोगों में शामिल हों जो हर दिन Finora के साथ समझदारी भरे वित्तीय निर्णय लेते हैं। हमेशा के लिए 100% मुफ्त।",
    cta_button: "Finora मुफ्त में खोलें",

    // Dashboard
    dashboard_title: "वित्तीय डैशबोर्ड",
    dashboard_subtitle: "रीयल-टाइम धन ट्रैकिंग और सभी खातों का अवलोकन।",
    overview: "वित्तीय अवलोकन",
    your_accounts: "आपके खाते",
    add_account: "नया खाता जोड़ें",
    monthly_limit: "मासिक बजट सीमा",
    total_amount: "कुल राशि",
    monthly_income: "मासिक आय",
    monthly_expenses: "मासिक खर्च",
    net_savings: "शुद्ध बचत",
    financial_health: "वित्तीय स्वास्थ्य स्कोर",
    health_excellent: "उत्कृष्ट वित्तीय स्थिति",
    quick_shortcuts: "त्वरित लेन-देन शॉर्टकट",

    // Account & Transactions
    current_balance: "वर्तमान शेष",
    back_dashboard: "डैशबोर्ड पर वापस",
    total_inc: "कुल आय",
    total_exp: "कुल खर्च",
    net_bal: "शुद्ध शेष",
    search_tx: "लेन-देन खोजें...",
    all_types: "सभी प्रकार",
    all_tx: "सभी लेन-देन",
    export_csv: "CSV डाउनलोड",
    no_tx_found: "कोई लेन-देन नहीं मिला",

    // Transaction Form
    expense: "खर्च",
    income: "आय",
    amount: "राशि",
    account: "खाता",
    category: "श्रेणी",
    date: "तारीख",
    description: "विवरण / नोट्स",
    recurring_tx: "आवर्ती लेन-देन",
    recurring_desc: "नियमित बिल या सब्सक्रिप्शन के रूप में चिह्नित करें",
    save_tx: "लेन-देन सहेजें",
    update_tx: "अपडेट करें",
    cancel: "रद्द करें",

    // Onboarding
    onboarding_welcome: "Finora में आपका स्वागत है",
    onboarding_welcome_sub: "आपकी बुद्धिमान व्यक्तिगत वित्त प्रबंधन प्रणाली।",
    onboarding_step1_title: "अपनी पसंदीदा मुद्रा चुनें",
    onboarding_step1_desc: "वह मुद्रा चुनें जिसमें आप अपने खातों का बैलेंस देखना चाहते हैं।",
    onboarding_step2_title: "मासिक खर्च का लक्ष्य तय करें",
    onboarding_step2_desc: "एक सुरक्षित मासिक सीमा निर्धारित करें। सीमा पार होने से पहले Finora आपको सचेत करेगा।",
    onboarding_step3_title: "आप पूरी तरह तैयार हैं!",
    onboarding_step3_desc: "अपने बैंक खाते जोड़ें, आय और खर्च दर्ज करें, और अपनी बचत को बढ़ते देखें।",
    next_step: "आगे बढ़ें",
    previous: "पीछे",
    finish: "Finora शुरू करें",
    skip: "छोड़ें",

    // Footer & Legal
    footer_desc:
      "Finora एक बुद्धिमान व्यक्तिगत वित्त और वेल्थ ऑपरेटिंग सिस्टम है जो आपको वित्तीय स्पष्टता और बचत बढ़ाने में मदद करता है।",
    nav_title: "नेविगेशन",
    nav_home: "होम",
    nav_dashboard: "डैशबोर्ड",
    nav_add_tx: "लेन-देन जोड़ें",
    sec_title: "सुरक्षा और गोपनीयता",
    sec_badge: "बैंक-स्तरीय एन्क्रिप्शन",
    sec_desc: "आपका वित्तीय डेटा एन्क्रिप्टेड और पूरी तरह गोपनीय है।",
    privacy_policy: "गोपनीयता नीति",
    terms_of_service: "सेवा की शर्तें",
    all_rights_reserved: "सर्वाधिकार सुरक्षित।",
  },

  es: {
    // Navigation & Common
    dashboard: "Panel",
    add_transaction: "Añadir Transacción",
    login: "Iniciar Sesión",
    signup: "Registrarse",
    tour: "Guía",
    language: "Idioma",
    currency: "Moneda",

    // Hero
    hero_badge: "Finora 2.0 está activo • Smart Wealth OS",
    hero_title_1: "Domina tu dinero con",
    hero_title_gradient: "Inteligencia en Tiempo Real",
    hero_subtitle:
      "Deja de perder el rastro de suscripciones y saldos bancarios dispersos. Finora te ofrece un panel inteligente para monitorear flujos multicuenta, fijar presupuestos y multiplicar tu patrimonio.",
    start_free: "Empieza Gratis",
    live_demo: "Ver Demo en Vivo",
    trust_free: "100% Gratis Siempre",
    trust_privacy: "Seguridad Bancaria",
    trust_sync: "Sincronización Instantánea",

    // Stats Bar
    stat_tracked_val: "€25M+",
    stat_tracked_lbl: "Dinero Monitoreado",
    stat_accuracy_val: "99.98%",
    stat_accuracy_lbl: "Precisión de Cálculo",
    stat_transactions_val: "15,000+",
    stat_transactions_lbl: "Transacciones Inteligentes",
    stat_rating_val: "4.9 / 5.0",
    stat_rating_lbl: "Satisfacción de Usuarios",

    // Bento Grid Features
    features_badge: "Funciones Potentes",
    features_title: "Todo lo que Necesitas para tu Libertad Financiera",
    features_desc:
      "Diseñado con principios arquitectónicos sólidos para eliminar el estrés financiero y aportar claridad total a tus finanzas.",
    bento1_title: "Agregación Multicuenta en una Sola Vista",
    bento1_desc:
      "Conecta tus cuentas de Ahorro, Corrientes, Efectivo e Inversiones. Cambia tu cuenta predeterminada con un toque y conoce tu patrimonio neto al instante.",
    bento1_badge1: "Corriente",
    bento1_badge2: "Ahorro",
    bento1_badge3: "Efectivo",
    bento2_title: "¿Me lo puedo permitir? Decisión al Instante",
    bento2_desc:
      "Ingresa el precio de lo que deseas comprar. Finora analiza tus finanzas y te da una respuesta verde o roja en segundos.",
    bento3_title: "Radar de Suscripciones",
    bento3_desc:
      "Marca compromisos recurrentes diarios, semanales, mensuales o anuales para que ninguna renovación te tome por sorpresa.",
    bento4_title: "Lector Inteligente de Extractos y Tickets",
    bento4_desc:
      "Arrastra tu extracto bancario en PDF o foto del ticket. Finora extrae y categoriza todo sin que tengas que teclear nada.",
    bento5_title: "Privacidad sin Compromisos",
    bento5_desc:
      "Tus datos jamás se venden ni comparten. Almacenamiento cifrado y autenticación de nivel corporativo para tu tranquilidad.",

    // Interactive Simulator
    sim_badge: "Simulador de Riqueza Interactivo",
    sim_title: "Descubre Cuánto Puedes Construir con",
    sim_subtitle:
      "El seguimiento adecuado del gasto suele recuperar entre un 15% y 30% en fugas de capital. Simula tu potencial a continuación.",
    sim_inflow_label: "Tus Ingresos Mensuales",
    sim_rate_label: "Objetivo de Ahorro Mensual",
    sim_monthly_savings: "Ahorro Mensual",
    sim_3y_label: "Patrimonio Proyectado a 3 Años",
    sim_5y_label: "Patrimonio Proyectado a 5 Años",
    sim_annual_label: "Ahorro Directo Anual",
    sim_compounding_note: "Calculado con un rendimiento compuesto prudente del 10% anual.",
    sim_cta: "Comenzar a Construir Patrimonio",

    // How It Works
    how_title: "Empieza en Menos de 60 Segundos",
    how_subtitle: "Sin configuraciones tediosas ni demoras bancarias.",
    step1_title: "Añade tus Cuentas",
    step1_desc: "Registra tus cuentas principales de ahorros o corrientes con sus saldos iniciales.",
    step2_title: "Registra y Categoriza",
    step2_desc: "Ingresa cobros y pagos con etiquetas de categorías y recordatorios periódicos.",
    step3_title: "Obtén Claridad Inmediata",
    step3_desc: "Visualiza gráficos de flujo de caja, monitorea tu ahorro neto y alcanza tus metas.",

    // FAQs
    faq_badge: "¿Dudas?",
    faq_title: "Preguntas Frecuentes",
    faq_subtitle: "Todo lo que necesitas saber sobre cómo gestionar tu dinero con Finora.",
    faq1_q: "¿Mis datos financieros son seguros y privados?",
    faq1_a:
      "Totalmente. Finora no solicita contraseñas bancarias ni números PIN de tarjetas. Todo se cifra de extremo a extremo con SSL y seguridad Clerk de nivel empresarial.",
    faq2_q: "¿Puedo administrar varias cuentas bancarias?",
    faq2_a:
      "¡Sí! Puedes añadir cuentas ilimitadas de Ahorro, Corrientes, Efectivo e Inversión y definir tu cuenta principal en cualquier momento.",
    faq3_q: "¿Cómo funciona el límite de gasto mensual?",
    faq3_a:
      "Fija una meta mensual con un clic. Finora calcula el porcentaje consumido y muestra avisos visuales automáticos.",
    faq4_q: "¿Puedo rastrear suscripciones y pagos fijos?",
    faq4_a:
      "Sí. Al registrar un gasto o ingreso, activa la opción 'Transacción Recurrente' para no olvidar nunca una renovación.",
    faq5_q: "¿Puedo exportar mis transacciones a Excel?",
    faq5_a:
      "Sí. Cada cuenta cuenta con un botón de exportación CSV compatible al 100% con Microsoft Excel y Google Sheets.",
    faq6_q: "¿Finora está disponible en móvil?",
    faq6_a:
      "¡Sí! Finora funciona como una Aplicación Web Progresiva (PWA) e instalable nativa para Android y iOS.",

    // CTA Banner
    cta_title: "¿Listo para Tomar el Control de tu Futuro Financiero?",
    cta_subtitle:
      "Únete a miles de personas que toman decisiones inteligentes cada día con Finora. Gratis para siempre.",
    cta_button: "Abrir Finora Gratis",

    // Dashboard
    dashboard_title: "Panel Financiero",
    dashboard_subtitle: "Resumen patrimonial y control multicuenta.",
    overview: "Resumen Financiero",
    your_accounts: "Tus Cuentas",
    add_account: "Crear Cuenta",
    monthly_limit: "Límite Mensual",
    total_amount: "Saldo Total",
    monthly_income: "Ingresos del Mes",
    monthly_expenses: "Gastos del Mes",
    net_savings: "Ahorro Neto",
    financial_health: "Puntuación de Salud Financiera",
    health_excellent: "Excelente Salud Financiera",
    quick_shortcuts: "Accesos Rápidos",

    // Account & Transactions
    current_balance: "Saldo Actual",
    back_dashboard: "Volver al Panel",
    total_inc: "Ingresos Totales",
    total_exp: "Gastos Totales",
    net_bal: "Saldo Neto",
    search_tx: "Buscar transacciones...",
    all_types: "Todos los tipos",
    all_tx: "Todas las transacciones",
    export_csv: "Exportar CSV",
    no_tx_found: "No se encontraron transacciones",

    // Transaction Form
    expense: "Gasto",
    income: "Ingreso",
    amount: "Cantidad",
    account: "Cuenta",
    category: "Categoría",
    date: "Fecha",
    description: "Descripción / Notas",
    recurring_tx: "Transacción Recurrente",
    recurring_desc: "Programar como pago periódico o suscripción",
    save_tx: "Guardar Transacción",
    update_tx: "Actualizar Transacción",
    cancel: "Cancelar",

    // Onboarding
    onboarding_welcome: "Bienvenido a Finora",
    onboarding_welcome_sub: "Tu sistema inteligente de gestión de riqueza personal.",
    onboarding_step1_title: "Elige tu Moneda Principal",
    onboarding_step1_desc: "Selecciona la moneda en la que deseas visualizar tus balances.",
    onboarding_step2_title: "Define tu Límite Mensual",
    onboarding_step2_desc: "Establece un presupuesto saludable con alertas automáticas.",
    onboarding_step3_title: "¡Todo Listo!",
    onboarding_step3_desc: "Añade tus cuentas y toma el control de tus finanzas.",
    next_step: "Siguiente",
    previous: "Atrás",
    finish: "Comenzar a usar Finora",
    skip: "Omitir Tour",

    // Footer & Legal
    footer_desc:
      "Finora es un sistema inteligente de finanzas personales diseñado para darte claridad, eliminar fugas de dinero y hacer crecer tu patrimonio.",
    nav_title: "Navegación",
    nav_home: "Inicio",
    nav_dashboard: "Panel",
    nav_add_tx: "Añadir Transacción",
    sec_title: "Seguridad y Privacidad",
    sec_badge: "Cifrado de Grado Bancario",
    sec_desc: "Tus datos financieros están cifrados y son completamente confidenciales.",
    privacy_policy: "Política de Privacidad",
    terms_of_service: "Términos del Servicio",
    all_rights_reserved: "Todos los derechos reservados.",
  },

  fr: {
    // Navigation & Common
    dashboard: "Tableau de bord",
    add_transaction: "Ajouter Transaction",
    login: "Connexion",
    signup: "S'inscrire",
    tour: "Visite",
    language: "Langue",
    currency: "Devise",

    // Hero
    hero_badge: "Finora 2.0 est en ligne • Smart Wealth OS",
    hero_title_1: "Maîtrisez votre argent avec",
    hero_title_gradient: "Intelligence en Temps Réel",
    hero_subtitle:
      "Ne perdez plus le fil de vos abonnements et comptes bancaires multiples. Finora vous offre un cockpit moderne pour piloter vos flux et développer votre patrimoine.",
    start_free: "Commencer Gratuitement",
    live_demo: "Voir la Démo",
    trust_free: "100% Gratuit pour Toujours",
    trust_privacy: "Sécurité Bancaire",
    trust_sync: "Synchronisation Instantanée",

    // Stats Bar
    stat_tracked_val: "25M€+",
    stat_tracked_lbl: "Fonds Suivis",
    stat_accuracy_val: "99.98%",
    stat_accuracy_lbl: "Précision de Calcul",
    stat_transactions_val: "15,000+",
    stat_transactions_lbl: "Transactions Intelligentes",
    stat_rating_val: "4.9 / 5.0",
    stat_rating_lbl: "Satisfaction Utilisateur",

    // Bento Grid Features
    features_badge: "Fonctionnalités Puissantes",
    features_title: "Tout Ce Dont Vous Avez Besoin pour Votre Sérénité",
    features_desc:
      "Conçu avec une architecture propre pour éliminer le stress financier et vous offrir une clarté instantanée sur vos finances.",
    bento1_title: "Agrégation Multi-Comptes en un Coup d'Œil",
    bento1_desc:
      "Connectez comptes courants, livrets d'épargne et liquidités. Changez de compte par défaut en un clic et suivez votre patrimoine net unifié.",
    bento1_badge1: "Courant",
    bento1_badge2: "Épargne",
    bento1_badge3: "Espèces",
    bento2_title: "Puis-je me le permettre ? Décision Immédiate",
    bento2_desc:
      "Indiquez le prix de ce que vous voulez acheter. Finora calcule si c'est sans danger et vous répond en vert ou rouge instantanément.",
    bento3_title: "Radar d'Abonnements",
    bento3_desc:
      "Enregistrez vos prélèvements récurrents pour ne jamais être pris au dépourvu lors d'un renouvellement.",
    bento4_title: "Lecteur Intelligent de Relevés & Reçus",
    bento4_desc:
      "Déposez votre relevé bancaire PDF ou ticket de caisse. Finora extrait et catégorise automatiquement chaque dépense.",
    bento5_title: "Confidentialité Sans Concession",
    bento5_desc:
      "Vos données ne sont jamais vendues ni cédées. Chiffrement complet et authentification d'entreprise garantie.",

    // Interactive Simulator
    sim_badge: "Simulateur de Patrimoine Interactif",
    sim_title: "Découvrez Votre Potentiel d'Enrichissement avec",
    sim_subtitle:
      "Un suivi rigoureux des dépenses révèle habituellement 15% à 30% d'économies cachées. Simulez vos résultats.",
    sim_inflow_label: "Vos Revenus Mensuels",
    sim_rate_label: "Objectif d'Épargne Mensuel",
    sim_monthly_savings: "Épargne Mensuelle",
    sim_3y_label: "Patrimoine Projeté à 3 Ans",
    sim_5y_label: "Patrimoine Projeté à 5 Ans",
    sim_annual_label: "Épargne Directe Annuelle",
    sim_compounding_note: "Calcul basé sur un taux d'intérêt composé moyen de 10% par an.",
    sim_cta: "Commencer à Épargner Gratuitement",

    // How It Works
    how_title: "Prêt en Moins de 60 Secondes",
    how_subtitle: "Aucune configuration laborieuse, aucun blocage.",
    step1_title: "Ajoutez Vos Comptes",
    step1_desc: "Renseignez vos comptes courants ou d'épargne avec leurs soldes de départ.",
    step2_title: "Saisissez & Catégorisez",
    step2_desc: "Ajoutez vos recettes et dépenses avec catégories et récurrences flexibles.",
    step3_title: "Gagnez une Clarté Instantanée",
    step3_desc: "Consultez vos graphiques de flux et atteignez vos objectifs sereinement.",

    // FAQs
    faq_badge: "Des Questions ?",
    faq_title: "Foire Aux Questions",
    faq_subtitle: "Tout ce qu'il faut savoir sur la gestion de votre budget avec Finora.",
    faq1_q: "Mes données financières sont-elles sécurisées ?",
    faq1_a:
      "Absolument. Finora ne demande ni ne conserve vos identifiants bancaires confidentiels. Tout est protégé par chiffrement SSL et sécurisé avec Clerk.",
    faq2_q: "Puis-je gérer plusieurs comptes bancaires ?",
    faq2_a:
      "Oui ! Vous pouvez ajouter autant de comptes que nécessaire (courant, épargne, espèces) et basculer votre compte par défaut à tout moment.",
    faq3_q: "Comment fonctionne le plafond mensuel de dépenses ?",
    faq3_a:
      "Vous définissez une limite mensuelle en un clic. Finora analyse votre rythme de dépenses et vous envoie des alertes claires.",
    faq4_q: "Puis-je suivre mes abonnements et factures récurrentes ?",
    faq4_a:
      "Oui, activez simplement l'option 'Transaction Récurrente' lors de la création d'une dépense.",
    faq5_q: "Puis-je exporter mes transactions pour Excel ?",
    faq5_a:
      "Oui ! Chaque compte dispose d'un bouton d'export CSV compatible avec Excel, Numbers et Google Sheets.",
    faq6_q: "Finora est-il disponible sur mobile ?",
    faq6_a:
      "Oui ! Finora fonctionne en tant que Progressive Web App (PWA) et application mobile installable en un clic.",

    // CTA Banner
    cta_title: "Prêt à Reprendre le Contrôle de Votre Avenir Financier ?",
    cta_subtitle:
      "Rejoignez des milliers d'utilisateurs qui optimisent leur argent au quotidien avec Finora. Gratuit pour toujours.",
    cta_button: "Ouvrir Finora Gratuitement",

    // Dashboard
    dashboard_title: "Tableau de Bord Financier",
    dashboard_subtitle: "Suivi en temps réel et gestion multi-comptes.",
    overview: "Aperçu Financier",
    your_accounts: "Vos Comptes",
    add_account: "Nouveau Compte",
    monthly_limit: "Limite Mensuelle",
    total_amount: "Montant Total",
    monthly_income: "Revenus Mensuels",
    monthly_expenses: "Dépenses Mensuelles",
    net_savings: "Épargne Nette",
    financial_health: "Score de Santé Financière",
    health_excellent: "Santé Financière Excellente",
    quick_shortcuts: "Raccourcis Rapides",

    // Account & Transactions
    current_balance: "Solde Actuel",
    back_dashboard: "Retour au Tableau de Bord",
    total_inc: "Revenus Totaux",
    total_exp: "Dépenses Totales",
    net_bal: "Solde Net",
    search_tx: "Rechercher des transactions...",
    all_types: "Tous les types",
    all_tx: "Toutes les transactions",
    export_csv: "Exporter CSV",
    no_tx_found: "Aucune transaction trouvée",

    // Transaction Form
    expense: "Dépense",
    income: "Revenu",
    amount: "Montant",
    account: "Compte",
    category: "Catégorie",
    date: "Date",
    description: "Description / Notes",
    recurring_tx: "Transaction Récurrente",
    recurring_desc: "Abonnement ou engagement régulier",
    save_tx: "Enregistrer la Transaction",
    update_tx: "Mettre à jour",
    cancel: "Annuler",

    // Onboarding
    onboarding_welcome: "Bienvenue sur Finora",
    onboarding_welcome_sub: "Votre cockpit de gestion financière intelligente.",
    onboarding_step1_title: "Choisissez Votre Devise",
    onboarding_step1_desc: "Sélectionnez votre devise par défaut.",
    onboarding_step2_title: "Définissez Votre Budget",
    onboarding_step2_desc: "Fixez un objectif de dépenses mensuelles avec alertes.",
    onboarding_step3_title: "Vous Êtes Prêt !",
    onboarding_step3_desc: "Ajoutez vos comptes et commencez à optimiser votre argent.",
    next_step: "Suivant",
    previous: "Retour",
    finish: "Explorer Finora",
    skip: "Passer",

    // Footer & Legal
    footer_desc:
      "Finora est un système intelligent de gestion financière conçu pour vous apporter clarté et sérénité budgétaire.",
    nav_title: "Navigation",
    nav_home: "Accueil",
    nav_dashboard: "Tableau de bord",
    nav_add_tx: "Ajouter Transaction",
    sec_title: "Sécurité & Confidentialité",
    sec_badge: "Chiffrement Bancaire",
    sec_desc: "Vos données financières sont chiffrées et strictement confidentielles.",
    privacy_policy: "Politique de Confidentialité",
    terms_of_service: "Conditions d'Utilisation",
    all_rights_reserved: "Tous droits réservés.",
  },

  de: {
    // Navigation & Common
    dashboard: "Übersicht",
    add_transaction: "Transaktion hinzufügen",
    login: "Anmelden",
    signup: "Registrieren",
    tour: "Tour",
    language: "Sprache",
    currency: "Währung",

    // Hero
    hero_badge: "Finora 2.0 ist live • Smart Wealth OS",
    hero_title_1: "Meistern Sie Ihre Finanzen mit",
    hero_title_gradient: "Echtzeit-Intelligenz",
    hero_subtitle:
      "Behalten Sie den Überblick über Abonnements und Bankguthaben. Finora bietet Ihnen die vollständige Kontrolle über Ihre Konten, Budgetgrenzen und Vermögensaufbau.",
    start_free: "Kostenlos Starten",
    live_demo: "Live-Demo Ansehen",
    trust_free: "100% Dauerhaft Kostenlos",
    trust_privacy: "Bankenstandard-Sicherheit",
    trust_sync: "Sofortige Synchronisierung",

    // Stats Bar
    stat_tracked_val: "25M€+",
    stat_tracked_lbl: "Verwaltetes Vermögen",
    stat_accuracy_val: "99.98%",
    stat_accuracy_lbl: "Berechnungsgenauigkeit",
    stat_transactions_val: "15,000+",
    stat_transactions_lbl: "Erfasste Buchungen",
    stat_rating_val: "4.9 / 5.0",
    stat_rating_lbl: "Kundenzufriedenheit",

    // Bento Grid Features
    features_badge: "Leistungsstarke Funktionen",
    features_title: "Alles, Was Sie für Finanzielle Freiheit Benötigen",
    features_desc:
      "Entwickelt nach modernen Architekturstandards, um finanzielle Sorgen zu beseitigen und Ihnen absolute Klarheit zu schenken.",
    bento1_title: "Multi-Account-Übersicht auf Einen Blick",
    bento1_desc:
      "Verknüpfen Sie Girokonten, Sparkonten, Bargeld und Investments. Wechseln Sie Ihr Hauptkonto mit einem Klick und sehen Sie Ihr gesamtes Vermögen in Echtzeit.",
    bento1_badge1: "Girokonto",
    bento1_badge2: "Sparkonto",
    bento1_badge3: "Bargeld",
    bento2_title: "Kann ich mir das leisten? Sofort-Entscheider",
    bento2_desc:
      "Geben Sie den Preis Ihres Wunschartikels ein. Finora prüft Ihre Finanzen und zeigt Ihnen auf einen Blick in Grün oder Rot, ob es sicher ist.",
    bento3_title: "Abo-Radar & Fälligkeiten",
    bento3_desc:
      "Markieren Sie wiederkehrende Zahlungen, um nie wieder von Verlängerungen überrascht zu werden.",
    bento4_title: "Intelligenter Kontoauszugs- & Beleg-Scanner",
    bento4_desc:
      "Laden Sie Ihren Bank-PDF-Auszug oder Kassenbon hoch. Finora erfasst und kategorisiert jede Ausgabe ohne manuelle Eingabe.",
    bento5_title: "Kompromissloser Datenschutz",
    bento5_desc:
      "Ihre Daten werden niemals verkauft. Höchste Verschlüsselungsstandards garantieren Ihre Privatsphäre.",

    // Interactive Simulator
    sim_badge: "Interaktiver Vermögens-Simulator",
    sim_title: "Sehen Sie, Was Sie mit Finora Erreichen Können",
    sim_subtitle:
      "Gezieltes Ausgaben-Tracking spart erfahrungsgemäß 15–30% unnötiger Kosten ein. Simulieren Sie Ihr Wachstum.",
    sim_inflow_label: "Ihr Monatliches Einkommen",
    sim_rate_label: "Monatliches Sparziel",
    sim_monthly_savings: "Monatliche Ersparnis",
    sim_3y_label: "Prognostiziertes Vermögen nach 3 Jahren",
    sim_5y_label: "Prognostiziertes Vermögen nach 5 Jahren",
    sim_annual_label: "Direkte Jahresersparnis",
    sim_compounding_note: "Kalkuliert mit einem vorsichtigen Zinseszins von 10% p.a.",
    sim_cta: "Kostenlos Vermögen Aufbauen",

    // How It Works
    how_title: "In Unter 60 Sekunden Startklar",
    how_subtitle: "Keine mühsame Einrichtung, keine bürokratischen Hürden.",
    step1_title: "Konten Anlegen",
    step1_desc: "Erfassen Sie Ihre Giro-, Spar- oder Barkonten mit dem aktuellen Stand.",
    step2_title: "Buchen & Kategorisieren",
    step2_desc: "Fügen Sie Einnahmen und Ausgaben mit Kategorien und Wiederholungen hinzu.",
    step3_title: "Sofortige Klarheit Gewinnen",
    step3_desc: "Verfolgen Sie Ihre Finanzströme in anschaulichen Diagrammen.",

    // FAQs
    faq_badge: "Fragen & Antworten",
    faq_title: "Häufig Gestellte Fragen",
    faq_subtitle: "Alles, was Sie über die Finanzverwaltung mit Finora wissen müssen.",
    faq1_q: "Sind meine Finanzdaten sicher und geschützt?",
    faq1_a:
      "Absolut. Finora fragt niemals nach sensiblen Bank-PINs oder Passwörtern. Alle Daten sind mit moderner SSL-Verschlüsselung und Clerk-Sicherheit geschützt.",
    faq2_q: "Kann ich mehrere Konten gleichzeitig verwalten?",
    faq2_a:
      "Ja! Sie können unbegrenzt Giro-, Spar-, Bargeld- und Anlagekonten führen und jederzeit ein Standardkonto festlegen.",
    faq3_q: "Wie funktioniert das Monatsbudget?",
    faq3_a:
      "Definieren Sie mit einem Klick Ihr Monatsziel. Finora visualisiert Ihren Verbrauch in Echtzeit mit farbigen Warnstufen.",
    faq4_q: "Kann ich wiederkehrende Abonnements erfassen?",
    faq4_a:
      "Ja. Aktivieren Sie bei Buchungen einfach 'Wiederkehrende Buchung' und wählen Sie den Turnus.",
    faq5_q: "Kann ich meine Daten für Excel exportieren?",
    faq5_a:
      "Ja! Jedes Konto bietet einen 1-Klick-CSV-Export für Excel, Numbers und Google Sheets.",
    faq6_q: "Gibt es Finora als mobile App?",
    faq6_a:
      "Ja! Finora ist als Progressive Web App (PWA) sowie als native Android-App direkt installierbar.",

    // CTA Banner
    cta_title: "Bereit, die Kontrolle über Ihre Finanzen zu Übernehmen?",
    cta_subtitle:
      "Schließen Sie sich Tausenden an, die jeden Tag klügere Finanzentscheidungen mit Finora treffen. Für immer kostenlos.",
    cta_button: "Finora Kostenlos Starten",

    // Dashboard
    dashboard_title: "Finanz-Dashboard",
    dashboard_subtitle: "Echtzeit-Vermögensverwaltung und Multi-Account-Übersicht.",
    overview: "Finanzübersicht",
    your_accounts: "Ihre Konten",
    add_account: "Neues Konto",
    monthly_limit: "Monatliches Limit",
    total_amount: "Gesamtbetrag",
    monthly_income: "Monatseinnahmen",
    monthly_expenses: "Monatsausgaben",
    net_savings: "Netto-Ersparnis",
    financial_health: "Finanzielle Gesundheit",
    health_excellent: "Hervorragende Finanzlage",
    quick_shortcuts: "Schnellbuchung",

    // Account & Transactions
    current_balance: "Aktueller Kontostand",
    back_dashboard: "Zurück zur Übersicht",
    total_inc: "Gesamteinnahmen",
    total_exp: "Gesamtausgaben",
    net_bal: "Nettosaldo",
    search_tx: "Buchungen durchsuchen...",
    all_types: "Alle Arten",
    all_tx: "Alle Buchungen",
    export_csv: "CSV Herunterladen",
    no_tx_found: "Keine Buchungen gefunden",

    // Transaction Form
    expense: "Ausgabe",
    income: "Einnahme",
    amount: "Betrag",
    account: "Konto",
    category: "Kategorie",
    date: "Datum",
    description: "Beschreibung / Notiz",
    recurring_tx: "Wiederkehrende Buchung",
    recurring_desc: "Als Dauerauftrag oder Abonnement markieren",
    save_tx: "Transaktion Speichern",
    update_tx: "Aktualisieren",
    cancel: "Abbrechen",

    // Onboarding
    onboarding_welcome: "Willkommen bei Finora",
    onboarding_welcome_sub: "Ihr intelligentes Finanz- und Vermögensverwaltungssystem.",
    onboarding_step1_title: "Währung Auswählen",
    onboarding_step1_desc: "Wählen Sie Ihre bevorzugte Standardwährung.",
    onboarding_step2_title: "Monatsbudget Festlegen",
    onboarding_step2_desc: "Setzen Sie ein Ziel mit automatischen Warnmeldungen.",
    onboarding_step3_title: "Alles Bereit!",
    onboarding_step3_desc: "Fügen Sie Ihre Konten hinzu und optimieren Sie Ihre Ausgaben.",
    next_step: "Weiter",
    previous: "Zurück",
    finish: "Finora Starten",
    skip: "Überspringen",

    // Footer & Legal
    footer_desc:
      "Finora ist Ihr intelligentes Finanzbetriebssystem für maximale Klarheit, Ausgabenkontrolle und nachhaltigen Vermögensaufbau.",
    nav_title: "Navigation",
    nav_home: "Startseite",
    nav_dashboard: "Übersicht",
    nav_add_tx: "Buchung Erfassen",
    sec_title: "Sicherheit & Datenschutz",
    sec_badge: "Bankenstandard-Verschlüsselung",
    sec_desc: "Ihre Finanzdaten sind verschlüsselt und absolut vertraulich.",
    privacy_policy: "Datenschutzerklärung",
    terms_of_service: "Nutzungsbedingungen",
    all_rights_reserved: "Alle Rechte vorbehalten.",
  },
};
