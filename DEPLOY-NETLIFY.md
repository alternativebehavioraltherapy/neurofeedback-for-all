# Deploy Neurofeedback For All to Netlify (free)

This is the **current** site (rentals-only; Contact page has no form).

## Pages

| Page | Path |
| --- | --- |
| Main (Home) | `/` |
| Information | `/information` |
| Contact Us | `/contact` |

## Upload to GitHub — avoid extra folders

Your last upload put the project **two folders deep**, which broke Netlify. This zip has files at the **top level** (`package.json` is immediately inside).

1. Download and unzip. You should see `package.json`, `src`, `public`, and `netlify.toml` **right away** — not inside another `neurofeedback-for-all` folder.
2. Open [https://github.com/joshuaryanmoore/neurofeedback-for-all](https://github.com/joshuaryanmoore/neurofeedback-for-all)
3. Click **Add file** → **Upload files**
4. Drag these items from the unzipped folder onto GitHub (the files themselves, not a parent folder):
   - `package.json`
   - `package-lock.json`
   - `netlify.toml`
   - `vite.config.ts`
   - `tsconfig.json`
   - `src` folder
   - `public` folder
   - `scripts` folder
   - remaining root files (`DEPLOY-NETLIFY.md`, `eslint.config.mjs`, etc.)
5. Commit. On the repo home page you should see **`package.json` at the top** (same level as any leftover old folder).

If an old `neurofeedback-for-all/` folder is still there, leave it. Netlify will use the new root files.

## Netlify settings (existing site or new import)

| Setting | Value |
| --- | --- |
| **Base directory** | *(leave empty)* |
| **Package directory** | *(leave empty)* |
| **Build command** | `npm run build:netlify` |
| **Publish directory** | `dist` |
| **Functions directory** | *(leave empty)* |

Then **Deploys** → **Trigger deploy** → **Deploy project without cache**.

Your shareable test link is the green `*.netlify.app` address on **Project overview** (not an old bookmark if the site was renamed).

## Domain

Keep Square live until the `*.netlify.app` site looks correct. Then add `neurofeedbackforall.com` in Netlify **Domain management**.

## Edit content later

| What | Where |
| --- | --- |
| Phone, email, address | `src/data/site.ts` |
| Home | `src/routes/index.tsx` |
| Information | `src/routes/information.tsx` |
| Contact | `src/routes/contact.tsx` |
| Photos / logo | `public/` |
