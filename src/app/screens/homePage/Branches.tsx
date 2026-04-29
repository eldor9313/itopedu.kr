import { Box, Container, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import BranchModal from "../homePage/BranchModal";
import { branchData, BranchType } from "../../../constants/branchData";

export default function Branches() {
  const [selectedBranch, setSelectedBranch] = useState<BranchType | null>(null);
  const handleOpen = (branch: any) => setSelectedBranch(branch);
  const handleClose = () => setSelectedBranch(null);
  const { t } = useTranslation();
  return (
    <div className="branches-frame">
      <Container>
        <Stack className="branches-section">
          <Box className="category-title">{t("branches.title")}</Box>
          <Stack className={"branches"}>
            {branchData.map((branch) => (
              <Box
                key={branch.key}
                className="logo-img"
                onClick={() => handleOpen(branch)}
              >
                <div className="img-wrapper">
                  {branch.gallery?.slice(0, 3).map((img, index) => (
                    <img
                      key={index}
                      src={process.env.PUBLIC_URL + img}
                      className={`img img${index + 1}`}
                      alt={t(branch.countryKey)}
                    />
                  ))}
                </div>

                <Box className="desc-box">
                  <Box className="store-location">{t(branch.countryKey)}</Box>
                  <Box className="store-desc">{t(branch.addressKey)}</Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Container>
      <BranchModal
        open={!!selectedBranch}
        onClose={handleClose}
        branch={selectedBranch}
      />
    </div>
  );
}
