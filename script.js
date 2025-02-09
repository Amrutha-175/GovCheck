// JavaScript for dynamic functionalities

//GATE
const exams = [
  //Engineering Entrance Exams
  {
    name: "EAMCET (Engineering Agricultural and Medical Common Entrance Test)",
    category: "State-Level Entrance",
    ageLimit: "16-22 (General Category)",
    qualification: "10+2 with PCM/PCB",
    details: "State-level entrance exam for admission into engineering, agriculture, and medical courses in Andhra Pradesh and Telangana."
  },
  {name: "JEE Main (Joint Entrance Examination Main)",
    category: "National-Level Entrance",
    ageLimit: "No Age Limit (Attempt limit: 3 consecutive years)",
    qualification: "10+2 with PCM",
    details: "National-level exam for admission to NITs, IIITs, and other centrally funded institutions. It is also a qualifying exam for JEE Advanced."
  },
  {
    name: "JEE Advanced (Joint Entrance Examination Advanced)",
    category: "National-Level Entrance",
    ageLimit: "Less than 25 years (Relaxation for reserved categories)",
    qualification: "Qualified JEE Main and 10+2 with PCM",
    details: "Entrance exam for admission to IITs and some other prestigious institutions, focusing on advanced concepts in Physics, Chemistry, and Mathematics."
  },
  //GATE
  {name: "GATE (Graduate Aptitude Test in Engineering)",
    category: "Postgraduate Entrance and Recruitment",
    ageLimit: "No Age Limit",
    qualification: "Engineering Graduate or Final-Year Student",
    details: "GATE is an exam for admission to postgraduate programs (M.Tech/Ph.D.) in top institutions like IITs and NITs, and is also used for PSU recruitment in India."}, 
  // UPSC Exams
  { name: "Civil Services Examination (IAS, IPS, IFS, etc.)", 
   category: "UPSC", 
   ageLimit: "21-32", 
   qualification: "Graduate", 
   details: "One of the most prestigious exams in India conducted by UPSC for IAS, IPS, and IFS posts." },
  { name: "Indian Engineering Services (IES/ESE)", 
   category: "UPSC",
   ageLimit: "21-30",
   qualification: "Engineering Graduate",       
   details: "Exam for recruiting engineers for various government departments." },
  { name: "Combined Defence Services (CDS)", category: "UPSC", 
   ageLimit: "19-25",
   qualification: "Graduate",
   details: "For recruitment into the Indian Military Academy, Naval Academy, and Air Force Academy." },
  { name: "National Defence Academy (NDA)", category: "UPSC", 
   ageLimit: "16.5-19.5",
   qualification: "12th Pass", 
   details: "Exam conducted by UPSC for admission to the National Defense Academy." },
  { name: "Indian Economic Service (IES) & Indian Statistical Service (ISS)", 
   category: "UPSC", 
   ageLimit: "21-30", 
   qualification: "Postgraduate in Economics/Statistics", 
   details: "Specialized exams for roles in economics and statistics." },
  { name: "Combined Medical Services (CMS)", category: "UPSC", 
   ageLimit: "32", 
   qualification: "MBBS", 
   details: "Exam for recruitment of medical officers in various government departments." },
  { name: "Central Armed Police Forces (CAPF)", category: "UPSC", 
   ageLimit: "20-25", 
   qualification: "Graduate",
   details: "Exam for recruitment of Assistant Commandants in CAPF." },

  // SSC Exams
  { name: "SSC Combined Graduate Level (CGL)", category: "SSC", ageLimit: "18-32", qualification: "Graduate", details: "Exam for recruitment to various posts in ministries, departments, and organizations of the Government of India." },
  { name: "SSC Combined Higher Secondary Level (CHSL)", category: "SSC", ageLimit: "18-27", qualification: "12th Pass", details: "Exam for recruitment to lower divisional clerks, data entry operators, and similar roles." },
  { name: "SSC Multi-Tasking Staff (MTS)", category: "SSC", ageLimit: "18-27", qualification: "10th Pass", details: "Recruitment for Group C non-gazetted, non-ministerial posts in central government departments." },
  { name: "SSC Junior Engineer (JE)", category: "SSC", ageLimit: "30", qualification: "Engineering Diploma/Degree", details: "Exam for recruitment of junior engineers in various government departments." },
  { name: "SSC General Duty Constable (GD)", category: "SSC", ageLimit: "18-23", qualification: "10th Pass", details: "Recruitment exam for constable positions in CAPF, NIA, SSF, and Assam Rifles." },
  { name: "SSC Stenographer (Grade C & D)", category: "SSC", ageLimit: "18-30", qualification: "12th Pass", details: "Exam for stenographer positions in central government organizations." },

  // Banking and Insurance Exams
  { name: "IBPS Clerk", category: "Banking", ageLimit: "20-28", qualification: "Graduate", details: "Exam for recruitment of clerical staff in public sector banks." },
  { name: "IBPS Probationary Officer (PO)", category: "Banking", ageLimit: "20-30", qualification: "Graduate", details: "Exam for recruitment of Probationary Officers in various public sector banks." },
  { name: "IBPS Specialist Officer (SO)", category: "Banking", ageLimit: "20-30", qualification: "Graduate with Specialization", details: "Exam for specialist roles in IT, HR, Law, Marketing, etc., in banks." },
  { name: "SBI Clerk", category: "Banking", ageLimit: "20-28", qualification: "Graduate", details: "Exam for recruitment of clerical staff in State Bank of India." },
  { name: "SBI PO", category: "Banking", ageLimit: "21-30", qualification: "Graduate", details: "Exam for recruitment of Probationary Officers in State Bank of India." },
  { name: "RBI Assistant", category: "Banking", ageLimit: "20-28", qualification: "Graduate", details: "Exam for clerical positions in the Reserve Bank of India." },
  { name: "RBI Grade B Officer", category: "Banking", ageLimit: "21-30", qualification: "Graduate", details: "Exam for managerial roles in the Reserve Bank of India." },
  { name: "NABARD Grade A & B Officer", category: "Banking", ageLimit: "21-30", qualification: "Graduate/Postgraduate", details: "Exam for recruitment in the National Bank for Agriculture and Rural Development." },
  { name: "LIC AAO/ADO", category: "Insurance", ageLimit: "21-30", qualification: "Graduate", details: "Recruitment for Assistant Administrative Officer and Development Officer in LIC." },

  // Defence Exams
  { name: "Indian Army Technical Entry Scheme (TES)", category: "Defense", ageLimit: "16.5-19.5", qualification: "12th Pass with PCM", details: "Entry scheme for technical roles in the Indian Army." },
  { name: "Air Force Group X & Y", category: "Defense", ageLimit: "17-21", qualification: "12th Pass", details: "Exam for technical and non-technical roles in the Indian Air Force." },
  { name: "Central Reserve Police Force (CRPF) Exams", category: "Defense", ageLimit: "18-25", qualification: "10th Pass/Graduate", details: "Recruitment exams for various posts in CRPF." },
  { name: "Border Security Force (BSF) Exams", category: "Defense", ageLimit: "18-25", qualification: "10th Pass/Graduate", details: "Recruitment exams for roles in BSF." },

  // Railways Exams
  { name: "RRB NTPC (Non-Technical Popular Categories)", category: "Railways", ageLimit: "18-30", qualification: "Graduate", details: "Exam for various non-technical posts in Indian Railways." },
  { name: "RRB Group D", category: "Railways", ageLimit: "18-33", qualification: "10th Pass", details: "Exam for Level 1 posts in Indian Railways." },
  { name: "RRB JE (Junior Engineer)", category: "Railways", ageLimit: "18-33", qualification: "Engineering Diploma/Degree", details: "Recruitment exam for junior engineers in Indian Railways." },
  { name: "RRB ALP (Assistant Loco Pilot)", category: "Railways", ageLimit: "18-30", qualification: "10th Pass with ITI", details: "Exam for recruitment of Assistant Loco Pilots in Indian Railways." },

  // Teaching Exams
  { name: "CTET (Central Teacher Eligibility Test)", category: "Teaching", ageLimit: "No Age Limit", qualification: "Graduate with B.Ed", details: "Eligibility test for teaching positions in central government schools." },
  { name: "State TET (Teacher Eligibility Test)", category: "Teaching", ageLimit: "No Age Limit", qualification: "Graduate with B.Ed", details: "Eligibility test for teaching positions in state government schools." },
  { name: "KVS (Kendriya Vidyalaya Sangathan) Exams", category: "Teaching", ageLimit: "18-40", qualification: "Graduate with B.Ed", details: "Exam for teaching and non-teaching positions in Kendriya Vidyalayas." },
  { name: "NVS (Navodaya Vidyalaya Samiti) Exams", category: "Teaching", ageLimit: "18-40", qualification: "Graduate with B.Ed", details: "Exam for teaching and administrative positions in Navodaya Vidyalayas." },
  { name: "UGC NET (National Eligibility Test)", category: "Teaching", ageLimit: "No Age Limit", qualification: "Postgraduate", details: "Eligibility test for Assistant Professorship and Junior Research Fellowship." },
  {
  name: "DSC (District Selection Committee) Exam",
  category: "Teaching",
  ageLimit: "18-44",
  qualification: "TET Qualified with D.El.Ed/B.Ed",
  details: "Recruitment exam for primary, secondary, and higher secondary teachers in government schools."
},

  // State PSC Exams
  { name: "MRO (Mandal Revenue Officer)", category: "State PSC", ageLimit: "18-42", qualification: "Graduate", details: "Exam for administrative positions under State Public Service Commissions." },
  { name: "APPSC (Andhra Pradesh PSC)", category: "State PSC", ageLimit: "18-42", qualification: "Graduate", details: "Various exams conducted by the Andhra Pradesh Public Service Commission." },
  { name: "TSPSC (Telangana PSC)", category: "State PSC", ageLimit: "18-44", qualification: "Graduate", details: "Various exams conducted by the Telangana State Public Service Commission." },
  { name: "MPSC (Maharashtra PSC)", category: "State PSC", ageLimit: "18-38", qualification: "Graduate", details: "Exams conducted by the Maharashtra Public Service Commission for state government jobs." },
  { name: "TNPSC (Tamil Nadu PSC)", category: "State PSC", ageLimit: "18-30", qualification: "Graduate", details: "Exams conducted by the Tamil Nadu Public Service Commission for state government jobs." },
  { name: "KPSC (Karnataka PSC)", category: "State PSC", ageLimit: "18-35", qualification: "Graduate", details: "Various exams conducted by the Karnataka Public Service Commission." },
  { name: "UPPSC (Uttar Pradesh PSC)", category: "State PSC", ageLimit: "21-40", qualification: "Graduate", details: "Exams conducted by the Uttar Pradesh Public Service Commission for state government jobs." },
{ name: "State Police Constable Exams", category: "Police", ageLimit: "18-28", qualification: "12th Pass", details: "Recruitment exams for constable positions in state police departments." },
  { name: "State Police Sub-Inspector (SI) Exams", category: "Police", ageLimit: "21-30", qualification: "Graduate", details: "Exams for recruitment of Sub-Inspectors in state police forces." },
  { name: "Judiciary Exams for Civil Judge and Magistrates", category: "Judiciary", ageLimit: "21-35", qualification: "Law Graduate", details: "Exams for recruitment as Civil Judge or Magistrate under State Judicial Services." },
  { name: "Public Prosecutor Exams", category: "Judiciary", ageLimit: "21-35", qualification: "Law Graduate", details: "Exams for recruiting public prosecutors for legal cases in government departments." },

  // Public Sector Undertaking (PSU) Recruitment
  { name: "GATE-based PSUs", category: "PSU", ageLimit: "No Age Limit (Varies)", qualification: "Engineering Graduate", details: "Recruitment for PSUs like ONGC, BHEL, NTPC based on GATE scores." },
  { name: "ISRO Scientist/Engineer Exams", category: "PSU", ageLimit: "28-35", qualification: "Engineering Graduate", details: "Exams for recruitment of scientists/engineers in ISRO." },
  { name: "DRDO Scientist/Technical Staff Recruitment", category: "PSU", ageLimit: "28-35", qualification: "Graduate/Postgraduate in Engineering/Science", details: "Exams for recruiting scientists and technical staff in DRDO." },

  // Other Popular Government Exams
  { name: "Indian Post GDS (Gramin Dak Sevak) Exams", category: "Miscellaneous", ageLimit: "18-40", qualification: "10th Pass", details: "Recruitment for Gramin Dak Sevaks in Indian Post Offices." },
  { name: "FCI (Food Corporation of India) Exams", category: "Miscellaneous", ageLimit: "18-28", qualification: "Graduate", details: "Recruitment for positions like Assistant Grade and Junior Engineer in FCI." },
  { name: "ESIC (Employees' State Insurance Corporation) Exams", category: "Miscellaneous", ageLimit: "21-30", qualification: "Graduate", details: "Recruitment for roles like Upper Division Clerk and Social Security Officer in ESIC." },
  { name: "EPFO (Employees' Provident Fund Organization) Exams", category: "Miscellaneous", ageLimit: "21-30", qualification: "Graduate", details: "Exams for recruitment as Enforcement Officer and Assistants in EPFO." },
//const governmentExams = [
  // Administrative and Financial Services
  { name: "EPFO Assistant/Enforcement Officer", category: "Administrative and Financial Services", ageLimit: "20-27", qualification: "Graduate", details: "Exams for recruitment as Assistant/Enforcement Officer in EPFO." },
  { name: "CAG Exams (Assistant Audit Officer)", category: "Administrative and Financial Services", ageLimit: "21-30", qualification: "Graduate", details: "Exams for positions like Assistant Audit Officer in Comptroller and Auditor General of India." },
  { name: "SSC CPO (Central Police Organization)", category: "Police", ageLimit: "20-25", qualification: "Graduate", details: "Exams for recruitment to the role of Sub-Inspector in Delhi Police, CISF, CRPF, etc." },
  { name: "IBPS SO (Agriculture Field Officer)", category: "Agriculture Sector", ageLimit: "20-30", qualification: "Graduate in Agriculture or related field", details: "Exams for recruitment of Agriculture Field Officers in various banks." },
  { name: "NABARD Development Assistant", category: "Agriculture Sector", ageLimit: "18-35", qualification: "Graduate", details: "Exams for recruitment to the role of Development Assistant in NABARD." },
  { name: "State Agriculture Officer Exams", category: "Agriculture Sector", ageLimit: "21-40", qualification: "Graduate in Agriculture or related field", details: "Exams for recruitment of Agriculture Officers in state agricultural departments." },
  { name: "Fertilizer Corporation of India Exams", category: "Agriculture Sector", ageLimit: "18-30", qualification: "Graduate", details: "Exams for recruitment in the Fertilizer Corporation of India for various roles." },

  // Health and Medical Services
  {  name: "NEET",
    category: "Health and Medical Services",
    ageLimit: "17-25",
    qualification: "12th Pass",
    details: "National Eligibility cum Entrance Test for medical courses."},
   { name: "AIIMS Recruitment (Staff Nurse, Technician, etc.)", category: "Health and Medical Services", ageLimit: "18-30", qualification: "12th/Graduate", details: "Exams for staff nurse, technician, and other positions in AIIMS." },
  { name: "NEET-PG for Central Health Services", category: "Health and Medical Services", ageLimit: "No limit", qualification: "MBBS", details: "Exams for Post-Graduate medical positions in Central Health Services." },
  { name: "ESIC Medical Officer Recruitment", category: "Health and Medical Services", ageLimit: "21-35", qualification: "MBBS", details: "Recruitment exams for Medical Officer roles in Employees' State Insurance Corporation." },
  { name: "State Health Department Exams (Doctors, Pharmacists, and Lab Technicians)", category: "Health and Medical Services", ageLimit: "21-35", qualification: "MBBS/Pharmacy/12th", details: "Exams for recruitment to various medical positions in state health departments." },
 {
    name: "NHM (National Health Mission) Recruitment",
    category: "Health and Medical Services",
    ageLimit: "21-35",
    qualification: "MBBS/BDS/Nursing/Pharmacy",
    details: "Recruitment for various medical and paramedical roles under the National Health Mission."
  },

  // Research and Scientific Organizations
  { name: "BARC OCES/DGFS", category: "Research and Scientific Organizations", ageLimit: "18-26", qualification: "B.Tech/M.Tech", details: "Exams for recruitment of scientific officers in Bhabha Atomic Research Centre." },
  { name: "CSIR NET", category: "Research and Scientific Organizations", ageLimit: "No limit", qualification: "Master's Degree", details: "National eligibility test for Junior Research Fellowships and Lectureships in science." },
  { name: "ICMR JRF", category: "Research and Scientific Organizations", ageLimit: "No limit", qualification: "M.Sc in Life Sciences or related field", details: "Exams for Junior Research Fellowships in Indian Council of Medical Research." },
  { name: "ISRO Technician and Assistant Recruitment", category: "Research and Scientific Organizations", ageLimit: "18-35", qualification: "12th/Graduate in Engineering or related field", details: "Exams for recruitment of Technicians and Assistants in ISRO." },
  { name: "DRDO Scientist/Technical Staff", category: "Research and Scientific Organizations", ageLimit: "21-35", qualification: "Graduate/Post-Graduate in Engineering or related field", details: "Exams for recruitment of Scientists and Technical Staff in DRDO." },
  {
    name: "ICAR (Indian Council of Agricultural Research) Exams",
    category: "Research and Scientific Organizations",
    ageLimit: "21-35",
    qualification: "Graduate/Postgraduate in Agriculture or related fields",
    details: "Recruitment for scientists and researchers in ICAR institutes."
  },
  
  // Foreign Services and Language-Based Exams
  { name: "Indian Foreign Service (IFS) (via UPSC)", category: "Foreign Services", ageLimit: "21-32", qualification: "Graduate", details: "Exams for recruitment to the Indian Foreign Service through UPSC." },
  { name: "Foreign Language Interpreter Exams (Defense or Ministry roles)", category: "Foreign Services", ageLimit: "21-30", qualification: "Graduate in any language", details: "Exams for recruitment of interpreters in foreign languages for defense or ministry roles." },
  {
    name: "Ministry of External Affairs (MEA) Exams",
    category: "Foreign Services",
    ageLimit: "21-35",
    qualification: "Graduate",
    details: "Recruitment for various roles in the Ministry of External Affairs."
  },

  // State-Level Recruitment Exams
  { name: "State Forest Officer/Forest Guard Exams", category: "State-Level Recruitment", ageLimit: "21-35", qualification: "Graduate", details: "Exams for recruitment as Forest Officers and Forest Guards in state forest departments." },
  { name: "State Cooperative Bank Exams", category: "State-Level Recruitment", ageLimit: "18-30", qualification: "Graduate", details: "Exams for recruitment to various positions in State Cooperative Banks." },
  { name: "State Electricity Board Exams (e.g., TANGEDCO, MAHADISCOM)", category: "State-Level Recruitment", ageLimit: "18-35", qualification: "Graduate", details: "Exams for recruitment in State Electricity Boards for various engineering and non-engineering roles." },

  // University and Institute-Based Recruitment
  { name: "University Administrative Staff Exams (Registrar, Assistant, etc.)", category: "University and Institute-Based Recruitment", ageLimit: "21-40", qualification: "Graduate/Post-Graduate", details: "Exams for recruitment to administrative roles in universities like registrar, assistant, etc." },
  { name: "IGNOU and Central University Recruitment Exams", category: "University and Institute-Based Recruitment", ageLimit: "21-35", qualification: "Graduate/Post-Graduate", details: "Exams for recruitment in IGNOU and various Central Universities for faculty and administrative positions." },

  // IT and Communication Sector
  { name: "NIC (National Informatics Centre) Recruitment", category: "IT and Communication Sector", ageLimit: "21-30", qualification: "B.Tech/MCA", details: "Exams for recruitment of various IT professionals in the National Informatics Centre." },
  { name: "BSNL JTO (Junior Telecom Officer)", category: "IT and Communication Sector", ageLimit: "21-30", qualification: "B.Tech in Telecommunications or related field", details: "Exams for recruitment to Junior Telecom Officer positions in BSNL." },

  // Tourism and Archaeology Sector
  { name: "ASI (Archaeological Survey of India) Exams", category: "Tourism and Archaeology Sector", ageLimit: "21-35", qualification: "Graduate/Post-Graduate in Archaeology or related field", details: "Exams for recruitment to various positions in Archaeological Survey of India." },
  { name: "Tourism Department Recruitment", category: "Tourism and Archaeology Sector", ageLimit: "21-35", qualification: "Graduate in Tourism or related field", details: "Exams for recruitment in various roles in the Tourism Department." },

  // Special Category Exams
  { name: "Ex-Servicemen Quota Exams", category: "Special Category Exams", ageLimit: "Varies", qualification: "Depends on the job", details: "Exams for retired defense personnel to rejoin government services." },
  { name: "Deputation-Based Government Jobs", category: "Special Category Exams", ageLimit: "Varies", qualification: "Depends on the job", details: "Recruitment for government roles through deputation (central/state services)." },
  { name: "Court Clerk Recruitment (Supreme Court/High Court)", category: "Special Category Exams", ageLimit: "18-30", qualification: "Graduate", details: "Exams for recruitment as court clerks in the Supreme Court or High Courts." },

  // International Organization-Based Government Jobs
  { name: "UN Jobs through Government Nomination", category: "International Organization-Based Government Jobs", ageLimit: "Varies", qualification: "Graduate/Post-Graduate", details: "Exams for recruitment to the United Nations via government nomination." },
  { name: "World Bank/IMF Indian Civil Servant Exams", category: "International Organization-Based Government Jobs", ageLimit: "Varies", qualification: "Graduate/Post-Graduate", details: "Exams for recruitment to the World Bank or IMF as an Indian Civil Servant." },

  // Miscellaneous Exams
  { name: "Municipal Corporation Recruitment (Engineers, Health Officers, etc.)", category: "Other Miscellaneous Exams", ageLimit: "18-40", qualification: "Varies by role", details: "Recruitment exams for municipal corporation roles like engineers, health officers, etc." },
  { name: "Lok Sabha and Rajya Sabha Secretariat Exams", category: "Other Miscellaneous Exams", ageLimit: "18-35", qualification: "Graduate", details: "Exams for various positions in the Lok Sabha and Rajya Sabha Secretariat." },
  { name: "Airport Authority of India (AAI) Recruitment Exams", category: "Other Miscellaneous Exams", ageLimit: "18-30", qualification: "12th/Graduate", details: "Exams for recruitment in Airport Authority of India for various positions." },
  { name: "Delhi Metro Rail Corporation (DMRC) Recruitment", category: "Other Miscellaneous Exams", ageLimit: "18-28", qualification: "12th/Graduate", details: "Exams for recruitment to various roles in Delhi Metro Rail Corporation." },
  { name: "State Warehousing Corporation Exams", category: "Other Miscellaneous Exams", ageLimit: "18-40", qualification: "Graduate", details: "Exams for recruitment in State Warehousing Corporations for various positions." },

  // Legal and Judiciary Sector
  { name: "Law Clerk Recruitment (Supreme Court and High Courts)", category: "Legal and Judiciary", ageLimit: "21-30", qualification: "Law Graduate", details: "Exams for recruitment as Law Clerks in Supreme Court and High Courts." },
  { name: "Public Prosecutor Exams", category: "Legal and Judiciary", ageLimit: "21-35", qualification: "Law Graduate", details: "Exams for recruiting public prosecutors for legal cases in government departments." },
  { name: "District Judge Recruitment Exams (via State Judicial Services)", category: "Legal and Judiciary", ageLimit: "21-35", qualification: "Law Graduate", details: "Exams for recruitment of District Judges through State Judicial Services." },
  { name: "Legal Assistant in PSUs", category: "Legal and Judiciary", ageLimit: "21-35", qualification: "Law Graduate", details: "Exams for recruitment of Legal Assistants in Public Sector Undertakings (PSUs)." },
  
  // Finance and Taxation
  { name: "Income Tax Department Recruitment", category: "Finance and Taxation", ageLimit: "18-30", qualification: "Graduate", details: "Exams for various positions like Tax Assistant, Inspector in the Income Tax Department." },
  { name: "Customs Department Exams", category: "Finance and Taxation", ageLimit: "18-30", qualification: "Graduate", details: "Exams for recruitment in Customs Department for various positions." },
  { name: "GST Inspector Recruitment", category: "Finance and Taxation", ageLimit: "18-30", qualification: "Graduate", details: "Exams for recruitment of GST Inspectors." },

  // Ministry and Administrative Jobs
  { name: "Ministry of Home Affairs (IB ACIO, Security Assistant)", category: "Ministry and Administrative Jobs", ageLimit: "18-27", qualification: "Graduate", details: "Exams for recruitment in Intelligence Bureau (IB) and Ministry of Home Affairs for various roles." },
  { name: "Ministry of External Affairs (Staff Selection)", category: "Ministry and Administrative Jobs", ageLimit: "21-35", qualification: "Graduate", details: "Exams for recruitment to various roles in the Ministry of External Affairs." },
  { name: "NITI Aayog Recruitment", category: "Ministry and Administrative Jobs", ageLimit: "21-35", qualification: "Graduate/Post-Graduate", details: "Exams for recruitment in NITI Aayog for various policy roles." },

  // Energy and Power Sector
  { name: "Coal India Limited (CIL) Recruitment", category: "Energy and Power Sector", ageLimit: "21-30", qualification: "Graduate", details: "Exams for recruitment to various roles in Coal India Limited." },
  { name: "Power Grid Corporation Recruitment (through GATE)", category: "Energy and Power Sector", ageLimit: "21-28", qualification: "B.Tech", details: "Recruitment exams for engineers in Power Grid Corporation through GATE." },
  { name: "NTPC Executive Trainee Recruitment", category: "Energy and Power Sector", ageLimit: "21-27", qualification: "B.Tech", details: "Exams for recruitment of Executive Trainees in NTPC." },

  // Transport and Logistics
  { name: "National Highways Authority of India (NHAI) Recruitment", category: "Transport and Logistics", ageLimit: "21-35", qualification: "Graduate", details: "Exams for recruitment to various positions in NHAI." },
  { name: "Indian Ports and Shipping Jobs", category: "Transport and Logistics", ageLimit: "21-35", qualification: "Graduate", details: "Exams for recruitment in Indian Ports and Shipping for various roles." },
  { name: "Air India Recruitment (Ground Staff, Engineers)", category: "Transport and Logistics", ageLimit: "18-30", qualification: "12th/Graduate", details: "Exams for recruitment of ground staff, engineers, and other roles in Air India." },

  // Environment and Forestry
  { name: "Indian Forest Service (via UPSC)", category: "Environment and Forestry", ageLimit: "21-32", qualification: "Graduate in Forestry/Biology", details: "Exams for recruitment to Indian Forest Service through UPSC." },
  { name: "State Forest Department Exams", category: "Environment and Forestry", ageLimit: "21-30", qualification: "Graduate in Forestry or related field", details: "Exams for recruitment of Forest Rangers, Forest Guards in state forest departments." },
  { name: "Wildlife Institute of India Recruitment", category: "Environment and Forestry", ageLimit: "21-35", qualification: "Graduate in Biology/Wildlife Science", details: "Exams for recruitment to various positions in the Wildlife Institute of India." },

  // Education and Research
  { name: "ICHR (Indian Council of Historical Research) Recruitment", category: "Education and Research", ageLimit: "21-35", qualification: "Post-Graduate in History", details: "Exams for recruitment of researchers and scholars in ICHR." },
  { name: "NCERT Recruitment", category: "Education and Research", ageLimit: "21-35", qualification: "Graduate/Post-Graduate", details: "Exams for recruitment of teachers, researchers in NCERT." },
  { name: "PRL (Physical Research Laboratory) Jobs", category: "Education and Research", ageLimit: "21-35", qualification: "Post-Graduate in Science/Engineering", details: "Exams for recruitment to various roles in PRL." },

  // Regional and Local Government Exams
  { name: "Gram Panchayat Recruitment", category: "Regional and Local Government Exams", ageLimit: "18-35", qualification: "Varies", details: "Exams for various roles in Gram Panchayats such as clerks and village officers." },
  { name: "Block Development Officer (BDO)", category: "Regional and Local Government Exams", ageLimit: "21-40", qualification: "Graduate", details: "Exams for recruitment of Block Development Officers at the district level." },
  { name: "Municipality Jobs", category: "Regional and Local Government Exams", ageLimit: "18-35", qualification: "Varies", details: "Exams for recruitment in various roles like Health Inspectors, Sanitation Officers in municipalities." },

  // Media and Communication
  { name: "Prasar Bharati (DD/AIR) Recruitment", category: "Media and Communication", ageLimit: "21-35", qualification: "Graduate", details: "Exams for recruitment in Prasar Bharati for positions in DD and All India Radio." },
  { name: "Press Information Bureau (PIB) Exams", category: "Media and Communication", ageLimit: "21-35", qualification: "Graduate", details: "Exams for recruitment to various communication and media roles in PIB." },

  // Cooperative Societies and Rural Development
  { name: "State Cooperative Bank Exams", category: "Cooperative Societies and Rural Development", ageLimit: "18-30", qualification: "Graduate", details: "Exams for recruitment in State Cooperative Banks for roles like Clerk, Manager." },
  { name: "NABARD Grade B for Rural Development", category: "Cooperative Societies and Rural Development", ageLimit: "21-30", qualification: "Graduate/Post-Graduate", details: "Exams for Grade B recruitment in NABARD for rural development roles." },

  // Space and Astronomy
  { name: "Vikram Sarabhai Space Centre (VSSC) Recruitment", category: "Space and Astronomy", ageLimit: "21-30", qualification: "B.Tech/M.Tech in Engineering", details: "Exams for recruitment of scientific and technical staff in VSSC." },
  { name: "Indian Institute of Astrophysics (IIA) Jobs", category: "Space and Astronomy", ageLimit: "21-35", qualification: "Post-Graduate in Astrophysics/Physics", details: "Exams for recruitment in the Indian Institute of Astrophysics for research positions." },
  // Other Exams
  { name: "Indian Post GDS (Gramin Dak Sevak) Exams", category: "Other", ageLimit: "18-40", qualification: "10th Pass", details: "Recruitment for postal services in rural areas." },
  { name: "FCI (Food Corporation of India) Exams", category: "Other", ageLimit: "18-27", qualification: "Graduate", details: "Exam for recruitment to various posts in the Food Corporation of India." }
];

// Function to populate the exam dropdown
function populateExamDropdown() {
  const examDropdown = document.getElementById("exam");
  exams.forEach((exam) => {
    const option = document.createElement("option");
    option.value = exam.name;
    option.textContent = exam.name;
    examDropdown.appendChild(option);
  });
}

// Function to check eligibility
function checkEligibility() {
  const name = document.getElementById("name").value.trim();
  const selectedExam = document.getElementById("exam").value;
  const dob = document.getElementById("dob").value;
  const qualification = document.getElementById("qualification").value.trim();
  const category = document.getElementById("category").value.trim();
  const resultDiv = document.getElementById("eligibilityResult");

  // Validate inputs
  if (!name || !selectedExam || !dob || !qualification || !category) {
    alert("Please fill out all fields!");
    return;
  }

  // Calculate age
  const dobDate = new Date(dob);
  const today = new Date();
  let age = today.getFullYear() - dobDate.getFullYear();
  const monthDiff = today.getMonth() - dobDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
    age--;
  }

  // Find the selected exam
  const exam = exams.find((exam) => exam.name === selectedExam);

  if (!exam) {
    resultDiv.innerHTML = "<p>Selected exam not found.</p>";
    return;
  }

  // Parse and validate age limit
  const [minAge, maxAge] = exam.ageLimit.split("-").map(Number);

  // Adjust max age for OBC category
  const maxAgeAdjusted = category === "OBC" ? maxAge + 3 : maxAge;

  const isAgeEligible =
    (!isNaN(minAge) ? age >= minAge : true) &&
    (!isNaN(maxAgeAdjusted) ? age <= maxAgeAdjusted : true);

  const isQualificationEligible =
    exam.qualification.toLowerCase().includes(qualification.toLowerCase());

  // Display results
  resultDiv.innerHTML = `<h3>Eligibility Results for ${name}:</h3>`;
  resultDiv.innerHTML += `
    <p><strong>${exam.name}</strong> (${exam.category})</p>
    <p>Age Limit: ${exam.ageLimit} ${category === "OBC" ? `(Relaxation up to ${maxAgeAdjusted} for OBC)` : ""}</p>
    <p>Qualification: ${exam.qualification}</p>
    <p>${exam.details}</p>
  `;

  if (!isAgeEligible) {
    resultDiv.innerHTML += `
      <p style="color: red;">You are not eligible because your age (${age} years) does not meet the requirement (${minAge}-${maxAgeAdjusted} years).</p>
      <p style="color: red;">😔 Better luck next time! Keep preparing for your future exams.</p>
    `;
  } else if (!isQualificationEligible) {
    resultDiv.innerHTML += `
      <p style="color: red;">You are not eligible because your qualification (${qualification}) does not meet the requirement (${exam.qualification}).</p>
      <p style="color: red;">😔 Better luck next time! Consider upgrading your qualifications.</p>
    `;
  } else {
    resultDiv.innerHTML += `
      <p style="color: green;">🎉 Congratulations! You are eligible for this exam!</p>
      <p style="color: green;">😊 Best of luck for your preparation and success!</p>
    `;
  }
}

// Populate exam dropdown on page load
window.onload = populateExamDropdown;
// Function to handle search functionality
document.getElementById("searchBar").addEventListener("keyup", function() {
  const searchTerm = this.value.toLowerCase().trim();
  const filteredExams = exams.filter(exam => 
    exam.name.toLowerCase().includes(searchTerm) || 
    exam.category.toLowerCase().includes(searchTerm)
  );
  
  const examInfo = document.getElementById("examInfo");
  examInfo.innerHTML = "<h3>Search Results:</h3>";
  
  if (filteredExams.length > 0) {
    filteredExams.forEach(exam => {
      examInfo.innerHTML += `<div class='exam-card'>
        <h4>${exam.name}</h4>
        <p>${exam.details}</p>
        <p><strong>Age Limit:</strong> ${exam.ageLimit}</p>
        <p><strong>Qualification:</strong> ${exam.qualification}</p>
      </div>`;
    });
  } else {
    examInfo.innerHTML = "<p>No exams found matching the search criteria.</p>";
  }
  //
  function searchExams() {
  const searchInput = document.getElementById('searchBar').value.toLowerCase();
  const examItems = document.querySelectorAll('.exam-item');

  examItems.forEach(item => {
    const examName = item.getAttribute('data-name').toLowerCase();
    if (examName.includes(searchInput)) {
      item.style.display = 'block'; // Show the exam item if search matches
    } else {
      item.style.display = 'none'; // Hide the exam item if search doesn't match
    }
  });
}
//
});