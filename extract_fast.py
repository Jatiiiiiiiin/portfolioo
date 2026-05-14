from PIL import Image
import os
import sys

input_file = r"C:\Users\jatin\Desktop\projects\portfolio\portfolio-web\public\sequence\ezgif.com-webp-maker.webp"
out_dir = r"C:\Users\jatin\Desktop\projects\portfolio\portfolio-web\public\sequence"

os.makedirs(out_dir, exist_ok=True)
if not os.path.exists(input_file):
    print("NO SOURCE WEBP FOUND")
    sys.exit()

img = Image.open(input_file)

count = 0
while True:
    try:
        img.seek(count)
        frame_img = img.convert("RGBA")
        
        padded_index = str(count).zfill(2)
        # We save as PNG to ensure 100% fast output without WEBP dll dependency
        filename = f"frame_{padded_index}_delay-0.067s.png"
        
        out_path = os.path.join(out_dir, filename)
        frame_img.save(out_path, format="PNG")
        count += 1
    except EOFError:
        break # end of sequence

print(f"Extracted all {count} frames successfully as PNGs!")
