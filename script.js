const strategies = [
    { text: "Trust the unseen path.", verse: "For we walk by faith, not by sight. – 2 Corinthians 5:7 (ESV)" },
    { text: "Rest before you break.", verse: "Come to me, all who labor and are heavy laden, and I will give you rest. – Matthew 11:28 (ESV)" },
    { text: "Speak less, listen more.", verse: "Know this, my beloved brothers: let every person be quick to hear, slow to speak. – James 1:19 (ESV)" },
    { text: "Turn weakness into strength.", verse: "But he said to me, ‘My grace is sufficient for you, for my power is made perfect in weakness.’ – 2 Corinthians 12:9 (ESV)" },
    { text: "Plant seeds in silence.", verse: "And he said, ‘The kingdom of God is as if a man should scatter seed on the ground.’ – Mark 4:26 (ESV)" },
    { text: "Let go of the old.", verse: "Behold, I am doing a new thing; now it springs forth, do you not perceive it? – Isaiah 43:19 (ESV)" },
    { text: "Seek the small voice.", verse: "And after the earthquake a fire, but the Lord was not in the fire. And after the fire the sound of a low whisper. – 1 Kings 19:12 (ESV)" },
    { text: "Embrace the detour.", verse: "The heart of man plans his way, but the Lord establishes his steps. – Proverbs 16:9 (ESV)" },
    { text: "Give without counting.", verse: "Give, and it will be given to you. Good measure, pressed down, shaken together, running over. – Luke 6:38 (ESV)" },
    { text: "Stand still and see.", verse: "You will not need to fight in this battle. Stand firm, hold your position, and see the salvation of the Lord. – 2 Chronicles 20:17 (ESV)" },
    { text: "Dwell in the tension.", verse: "Rejoice in hope, be patient in tribulation, be constant in prayer. – Romans 12:12 (ESV)" },
    { text: "Build with what’s given.", verse: "As each has received a gift, use it to serve one another, as good stewards of God’s varied grace. – 1 Peter 4:10 (ESV)" },
    { text: "Wait for the wind.", verse: "The wind blows where it wishes, and you hear its sound, but you do not know where it comes from or where it goes. – John 3:8 (ESV)" },
    { text: "Bless the broken pieces.", verse: "And we know that for those who love God all things work together for good. – Romans 8:28 (ESV)" },
    { text: "Sing through the storm.", verse: "About midnight Paul and Silas were praying and singing hymns to God, and the prisoners were listening to them. – Acts 16:25 (ESV)" },
    { text: "Look beyond the thorns.", verse: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us. – Romans 8:18 (ESV)" },
    { text: "Step into the unknown.", verse: "By faith Abraham obeyed when he was called to go out to a place that he was to receive as an inheritance. – Hebrews 11:8 (ESV)" },
    { text: "Love the unlovely.", verse: "But I say to you, Love your enemies and pray for those who persecute you. – Matthew 5:44 (ESV)" },
    { text: "Pause at the crossroads.", verse: "Trust in the Lord with all your heart, and do not lean on your own understanding. – Proverbs 3:5 (ESV)" },
    { text: "Shine in the shadows.", verse: "Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven. – Matthew 5:16 (ESV)" },
    { text: "Sow in the desert.", verse: "He turns a desert into pools of water, a parched land into springs of water. – Psalm 107:35 (ESV)" },
    { text: "Hold fast to hope.", verse: "Let us hold fast the confession of our hope without wavering, for he who promised is faithful. – Hebrews 10:23 (ESV)" },
    { text: "Kneel to rise.", verse: "Humble yourselves before the Lord, and he will exalt you. – James 4:10 (ESV)" },
    { text: "Seek the lost coin.", verse: "Or what woman, having ten silver coins, if she loses one coin, does not light a lamp and sweep the house and seek diligently until she finds it? – Luke 15:8 (ESV)" },
    { text: "Dance in the ashes.", verse: "To give them a beautiful headdress instead of ashes, the oil of gladness instead of mourning. – Isaiah 61:3 (ESV)" },
    { text: "Ask for the impossible.", verse: "Is anything too hard for the Lord? – Genesis 18:14 (ESV)" },
    { text: "Bend, don’t break.", verse: "A bruised reed he will not break, and a faintly burning wick he will not quench. – Isaiah 42:3 (ESV)" },
    { text: "Run with endurance.", verse: "Let us run with endurance the race that is set before us. – Hebrews 12:1 (ESV)" },
    { text: "Treasure the ordinary.", verse: "And he said to them, ‘Take care, and be on your guard against all covetousness, for one’s life does not consist in the abundance of his possessions.’ – Luke 12:15 (ESV)" },
    { text: "Wait for the dawn.", verse: "Weeping may tarry for the night, but joy comes with the morning. – Psalm 30:5 (ESV)" }
];

const strategyElement = document.getElementById("strategy");
const verseElement = document.getElementById("verse");
const cardElement = document.getElementById("card");

let seenIndices = []; // Tracks which strategies have been seen
let currentIndex;

// Function to pick a random unseen strategy
function getRandomUnseenIndex() {
    const availableIndices = strategies.map((_, i) => i).filter(i => !seenIndices.includes(i));
    
    if (availableIndices.length === 0) {
        // All strategies seen, reset the seen list
        seenIndices = [];
        return Math.floor(Math.random() * strategies.length);
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    seenIndices.push(randomIndex);
    return randomIndex;
}

function showStrategy() {
    strategyElement.textContent = strategies[currentIndex].text;
    verseElement.textContent = strategies[currentIndex].verse;
}

// Set initial random strategy on load
currentIndex = getRandomUnseenIndex();
showStrategy();

// Change to a new random unseen strategy on click
cardElement.addEventListener("click", () => {
    currentIndex = getRandomUnseenIndex();
    showStrategy();
});
