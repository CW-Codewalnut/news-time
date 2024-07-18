import AppAssets from '../utilites/AppAssets';
import { TransitionGroup } from 'react-transition-group';
import { Collapse, AppBar, Box, Tab, Tabs, useScrollTrigger } from '@mui/material';

function HomeAppBar({ labels, selected, onChange }: {
    labels: string[],
    selected: number,
    onChange: ((index: number) => void)
}) {

    const trigger = useScrollTrigger();


    return <>
        <TransitionGroup>
            <Collapse>
                <AppBar
                    elevation={0}
                    sx={{
                        bgcolor: "surface",
                    }}>

                    <Box
                        component="img"
                        sx={{
                            display: trigger ? "none" : "block",
                            m: "24px auto",
                            height: { xs: "15px", sm: "15px", md: "20px", lg: "20px" },
                        }}
                        alt="News time logo"
                        src={AppAssets.newTimeSvg}
                    />
                </ AppBar>
            </Collapse>
        </TransitionGroup>

        <AppBar
            elevation={0}
            sx={{
                top: trigger ? "" : "63px",
                bgcolor: "surface",
            }}>
            <Tabs
                value={selected}
                onChange={(_, i) => onChange(i)}
                variant="scrollable"
                scrollButtons={false}
                textColor="primary"
                sx={{
                    ".MuiTab-root": {
                        textTransform :"none",
                        fontWeight: 400,
                        color: "#A3A3A3"
                    },
                    ".Mui-selected": {
                        textTransform :"none",
                        fontWeight: 900,
                        color: "white"
                    },
                }}
            > {
                    labels.map((c, i) => {
                        return <Tab
                            key={i}
                            value={i}
                            label={c}
                            wrapped
                        />;
                    })
                }
            </Tabs>
        </AppBar>
    </>;
}


export default HomeAppBar;
