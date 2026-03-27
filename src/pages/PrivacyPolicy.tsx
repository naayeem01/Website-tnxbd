import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { Shield, Eye, Lock, Globe, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <Layout>
      <SEO 
        title="Privacy Policy | গোপনীয়তা নীতি" 
        description="Our Privacy Policy outlines how TNXBD IT Solution collects, uses, and secures your personal information." 
        keywords="Privacy Policy, Data Security, Cookie Policy, Legal Compliance"
      />
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-text-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-white/10 border border-white/20 rounded-full text-sm font-bold mb-6">
              <Shield size={16} className="text-secondary" /> আইনি সুরক্ষা ও গোপনীয়তা
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">গোপনীয়তা <span className="text-secondary italic">নীতি</span></h1>
            <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
              আপনার তথ্যের সুরক্ষা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। TNXBD IT Solution-এ আমরা কীভাবে আপনার তথ্য সংগ্রহ এবং ব্যবহার করি তা এখানে বিস্তারিত আলোচনা করা হলো।
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Eye size={24} />
                </span>
                ১. তথ্যের সংগ্রহ
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>আমরা আমাদের সেবা প্রদানের জন্য আপনার কাছ থেকে বিভিন্ন ধরনের তথ্য সংগ্রহ করি:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>ব্যক্তিগত তথ্য:</strong> নাম, ইমেইল ঠিকানা, ফোন নম্বর এবং আপনার প্রতিষ্ঠানের নাম।</li>
                  <li><strong>ব্যবহারিক তথ্য:</strong> আপনি যখন আমাদের ওয়েবসাইট ব্যবহার করেন, তখন আপনার আইপি ঠিকানা, ব্রাউজারের ধরন এবং ভিজিটের সময় সংক্রান্ত তথ্য।</li>
                  <li><strong>পেমেন্ট তথ্য:</strong> সার্ভিস ক্রয়ের ক্ষেত্রে আপনার পেমেন্ট গেটওয়ে সংক্রান্ত প্রয়োজনীয় তথ্য (আমরা সরাসরি ক্রেডিট কার্ড নম্বর সংরক্ষণ করি না)।</li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Globe size={24} />
                </span>
                ২. তথ্যের ব্যবহার
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>আমরা আপনার সংগৃহীত তথ্য নিম্নলিখিত উদ্দেশ্যে ব্যবহার করি:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>আপনার অনুরোধকৃত সার্ভিস বা সেবা প্রদান নিশ্চিত করতে।</li>
                  <li>গ্রাহক সেবা উন্নত করতে এবং আপনার সাথে যোগাযোগ রক্ষা করতে।</li>
                  <li>আমাদের ওয়েবসাইট এবং সেবার মান উন্নয়ন করতে।</li>
                  <li>নতুন অফার, আপডেট এবং সেবামূলক বার্তা পাঠাতে।</li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Lock size={24} />
                </span>
                ৩. তথ্যের নিরাপত্তা
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>আপনার তথ্যের নিরাপত্তা নিশ্চিতে আমরা শিল্পের মানসম্মত নিরাপত্তা ব্যবস্থা গ্রহণ করি:</p>
                <p>আমরা SSL (Secure Socket Layer) এনক্রিপশন ব্যবহার করি যাতে আপনার তথ্য ইন্টারনেটে আদান-প্রদানের সময় সুরক্ষিত থাকে। আপনার ব্যক্তিগত তথ্য আমাদের সুরক্ষিত সার্ভারে সংরক্ষিত থাকে এবং সীমিত সংখ্যক অনুমোদিত ব্যক্তি তা দেখার অধিকার রাখেন।</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <Bell size={24} />
                </span>
                ৪. কুকি (Cookie) পলিসি
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>আমরা আমাদের ওয়েবসাইটের অভিজ্ঞতা উন্নত করার জন্য 'কুকি' ব্যবহার করি। কুকি হলো ছোট ফাইল যা আপনার ব্রাউজারের মাধ্যমে আপনার হার্ড ড্রাইভে সংরক্ষিত হয়। আপনি চাইলে আপনার ব্রাউজার সেটিং থেকে কুকি বন্ধ করে রাখতে পারেন, তবে এতে ওয়েবসাইটের কিছু ফিচার কাজ নাও করতে পারে।</p>
              </div>
            </div>

            <div data-aos="fade-up" className="bg-bg-secondary p-12 rounded-[3rem] border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-text-primary">৫. যোগাযোগ করুন</h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                আমাদের গোপনীয়তা নীতি সম্পর্কে আপনার যদি কোনো প্রশ্ন বা উদ্বেগ থাকে, তবে দয়া করে নিচের ঠিকানায় যোগাযোগ করুন:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-primary mb-2">ইমেইল:</h4>
                  <p className="text-text-primary">info@tnxbd.com</p>
                  <p className="text-text-primary">support@tnxbd.com</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-primary mb-2">টাঙ্গাইল অফিস:</h4>
                    <p className="text-text-primary">উপজেলা মুক্তিযোদ্ধা কমপ্লেক্স, দেলদুয়ার ১৯১০, টাঙ্গাইল</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-2">ঢাকা অফিস:</h4>
                    <p className="text-text-primary">স্বপ্ননগর আবাসিক এলাকা - ২, সেকশন - ৯, মিরপুর, ঢাকা - ১২১৬</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PrivacyPolicy;
