import { createClient } from '@supabase/supabase-js';


const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF1eXNzbG5ianVnZW1tc2V3bmdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODc0NjY2NDAsImV4cCI6MjAwMzA0MjY0MH0.ppZ2pAMHiWOjxhpiCW6ytea3U-zcWoOfi92avMYnFis';
const URL = 'https://auysslnbjugemmsewngi.supabase.co';


export const supabase = createClient(URL, API_KEY);