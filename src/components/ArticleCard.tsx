import { Paper, Typography, ButtonBase } from "@mui/material";
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import { ArticleImage } from "./ArticleImage";

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US')

function ArticleCard({
    url,
    imgUrl,
    publisher,
    title,
    publishedAt,
}: {
    url: string,
    imgUrl: string | null,
    publisher: string,
    title: string,
    publishedAt: string,
}
) {

    const hasImage = imgUrl !== null;

    return <ButtonBase
            focusRipple
            sx={{
                borderRadius: 4
            }}
            onClick={() => window.open(url, "_blank")}>
             <Paper
                sx={{
                    bgcolor: "surface",
                    borderRadius: 4,
                    width: { xs: "330px", sm: "400px", md: "400px", lg: "400px", xl: "400px" },
                    p: "10px",
                }}
                elevation={4}
                >
                <ArticleImage url={imgUrl} />
                <Typography
                    textAlign="left"
                    color="#A6A6A6"
                    fontWeight={"bold"}
                    fontSize={hasImage ? 21 : 24}
                >
                    {publisher}
                </Typography>
                <Typography
                    sx={{
                        display: '-webkit-box',
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 3,
                        '&:hover': {
                            textDecoration: "underline",
                        },
                    }}
                    textAlign="left"
                    color="white"
                    fontWeight={"bold"}
                    fontSize={hasImage ? 21 : 24}
                >
                    {title}
                </Typography>
                <Typography
                    textAlign="left"
                    color="#A3A3A3"
                    fontSize={hasImage ? 16 : 18}
                >
                    {timeAgo.format(Date.parse(publishedAt))}
                </Typography>
            </Paper>
        </ ButtonBase>;
}


export default ArticleCard;