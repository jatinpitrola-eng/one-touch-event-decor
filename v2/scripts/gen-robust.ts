import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUT = path.join(process.cwd(), 'public', 'images');
fs.mkdirSync(path.join(OUT, 'sections'), { recursive: true });
fs.mkdirSync(path.join(OUT, 'gallery'), { recursive: true });

const STYLE =
  'luxurious botanical event decor, deep emerald green, blush rose, dusty pink, warm cream, copper accents, charcoal details, elegant, cinematic, professional photography, high detail, soft natural light, editorial magazine quality';

const jobs = [
  ['sections/wedding', '1344x768', `Luxury wedding ceremony backdrop with a sweeping organic balloon garland in cream blush rose and sage, framed by olive branches, romantic floral arch at a garden wedding, golden hour light, elegant chairs in cream, ${STYLE}`],
  ['sections/birthday', '1344x768', `Elegant adult birthday celebration with a sculptural balloon installation in emerald green blush rose and copper, chic dessert table with cream cake, candlelight, sophisticated table setting, ${STYLE}`],
  ['sections/family-function', '1344x768', `Warm family celebration decor with a lush balloon garland in deep emerald and blush rose arching over a long dining table, olive branches, cream dinnerware, candlelight, joyful elegant family gathering at home, ${STYLE}`],
  ['sections/baby-shower', '1344x768', `Dreamy baby shower decoration with a soft organic balloon arch in blush rose cream and sage, delicate olive branches, elegant gift table with cream linens, soft pastel light, serene and fresh, ${STYLE}`],
  ['sections/corporate', '1344x768', `Sophisticated corporate event decoration with a modern balloon installation in emerald green cream and copper, sleek conference stage backdrop, elegant branding moment, polished ambiance, ${STYLE}`],
  ['sections/process', '1344x768', `Close up of designer hands crafting a luxury balloon garland, tying emerald and blush balloons with copper wire, olive leaves on a marble worktable, warm studio light, ${STYLE}`],
  ['sections/cta', '1344x768', `Elegant balloon garland detail shot, deep emerald and blush rose balloons with olive branches and copper lights, soft bokeh background, romantic luxury decor, ${STYLE}`],
  ['gallery/g1', '864x1152', `Luxury birthday balloon arch in emerald green blush rose and cream over an elegant dessert table, real photo, ${STYLE}`],
  ['gallery/g2', '1024x1024', `Organic balloon garland framing a wedding sweetheart table in blush rose and cream with olive branches, real photo, ${STYLE}`],
  ['gallery/g3', '864x1152', `Statement balloon column installation in emerald and copper at a gala entrance, real photo, ${STYLE}`],
  ['gallery/g4', '1024x1024', `Baby shower balloon arch in soft blush rose cream and sage with olive leaves, real photo, ${STYLE}`],
  ['gallery/g5', '864x1152', `Corporate event balloon wall in emerald green and cream with copper accents, real photo, ${STYLE}`],
  ['gallery/g6', '1024x1024', `Engagement party balloon garland in blush rose and emerald with copper lights, real photo, ${STYLE}`],
  ['gallery/g7', '864x1152', `Elegant anniversary celebration with balloon arch in cream blush and emerald, candlelit tables, real photo, ${STYLE}`],
  ['gallery/g8', '1024x1024', `Luxury baby gender reveal balloon installation in emerald and blush with cream, real photo, ${STYLE}`],
  ['gallery/g9', '864x1152', `Grand entrance balloon arch in deep emerald blush rose and cream with olive branches at a luxury venue, real photo, ${STYLE}`],
  ['gallery/g10', '1024x1024', `Intimate dinner party balloon garland in blush cream and sage with copper candles, real photo, ${STYLE}`],
  ['gallery/g11', '864x1152', `Festive holiday decor balloon installation in emerald blush and copper, real photo, ${STYLE}`],
  ['gallery/g12', '1024x1024', `Luxury bridal shower balloon arch in blush rose cream and emerald with olive leaves, real photo, ${STYLE}`],
] as const;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function gen(zai: any, name: string, size: string, prompt: string) {
  const outPath = path.join(OUT, `${name}.png`);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 5000) {
    console.log(`skip ${name}`);
    return;
  }
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 100000);
  try {
    const res: any = await zai.images.generations.create(
      { prompt, size },
      { signal: controller.signal as any }
    );
    clearTimeout(timer);
    const b64 = res.data[0].base64;
    if (!b64) throw new Error('no image in response');
    fs.writeFileSync(outPath, Buffer.from(b64, 'base64'));
    console.log(`ok ${name}`);
  } catch (e: any) {
    clearTimeout(timer);
    console.error(`fail ${name}: ${e.message}`);
  }
  await sleep(2000);
}

(async () => {
  const zai = await ZAI.create();
  console.log(`starting ${jobs.length} jobs at ${new Date().toISOString()}`);
  for (const [name, size, prompt] of jobs) {
    await gen(zai, name, size as string, prompt as string);
  }
  console.log(`ALL DONE at ${new Date().toISOString()}`);
  process.exit(0);
})();
