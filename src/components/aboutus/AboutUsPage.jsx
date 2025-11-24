import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Code, Github, Mail, Rocket, Zap, Cpu, Sparkles, Star, Cloud, Database, Server, Palette, Smartphone, Globe, Terminal } from "lucide-react";
import { FaNetworkWired, FaTelegram, FaReact, FaNodeJs, FaPython, FaDocker, FaAws } from "react-icons/fa6";
import { SiTypescript, SiNextdotjs, SiMongodb, SiPostgresql, SiRedis, SiGraphql, SiTailwindcss, SiFramer } from "react-icons/si";
import { useRef, useState, useEffect } from "react";

export default function AboutUs({ isDarkTheme }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
    size: Math.random() * 20 + 10
  }));

  const skills = [
    { name: "React/Next.js", level: 90, icon: FaReact, color: "#61DAFB" },
    { name: "Node.js/Express", level: 85, icon: FaNodeJs, color: "#68A063" },
    { name: "TypeScript", level: 80, icon: SiTypescript, color: "#3178C6" },
    { name: "Python", level: 75, icon: FaPython, color: "#3776AB" },
    { name: "MongoDB", level: 70, icon: SiMongodb, color: "#47A248" },
    { name: "PostgreSQL", level: 75, icon: SiPostgresql, color: "#336791" },
    { name: "Docker", level: 70, icon: FaDocker, color: "#2496ED" },
  ];

  const experiences = [
    {
      role: "توسعه‌دهنده ارشد فول‌استک",
      company: "تک‌اپ",
      period: "1404 - اکنون",
      description: "رهبری تیم توسعه و طراحی معماری سیستم‌های مقیاس‌پذیر",
      technologies: ["React", "Node.js", "Microservices", "AWS"]
    },
    {
      role: "توسعه‌دهنده فول‌استک",
      company: "دیجی‌تال",
      period: "1400 - 1404",
      description: "توسعه پلتفرم تجارت الکترونیک با ترافیک بالا",
      technologies: ["Next.js", "Express", "MongoDB", "Docker"]
    },
    {
      role: "توسعه‌دهنده فرانت‌اند",
      company: "وب‌پرداز",
      period: "1397 - 1400",
      description: "ساخت رابط‌های کاربری پیچیده و تعاملی",
      technologies: ["React", "TypeScript", "Redux", "Sass"]
    }
  ];

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`min-h-screen overflow-hidden relative ${
        isDarkTheme 
          ? "text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" 
          : "text-black bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {floatingElements.map((element) => (
          <motion.div
            key={element.id}
            className={`absolute rounded-full ${
              isDarkTheme 
                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20" 
                : "bg-gradient-to-r from-blue-400/20 to-cyan-400/20"
            }`}
            style={{
              width: element.size,
              height: element.size,
              left: `${element.x}%`,
              top: `${element.y}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 10 + element.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Gradient */}
      <motion.div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, ${
            isDarkTheme 
              ? "rgba(120, 119, 198, 0.15)" 
              : "rgba(96, 165, 250, 0.15)"
          }, transparent 80%)`,
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-20">
        {/* Hero Section */}
        <motion.div
          style={{ opacity: 1, scale: 1 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 200, 
              damping: 15,
              delay: 0.2 
            }}
            className="relative inline-block mb-8"
          >
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1
              }}
              transition={{ duration: 0.5 }}
              className={`relative w-48 h-48 rounded-full overflow-hidden border-4 shadow-2xl ${
                isDarkTheme 
                  ? "border-purple-500/50 shadow-purple-500/25" 
                  : "border-blue-400/50 shadow-blue-400/25"
              }`}
            >
              <img
                src="https://avatars.githubusercontent.com/u/122119546?v=4"
                alt="پارسا شعبانی"
                className="object-cover w-full h-full"
              />
            </motion.div>
            
            {/* Floating Icons Around Avatar */}
            <motion.div
              className="absolute -top-2 -right-2"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Sparkles className={`w-6 h-6 ${
                isDarkTheme ? "text-yellow-400" : "text-yellow-500"
              }`} />
            </motion.div>
            
            <motion.div
              className="absolute -bottom-2 -left-2"
              animate={{ 
                rotate: [360, 0],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <Zap className={`w-6 h-6 ${
                isDarkTheme ? "text-blue-400" : "text-blue-500"
              }`} />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            پارسا شعبانی
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <p className={`text-2xl md:text-3xl font-light ${
              isDarkTheme ? "text-gray-300" : "text-gray-700"
            }`}>
              توسعه‌دهنده فول‌استک & معمار نرم‌افزار
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className={`text-xl max-w-2xl mx-auto leading-relaxed ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            تبدیل ایده‌های پیچیده به محصولات دیجیتال با‌کارایی بالا ✨
          </motion.p>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`relative mb-20 rounded-3xl p-8 md:p-12 backdrop-blur-xl border ${
            isDarkTheme
              ? "bg-gray-900/50 border-purple-500/20 shadow-2xl shadow-purple-500/10"
              : "bg-white/50 border-blue-400/20 shadow-2xl shadow-blue-400/10"
          }`}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="absolute -top-3 -right-3"
          >
            <Star className={`w-8 h-8 ${
              isDarkTheme ? "text-yellow-400" : "text-yellow-500"
            }`} />
          </motion.div>

          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            درباره من
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 text-lg leading-relaxed"
            >
              <p>
                👋 سلام! من <strong>پارسا شعبانی</strong> هستم، یک توسعه‌دهنده فول‌استک با بیش از <strong>۵ سال تجربه</strong> در ساخت سیستم‌های نرم‌افزاری مقیاس‌پذیر و پیچیده.
              </p>
              <p>
                🚀 تخصص اصلی من در <strong>React</strong>، <strong>Next.js</strong>، <strong>Node.js</strong> و طراحی معماری میکروسرویس‌ها است. عاشق حل مسائل چالش‌برانگیز و بهینه‌سازی عملکرد هستم.
              </p>
              <p>
                💡 همیشه در حال یادگیری و آزمایش تکنولوژی‌های جدید هستم. به جامعه متن‌باز علاقه‌مندم و در پروژه‌های مختلف مشارکت فعال دارم.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`rounded-2xl p-6 ${
                isDarkTheme ? "bg-gray-800/50" : "bg-white/50"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-purple-400" />
                علاقه‌مندی‌ها
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: "⚡", text: "بهینه‌سازی عملکرد" },
                  { icon: "🎨", text: "UI/UX طراحی" },
                  { icon: "🔧", text: "DevOps" },
                  { icon: "📚", text: "یادگیری مستمر" },
                  { icon: "🌐", text: "جامعه متن‌باز" },
                  { icon: "🚀", text: "استارتاپ‌ها" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className={`flex items-center gap-2 p-3 rounded-lg ${
                      isDarkTheme ? "bg-gray-700/50" : "bg-gray-100"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills & Experience Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 backdrop-blur-xl border ${
              isDarkTheme
                ? "bg-gray-900/50 border-purple-500/20 shadow-2xl shadow-purple-500/10"
                : "bg-white/50 border-blue-400/20 shadow-2xl shadow-blue-400/10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              مهارت‌های تخصصی
            </h2>
            <div className="space-y-6">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <IconComponent className="w-5 h-5" style={{ color: skill.color }} />
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className={`text-sm ${
                        isDarkTheme ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-3 rounded-full overflow-hidden ${
                      isDarkTheme ? "bg-gray-700" : "bg-gray-200"
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                        className="h-full rounded-full relative"
                        style={{ 
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                        }}
                      >
                        <motion.div
                          animate={{ 
                            opacity: [0, 1, 0],
                            x: ["-100%", "100%"]
                          }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity,
                            delay: index * 0.2
                          }}
                          className="absolute inset-0 bg-white/30 blur-sm"
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-3xl p-8 backdrop-blur-xl border ${
              isDarkTheme
                ? "bg-gray-900/50 border-purple-500/20 shadow-2xl shadow-purple-500/10"
                : "bg-white/50 border-blue-400/20 shadow-2xl shadow-blue-400/10"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              سوابق کاری
            </h2>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative pl-8 border-l-2 ${
                    isDarkTheme ? "border-purple-400" : "border-blue-400"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`p-6 rounded-2xl cursor-pointer ${
                      isDarkTheme ? "bg-gray-800/50 hover:bg-gray-800/80" : "bg-white/50 hover:bg-white/80"
                    } transition-all duration-300`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-lg">{exp.role}</h3>
                      <span className={`text-sm px-3 py-1 rounded-full ${
                        isDarkTheme ? "bg-purple-500/20 text-purple-300" : "bg-blue-500/20 text-blue-700"
                      }`}>
                        {exp.period}
                      </span>
                    </div>
                    <p className={`font-semibold mb-2 ${
                      isDarkTheme ? "text-purple-300" : "text-blue-600"
                    }`}>
                      {exp.company}
                    </p>
                    <p className={`text-sm mb-3 ${
                      isDarkTheme ? "text-gray-400" : "text-gray-600"
                    }`}>
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ delay: index * 0.2 + techIndex * 0.1 }}
                          className={`text-xs px-2 py-1 rounded-full ${
                            isDarkTheme 
                              ? "bg-gray-700 text-gray-300" 
                              : "bg-gray-200 text-gray-700"
                          }`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`rounded-3xl p-8 md:p-12 backdrop-blur-xl border text-center ${
            isDarkTheme
              ? "bg-gray-900/50 border-pink-500/20 shadow-2xl shadow-pink-500/10"
              : "bg-white/50 border-pink-400/20 shadow-2xl shadow-pink-400/10"
          }`}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent"
          >
            بیا صحبت کنیم!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`text-xl mb-8 max-w-2xl mx-auto ${
              isDarkTheme ? "text-gray-400" : "text-gray-600"
            }`}
          >
            برای همکاری روی پروژه‌های جذاب یا صحبت درباره ایده‌های نوآورانه
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              { 
                icon: Mail, 
                href: "mailto:parsashaabani3@gmail.com", 
                label: "ایمیل",
                color: "from-red-400 to-pink-400"
              },
              { 
                icon: Github, 
                href: "https://github.com/ParsaProg", 
                label: "گیت‌هاب",
                color: "from-gray-400 to-gray-600"
              },
              { 
                icon: FaTelegram, 
                href: "https://t.me/Parsa_Shaabani", 
                label: "تلگرام",
                color: "from-blue-400 to-cyan-400"
              },
              { 
                icon: FaNetworkWired, 
                href: "https://parsashaabani.ir/", 
                label: "وبسایت",
                color: "from-green-400 to-blue-400"
              },
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className={`group relative p-4 rounded-2xl bg-gradient-to-r ${item.color} text-white shadow-lg overflow-hidden`}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "100%", opacity: 1 }}
                  transition={{ duration: 0.6 }}
                />
                <item.icon className="w-6 h-6 relative z-10" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 group-hover:bottom-2 transition-all duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Floating CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            className="mt-12"
          >
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className={`inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg ${
                isDarkTheme 
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl shadow-purple-500/25" 
                  : "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-2xl shadow-blue-500/25"
              }`}
            >
              <Zap className="w-5 h-5" />
              شروع یک پروژه جدید
              <Sparkles className="w-5 h-5" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}