import React from 'react';
import {ResponsivePie} from "@nivo/pie";
import {tokens} from "../theme"
import {useTheme} from "@mui/material";
// (pending) import data from database (test file below)
import { mockPieData as data } from '../mockData';

const PieChart = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div style={{
            height: "350px"
        }}>
            <ResponsivePie
                data={data}
                theme=
                {{
                    axis:{domain: {line: {stroke: colors.grey[100] }}},
                    legend: {text: { fill: colors.grey[100] }},
                    ticks: {line: {stroke: colors.grey[100], strokeWidth: 1 }},
                    text: {fill: colors.grey[100]},
                    legends: {text: {fill: colors.grey[100] }}, 
                }}
                margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                innerRadius={0.5}
                activeOuterRadiusOffset={8}
                colors={["#B80F0F", "#FFA84A", "#96C31E"]}
                colorBy="index"
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]]}}
                enableArcLinkLabels={false}
                arcLinkLabelsTextOffset={0}
                arcLinkLabelsTextColor={colors.grey[100]}
                arcLinkLabelsDiagonalLength={20}
                arcLinkLabelsStraightLength={10}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker','2']]}}
                defs={[
                    // {
                    //     id: 'dots',
                    //     type: 'patternDots',
                    //     background: 'inherit',
                    //     color: 'rgba(255, 255, 255, 0.3)',
                    //     size: 4,
                    //     padding: 1,
                    //     stagger: true
                    // },
                    // {
                    //     id: 'lines',
                    //     type: 'patternLines',
                    //     background: 'inherit',
                    //     color: 'rgba(255, 255, 255, 0.3)',
                    //     rotation: -45,
                    //     lineWidth: 6,
                    //     spacing: 10
                    // }
                ]}
                legends={[
                    {
                        anchor: 'left',
                        direction: 'column',
                        justify: false,
                        translateX: 0,
                        translateY: 0,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemsSpacing: 0,
                        symbolSize: 20,
                        itemDirection: 'left-to-right',
                        // effects: [{ on: "hover", style: {itemTextColor: colors.grey[100],}}]
                    }
                ]}
            />
        </div>
    );
}

export default PieChart;
//Reference from https://www.youtube.com/watch?v=wYpCWwD1oz0
//Reference from https://github.com/ed-roh/react-admin-dashboard/blob/master/src/components/PieChart.jsx
//Reference from https://nivo.rocks/pie/