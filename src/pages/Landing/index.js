import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import {
  Hero,
  Navbar,
  Section,
  Footer,
  Sidenav,
} from "../../components/Molecules";

import smile from "../../assets/svg/icon/smile.svg";
import phone from "../../assets/svg/icon/phone.svg";
import money from "../../assets/svg/icon/money.svg";
import bookpecil from "../../assets/img/bookpecil.png";
import "./style.scss";

const dataList = [
  {
    id: 1,
    title: "Mudah",
    image: smile,
    subtitle:
      "semua orang bisa menjalankan kedar hanya beberapa langkah kamu siap memulai pelajaran.",
  },
  {
    id: 2,
    title: "Flexsibel",
    image: phone,
    subtitle:
      "aksen dimana saja dan kapan saja kedar memberikan kemudaan mengakses kapanpun kamu mau.",
  },
  {
    id: 3,
    title: "Gratis",
    image: money,
    subtitle:
      "Kami tahu yang ada harapkan kedar adalah kebebasan. kalian bebas askses apa saja dikedar.",
  },
];

const dataItem = [
  {
    id: 1,
    title: "GURU",
    subtitle:
      "hanya beberapa langkah kamu bisa membuat kelasmu sendiri dan langsung bisa memposting materikamu.",
  },
  {
    id: 2,
    title: "SISWA",
    subtitle:
      "daftar dan mulailah perjalananmu ambil kelas apa yang kamu suka.",
  },
];

const Landing = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <Box component="div" className="landing">
        <Navbar open={open} handleBtn={handleOpen} />
        <Hero />
        <Sidenav open={open} handleBtn={handleOpen} />

        <Section>
          <Box
            sx={{
              textAlign: "center",
              width: "60%",
              margin: "auto",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "57px",
              }}
            >
              KENAPA KAMI ?
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                mt: 1,
              }}
            >
              Kedar memberikan kemudahan dalam proses pembelajaran. kami telah
              menyesuaikan aplikasi ini dengan pendidikan lokal agar membantu
              kegianatan ajar mengajar
            </Typography>
          </Box>

          <Box>
            <Grid
              container
              spacing={4}
              sx={{
                margin: "auto",
                width: { xs: "80%", md: "100%", lg: "100%" },
              }}
            >
              {dataList.map((item) => (
                <Grid sx={{ mt: 2 }} item xs={12} md={4} lg={4} key={item.id}>
                  <Card sx={{ boxShadow: 0, maxWidth: 300, margin: "auto" }}>
                    <CardContent>
                      <Box
                        component="img"
                        src={item.image}
                        alt="smile-icon"
                        sx={{
                          width: 64,
                          height: 64,
                          display: "block",
                          marginX: { xs: "auto", lg: "0" },
                        }}
                      />

                      <Typography
                        component="h1"
                        sx={{
                          fontSize: 36,
                          lineHeight: "57px",
                          fontWeight: 700,
                          marginY: 1,
                          textAlign: { xs: "center", lg: "left" },
                        }}
                      >
                        {item.title}
                      </Typography>

                      <Typography
                        component="p"
                        sx={{
                          fontSize: 15,
                          lineHeight: "24px",
                          fontWeight: 300,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Section>

        <Section
          sx={{
            mt: 7,
            py: "7rem",
            backgroundColor: "#f4ecfc",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "60%",
              margin: "auto",
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "57px",
              }}
            >
              BUAT KELAS ATAU GABUNG KELAS
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                mt: 1,
              }}
            >
              kamu bebas memulai dari mana saja bagi pengetahuanmu atau cari dan
              pelajari apa yang kamu mau
            </Typography>
          </Box>

          <Box>
            <Grid
              container
              spacing={5}
              sx={{
                width: "60%",
                margin: "auto",
                my: 2,
              }}
            >
              {dataItem.map((item) => (
                <Grid item xs={12} md={6} key={item.id}>
                  <Card sx={{ borderRadius: 5, height: "210px" }}>
                    <CardContent>
                      <Typography
                        component="h1"
                        sx={{
                          fontSize: 28,
                          lineHeight: "57px",
                          fontWeight: 700,
                          marginY: 1,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: 15,
                          lineHeight: "24px",
                          fontWeight: 300,
                        }}
                      >
                        {item.subtitle}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Section>

        <Section>
          <Grid
            container
            spacing={3}
            sx={{ mt: 8, width: "73%", margin: "auto", py: 4 }}
          >
            <Grid item xs={12} md={6}>
              <Typography
                component="h1"
                sx={{
                  fontSize: 40,
                  lineHeight: "57px",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                AYO JELAJAHI DUNIA BERSAMA KEDAR
              </Typography>
              <Typography component="p">
                gabung dan belajar bersama-sama dan tentunya menyenangkan
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                sx={{
                  display: "block",
                  width: "360px",
                  marginX: "auto",
                }}
                src={bookpecil}
                alt="book and pencil"
              />
            </Grid>
          </Grid>
        </Section>

        <Section>
          <Box
            sx={{
              width: "65%",
              margin: "auto",
              textAlign: "center",
            }}
          >
            <Card id="big-card">
              <CardContent>
                <Typography
                  component="h1"
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: 30,
                    mb: 3,
                  }}
                >
                  AYO BURUAN GABUNG
                </Typography>
                <Button
                  sx={{
                    backgroundColor: "white",
                    color: "#0E0712",
                    borderRadius: "10px",
                    fontSize: 20,
                    fontWeight: "bold",
                    ":active": { backgroundColor: "white" },
                    ":hover": { backgroundColor: "white" },
                  }}
                >
                  DAFTAR
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Section>
      </Box>
      <Footer />
    </>
  );
};

export default Landing;
