import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  IconButton,
  MenuItem,
  CircularProgress,
} from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useCallback, useEffect, useState } from "react";
import { CheckboxCard } from "./CheckboxCard";
import styles from "./ConsultationModal.module.css";

export interface ConsultationModalProps {
  open: boolean;
  onClose: () => void;
}

export interface ConsultationFormState {
  name: string;
  phone: string;
  country: string;
  city: string;
  education: string[];
  language: string[];
  question: string;
  contactTime: string;
}

const initialForm: ConsultationFormState = {
  name: "",
  phone: "",
  country: "+998",
  city: "",
  education: [],
  language: [],
  question: "",
  contactTime: "",
};

const EDUCATION_OPTIONS = [
  "Til Kursi (D-4)",
  "Kollej (D-2-1)",
  "Bakalavr (D-2-2)",
  "Magistratura (D-2-3)",
  "PHD (D-2-4)",
  "D-10",
] as const;

const LANGUAGE_OPTIONS = [
  "IELTS 5.5+",
  "TOPIK 2",
  "TOPIK / KIIP 3+",
  "Yo‘q",
] as const;

function getTelegramEnv(country: string): {
  token: string | undefined;
  chatId: string | undefined;
} {
  if (country === "+998") {
    return {
      token: process.env.REACT_APP_TELEGRAM_TOKEN_UZB,
      chatId: process.env.REACT_APP_TELEGRAM_CHAT_ID_UZB,
    };
  }

  if (country === "+82") {
    return {
      token: process.env.REACT_APP_TELEGRAM_TOKEN_KR,
      chatId: process.env.REACT_APP_TELEGRAM_CHAT_ID_KR,
    };
  }

  return { token: undefined, chatId: undefined };
}

export default function ConsultationModal({
  open,
  onClose,
}: ConsultationModalProps) {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState<ConsultationFormState>(initialForm);

  const resetAll = useCallback(() => {
    setStep(0);
    setForm(initialForm);
    setError("");
    setSubmitError("");
    setSuccess(false);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!open) {
      resetAll();
    }
  }, [open, resetAll]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    setForm((prev) => ({ ...prev, phone: value }));
  };

  const toggleCheck = (field: "education" | "language", value: string) => {
    setForm((prev) => {
      const list = prev[field];
      const next = list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value];
      return { ...prev, [field]: next };
    });
  };

  const handleNext = () => {
    if (!form.name.trim() || !form.phone.trim() || !form.city.trim()) {
      setError("Iltimos barcha majburiy maydonlarni to‘ldiring");
      return;
    }
    setError("");
    setStep(1);
  };

  const handleClose = () => {
    resetAll();
    onClose();
  };

  const handleSubmit = async () => {
    setSubmitError("");
    const { token, chatId } = getTelegramEnv(form.country);
    if (!token || !chatId) {
      setSubmitError(
        "Telegram sozlamalari topilmadi. REACT_APP_TELEGRAM_TOKEN va REACT_APP_TELEGRAM_CHAT_ID (yoki Vite uchun VITE_*) qo‘shing.",
      );
      return;
    }

    const message = `
🟢  ITOP EDU - Yangi ariza

──────────────────
👤  Phone: ${form.country} ${form.phone}
📍  City: ${form.city}
──────────────────
🎓  Edu: ${form.education.join(", ") || "—"}
🌍  Lang: ${form.language.join(", ") || "—"}
──────────────────
❓  Q: ${form.question || "—"}
⏰  Time: ${form.contactTime || "—"}
──────────────────
`.trim();

    setLoading(true);
    try {
      const res = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ chat_id: chatId, text: message }),
        },
      );
      const data = await res.json().catch(() => ({}));
      if (!res.ok || (data as { ok?: boolean }).ok === false) {
        throw new Error(
          (data as { description?: string }).description ||
            "Yuborish muvaffaqiyatsiz",
        );
      }
      setSuccess(true);
    } catch (e) {
      setSubmitError(
        e instanceof Error ? e.message : "Tarmoq xatosi. Qayta urinib ko‘ring.",
      );
    } finally {
      setLoading(false);
    }
  };
  const phonePlaceholder =
    form.country === "+82" ? "10-5565-2233" : "90-152-25-26";

  const stepTitles = ["Ma'lumot", "Ta’lim"];

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropProps={{ className: styles.backdrop }}
    >
      <Box className={styles.paper} tabIndex={-1}>
        <Box className={styles.paperInner}>
          <div className={styles.headerRow}>
            <div className={styles.titleBlock}>
              <p className={styles.kicker}>ITOP EDU</p>
              <h2 id="consultation-title" className={styles.title}>
                Bepul konsultatsiya
              </h2>
              <p className={styles.subtitle}>
                Qisqa ma’lumotlaringizni qoldiring — mutaxassisimiz siz bilan
                bog‘lanadi.
              </p>
            </div>
            <IconButton
              aria-label="Yopish"
              onClick={handleClose}
              className={styles.closeBtn}
              size="small"
            >
              <CloseRoundedIcon fontSize="small" />
            </IconButton>
          </div>

          {!success && (
            <>
              <div
                className={styles.steps}
                role="navigation"
                aria-label="Qadamlar"
              >
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className={`${styles.stepDot} ${step >= i ? styles.stepDotActive : ""}`}
                  />
                ))}
              </div>
              <div className={styles.stepLabels}>
                {stepTitles.map((t, i) => (
                  <span
                    key={t}
                    className={step === i ? styles.stepLabelActive : undefined}
                  >
                    {i + 1}. {t}
                  </span>
                ))}
              </div>
            </>
          )}

          {success ? (
            <div className={styles.successWrap}>
              <div className={styles.successIcon} aria-hidden>
                ✓
              </div>
              <h3 className={styles.successTitle}>Arizangiz qabul qilindi</h3>
              <p className={styles.successText}>
                Tez orada mutaxassisimiz siz bilan bog‘lanadi. Kuningiz yaxshi
                o‘tsin!
              </p>
              <Box
                className={styles.actions}
                sx={{ justifyContent: "center", mt: 2 }}
              >
                <Button
                  fullWidth
                  variant="contained"
                  className={styles.btnPrimary}
                  onClick={handleClose}
                >
                  Yopish
                </Button>
              </Box>
            </div>
          ) : (
            <>
              {step === 0 && (
                <>
                  <div className={styles.fieldGroup}>
                    <label htmlFor="consult-name" className={styles.label}>
                      Ism-familiyangiz
                    </label>
                    <TextField
                      id="consult-name"
                      fullWidth
                      name="name"
                      size="small"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Masalan: Masrur"
                      className={styles.textField}
                      inputProps={{ "aria-describedby": "consult-title" }}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <span className={styles.label}>Telefon raqamingiz</span>
                    <div className={styles.phoneRow}>
                      <TextField
                        select
                        size="small"
                        value={form.country}
                        className={`${styles.textField} ${styles.countrySelect}`}
                        onChange={(e) =>
                          setForm((prev) => ({
                            ...prev,
                            country: e.target.value,
                          }))
                        }
                        SelectProps={{ MenuProps: { disableScrollLock: true } }}
                      >
                        <MenuItem value="+998">
                          {" "}
                          <img
                            src={
                              process.env.PUBLIC_URL + "/icons/flag/uzbek.png"
                            }
                            style={{ width: 20, marginRight: 8 }}
                          />{" "}
                          +998
                        </MenuItem>
                        <MenuItem value="+82">
                          {" "}
                          <img
                            src={
                              process.env.PUBLIC_URL + "/icons/flag/korea.png"
                            }
                            style={{ width: 20, marginRight: 8 }}
                          />{" "}
                          +82
                        </MenuItem>
                      </TextField>
                      <TextField
                        fullWidth
                        size="small"
                        value={form.phone}
                        onChange={handlePhoneChange}
                        placeholder={phonePlaceholder}
                        className={`${styles.textField} ${styles.phoneField}`}
                        inputProps={{
                          inputMode: "numeric",
                          "aria-label": "Telefon raqami (faqat raqamlar)",
                        }}
                      />
                    </div>
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="consult-city" className={styles.label}>
                      Qaysi shaharda yashaysiz?
                    </label>
                    <TextField
                      id="consult-city"
                      fullWidth
                      name="city"
                      size="small"
                      value={form.city}
                      onChange={handleChange}
                      placeholder="Masalan: Seoul yoki Tashkent"
                      className={styles.textField}
                    />
                  </div>

                  {error && <div className={styles.errorBox}>{error}</div>}

                  <Box className={styles.actions}>
                    <Button
                      fullWidth
                      variant="contained"
                      className={styles.btnPrimary}
                      onClick={handleNext}
                    >
                      Davom etish
                    </Button>
                  </Box>
                </>
              )}

              {step === 1 && (
                <>
                  <Typography component="h3" className={styles.sectionTitle}>
                    Viza va ta’lim darajangiz
                  </Typography>
                  <div className={styles.grid2}>
                    {EDUCATION_OPTIONS.map((item) => (
                      <CheckboxCard
                        key={item}
                        label={item}
                        selected={form.education.includes(item)}
                        onToggle={() => toggleCheck("education", item)}
                      />
                    ))}
                  </div>

                  <Typography
                    component="h3"
                    className={styles.sectionTitle}
                    sx={{ mt: 2 }}
                  >
                    Til Sertifikatingiz
                  </Typography>
                  <div className={styles.grid1}>
                    {LANGUAGE_OPTIONS.map((item) => (
                      <CheckboxCard
                        key={item}
                        label={item}
                        selected={form.language.includes(item)}
                        onToggle={() => toggleCheck("language", item)}
                      />
                    ))}
                  </div>

                  <div className={styles.fieldGroup} style={{ marginTop: 16 }}>
                    <label htmlFor="consult-question" className={styles.label}>
                      Savolingiz
                      <span className={styles.labelOptional}>(ixtiyoriy)</span>
                    </label>
                    <TextField
                      id="consult-question"
                      fullWidth
                      multiline
                      minRows={3}
                      name="question"
                      value={form.question}
                      onChange={handleChange}
                      placeholder="Qiziqtirgan yo‘nalish yoki savolingizni yozing..."
                      className={styles.textField}
                    />
                  </div>

                  <div className={styles.fieldGroup}>
                    <label htmlFor="consult-time" className={styles.label}>
                      Qachon bog‘lanaylik?
                      <span className={styles.labelOptional}>(ixtiyoriy)</span>
                    </label>
                    <TextField
                      id="consult-time"
                      fullWidth
                      name="contactTime"
                      value={form.contactTime}
                      onChange={handleChange}
                      placeholder="Masalan, ertaga 14:00–17:00"
                      className={styles.textField}
                    />
                  </div>

                  {submitError && (
                    <div className={`${styles.errorBox} ${styles.submitError}`}>
                      {submitError}
                    </div>
                  )}

                  <Box className={styles.actions}>
                    <Button
                      fullWidth
                      variant="outlined"
                      className={styles.btnSecondary}
                      onClick={() => setStep(0)}
                      disabled={loading}
                    >
                      Orqaga
                    </Button>
                    <Button
                      fullWidth
                      variant="contained"
                      className={styles.btnPrimary}
                      onClick={handleSubmit}
                      disabled={loading}
                      startIcon={
                        loading ? (
                          <CircularProgress size={18} color="inherit" />
                        ) : undefined
                      }
                    >
                      {loading ? "Yuborilmoqda..." : "Yuborish"}
                    </Button>
                  </Box>
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </Modal>
  );
}
