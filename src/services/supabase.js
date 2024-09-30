import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabaseUrl = 'https://ghluwenhtnkkeigbhuvp.supabase.co';
// const supabaseKey = process.env.SUPABASE_KEY;
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdobHV3ZW5odG5ra2VpZ2JodXZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MTIxNDEsImV4cCI6MjA0MzE4ODE0MX0.KK_6qa9RYQUovgAvPZqhzVkOZSWPmeHn6CDCl9Odih0';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
