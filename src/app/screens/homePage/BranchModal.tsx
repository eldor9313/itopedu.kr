import { Modal, Box, IconButton, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useTranslation } from "react-i18next";
import { BranchType } from "../../../constants/branchData";

interface Props {
  open: boolean;
  onClose: () => void;
  branch: BranchType | null;
}

export default function BranchModal({ open, onClose, branch }: Props) {
  const { t } = useTranslation();

  if (!branch) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: { className: "branchBackdrop" },
      }}
    >
      <Box className="branchPaper">
        <Box className="branchPaperInner">
          <div className="branchHeader">
            <div className="branchHeaderLeft">
              <img
                src={process.env.PUBLIC_URL + branch.flag}
                alt={t(branch.countryKey)}
                className="branchFlag"
              />

              <div className="branchTitleWrap">
                <p className="branchKicker">ITOP EDU BRANCH</p>
                <h2 className="branchTitle">{t(branch.countryKey)}</h2>
                <p className="branchSubtitle">
                  {t(branch.description ?? "") ||
                    "Branch information and contact details"}
                </p>
              </div>
            </div>

            <IconButton onClick={onClose} className="branchCloseBtn">
              <CloseIcon />
            </IconButton>
          </div>

          <div className="branchGrid">
            <div className="branchCard branchCardFull">
              <span className="branchLabel">Address</span>
              <div className="branchValue">{t(branch.addressKey)}</div>
            </div>

            {branch.phone && (
              <div className="branchCard">
                <span className="branchLabel">Phone</span>
                <div className="branchValue">
                  <a href={`tel:${branch.phone}`} className="branchPhoneLink">
                    <img
                      src={process.env.PUBLIC_URL + "/icons/net/phone2.png"}
                      className="phoneIcon"
                    />
                    {branch.phone}
                  </a>
                </div>
              </div>
            )}

            {branch.email && (
              <div className="branchCard">
                <span className="branchLabel">Email</span>
                <div className="branchValue">
                  <a
                    href={`mailto:${branch.email}`}
                    className="branchEmailLink"
                  >
                    <img
                      src={process.env.PUBLIC_URL + "/icons/net/mail1.png"}
                      className="emailIcon"
                    />
                    {branch.email}
                  </a>
                </div>
              </div>
            )}
          </div>

          <h3 className="branchSectionTitle">Social Media</h3>
          <div className="branchSocials">
            {branch.instagram && (
              <a
                href={branch.instagram}
                target="_blank"
                rel="noreferrer"
                className="branchSocialLink"
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/net/instagram.png"}
                  className="socialImg"
                />
                Instagram
              </a>
            )}

            {branch.telegram && (
              <a
                href={branch.telegram}
                target="_blank"
                rel="noreferrer"
                className="branchSocialLink"
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/net/telegram.png"}
                  className="socialImg"
                />
                Telegram
              </a>
            )}

            {branch.facebook && (
              <a
                href={branch.facebook}
                target="_blank"
                rel="noreferrer"
                className="branchSocialLink"
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/net/facebook.png"}
                  className="socialImg"
                />
                Facebook
              </a>
            )}
            {branch.whatsapp && (
              <a
                href={branch.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="branchSocialLink"
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/net/whatsapp1.png"}
                  className="socialImg"
                />
                WhatsApp
              </a>
            )}
            {branch.tiktok && (
              <a
                href={branch.tiktok}
                target="_blank"
                rel="noreferrer"
                className="branchSocialLink"
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/net/tiktok.png"}
                  className="socialImg"
                />
                TikTok
              </a>
            )}
            {branch.youtube && (
              <a
                href={branch.youtube}
                target="_blank"
                rel="noreferrer"
                className="branchSocialLink"
              >
                <img
                  src={process.env.PUBLIC_URL + "/icons/net/youtube.png"}
                  className="socialImg"
                />
                YouTube
              </a>
            )}
          </div>

          {branch.mapUrl && (
            <>
              <h3 className="branchSectionTitle">Location Map</h3>
              <div className="branchMapWrap">
                <iframe
                  src={branch.mapUrl}
                  className="branchMap"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${t(branch.countryKey)} map`}
                />
              </div>
            </>
          )}
          <div className="branchFooter">
            <Button
              variant="contained"
              className="branchBtnPrimary"
              onClick={() => {
                if (branch.phone) {
                  window.location.href = `tel:${branch.phone}`;
                }
              }}
            >
              {t("branches.foot.top")}
            </Button>

            <Button
              variant="outlined"
              className="branchBtnSecondary"
              onClick={onClose}
            >
              {t("branches.foot.bot")}
            </Button>
          </div>
        </Box>
      </Box>
    </Modal>
  );
}
