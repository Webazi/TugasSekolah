import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 menit
    max: 100 // Maks 100 request per IP
});

app.use('/api', limiter);
