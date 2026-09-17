const { nanoid } = require("nanoid");
const pool = require("../db/db");

const shortenUrl = async (req, res) => {
    try {
        const { url } = req.body;

        if (!url) {
            return res.status(400).json({
                success: false,
                message: "URL is required"
            });
        }

        const shortCode = nanoid(6);

        const result = await pool.query(
            `INSERT INTO urls (original_url, short_code)
             VALUES ($1, $2)
             RETURNING *`,
            [url, shortCode]
        );

        res.status(201).json({
            success: true,
            message: "URL shortened successfully",
            data: {
                originalUrl: result.rows[0].original_url,
                shortCode: result.rows[0].short_code,
                shortUrl: `${process.env.BASE_URL}/${result.rows[0].short_code}`
            }
        });

    } catch (error) {
        console.error("Shorten URL Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

const redirectUrl = async (req, res) => {
    try {
        const { shortCode } = req.params;

        const result = await pool.query(
            "SELECT original_url FROM urls WHERE short_code = $1",
            [shortCode]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Short URL not found"
            });
        }

        res.redirect(result.rows[0].original_url);

    } catch (error) {
        console.error("Redirect URL Error:", error);

        res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
};

module.exports = {
    shortenUrl,
    redirectUrl
};