import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const faqKeys = [
  "q1",
  "q2",
  "q3",
  "q4",
  "q5",
  "q6",
  "q7",
  "q8",
  "q9",
  "q10",
  "q11",
  "q12",
  "q13",
  "q14",
  "q15",
  "q16",
];

export default function FAQ() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState<number | false>(false);
  const [showAll, setShowAll] = React.useState(false);

  const handleChange =
    (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const faqData = faqKeys.map((key) => ({
    question: t(`faq.${key}.question`),
    answer: t(`faq.${key}.answer`),
  }));

  const visibleFaqs = showAll ? faqData : faqData.slice(0, 4);

  return (
    <div className="homepage">
      <div className="faq-section">
        <Container maxWidth="lg">
          <h2 className="faq-title">{t("faq.faqTitle")}</h2>

          <div className="faq-grid">
            {visibleFaqs.map((item, index) => {
              const realIndex = faqData.indexOf(item);

              return (
                <motion.div
                  layout // 🔥 ENG MUHIM
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    layout: {
                      duration: 2.0,
                      ease: [0.16, 1, 0.3, 1],
                    },
                    opacity: {
                      duration: 0.6,
                    },
                  }}
                >
                  <Accordion
                    expanded={expanded === realIndex}
                    onChange={handleChange(realIndex)}
                    className="faq-accordion"
                    disableGutters
                    elevation={0}
                    square
                    TransitionProps={{ timeout: 0 }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      sx={{
                        minHeight: 60,
                        "&.Mui-expanded": {
                          minHeight: 60,
                        },
                      }}
                    >
                      <Typography className="faq-question">
                        {item.question}
                      </Typography>
                    </AccordionSummary>

                    <AnimatePresence initial={false}>
                      {expanded === realIndex && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: {
                              duration: 1.6,
                              ease: [0.16, 1, 0.3, 1], // 🔥 Apple style easing
                            },
                            opacity: {
                              duration: 0.6,
                            },
                          }}
                          style={{ overflow: "hidden" }}
                        >
                          <AccordionDetails>
                            <Typography className="faq-answer">
                              {item.answer.split("\n").map((line, i) => (
                                <div key={i}>{line}</div>
                              ))}
                            </Typography>
                          </AccordionDetails>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Accordion>
                </motion.div>
              );
            })}
          </div>

          <div className="faq-btn">
            <button onClick={() => setShowAll(!showAll)}>
              {showAll ? t("faq.faqButton.hide") : t("faq.faqButton.showMore")}
            </button>
          </div>
        </Container>
      </div>
    </div>
  );
}
