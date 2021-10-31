import { Card, Hero, Navbar, Section } from "../../components/Molecules";

import smile from "../../assets/svg/icon/smile.svg";
import phone from "../../assets/svg/icon/phone.svg";
import money from "../../assets/svg/icon/money.svg";
import "./style.scss";

const Landing = () => {
  return (
    <div className="landing">
      <Navbar />
      <Hero />

      <Section id="section1">
        <div className="section-heading">
          <h1>KENAPA KAMI ?</h1>
          <p>
            Kedar memberikan kemudahan dalam proses pembelajaran. kami telah
            menyesuaikan aplikasi ini dengan pendidikan lokal agar membantu
            kegianatan ajar mengajar
          </p>
        </div>

        <div className="section1">
          <div className="row">
            <div className="col">
              <Card>
                <img src={smile} alt="smile-icon" className="card-img" />
                <div className="card-title">
                  <h1>Mudah</h1>
                </div>
                <div className="card-body">
                  <p>
                    semua orang bisa menjalankan kedar hanya beberapa langkah
                    kamu siap memulai pelajaran
                  </p>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card>
                <img src={phone} alt="smile-icon" className="card-img" />
                <div className="card-title">
                  <h1>Flexsibel</h1>
                </div>
                <div className="card-body">
                  <p>
                    aksen dimana saja dan kapan saja kedar memberikan kemudaan
                    mengakses kapanpun kamu mau
                  </p>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card>
                <img src={money} alt="smile-icon" className="card-img" />
                <div className="card-title">
                  <h1>Gratis</h1>
                </div>
                <div className="card-body">
                  <p>
                    Kami tahu yang ada harapkan kedar adalah kebebasan. kalian
                    bebas askses apa saja dikedar
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>

      <Section id="section2">
        <div className="section-heading">
          <h1>BUAT KELAS ATAU GABUNG KELAS</h1>
          <p>
            kamu bebas memulai dari mana saja bagi pengetahuanmu atau cari dan
            pelajari apa yang kamu mau
          </p>
        </div>

        <div className="section2">
          <div className="row">
            <div className="col">
              <Card>
                <div className="card-title">
                  <h1>GURU</h1>
                </div>
                <div className="card-body">
                  <p>
                    hanya beberapa langkah kamu bisa membuat kelasmu sendiri dan
                    langsung bisa memposting materikamu
                  </p>
                </div>
              </Card>
            </div>
            <div className="col">
              <Card>
                <div className="card-title">
                  <h1>SISWA</h1>
                </div>
                <div className="card-body">
                  <p>
                    daftar dan mulailah perjalananmu ambil kelas apa yang kamu
                    suka
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Landing;
