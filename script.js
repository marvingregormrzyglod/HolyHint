const strategies = [
    { text: "Trust the unseen path.", verse: "For we walk by faith, not by sight. – 2 Corinthians 5:7 (ESV)" },
    { text: "Speak less, listen more.", verse: "Know this, my beloved brothers: let every person be quick to hear, slow to speak. – James 1:19 (ESV)" },
    { text: "Welcome your weakness.", verse: "But he said to me, ‘My grace is sufficient for you, for my power is made perfect in weakness.’ – 2 Corinthians 12:9 (ESV)" },
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
    { text: "Look beyond the thorns.", verse: "For I consider that the sufferings of this present time are not worth comparing with the glory that is to be revealed to us. – Romans 8:18 (ESV)" },
    { text: "Step into the unknown.", verse: "By faith Abraham obeyed when he was called to go out to a place that he was to receive as an inheritance. – Hebrews 11:8 (ESV)" },
    { text: "Love the unlovely.", verse: "But I say to you, Love your enemies and pray for those who persecute you. – Matthew 5:44 (ESV)" },
    { text: "Shine in the shadows.", verse: "Let your light shine before others, so that they may see your good works and give glory to your Father who is in heaven. – Matthew 5:16 (ESV)" },
    { text: "Sow in the desert.", verse: "He turns a desert into pools of water, a parched land into springs of water. – Psalm 107:35 (ESV)" },
    { text: "Hold fast to hope.", verse: "Let us hold fast the confession of our hope without wavering, for he who promised is faithful. – Hebrews 10:23 (ESV)" },
    { text: "Kneel to rise.", verse: "Humble yourselves before the Lord, and he will exalt you. – James 4:10 (ESV)" },
    { text: "Seek the lost coin.", verse: "Or what woman, having ten silver coins, if she loses one coin, does not light a lamp and sweep the house and seek diligently until she finds it? – Luke 15:8 (ESV)" },
    { text: "Ask for the impossible.", verse: "Is anything too hard for the Lord? – Genesis 18:14 (ESV)" },
    { text: "Bend, don’t break.", verse: "A bruised reed he will not break, and a faintly burning wick he will not quench. – Isaiah 42:3 (ESV)" },
    { text: "Run with endurance.", verse: "Let us run with endurance the race that is set before us. – Hebrews 12:1 (ESV)" },
    { text: "Treasure the ordinary.", verse: "And he said to them, ‘Take care, and be on your guard against all covetousness, for one’s life does not consist in the abundance of his possessions.’ – Luke 12:15 (ESV)" },
    { text: "Wait for the dawn.", verse: "Weeping may tarry for the night, but joy comes with the morning. – Psalm 30:5 (ESV)" },
    { text: "Act with bold faith.", verse: "Be strong and courageous. Do not fear. – Joshua 1:9 (ESV)" },
    { text: "Wait with purpose.", verse: "Wait for the Lord; be strong, and let your heart take courage. – Psalm 27:14 (ESV)" },
    { text: "Turn aside to see.", verse: "So Moses turned aside to see why the bush was not burned. – Exodus 3:3 (ESV)" },
    { text: "Ask for fresh eyes.", verse: "Open my eyes, that I may behold wondrous things. – Psalm 119:18 (ESV)" },
    { text: "Find strength in quiet.", verse: "In quietness and in trust shall be your strength. – Isaiah 30:15 (ESV)" },
    { text: "Look up for help.", verse: "I lift up my eyes to the hills. From where does my help come? – Psalm 121:1 (ESV)" },
    { text: "Rest to renew.", verse: "He restores my soul. He leads me in paths of righteousness. – Psalm 23:3 (ESV)" },
    { text: "Choose joy today.", verse: "This is the day that the Lord has made; let us rejoice. – Psalm 118:24 (ESV)" },
    { text: "Lean on His wisdom.", verse: "If any of you lacks wisdom, let him ask God. – James 1:5 (ESV)" },
    { text: "Break free with praise.", verse: "At midnight Paul and Silas prayed and sang praises to God. – Acts 16:25 (ESV)" },
    { text: "See the unseen.", verse: "We look not to the things that are seen but to the unseen. – 2 Corinthians 4:18 (ESV)" },
    { text: "Take the narrow path.", verse: "For the gate is narrow and the way is hard that leads to life. – Matthew 7:14 (ESV)" },
    { text: "Plant hope now.", verse: "Those who sow in tears shall reap with shouts of joy. – Psalm 126:5 (ESV)" },
    { text: "Stand firm in doubt.", verse: "I know whom I have believed, and I am convinced. – 2 Timothy 1:12 (ESV)" },
    { text: "Seek His face first.", verse: "Seek the Lord and his strength; seek his presence continually! – Psalm 105:4 (ESV)" },
    { text: "Turn pain to purpose.", verse: "God comforts us in all our affliction, so that we may comfort. – 2 Corinthians 1:4 (ESV)" },
    { text: "Wait for His timing.", verse: "For everything there is a season, and a time for every matter. – Ecclesiastes 3:1 (ESV)" },
    { text: "Walk through the fire.", verse: "When you walk through fire you shall not be burned. – Isaiah 43:2 (ESV)" },
    { text: "Lift your burdens.", verse: "Come to me, all who labor and are heavy laden. – Matthew 11:28 (ESV)" },
    { text: "Find joy in trials.", verse: "Count it all joy when you meet trials of various kinds. – James 1:2 (ESV)" },
    { text: "Ask with confidence.", verse: "Whatever you ask in prayer, believe that you have received it. – Mark 11:24 (ESV)" },
    { text: "Rest in His shadow.", verse: "He who dwells in the shelter of the Most High will abide. – Psalm 91:1 (ESV)" },
    { text: "See beyond today.", verse: "For I know the plans I have for you, declares the Lord. – Jeremiah 29:11 (ESV)" },
    { text: "Speak life boldly.", verse: "The tongue has the power of life and death. – Proverbs 18:21 (ESV)" },
    { text: "Trust His unseen hand.", verse: "Your ears shall hear a word behind you, saying, ‘This is the way.’ – Isaiah 30:21 (ESV)" },
    { text: "Pause for His voice.", verse: "Be still, and know that I am God. – Psalm 46:10 (ESV)" },
    { text: "Seek the higher way.", verse: "Seek the things that are above, where Christ is. – Colossians 3:1 (ESV)" },
    { text: "Turn fear to faith.", verse: "Fear not, for I am with you; be not dismayed. – Isaiah 41:10 (ESV)" },
    { text: "Build on His rock.", verse: "Everyone who hears these words and does them will be like a wise man. – Matthew 7:24 (ESV)" },
    { text: "Wait with bold hope.", verse: "I wait for the Lord, my soul waits, and in his word I hope. – Psalm 130:5 (ESV)" },
    { text: "Seek His hidden path.", verse: "You make known to me the path of life. – Psalm 16:11 (ESV)" },
    { text: "Rest to hear Him.", verse: "Return, O my soul, to your rest; for the Lord has dealt bountifully. – Psalm 116:7 (ESV)" },
    { text: "Turn loss to gain.", verse: "What you meant for evil, God meant for good. – Genesis 50:20 (ESV)" },
    { text: "Ask for His light.", verse: "Your word is a lamp to my feet and a light to my path. – Psalm 119:105 (ESV)" },
    { text: "Step past the storm.", verse: "He made the storm be still, and the waves of the sea were hushed. – Psalm 107:29 (ESV)" },
    { text: "Hold firm in chaos.", verse: "God is our refuge and strength, a very present help in trouble. – Psalm 46:1 (ESV)" },
    { text: "Seek the eternal view.", verse: "Set your minds on things that are above, not on things below. – Colossians 3:2 (ESV)" },
    { text: "Trust His gentle lead.", verse: "He will tend his flock like a shepherd. – Isaiah 40:11 (ESV)" },
    { text: "Pause to reflect.", verse: "The Lord will give you understanding in everything. – 2 Timothy 2:7 (ESV)" },
    { text: "Find peace in surrender.", verse: "Submit yourselves therefore to God. – James 4:7 (ESV)" },
    { text: "Look for His door.", verse: "Behold, I stand at the door and knock. – Revelation 3:20 (ESV)" },
    { text: "Seek His new way.", verse: "See, I am doing a new thing! Now it springs up. – Isaiah 43:19 (ESV)" },
    { text: "Turn doubt to trust.", verse: "Trust in the Lord forever, for the Lord God is an everlasting rock. – Isaiah 26:4 (ESV)" },
    { text: "Wait for His whisper.", verse: "A voice came to him, ‘Rise, Peter; kill and eat.’ – Acts 10:13 (ESV)" },
    { text: "Shine with His love.", verse: "Let all that you do be done in love. – 1 Corinthians 16:14 (ESV)" },
    { text: "Step into His promise.", verse: "Not one word has failed of all his good promise. – 1 Kings 8:56 (ESV)" }
];

const strategyElement = document.getElementById("strategy");
const verseElement = document.getElementById("verse");
const cardElement = document.getElementById("card");
const darkModeToggle = document.getElementById("dark-mode-toggle");

let seenIndices = [];
let currentIndex;
let isProcessing = false;

function getRandomUnseenIndex() {
    const availableIndices = strategies.map((_, i) => i).filter(i => !seenIndices.includes(i));
    
    if (availableIndices.length === 0) {
        seenIndices = [];
        return Math.floor(Math.random() * strategies.length);
    }

    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    seenIndices.push(randomIndex);
    return randomIndex;
}

function showStrategy() {
    cardElement.classList.add("changing");
    setTimeout(() => {
        strategyElement.textContent = strategies[currentIndex].text;
        verseElement.textContent = strategies[currentIndex].verse;
        cardElement.classList.remove("changing");
    }, 150);
}

function triggerBounce() {
    cardElement.classList.remove("bounce");
    void cardElement.offsetWidth;
    cardElement.classList.add("bounce");
}

function handleCardInteraction(e) {
    e.preventDefault();
    if (isProcessing) return;
    isProcessing = true;
    triggerBounce();
    currentIndex = getRandomUnseenIndex();
    showStrategy();
    setTimeout(() => { isProcessing = false; }, 300);
}

// Initial load
currentIndex = getRandomUnseenIndex();
cardElement.classList.add("loading");
showStrategy();
setTimeout(() => cardElement.classList.remove("loading"), 500);

// Card interaction
cardElement.addEventListener("click", handleCardInteraction);
cardElement.addEventListener("touchstart", handleCardInteraction);

// Dark mode toggle
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
