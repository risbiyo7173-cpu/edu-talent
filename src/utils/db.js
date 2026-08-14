import { supabase } from './supabaseClient';

/**
 * Menyimpan hasil tes baru ke dalam Supabase
 */
export async function saveResultToDB(userData, testResults, analysis) {
  try {
    const id = Date.now().toString();
    const { data, error } = await supabase
      .from('edutalent_results')
      .insert([
        {
          id: id,
          user_data: userData,
          test_results: testResults,
          analysis: analysis
        }
      ]);
      
    if (error) {
      console.error("Gagal menyimpan ke Supabase:", error);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Gagal menyimpan ke Supabase:", error);
    return false;
  }
}

/**
 * Mengambil semua data peserta dari Supabase
 */
export async function getAllResultsFromDB() {
  try {
    const { data, error } = await supabase
      .from('edutalent_results')
      .select('*')
      .order('created_at', { ascending: false });
      
    if (error) {
      console.error("Gagal mengambil data dari Supabase:", error);
      return [];
    }
    
    // Konversi key Supabase ke struktur aplikasi kita
    return data.map(record => ({
      id: record.id,
      timestamp: record.created_at,
      userData: record.user_data,
      testResults: record.test_results,
      analysis: record.analysis
    }));
  } catch (error) {
    console.error("Gagal mengambil data dari Supabase:", error);
    return [];
  }
}

/**
 * Mengambil satu data peserta berdasarkan ID
 */
export async function getResultById(id) {
  try {
    const { data, error } = await supabase
      .from('edutalent_results')
      .select('*')
      .eq('id', id)
      .single();
      
    if (error) return null;
    
    return {
      id: data.id,
      timestamp: data.created_at,
      userData: data.user_data,
      testResults: data.test_results,
      analysis: data.analysis
    };
  } catch (error) {
    return null;
  }
}

/**
 * Menghapus SEMUA data dari Supabase
 */
export async function clearAllDB() {
  try {
    // Note: Supabase requires a filter to delete, so we match everything
    const { error } = await supabase
      .from('edutalent_results')
      .delete()
      .neq('id', '0'); // Delete all rows
      
    if (error) return false;
    return true;
  } catch (error) {
    return false;
  }
}

/**
 * Menghapus SATU data berdasarkan ID
 */
export async function deleteResultById(id) {
  try {
    const { error } = await supabase
      .from('edutalent_results')
      .delete()
      .eq('id', id);
      
    if (error) return false;
    return true;
  } catch (error) {
    return false;
  }
}
