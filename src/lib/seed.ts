import { supabase } from './supabase';

// Static Data from existing pages
const servicesData = [
  { title: "Web Development", description: "Modern, responsive, and SEO-optimized websites.", icon_name: "Globe", order_index: 1 },
  { title: "Mobile Apps", description: "iOS and Android apps with native performance.", icon_name: "Smartphone", order_index: 2 },
  { title: "Software Solutions", description: "Custom ERP, CRM, and business automation tools.", icon_name: "Database", order_index: 3 },
  { title: "Cybersecurity", description: "Protecting your data from evolving digital threats.", icon_name: "Shield", order_index: 4 },
  { title: "Cloud Computing", description: "AWS, Azure, and Google Cloud infrastructure.", icon_name: "Server", order_index: 5 },
  { title: "Digital Marketing", description: "SEO, SEM, and social media growth strategies.", icon_name: "BarChart", order_index: 6 },
  { title: "AI & Machine Learning", description: "Smart solutions to automate complex tasks.", icon_name: "Cpu", order_index: 7 },
  { title: "UI/UX Design", description: "User-centric designs that convert and engage.", icon_name: "Layout", order_index: 8 },
];

const portfolioData = [
  { title: "FinTech App", category: "Mobile App", image_url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80", order_index: 1 },
  { title: "E-Commerce Platform", category: "Web Dev", image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1115&q=80", order_index: 2 },
  { title: "Smart City ERP", category: "Software", image_url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", order_index: 3 },
  { title: "Health Monitoring", category: "Mobile App", image_url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", order_index: 4 },
  { title: "Real Estate Portal", category: "Web Dev", image_url: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1073&q=80", order_index: 5 },
  { title: "Logistics Manager", category: "Software", image_url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80", order_index: 6 },
];

export const seedDatabase = async () => {
  console.log('Seeding initial data...');
  
  try {
    // Seed Services
    await supabase.from('services').delete().neq('id', '00000000-0000-4000-a000-000000000000'); // Clean start
    await supabase.from('services').insert(servicesData);
    
    // Seed Portfolio
    await supabase.from('portfolio').delete().neq('id', '00000000-0000-4000-a000-000000000000');
    await supabase.from('portfolio').insert(portfolioData);

    console.log('Successfully seeded database!');
    return { success: true };
  } catch (error) {
    console.error('Error seeding database:', error);
    return { success: false, error };
  }
};
