# Trade Image Generation

Generates production-ready trade hero and OG images via Gemini Imagen 3.

## Required environment variable

```
GEMINI_API_KEY=your_key_here
```

Set it in your shell session or a local `.env` file (**never commit this file**):

```bash
export GEMINI_API_KEY=your_key_here
```

## Command

```bash
npm run generate:trade-image -- \
  --slug <trade-slug> \
  --prompt "<image prompt>" \
  [--hero] [--og]
```

| Flag | Required | Description |
|------|----------|-------------|
| `--slug` | Yes | Trade slug matching `tradesMeta.js` (e.g. `glaziers`) |
| `--prompt` | Yes | Descriptive image prompt for Imagen 3 |
| `--hero` | No | Generate hero asset only |
| `--og` | No | Generate OG asset only |

If neither `--hero` nor `--og` is given, **both are generated**.

## Output paths

| Asset | Path | Dimensions |
|-------|------|------------|
| Hero | `public/images/trades/{slug}-hero.jpg` | 1800px wide, JPEG q=85 |
| OG | `public/images/trades/{slug}-og.jpg` | 1200×630, JPEG q=85 |

## Example — generate glaziers images

```bash
npm run generate:trade-image -- \
  --slug glaziers \
  --prompt "Glazier installing large glass panes on a commercial building facade, suction cups visible, golden hour lighting, Australian city skyline, photorealistic, wide angle" \
  --hero --og
```

## After generation

1. **Trade page hero**: the `heroImage` field in `src/data/tradesMeta.js` must point to the local path:
   ```js
   heroImage: '/images/trades/glaziers-hero.jpg',
   ```

2. **Blog posts**: update matching entries in `src/data/posts.js`:
   ```js
   image: '/images/trades/glaziers-hero.jpg',
   ```

3. **OG + schema images** are resolved automatically via the `-hero` → `-og` convention in:
   - `src/utils/tradeHero.js` (`tradeOgUrl`)
   - `src/utils/blogImage.js` (`blogOgUrl`)
   - `src/components/Meta.jsx` (`resolveOgImage`)

4. Run `npm run build` to verify everything compiles clean.

## How the local image system works

When `heroImage` (or `posts.js image`) starts with `/`, the utilities treat it as a local public asset:

- `tradeHeroUrl(slug)` → returns `/images/trades/{slug}-hero.jpg` directly (no Unsplash)
- `tradeOgUrl(slug)` → returns `https://tradiepayau.directory/images/trades/{slug}-og.jpg` (absolute, for schema/OG)
- `blogHeroUrl / blogCardUrl` → same as hero path
- `blogOgUrl` → same as OG path
- `Meta.jsx resolveOgImage` → detects local paths in both trade and blog branches

All other trades without a local asset continue to use Unsplash CDN unchanged.
