import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://eqdtztgpkixxccrqgpwz.supabase.co'
const supabaseAnonKey = 'sb_publishable_2Z-UW9d2wN8a_dB6HhvJ-Q_kmmM1Fct'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
