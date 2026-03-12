export const API_URL = "https://sheetdb.io/api/v1/05oc6xnvsq1hc";

export async function fetchHadis() {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data
    .filter(item => item.teks_arab)
    .map(item => ({
      kategori: item.kategori,
      title: item.judul,
      lafaz: item.teks_arab,
      terjemah: item.terjemah,
      summary: item.summary,
      analysis: [
        { title: "Analisis Lughawi", content: item.tahap_analisis_lughawi },
        { title: "Penjelasan Makna", content: item.tahap_makna_hadis },
        { title: "Interkoneksi Dengan Ayat Al-Qur'an Dan Hadis Lain", content: item.analisis_tematika },
        { title: "Relevansi Kekinian", content: item.relevansi_kekinian },
        { title: "Sanad", content: item.sanad },
        { title: "Rawi a'la", content: item.rawi_ },
        { title: "Referensi", content: item.sumber_syarah },
        { title: "Status Hadis", content: item.status_hadis },
      ]
    }));
}
