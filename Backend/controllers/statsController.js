const statsModel = require('../models/statsModel');

async function getUserStats(req, res) {
    let { userId } = req.params;

    try {
        let stats = await statsModel.getUserStats(userId);
        console.log(stats);
        res.status(200).json({
            message: 'User statistics fetched successfully',
            stats: stats 
        });
    } catch (err) {
        console.error('Error fetching user stats:', err);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {
    getUserStats,
};
