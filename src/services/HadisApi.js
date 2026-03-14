export const API_URL = "https://sheetdb.io/api/v1/05oc6xnvsq1hc";

export async function fetchHadis() {
  const res = await fetch(API_URL);
  const data = await res.json();

  return data
    .filter(item => item.teks_arab)
    .map(item => ({
      lafaz: item.teks_arab,
      terjemah: item.terjemah,
      summary: item.summary,
      analysis: [
        { title: "Analisis Lughawi", content: item.tahap_analisis_lughawi },
        { title: "Penjelasan Makna", content: item.tahap_makna_hadis },
        { title: "Analisis Tematika", content: item.analisis_tematika },
        { title: "Relevansi Kekinian", content: item.relevansi_kekinian },
        { title: "Sanad", content: item.sanad },
        { title: "Sumber Syarah Hadis", content: item.sumber_syarah },
      ]
    }));
}
