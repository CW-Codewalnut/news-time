import { Box, Typography } from "@mui/material";
import HomeAppBar from "../../components/HomeAppBar";
import ArticlesGrid from "../../components/ArticlesGrid";
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { Article } from "../../models/article";
import { useEffect, useState } from "react";
import SwipeableViews from 'react-swipeable-views';
import { NewsState, categories, getCategoriesArticles } from "../../redux/news-slice";
import ArticlesGridSkeleton from "../../components/ArticlesGridSkeleton";

function Home() {

    const [tab, setTab] = useState(0);

    const newsState = useAppSelector(state => state.news);
    const newsDispatch = useAppDispatch();

    useEffect(() => {
        //Do not load the data again if it is loaded
        if (newsState.categoriesArticles[tab].length === 0) {
            newsDispatch(getCategoriesArticles(tab));
        }
    }, [tab]);

    const onChange = (i: number) => setTab(i);


    return <Box sx={
        {
            margin: "auto",
            maxWidth: { xs: "400px", sm: "400px", md: "850px", lg: "1250px", xl: "1250px" },
        }
    }>
        <HomeAppBar
            labels={categories}
            selected={tab}
            onChange={onChange}
        />

        <SwipeableViews
            index={tab}
            onChangeIndex={onChange}
        >
            {
                newsState.categoriesArticles
                    .map((cat, i) => {
                        return <BuildArticles 
                            key={i} 
                            articles={cat} 
                            newsState={newsState} 
                        />;
                })
            }
        </SwipeableViews>


    </ Box>
}


function BuildArticles({ newsState, articles }: { newsState: NewsState, articles: Array<Article> }) {

    if (newsState.isLoading) {
        return <ArticlesGridSkeleton cards={50} />;
    }

    const OtherStates = () => {
         if (newsState.error) {
            return <Typography>Something went wrong please try again later</ Typography>;
        } else if (articles.length === 0) {
            return <Typography>No news found</ Typography>;
        }
        return null;
    }

    const otherStates = OtherStates();

    if (otherStates !== null) {
        return <Box
            sx={{

                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",

            }}>{otherStates}</Box>
    }

    return <ArticlesGrid articles={articles} />

}


export default Home;