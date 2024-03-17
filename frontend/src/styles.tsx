import styled from "styled-components"
import { Box, Card } from '@mui/material';

export const Main = styled(Box)`
    display: flex;
    flex-direction: column;
    @media (min-width: 850px) {
        flex-direction: row; /* Change to row for screens larger than 768px */
      }
    justify-content: space-between;
    padding: 50px;
`

export const StyledList = styled(Box)`
    min-width: 40vw;
`

export const StyledPlayerCard = styled(Card)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    align-items: center;
    margin-top: 5px;
`

export const StyledLoadingContainer = styled(Box)`
    width: 400px;
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const StyledStatItem = styled(Box)`
    display: flex;
    flex-direction: row;
`

export const StyledColumn = styled(Box)`
    display: flex;
    flex-direction: column;
`
export const StyledStat = styled(Box)`
    width: 200px;
    display: flex;
    flex-direction: column;
`