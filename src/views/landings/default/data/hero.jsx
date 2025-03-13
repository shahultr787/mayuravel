import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          Divine Harmony, Endless Blessings
        </Typography>
        <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              One Blessing, Endless Peace
            </Typography>
          }
          sx={{
            height: 24,
            bgcolor: 'primary.lighter',
            mr: -1,
            ml: 0.75,
            '& .MuiChip-label': { px: 1.25 },
          }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        />
      </>
    ),
  },
  headLine: 'Welcome To Mayuvel Industry',
  captionLine:
    'Discover Mayuvel Industry – Your source for high-quality camphor, wax candles, and divine products that enhance your spiritual practices and bring tranquility to your life. Experience serenity with products crafted with care and dedication, perfect for both traditional and modern rituals.',
  primaryBtn: { children: 'Explore Blocks', href: SECTION_PATH },
  videoSrc: '/assets/videos/intro-video.mp4',
  videoThumbnail: '/assets/videos/thumbnails/logo.jpeg',
  listData: [
    { image: '/assets/images/shared/icons/1.png', title: 'Premium Candles' },
    { image: '/assets/images/shared/icons/2.png', title: 'Premium Camphor Products' },
    { image: '/assets/images/shared/icons/3.png', title: 'Lamp Wicks' },
 
  ],
};
