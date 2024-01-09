import { createClient } from '@supabase/supabase-js'; 


const url = 'https://fonjwlvatujtxpckldit.supabase.co'; 
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZvbmp3bHZhdHVqdHhwY2tsZGl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDM3MzcwNjUsImV4cCI6MjAxOTMxMzA2NX0.ag3yv_jqMHgXzIGVY3hCeL039nOrVjvUQm12nqcm4V8'
const supabase = createClient(url, key); 

export { supabase }; 