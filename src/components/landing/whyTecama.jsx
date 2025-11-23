import { Code, Shield, Smartphone, Zap } from "lucide-react";
import TitlesLandingPage from "./titles";

export default function WhyTecama() {
  const reasons = [
    {
      icon: <Code className="w-12 h-12 text-blue-400" />,
      title: "توسعه پیشرفته",
      description:
        "از آخرین فناوری‌های وب و فریم‌ورک‌های مدرن برای ساخت اپلیکیشن‌های قدرتمند استفاده می‌کنیم.",
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
    },
    {
      icon: <Zap className="w-12 h-12 text-yellow-400" />,
      title: "عملکرد بهینه",
      description:
        "با بهینه‌سازی کد و استفاده از CDN‌ها، سرعت بارگذاری و واکنش‌پذیری سایت شما را به حداکثر می‌رسانیم.",
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
    },
    {
      icon: <Shield className="w-12 h-12 text-green-400" />,
      title: "امنیت پیشرفته",
      description:
        "از پروتکل‌های رمزنگاری قوی و بهترین شیوه‌های امنیتی برای محافظت از داده‌های حساس استفاده می‌کنیم.",
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-purple-400" />,
      title: "طراحی واکنش‌گرا",
      description:
        "رابط کاربری ما برای همه دستگاه‌ها بهینه شده است، از تلفن‌های هوشمند گرفته تا دسکتاپ‌ها.",
      image:
        "https://www.skillstork.org/blog/wp-content/uploads/2022/11/modern-education-Skillstork-1568x882.jpg",
    },
  ];
  return (
    <div className="why-tecama mb-[50px]">
      <TitlesLandingPage titleText="چرا تکاما؟" />
      <div className="grid mt-[20px] gap-y-5 gap-x-5 mr-[30px] xl:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex-none w-80 bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-3 rounded-full bg-gray-700">{reason.icon}</div>
            </div>
            <h3 className="text-2xl font-semibold text-center text-white mb-4">
              {reason.title}
            </h3>
            <p className="text-gray-300 text-center mb-6">
              {reason.description}
            </p>
            <div className="relative h-48 rounded-lg overflow-hidden">
              <img
                src={reason.image}
                alt={reason.title}
                layout="fill"
                objectFit="cover"
                className="transition-transform h-48 w-full duration-300 transform hover:scale-110"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
