-- services Table
CREATE TABLE IF NOT EXISTS services (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT NOT NULL, -- Name of the Lucide icon to use
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL
);

-- portfolio Table
CREATE TABLE IF NOT EXISTS portfolio (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  description TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL
);

-- products Table
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT,
  features TEXT[] DEFAULT '{}',
  color TEXT DEFAULT 'blue',
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL
);

-- blog_posts Table
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  published_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL
);

-- clients Table
CREATE TABLE IF NOT EXISTS clients (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  company TEXT NOT NULL,
  logo_url TEXT,
  avatar_url TEXT,
  testimonial TEXT NOT NULL,
  rating INTEGER DEFAULT 5,
  linkedin_url TEXT,
  website_url TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security (RLS)
-- For a basic admin dashboard, we can allow public READ and restricted WRITE.
-- In a production environment, you would use auth.uid() checks for WRITE.

ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE clients ENABLE ROW LEVEL SECURITY;

-- Policies: Everyone can read
CREATE POLICY "Allow public read" ON services FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON portfolio FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON blog_posts FOR SELECT USING (true);
CREATE POLICY "Allow public read" ON clients FOR SELECT USING (true);

-- Policies: Only authenticated users can manage
-- Note: This requires the user to be logged in via Supabase Auth
CREATE POLICY "Allow authenticated manage" ON services FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage" ON portfolio FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage" ON products FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage" ON blog_posts FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Allow authenticated manage" ON clients FOR ALL USING (auth.role() = 'authenticated');
