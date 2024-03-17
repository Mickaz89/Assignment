import React from "react";
import { StyledColumn, StyledStatItem } from "../styles";
import { Typography } from "@mui/material";
import { Stat } from "../interfaces";

interface StatsProps {
  data: Stat;
}

interface StatItemProps {
  label: string;
  value: number | string;
}

const StatItemComponent: React.FC<StatItemProps> = ({ label, value }) => (
  <StyledStatItem>
    <Typography>{label}:</Typography>
    <Typography>{value}</Typography>
  </StyledStatItem>
);

export const Stats: React.FC<StatsProps> = ({ data: { min, fgm, fga, fg_pct, fg3m, fg3a } }) => (
  <>
    <StyledColumn>
      <StatItemComponent label="min" value={min} />
      <StatItemComponent label="fgm" value={fgm} />
      <StatItemComponent label="fga" value={fga} />
    </StyledColumn>
    <StyledColumn>
      <StatItemComponent label="fg_pct" value={fg_pct} />
      <StatItemComponent label="fg3m" value={fg3m} />
      <StatItemComponent label="fg3a" value={fg3a} />
    </StyledColumn>
  </>
);