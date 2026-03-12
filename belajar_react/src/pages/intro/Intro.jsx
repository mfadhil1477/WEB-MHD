
import { useParams, Link } from "react-router-dom";
import "./Intro.css";

export default function Intro() {

  const { kategori } = useParams();

  const introData = {
    ekologi: {
      title: "Ekologi",
      text: "Pengantar Ekologi Sebelum mempelajari hadis-hadis tentang lingkungan, ada baiknya kita memahami terlebih dahulu apa yang dimaksud dengan ekologi. Ekologi adalah ilmu yang mempelajari hubungan antara makhluk hidup dengan lingkungan tempat mereka hidup, seperti manusia, hewan, tumbuhan, air, tanah, dan udara. Semua unsur tersebut saling berkaitan dan membentuk keseimbangan kehidupan di bumi.Dalam kehidupan sehari-hari, manusia sangat bergantung pada lingkungan. Karena itu, menjaga alam menjadi hal yang sangat penting agar keseimbangan tersebut tetap terjaga. Jika lingkungan rusak, maka kehidupan makhluk hidup juga akan ikut terganggu. Dalam Islam, menjaga lingkungan juga merupakan bagian dari tanggung jawab manusia. Selain dijelaskan dalam Al-Qur’an, Nabi Muhammad ﷺ juga memberikan banyak petunjuk melalui hadis-hadisnya tentang bagaimana manusia seharusnya memperlakukan alam. Pada bagian berikutnya, kamu akan menemukan beberapa hadis Nabi yang berkaitan dengan kepedulian terhadap lingkungan, seperti anjuran menanam pohon, menjaga kebersihan, serta larangan merusak alam. Hadis-hadis tersebut akan membantu kita memahami bagaimana ajaran Islam mengajarkan untuk menjaga dan merawat lingkungan. 🌱"
    },

gender: {
  title: "Gender",
  text: "Pengantar Tema Gender dalam Hadis. Dalam kajian Islam, istilah gender sering digunakan untuk membahas peran, tanggung jawab, dan hubungan antara laki-laki dan perempuan dalam kehidupan sosial. Islam memandang bahwa laki-laki dan perempuan sama-sama memiliki kedudukan mulia sebagai hamba Allah serta memiliki kesempatan yang sama untuk berbuat kebaikan dan memberikan kontribusi bagi masyarakat. Nabi Muhammad ﷺ melalui berbagai hadis memberikan banyak petunjuk tentang bagaimana perempuan dihargai, diberi ruang untuk belajar, bekerja, serta berperan dalam kehidupan sosial. Hal ini menunjukkan bahwa ajaran Islam tidak membatasi perempuan untuk berkembang, tetapi justru mendorong mereka untuk menjadi pribadi yang mandiri, berilmu, dan bermanfaat bagi lingkungan sekitarnya. Pada bagian berikutnya, kamu akan menemukan beberapa hadis yang berkaitan dengan kemandirian perempuan. Hadis-hadis tersebut membantu kita memahami bagaimana Islam memberikan penghargaan terhadap peran perempuan dalam keluarga maupun masyarakat."
},

    puasa: {
      title: "Puasa",
      text: "Puasa adalah menahan diri dari makan..."
    }
  };

  const data = introData[kategori];

  return (
    <div className="intro-container">

      <h1>{data?.title}</h1>

      <p>{data?.text}</p>

      <Link to={`/hadis/${kategori}`} className="btn-hadis">
        Lihat Hadis
      </Link>

    </div>
  );
}
