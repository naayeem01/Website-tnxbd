import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO';
import { FileText, CheckCircle, AlertCircle, RefreshCcw, HelpCircle } from 'lucide-react';

const Terms = () => {
  return (
    <Layout>
      <SEO 
        title="Terms of Service | সেবার শর্তাবলী" 
        description="Read the terms and conditions for using TNXBD IT Solution's digital services, software, and platforms." 
        keywords="Terms of Service, User Agreement, Terms and Conditions, Legal"
      />
      {/* Hero Section */}
      <section className="pt-40 pb-24 bg-text-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -mr-32 -mt-32 blur-3xl shadow-2xl animate-pulse"></div>
        <div className="container relative z-10">
          <div className="max-w-3xl" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 py-2 px-4 bg-white/10 border border-white/20 rounded-full text-sm font-bold mb-6">
              <FileText size={16} className="text-primary" /> ব্যবহারবিধি ও শর্তাবলী
            </div>
            <h1 className="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">সেবার <span className="text-primary italic">শর্তাবলী</span></h1>
            <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
              TNXBD IT Solution-এর ওয়েবসাইট এবং সেবাসমূহ ব্যবহারের আগে আমাদের শর্তাবলীগুলো মনোযোগ দিয়ে পড়ে নিন। আপনার ব্যবহারের অর্থ হলো আপনি আমাদের এই শর্তসমূহ মেনে নিচ্ছেন।
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
                  <CheckCircle size={24} />
                </span>
                ১. সাধারণ শর্তাবলী
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>আমাদের ওয়েবসাইট এবং সেবাসমূহ ব্যবহারের ক্ষেত্রে নিম্নলিখিত শর্তগুলো প্রযোজ্য হবে:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>আপনি শুধুমাত্র বৈধ কাজের জন্য আমাদের ওয়েবসাইট এবং সেবা ব্যবহার করতে পারবেন।</li>
                  <li>আমাদের সেবাসমূহ ব্যবহার করতে আপনার নির্ধারিত তথ্য প্রদান করতে হবে।</li>
                  <li>যেকোনো সময় সেবা পরিবর্তনের বা আংশিক পরিবর্তনের অধিকার TNXBD সংরক্ষণ করে।</li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <FileText size={24} />
                </span>
                ২. মেধাসম্পদ ও মালিকানা
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>আমাদের ওয়েবসাইট এবং সেবার সকল কন্টেন্ট, ডিজাইন, কোড, ট্রেডমার্ক এবং অন্যান্য মেধাসম্পদ TNXBD IT Solution-এর মালিকানাধীন। আমাদের পূর্বানুমতি ছাড়া কোনো কন্টেন্ট কপি বা পুনরায় ব্যবহার করা সম্পূর্ণ নিষিদ্ধ।</p>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <RefreshCcw size={24} />
                </span>
                ৩. পেমেন্ট ও রিফান্ড পলিসি
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>সেবা গ্রহণের সময় আপনাকে নির্দিষ্ট পেমেন্ট গেটওয়ের মাধ্যমে মূল্য পরিশোধ করতে হবে।</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>সেবা চালুর পর সাধারণত কোনো রিফান্ড প্রদান করা হয় না।</li>
                  <li>সার্ভিসের ধরণ ভেদে পেমেন্টের কিস্তি বা সময়সীমা ভিন্ন হতে পারে।</li>
                  <li>যেকোনো ধরনের ভুল ট্রানজ্যাকশন বা টেকনিক্যাল সমস্যার জন্য কর্তৃপক্ষ দায়ী থাকবে না।</li>
                </ul>
              </div>
            </div>

            <div data-aos="fade-up">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-4 text-text-primary">
                <span className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
                  <AlertCircle size={24} />
                </span>
                ৪. দায়বদ্ধতার সীমাবদ্ধতা
              </h2>
              <div className="space-y-4 text-text-secondary leading-loose text-lg ml-16">
                <p>TNXBD IT Solution কোনো যান্ত্রিক ত্রুটি, সার্ভার ডাউন টাইম বা তৃতীয় পক্ষের কোনো সমস্যার কারণে হওয়া ক্ষতির জন্য সরাসরি দায়ী থাকবে না। আমরা সবসময় সর্বোচ্চ মান নিশ্চিত করার চেষ্টা করি তবে যেকোনো অনাকাঙ্ক্ষিত পরিস্থিতিতে সেবা সাময়িক বন্ধ থাকতে পারে।</p>
              </div>
            </div>

            <div data-aos="fade-up" className="bg-bg-secondary p-12 rounded-[3rem] border border-gray-100 shadow-sm transition-all hover:shadow-lg">
              <h2 className="text-3xl font-bold mb-6 text-text-primary flex items-center gap-4">
                <HelpCircle size={28} className="text-primary" /> কোনো প্রশ্ন থাকলে
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                আমাদের সেবার শর্তাবলী নিয়ে কোনো জিজ্ঞাসা বা সাহায্য প্রয়োজন হলে সরাসরি যোগাযোগ করুন:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-2">
                  <h4 className="font-bold text-text-primary text-xl uppercase tracking-wider">সাপোর্ট সেন্টার:</h4>
                  <p className="text-primary font-black text-lg">+880 1884 444 299</p>
                  <p className="text-primary font-black text-lg">+880 1793 526 558</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-text-primary text-xl uppercase tracking-wider">ইমেইল হেল্পডেস্ক:</h4>
                  <p className="text-text-secondary font-medium">support@tnxbd.com</p>
                  <p className="text-text-secondary font-medium">info@tnxbd.com</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Terms;
