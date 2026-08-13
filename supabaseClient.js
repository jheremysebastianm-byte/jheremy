// =========================================================
// ÚNICO ARCHIVO QUE DEBES EDITAR PARA CONECTAR TU PROYECTO
// =========================================================
// 1. Entra a tu proyecto en https://supabase.com
// 2. Ve a: Project Settings > API
// 3. Copia "Project URL" y pégalo en SUPABASE_URL
// 4. Copia "anon public key" y pégalo en SUPABASE_ANON_KEY
// =========================================================
(function () {
const SUPABASE_URL = "https://ntmbcbgvanwgmxjylfij.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im50bWJjYmd2YW53Z214anlsZmlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU1MjAzNDgsImV4cCI6MjEwMTA5NjM0OH0.asya7vihtVfWUc-KEBlNjHSkYfr3sEx1hr86ARL_g6U";

window.supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
})();