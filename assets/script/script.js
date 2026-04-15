// Sample script.js for Leon Wiki
const leonData = {
    baseSpeed: 820,
    starPowers: {
        smokeTrails: { name: "Smoke Trails", speedBoost: 0.30 }, // 30% boost
        invisiheal: { name: "Invisiheal", healPerSec: 1000 }
    }
};

// Function to update stats based on selected Star Power
function updateLeonStats(selectedPower) {
    const speedElement = document.getElementById('current-speed');
    const abilityText = document.getElementById('ability-description');

    if (selectedPower === 'smokeTrails') {
        const newSpeed = leonData.baseSpeed * (1 + leonData.starPowers.smokeTrails.speedBoost);
        speedElement.innerText = `Movement Speed: ${newSpeed.toFixed(0)}`;
        abilityText.innerText = "Gain 30% movement speed while invisible.";
    } else {
        speedElement.innerText = `Movement Speed: ${leonData.baseSpeed}`;
        abilityText.innerText = `Heal ${leonData.starPowers.invisiheal.healPerSec} health per second while invisible.`;
    }
}

// Event Listeners for UI interaction
document.getElementById('btn-smoke-trails').addEventListener('click', () => updateLeonStats('smokeTrails'));
document.getElementById('btn-invisiheal').addEventListener('click', () => updateLeonStats('invisiheal'));
