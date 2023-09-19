const fetch = require('node-fetch');

async function fetchRecipes() {
    const spreadsheetId = '1iw8HKhA74hILb2zkM5_bsPqOYA2AepXdbc-HH4CHjm8'; 
    const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Recipes Data!A2:C?key=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const rows = data.values;
    if (!rows || rows.length === 0) {
        console.log("No data found.");
        return [];
    }

    return rows.map((row) => ({
        name: row[0],
        ingredient: row[1].split(", "),
        link: row[2],
    }));
}

module.exports = fetchRecipes;
