const colors = {
    10: '#00ff00', // Green
    20: '#33ff00',
    30: '#66ff00',
    40: '#99ff00',
    50: '#ccff00',
    60: '#ffff00', // Yellow
    70: '#ffcc00',
    80: '#ff9900',
    90: '#ff6600',
    100: '#8b0000', // Dark Red
};

function findNearestSuggestion(probability, Prevention) {
    let minDiff = Infinity;
    let nearestSuggestion = Prevention[5];

    Prevention.forEach((item) => {
        const diff = Math.abs(item.percentage - probability);
        if (diff < minDiff) {
            minDiff = diff;
            nearestSuggestion = item;
        }
    });

    return nearestSuggestion;
}

export { colors, findNearestSuggestion };
