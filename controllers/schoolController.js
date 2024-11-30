
const db = require ('../database/database');
const { v4: uuidv4 } = require('uuid');
const {calculateDistance} = require('../helper/distenceHelper');

// geodesic = require("geodesic")

exports.addSchool = async (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    try {
        // Check if a school already exists at the given latitude and longitude
        const [existingSchool] = await db.query('SELECT * FROM schools WHERE latitude = ? AND longitude = ?', [latitude, longitude]);

        if (existingSchool && existingSchool.length > 0) {
            return res.status(409).json({ message: 'A school already exists at this location.' });
        }

        // Generate a unique id for the new school
        const id = uuidv4();

        // Insert the new school into the database
        const [school] = await db.query('INSERT INTO schools (id, name, address, latitude, longitude) VALUES (?, ?, ?, ?, ?)', [id, name, address, latitude, longitude]);

        res.status(201).json({ message: 'School added successfully', school });

    } catch (error) {
        console.error('Error adding school:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};



exports. listSchools = async (req,res)=>{
    const {latitude,longitude} = req.body;

    if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
        return res.status(400).json({ message: 'Invalid latitude or longitude.' });
    }


    try 
    {
        const [schools] = await db.query('SELECT * FROM schools');

        const schoolsWithDistance = schools.map(school => {
            const distance = calculateDistance(latitude,longitude,school.latitude,school.longitude);
            return {...school,distance};

        });


        const sortedSchools = schoolsWithDistance.sort((a,b) => a.distance- b.distance);

        return res.status(200).json({
            message: 'Schools sorted by proximity successfully.',
            schools: sortedSchools,
        });

    }

    catch (error) {
        console.error('Error fetching schools:', error);
        return res.status(500).json({ message: 'Internal server error.' });
    }
};


