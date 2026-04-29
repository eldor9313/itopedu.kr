import { Box, Container, Stack, useMediaQuery, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const data = [
  { country: "2016", count: 540, color: "#93b5e1" },
  { country: "2017", count: 680, color: "#87acdd" },
  { country: "2018", count: 838, color: "#7ba3d9" },
  { country: "2021", count: 1017, color: "#93b5e1" },
  { country: "2022", count: 1458, color: "#87acdd" },
  { country: "2023", count: 2520, color: "#7ba3d9" },
  { country: "2024", count: 3200, color: "#6f9bd5" },
  { country: "2025", count: 4000, color: "#638fd0" },
];

const total = data.reduce((sum, item) => sum + item.count, 0);

const last = data[data.length - 1].count;
const prev = data[data.length - 2].count;

const growth = (((last - prev) / prev) * 100).toFixed(1);

const VisaStatistic = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isNarrow = useMediaQuery(theme.breakpoints.down("md"));
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));

  const barSize = isXs ? 22 : isNarrow ? 34 : 52;
  const tickFs = isXs ? 9 : isNarrow ? 11 : 14;
  const labelFs = isXs ? 8 : isNarrow ? 10 : 14;
  const chartMargin = isXs
    ? { top: 8, right: 4, left: -18, bottom: 0 }
    : isNarrow
      ? { top: 12, right: 8, left: -8, bottom: 0 }
      : { top: 20, right: 20, left: 0, bottom: 0 };

  return (
    <div className="statistic">
      <Container className="visas-stat">
        <Stack className="visas-section">
          <Box className="category-title">{t("visaStats.title")}</Box>
          <Box className="visa-summary">
            <Box className="summary-item">
              <div className="label">{t("visaStats.total")}</div>
              <div className="value">{total.toLocaleString()}</div>
            </Box>
            <Box className="summary-item">
              <div className="label">{t("visaStats.growth")}</div>
              <div className="value growth">+{growth}%</div>
            </Box>
          </Box>
          <Box className="visa-stat">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={chartMargin}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="country"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#718096", fontSize: tickFs }}
                  dy={6}
                  interval={isXs ? "preserveStartEnd" : 0}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: "#a0aec0", fontSize: tickFs }}
                  width={isXs ? 32 : isNarrow ? 38 : 48}
                />
                <Tooltip
                  cursor={{ fill: "rgba(0,0,0,0.03)", radius: 12 }}
                  contentStyle={{
                    borderRadius: "15px",
                    border: "none",
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                    padding: "12px",
                  }}
                />
                <Bar
                  dataKey="count"
                  radius={[8, 8, 0, 0]}
                  barSize={barSize}
                >
                  {!isXs && (
                    <LabelList
                      dataKey="count"
                      position="top"
                      style={{
                        fill: "#2d3748",
                        fontWeight: "600",
                        fontSize: labelFs,
                      }}
                    />
                  )}

                  {data.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </Stack>
      </Container>
    </div>
  );
};

export default VisaStatistic;
