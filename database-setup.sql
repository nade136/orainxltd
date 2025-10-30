-- Database setup for Orianx Resources Admin Dashboard
-- Run these scripts in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Projects table
CREATE TABLE IF NOT EXISTS projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  technologies TEXT[] DEFAULT '{}',
  status VARCHAR(50) DEFAULT 'active' CHECK (status IN ('active', 'completed', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Analytics table
CREATE TABLE IF NOT EXISTS analytics (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  page_views INTEGER DEFAULT 0,
  unique_visitors INTEGER DEFAULT 0,
  date DATE NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON analytics(date DESC);

-- Create updated_at trigger for projects table
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_projects_updated_at 
    BEFORE UPDATE ON projects 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO projects (title, description, technologies, status) VALUES
('Orianx Website', 'Modern website for Orianx Resources Limited', ARRAY['Next.js', 'TypeScript', 'Tailwind CSS'], 'active'),
('Energy Management System', 'Smart energy monitoring and management platform', ARRAY['React', 'Node.js', 'PostgreSQL'], 'completed'),
('Cloud Infrastructure', 'Scalable cloud solutions for enterprise clients', ARRAY['AWS', 'Docker', 'Kubernetes'], 'active');

INSERT INTO contact_messages (name, email, subject, message) VALUES
('John Doe', 'john@example.com', 'Project Inquiry', 'I would like to discuss a potential project with your team.'),
('Jane Smith', 'jane@company.com', 'Partnership Opportunity', 'We are interested in partnering with Orianx Resources.'),
('Mike Johnson', 'mike@tech.com', 'Technical Consultation', 'Need technical consultation for our infrastructure project.');

INSERT INTO analytics (page_views, unique_visitors, date) VALUES
(1247, 892, CURRENT_DATE - INTERVAL '1 day'),
(1567, 1023, CURRENT_DATE - INTERVAL '2 days'),
(1432, 987, CURRENT_DATE - INTERVAL '3 days'),
(1892, 1245, CURRENT_DATE - INTERVAL '4 days'),
(1678, 1134, CURRENT_DATE - INTERVAL '5 days');

-- Row Level Security (RLS) policies
-- Enable RLS on all tables
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Projects policies - allow all operations for authenticated users
CREATE POLICY "Allow all operations for authenticated users" ON projects
  FOR ALL USING (auth.role() = 'authenticated');

-- Contact messages policies - allow all operations for authenticated users
CREATE POLICY "Allow all operations for authenticated users" ON contact_messages
  FOR ALL USING (auth.role() = 'authenticated');

-- Analytics policies - allow all operations for authenticated users
CREATE POLICY "Allow all operations for authenticated users" ON analytics
  FOR ALL USING (auth.role() = 'authenticated');

-- Allow public insert for contact messages (for contact form)
CREATE POLICY "Allow public insert for contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

