import { Box } from "@mui/material";

export function ArticleImage({ url }: { url: string | null; }) {
    if (url !== null) {
        return <Box
            sx={{
                height: "200px",
                width: { xs: "310px", sm: "380px", md: "380px", lg: "380px", xl: "380px" },
                borderRadius: 4,
            }}
            draggable="false"
            component="img"
            src={url}
            alt="thumbnail"
            loading="lazy" />;
    }
    return <></>;
}
