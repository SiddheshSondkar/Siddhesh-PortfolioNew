import React from 'react';
import { jsPDF } from 'jspdf';
import { Mail, Phone, Github, Linkedin, Database, Code, BarChart3, Cpu, GraduationCap, Briefcase, Award, ExternalLink, FolderGit2, ChevronRight, Download, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

// --- ANIMATION CONFIGS ---
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// --- SUB-COMPONENTS (BLOCKS) ---

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900 hidden sm:block">Siddhesh Sondkar</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-600">
          <a href="#home" className="hover:text-emerald-600 transition-colors">Home</a>
          <a href="#skills" className="hover:text-emerald-600 transition-colors">Expertise</a>
          <a href="#project" className="hover:text-emerald-600 transition-colors">Project</a>
          <a href="#experience" className="hover:text-emerald-600 transition-colors">Experience</a>
        </div>

        <div className="flex items-center gap-2">
          <a href="tel:+919168154518" className="btn-primary py-2 px-4 text-sm flex items-center gap-2">
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">Call Me</span>
          </a>
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`h-0.5 bg-current transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-current transition-all ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl z-50"
        >
          <a href="#home" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900">Home</a>
          <a href="#skills" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900">Expertise</a>
          <a href="#project" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900">Project</a>
          <a href="#experience" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900">Experience</a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const handleDownloadCV = () => {
    // This will download the file named 'resume.pdf' from your project root.
    // Please make sure to upload your PDF file and rename it to 'resume.pdf'.
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.setAttribute('download', 'Siddhesh_Sondkar_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="home" className="pt-20 pb-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-8 space-y-8"
      >
        <div className="space-y-4">
          <span className="section-label">SQL Developer & Database Engineer</span>
          <h1 className="text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.05]">
            Building Scalable <span className="text-emerald-500">Database</span> <br />
            Solutions.
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
            I specialize in designing high-performance database systems and optimizing complex SQL workflows to drive efficient data-driven applications.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <a href="#project" className="btn-primary flex items-center gap-2">
            Explore MahaPanchayat <ChevronRight className="w-4 h-4" />
          </a>
          <a href="tel:+919168154518" className="btn-secondary flex items-center gap-2">
            Call Me <Phone className="w-4 h-4" />
          </a>
          <button onClick={handleDownloadCV} className="p-4 text-slate-500 hover:text-emerald-600 transition-colors flex items-center gap-2 text-sm font-bold">
            <Download className="w-4 h-4" /> CV
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-8 pt-8 border-t border-slate-100 text-sm font-medium text-slate-500">
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-emerald-500" /> siddheshsondkar100@gmail.com
          </div>
          <a href="tel:+919168154518" className="flex items-center gap-2 hover:text-emerald-600 transition-colors">
            <Phone className="w-4 h-4 text-emerald-500" /> +91 91681 54518
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-emerald-500" /> Pune, India
          </div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="lg:col-span-4 flex justify-center lg:justify-end"
      >
        <div className="relative">
          <div className="w-48 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl bg-slate-100 group">
            <img 
              src="/profile.jpg" 
              alt="Siddhesh Sondkar" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center text-white shadow-lg">
            <Database className="w-6 h-6" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const Expertise = () => {
  const skills = [
    {
      category: "SQL Development",
      icon: <Code className="w-6 h-6" />,
      items: ["T-SQL (MS SQL Server)", "Stored Procedures", "Views & Functions", "CTEs & Joins"]
    },
    {
      category: "Performance",
      icon: <Cpu className="w-6 h-6" />,
      items: ["Query Optimization", "Execution Plans", "Indexing Strategies", "Tuning"]
    },
    {
      category: "Data Modeling",
      icon: <Database className="w-6 h-6" />,
      items: ["Schema Design", "Normalization (3NF)", "Data Integrity", "Constraints"]
    },
    {
      category: "BI & Analytics",
      icon: <BarChart3 className="w-6 h-6" />,
      items: ["Power BI Dashboards", "Excel Reporting", "Data Cleansing", "KPI Tracking"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 border-t border-slate-100">
      <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
        <span className="section-label mx-auto">Core Expertise</span>
        <h2 className="text-4xl font-extrabold text-slate-900">Database Engineering Skills</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((skill, idx) => (
          <motion.div key={idx} whileHover={{ y: -8 }} className="card-premium p-8 space-y-6">
            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-emerald-600">
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{skill.category}</h3>
            <ul className="space-y-3">
              {skill.items.map((item, i) => (
                <li key={i} className="text-slate-500 text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ProjectSection = () => {
  const projectDetails = [
    "Designed and optimized SQL Server (T-SQL) queries, stored procedures, and database views, improving operational reporting efficiency by 35% and reducing manual processing time by 30%.",
    "Developed and maintained logical database structures with well-defined relationships, constraints, primary/foreign keys, and indexing strategies, improving query performance by 40% and ensuring 99%+ data integrity accuracy.",
    "Built and deployed Power BI dashboards integrated with SQL datasets, enabling real-time tracking of KPIs and reducing reporting turnaround time by 50%.",
    "Performed data cleansing, validation, and troubleshooting on large datasets (50K+ records), reducing data inconsistencies by 25% and improving reporting reliability.",
    "Conducted query optimization and execution plan analysis, decreasing average query execution time by 45% and enhancing overall database scalability.",
    "Collaborated with 5+ cross-functional stakeholders to gather business requirements and deliver scalable SQL-driven solutions, improving process efficiency by 30%.",
    "Supported database stability through schema updates, data validation processes, and performance monitoring activities."
  ];

  const modules = [
    "Login & Registration", "Citizen & Property Management", "Certificate Management", 
    "Taxation", "Notification", "Meeting Management", "Accounts", "Budget", "Training"
  ];

  return (
    <section id="project" className="py-24 bg-slate-900 -mx-6 px-6 rounded-[4rem]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label text-emerald-400">Key Project Experience</span>
          <h2 className="text-4xl font-extrabold text-white">MahaPanchayat E-Governance Platform</h2>
          <p className="text-emerald-400/80 mt-2 font-medium">Role: SQL Developer (Client: MahaPanchayat Automation Hub)</p>
        </div>

        <div className="space-y-8">
          {/* Project Overview Block */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <FolderGit2 className="text-emerald-500" /> Project Summary
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                <p>
                  MahaPanchayat is a multi-tenant e-governance system designed to automate Gram Panchayat workflows. 
                  It digitizes manual registers for administrative, financial, and citizen tasks, ensuring secure and separate data management for multiple panchayats.
                </p>
              </div>
              <div className="space-y-4 text-white/70 text-sm leading-relaxed">
                <p>
                  Key features include bulk data import, tax collection automation, and real-time report generation. 
                  The system modernizes administration, improving accuracy and service delivery for Gram Sevaks and Officers.
                </p>
                <div className="flex flex-wrap gap-2">
                  {modules.slice(0, 6).map((m, i) => (
                    <span key={i} className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 rounded-full text-[9px] font-bold border border-emerald-500/20">
                      {m}
                    </span>
                  ))}
                  <span className="text-[9px] text-white/40 font-bold self-center">+ More</span>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Contributions Block */}
          <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8">
            <h3 className="text-xl font-bold text-white mb-6">Technical Contributions</h3>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-8 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {projectDetails.slice(0, 6).map((detail, idx) => (
                    <div key={idx} className="flex gap-3 text-white/70 text-xs leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:col-span-4 space-y-6">
                <div className="space-y-3">
                  <h4 className="text-white font-bold uppercase text-[10px] tracking-widest">Core Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "MS SQL Server", "T-SQL", "Power BI", "SSMS", "SSRS"].map((t, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 text-white/80 rounded-lg text-[10px] font-bold border border-white/10">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceEducation = () => {
  const experience = [
    {
      company: "AVAK INFOTECH",
      role: "Software Engineer",
      period: "May 2024 – Present",
      achievements: [
        "Specialized in MahaPanchayat project database optimization.",
        "Improved query performance by 40% through indexing strategies.",
        "Built Power BI dashboards integrated with SQL datasets."
      ]
    },
    {
      company: "Manlitics B2B ITES",
      role: "Data Research Analyst",
      period: "Nov 2023 – May 2024",
      achievements: [
        "Extracted and validated high-quality B2B contact data.",
        "Applied data normalization techniques to improve database structure.",
        "Executed data quality checks, reducing reporting errors by 20%."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
      <div className="space-y-12">
        <div className="space-y-4">
          <span className="section-label">Career Path</span>
          <h2 className="text-4xl font-extrabold text-slate-900">Work Experience</h2>
        </div>
        <div className="space-y-12">
          {experience.map((exp, idx) => (
            <div key={idx} className="relative pl-10 border-l-2 border-slate-100">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-emerald-500" />
              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{exp.period}</span>
                <h3 className="text-2xl font-bold text-slate-900">{exp.role}</h3>
                <p className="text-slate-500 font-medium flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> {exp.company}
                </p>
              </div>
              <ul className="space-y-3">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="text-slate-600 text-sm leading-relaxed flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-1.5 shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-12">
        <div className="space-y-4">
          <span className="section-label">Education</span>
          <h2 className="text-4xl font-extrabold text-slate-900">Academic Background</h2>
        </div>
        <div className="space-y-6">
          <div className="card-premium p-8 space-y-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-blue-50 rounded-xl text-blue-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">CGPA: 7.9</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">M.Sc Computer Science</h3>
              <p className="text-sm text-slate-500">Savitribai Phule Pune University • 2021 — 2023</p>
            </div>
          </div>
          <div className="card-premium p-8 space-y-4">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-emerald-50 rounded-xl text-emerald-600">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full">CGPA: 8.0</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">B.Sc Computer Science</h3>
              <p className="text-sm text-slate-500">Savitribai Phule Pune University • 2018 — 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-50 py-20 border-t border-slate-200">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="space-y-4 text-center md:text-left">
        <div className="font-bold text-2xl tracking-tight text-slate-900">Siddhesh Sondkar</div>
        <p className="text-slate-500 max-w-xs">SQL Developer specializing in high-performance database solutions.</p>
      </div>
      <div className="flex gap-8">
        <a href="https://github.com/SiddheshSondkar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors"><Github className="w-6 h-6" /></a>
        <a href="https://www.linkedin.com/in/siddhesh-sondkar" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-emerald-600 transition-colors"><Linkedin className="w-6 h-6" /></a>
        <a href="mailto:siddheshsondkar100@gmail.com?subject=Professional Inquiry" className="text-slate-400 hover:text-emerald-600 transition-colors"><Mail className="w-6 h-6" /></a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-slate-200 text-center text-xs text-slate-400">
      <p>© {new Date().getFullYear()} Siddhesh Sondkar. I hereby declare that the information provided is true and correct.</p>
    </div>
  </footer>
);

// --- MAIN APP COMPONENT ---

export default function App() {
  return (
    <div className="min-h-screen hero-gradient">
      <Navigation />
      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <Expertise />
        <ProjectSection />
        <ExperienceEducation />
        
        {/* Contact CTA */}
        <section className="pb-32">
          <div className="bg-emerald-500 rounded-[4rem] p-12 md:p-24 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full grid-pattern opacity-10" />
            <h2 className="text-4xl md:text-6xl font-extrabold text-white relative z-10">
              Ready to optimize your <br /> databases?
            </h2>
            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a href="tel:+919168154518" className="bg-white text-emerald-600 px-12 py-5 rounded-2xl font-bold text-xl hover:bg-slate-900 hover:text-white transition-all shadow-2xl flex items-center gap-3">
                <Phone className="w-6 h-6" /> Call Me Now
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
