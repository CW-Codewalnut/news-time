import { Paper, Skeleton } from "@mui/material";


function ArticleCardSkeleton() {
    return <Paper
        sx={{
            bgcolor: "surface",
            borderRadius: 4,
            width: { xs: "330px", sm: "400px", md: "400px", lg: "400px", xl: "400px" },
            p: "10px",
        }}
        elevation={4}
    >
        <Skeleton 
            variant="rectangular"
            sx={{
                height: "200px",
                width: { xs: "310px", sm: "380px", md: "380px", lg: "380px", xl: "380px" },
                borderRadius: 4,
            }}
        />
         <Skeleton height="24px" width="100px" />
         <Skeleton />
         <Skeleton />
         <Skeleton width="160px" />
         <Skeleton height="18px" width="100px" />
    </Paper>;
}


export default ArticleCardSkeleton;