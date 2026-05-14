const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function extractFrames() {
  try {
    const inputFile = "C:/Users/jatin/Desktop/projects/portfolio/_MConverter.eu_Whisk_ign2u2y3ktzyudm00smyidote2n0qtlmvmyw0cm.webp";
    const outDir = path.join(__dirname, "public", "sequence");
    
    // Ensure dir exists
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    // Load full animated image
    const metadata = await sharp(inputFile, { animated: true }).metadata();
    const pages = metadata.pages || 0;
    
    console.log(`Animated WEBP identified. Extracting ${pages} pages/frames...`);

    for (let i = 0; i < pages; i++) {
      const paddedIndex = i.toString().padStart(2, "0");
      // Use "0.067s" delay as a placeholder to match what the user's string required earlier.
      const filename = `frame_${paddedIndex}_delay-0.067s.webp`;
      const outPath = path.join(outDir, filename);
      
      await sharp(inputFile, { animated: true, page: i })
        .webp({ quality: 90 }) // Or whatever quality
        .toFile(outPath);
        
      console.log(`Extracted: ${filename}`);
    }
    console.log("Extraction complete!");
  } catch (err) {
    console.error("Error extracting frames:", err);
  }
}

extractFrames();
