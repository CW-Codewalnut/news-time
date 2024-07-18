import { Grid } from "@mui/material";
import ArticleCardSkeleton from "./ArticleCardSkeleton ";


function ArticlesGridSkeleton({cards}: {cards: number}){
    return <Grid
        container 
        rowSpacing={2} 
        columnSpacing={2} 
        columns={12}
        py= {{ xs: "170px", sm: "170px", md: "170px", lg: "180px" }}        
    >
        {
            Array.from({length: cards}, (_, i) =>
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
                    <ArticleCardSkeleton/>
                </ Grid>
            )
        }
    </Grid>;
}



export default ArticlesGridSkeleton;