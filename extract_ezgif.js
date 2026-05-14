const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function extractFrames() {
  const inputFile = path.join(__dirname, "public", "sequence", "ezgif.com-webp-maker.webp");
  const outDir = path.join(__dirname, "public", "sequence");

  if (!fs.existsSync(inputFile)) {
    console.log("No ezgif file found.");
    return;
  }

  console.log("Reading ezgif file...");
  const metadata = await sharp(inputFile, { animated: true }).metadata();
  const pages = metadata.pages || 0;
  
  console.log(`Animated WEBP identified. Extracting ${pages} pages/frames...`);

  // Fast extraction: load all frames into memory instead of hitting disk each time
  for (let i = 0; i < pages; i++) {
    const paddedIndex = i.toString().padStart(2, "0");
    const filename = `frame_${paddedIndex}_delay-0.067s.webp`;
    const outPath = path.join(outDir, filename);
    
    await sharp(inputFile, { animated: true, page: i })
      .webp({ quality: 90 })
      .toFile(outPath);
      
    if (i % 10 === 0 || i === pages - 1) {
      console.log(`Extracted: ${filename} (${i+1}/${pages})`);
    }
  }
  console.log("Extraction complete!");
}

extractFrames();
