import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public', 'images');
const GALLERY = path.join(OUT, 'gallery');
const SECTIONS = path.join(OUT, 'sections');
[OUT, GALLERY, SECTIONS].forEach((d) => fs.mkdirSync(d, { recursive: true }));

// Botanical luxury palette: deep emerald, blush rose, warm cream, copper, charcoal.
// NO blue, NO gold.
const STYLE =
  'luxurious botanical event decor, deep emerald green, blush rose, dusty pink, warm cream, copper accents, charcoal details, elegant, cinematic, professional photography, high detail, soft natural light, editorial magazine quality';

const jobs: { name: string; prompt: string; size: string }[] = [
  {
    name: 'sections/hero-arch',
    size: '1344x768',
    prompt: `A grand luxury balloon arch installation at an upscale evening event, organic balloon garland in deep emerald green, blush rose, dusty pink and cream balloons of varying sizes, interspersed with olive branches and eucalyptus leaves, copper fairy lights woven through, elegant arched entryway in a cream ballroom with marble floor, warm romantic ambient lighting, ${STYLE}`,
  },
  {
    name: 'sections/about-decorator',
    size: '864x1152',
    prompt: `An elegant female event decorator in a cream linen outfit arranging a luxury balloon garland, hands carefully tying balloons, surrounded by balloons in deep emerald green blush rose and cream, olive branches, soft window light in a stylish studio, ${STYLE}`,
  },
  {
    name: 'sections/wedding',
    size: '1344x768',
    prompt: `Luxury wedding ceremony backdrop with a sweeping organic balloon garland in cream blush rose and sage, framed by olive branches, romantic floral arch at a garden wedding, golden hour light, elegant chairs in cream, ${STYLE}`,
  },
  {
    name: 'sections/birthday',
    size: '1344x768',
    prompt: `Elegant adult birthday celebration with a sculptural balloon installation in emerald green blush rose and copper, chic dessert table with cream cake, candlelight, sophisticated table setting, ${STYLE}`,
  },
  {
    name: 'sections/family-function',
    size: '1344x768',
    prompt: `Warm family celebration decor with a lush balloon garland in deep emerald and blush rose arching over a long dining table, olive branches, cream dinnerware, candlelight, joyful elegant family gathering at home, ${STYLE}`,
  },
  {
    name: 'sections/baby-shower',
    size: '1344x768',
    prompt: `Dreamy baby shower decoration with a soft organic balloon arch in blush rose cream and sage, delicate olive branches, elegant gift table with cream linens, soft pastel light, serene and fresh, ${STYLE}`,
  },
  {
    name: 'sections/corporate',
    size: '1344x768',
    prompt: `Sophisticated corporate event decoration with a modern balloon installation in emerald green cream and copper, sleek conference stage backdrop, elegant branding moment, polished ambiance, ${STYLE}`,
  },
  {
    name: 'sections/process',
    size: '1344x768',
    prompt: `Close up of a designer's hands crafting a luxury balloon garland, tying emerald and blush balloons with copper wire, olive leaves on a marble worktable, warm studio light, ${STYLE}`,
  },
  {
    name: 'sections/cta',
    size: '1344x768',
    prompt: `Elegant balloon garland detail shot, deep emerald and blush rose balloons with olive branches and copper lights, soft bokeh background, romantic luxury decor, ${STYLE}`,
  },
  // Gallery — real-photo style decoration shots
  {
    name: 'gallery/g1',
    size: '864x1152',
    prompt: `Luxury birthday balloon arch in emerald green blush rose and cream over an elegant dessert table, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g2',
    size: '1024x1024',
    prompt: `Organic balloon garland framing a wedding sweetheart table in blush rose and cream with olive branches, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g3',
    size: '864x1152',
    prompt: `Statement balloon column installation in emerald and copper at a gala entrance, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g4',
    size: '1024x1024',
    prompt: `Baby shower balloon arch in soft blush rose cream and sage with olive leaves, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g5',
    size: '864x1152',
    prompt: `Corporate event balloon wall in emerald green and cream with copper accents, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g6',
    size: '1024x1024',
    prompt: `Engagement party balloon garland in blush rose and emerald with copper lights, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g7',
    size: '864x1152',
    prompt: `Elegant anniversary celebration with balloon arch in cream blush and emerald, candlelit tables, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g8',
    size: '1024x1024',
    prompt: `Luxury baby gender reveal balloon installation in emerald and blush with cream, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g9',
    size: '864x1152',
    prompt: `Grand entrance balloon arch in deep emerald blush rose and cream with olive branches at a luxury venue, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g10',
    size: '1024x1024',
    prompt: `Intimate dinner party balloon garland in blush cream and sage with copper candles, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g11',
    size: '864x1152',
    prompt: `Festive holiday decor balloon installation in emerald blush and copper, real photo, ${STYLE}`,
  },
  {
    name: 'gallery/g12',
    size: '1024x1024',
    prompt: `Luxury bridal shower balloon arch in blush rose cream and emerald with olive leaves, real photo, ${STYLE}`,
  },
];

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function run(zai: any, job: (typeof jobs)[number]) {
  const outPath = path.join(OUT, `${job.name}.png`);
  if (fs.existsSync(outPath)) {
    console.log(`skip ${job.name} (exists)`);
    return;
  }
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size as any,
      });
      const b64 = res.data[0].base64;
      fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
      console.log(`ok ${job.name}`);
      return;
    } catch (e: any) {
      console.error(`fail ${job.name} attempt ${attempt}: ${e.message}`);
      if (attempt < 4) await sleep(8000 * attempt);
    }
  }
  console.error(`giving up ${job.name}`);
}

(async () => {
  const zai = await ZAI.create();
  for (const job of jobs) {
    await run(zai, job);
    await sleep(3000); // throttle to avoid 429
  }
  console.log('DONE');
})();
