import { Grid } from "@mui/material";
import { Article } from "../models/article";
import ArticleCard from "./ArticleCard";


function ArticlesGrid({articles} : {articles: Article[]}){
    return <Grid
        container 
        rowSpacing={2} 
        columnSpacing={2} 
        columns={12}
        py= {{ xs: "170px", sm: "170px", md: "170px", lg: "180px" }}        
    >
        {
            articles.map((item, i) =>
                <Grid 
                    item
                    key={i}
                    xs={12}
                    sm={12} 
                    md={6} 
                    lg={4} 
                    xl={4}
                    sx={{
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <ArticleCard
                        url={item.url}
                        imgUrl={item.urlToImage}
                        publishedAt={item.publishedAt}
                        publisher={item.source.name}
                        title={item.title}
                    />
                </ Grid>
            )
        }
    </Grid>;
}



export default ArticlesGrid;