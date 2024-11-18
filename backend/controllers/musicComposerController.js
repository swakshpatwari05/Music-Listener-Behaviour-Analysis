const User = require('../models/SurveyResults');

// Controller for View 1: Number of listeners per age group
exports.getAgeGroupData = async (req, res) => {
  try {
    const ageGroups = [
      { label: '0-9', min: 0, max: 9 },
      { label: '10-19', min: 10, max: 19 },
      { label: '20-29', min: 20, max: 29 },
      { label: '30-39', min: 30, max: 39 },
      { label: '40-49', min: 40, max: 49 },
      { label: '50-59', min: 50, max: 59 },
      { label: '60+', min: 60, max: 100 },
    ];

    // Use Promise.all to fetch the count of listeners in each age group
    const results = await Promise.all(
      ageGroups.map(async (group) => {
        const count = await User.countDocuments({
          Age: { $gte: group.min, $lte: group.max },
        });
        return count;
      })
    );

    const labels = ageGroups.map((group) => group.label);
    res.json({ ageGroups: labels, counts: results });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch age group data' });
  }
};

// Controller for View 2: Number of listeners per demographic/place
exports.getDemographicData = async (req, res) => {
  try {
    // Aggregate to group by 'Country' and count listeners
    const data = await User.aggregate([
      { $group: { _id: "$Country", count: { $sum: 1 } } },
      { $sort: { count: -1 } } // Sort by count in descending order
    ]);

    console.log('Demographic data:', data);

    res.json({
      places: data.map(item => item._id),
      counts: data.map(item => item.count),
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch demographic data' });
  }
};
