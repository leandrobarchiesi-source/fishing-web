import { createClient } from '@supabase/supabase-js'

const supabaseUrl =
'https://yvkzmkkecwbmimbvckso.supabase.co'

const supabaseKey =
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl2a3pta2tlY3dibWltYnZja3NvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg3MTcwODksImV4cCI6MjA5NDI5MzA4OX0.6IsjDm5egHBpDw04Z5CUvNGGUKeCY3BGtpJIyhy1qXg'

export const supabase =
createClient(
    supabaseUrl,
    supabaseKey
)