import { Box, Container, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <div className="partners-frame">
      <Container>
        <Stack className="partners-section">
          <Box className="category-title">{t("other.partners")}</Box>
          <Stack className={"branches"}>
            <Box className={"logo-img"}>
              <a
                href="https://en.snu.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/seoulnational.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.korea.edu/sites/en/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/korea.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.kaist.ac.kr/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/kaist.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.yonsei.ac.kr/sc/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/yonsei.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.ewha.ac.kr/ewhaen/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/iwha.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.sejong.ac.kr/kor/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/sejong.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.gachon.ac.kr/kor/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/gachon.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.cau.ac.kr/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/chungan.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.ajou.ac.kr/kr/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/aju.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.duksung.ac.kr/main.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/doksong.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.hansung.ac.kr/hansung/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/hansong.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.sogang.ac.kr/ko/home"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/sogang.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.inha.ac.kr/kr/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/inha.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.joongbu.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/joongbu.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.konkuk.ac.kr/konkuk/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/konkuk.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.khu.ac.kr/kor/user/main/view.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/kyunhi.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.swu.ac.kr/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/seoulwoman.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://landing.bufs.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/busan.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.stu.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/sinhak.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.uos.ac.kr/main.do?identified=anonymous&"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/sirip.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.sungshin.ac.kr/sites/main_kor/main.jsp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/sunshin.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.kiwu.ac.kr/ko/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/kyonin.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.kunjang.ac.kr/home/main/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/kunjan.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.hosan.ac.kr/front/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/hosan.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.syu.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/samyuk.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.ok.ac.kr/www/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/chunchon.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.chsu.ac.kr/index.do"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/chunbuk.svg"}
                  alt=""
                />
              </a>
            </Box>
            <Box className={"logo-img"}>
              <a
                href="https://www.induk.ac.kr/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={process.env.PUBLIC_URL + "/university/indok.svg"}
                  alt=""
                />
              </a>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
