#!/bin/bash
# Generate all images for One Touch Event Décor website using z-ai CLI
cd /home/z/my-project

STYLE="luxurious botanical event decor, deep emerald green, blush rose, dusty pink, warm cream, copper accents, charcoal details, elegant, cinematic, professional photography, high detail, soft natural light, editorial magazine quality"

gen() {
  local name="$1"
  local size="$2"
  local prompt="$3"
  local out="public/images/${name}.png"
  if [ -f "$out" ]; then
    echo "skip $name (exists)"
    return
  fi
  echo "generating $name ..."
  if z-ai image -p "$prompt" -o "$out" -s "$size" >> gen-images.log 2>&1; then
    echo "ok $name"
  else
    echo "fail $name"
  fi
  sleep 2
}

echo "=== Image generation started $(date) ===" >> gen-images.log

gen "sections/hero-arch" "1344x768" "A grand luxury balloon arch installation at an upscale evening event, organic balloon garland in deep emerald green, blush rose, dusty pink and cream balloons of varying sizes, interspersed with olive branches and eucalyptus leaves, copper fairy lights woven through, elegant arched entryway in a cream ballroom with marble floor, warm romantic ambient lighting, $STYLE"

gen "sections/about-decorator" "864x1152" "An elegant female event decorator in a cream linen outfit arranging a luxury balloon garland, hands carefully tying balloons, surrounded by balloons in deep emerald green blush rose and cream, olive branches, soft window light in a stylish studio, $STYLE"

gen "sections/wedding" "1344x768" "Luxury wedding ceremony backdrop with a sweeping organic balloon garland in cream blush rose and sage, framed by olive branches, romantic floral arch at a garden wedding, golden hour light, elegant chairs in cream, $STYLE"

gen "sections/birthday" "1344x768" "Elegant adult birthday celebration with a sculptural balloon installation in emerald green blush rose and copper, chic dessert table with cream cake, candlelight, sophisticated table setting, $STYLE"

gen "sections/family-function" "1344x768" "Warm family celebration decor with a lush balloon garland in deep emerald and blush rose arching over a long dining table, olive branches, cream dinnerware, candlelight, joyful elegant family gathering at home, $STYLE"

gen "sections/baby-shower" "1344x768" "Dreamy baby shower decoration with a soft organic balloon arch in blush rose cream and sage, delicate olive branches, elegant gift table with cream linens, soft pastel light, serene and fresh, $STYLE"

gen "sections/corporate" "1344x768" "Sophisticated corporate event decoration with a modern balloon installation in emerald green cream and copper, sleek conference stage backdrop, elegant branding moment, polished ambiance, $STYLE"

gen "sections/process" "1344x768" "Close up of a designer hands crafting a luxury balloon garland, tying emerald and blush balloons with copper wire, olive leaves on a marble worktable, warm studio light, $STYLE"

gen "sections/cta" "1344x768" "Elegant balloon garland detail shot, deep emerald and blush rose balloons with olive branches and copper lights, soft bokeh background, romantic luxury decor, $STYLE"

gen "gallery/g1" "864x1152" "Luxury birthday balloon arch in emerald green blush rose and cream over an elegant dessert table, real photo, $STYLE"
gen "gallery/g2" "1024x1024" "Organic balloon garland framing a wedding sweetheart table in blush rose and cream with olive branches, real photo, $STYLE"
gen "gallery/g3" "864x1152" "Statement balloon column installation in emerald and copper at a gala entrance, real photo, $STYLE"
gen "gallery/g4" "1024x1024" "Baby shower balloon arch in soft blush rose cream and sage with olive leaves, real photo, $STYLE"
gen "gallery/g5" "864x1152" "Corporate event balloon wall in emerald green and cream with copper accents, real photo, $STYLE"
gen "gallery/g6" "1024x1024" "Engagement party balloon garland in blush rose and emerald with copper lights, real photo, $STYLE"
gen "gallery/g7" "864x1152" "Elegant anniversary celebration with balloon arch in cream blush and emerald, candlelit tables, real photo, $STYLE"
gen "gallery/g8" "1024x1024" "Luxury baby gender reveal balloon installation in emerald and blush with cream, real photo, $STYLE"
gen "gallery/g9" "864x1152" "Grand entrance balloon arch in deep emerald blush rose and cream with olive branches at a luxury venue, real photo, $STYLE"
gen "gallery/g10" "1024x1024" "Intimate dinner party balloon garland in blush cream and sage with copper candles, real photo, $STYLE"
gen "gallery/g11" "864x1152" "Festive holiday decor balloon installation in emerald blush and copper, real photo, $STYLE"
gen "gallery/g12" "1024x1024" "Luxury bridal shower balloon arch in blush rose cream and emerald with olive leaves, real photo, $STYLE"

echo "=== ALL DONE $(date) ==="
