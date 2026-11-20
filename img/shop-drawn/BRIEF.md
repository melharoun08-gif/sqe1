# Brief: Nick Sharratt versions of Layla's real presents (Gemini, via Claude in Chrome)

Goal: for each item id given to you, make ONE faithful Nick Sharratt felt-tip drawing of the EXACT product in its photo, and save it as
/mnt/project-files/sqe1-site/src/img/shop-drawn/<id>.png (1024x1024). Do not edit any other file. Do not deploy.
/mnt/project-files is a network mount: use trailing slashes, never search the whole folder.

Proven steps (worked for pandan.png in this folder; look at it, that is the quality bar):
1. Chrome: tabs_context_mcp, then tabs_create_mcp to make ONE tab of your own. Use only that tab, ALWAYS pass its explicit tabId (never call navigate without tabId: that grabs other threads' tabs). Monnie's Mac is low on RAM and she is angry about open tabs: ONE tab only, close it the moment you finish. If your tab disappears, call tabs_context_mcp and create a new one.
   In that one tab: load the photo (step 2), take the full-scale screenshot (step 4 first half), THEN navigate the same tab to Gemini (step 3) and upload that screenshot (it stays valid for a few minutes).
2. Tab P: navigate to https://melharoun08-gif.github.io/sqe1/img/shop/<id>.webp, then javascript:
   document.body.innerHTML='<img src="'+location.href+'" style="height:100vh;width:auto;display:block;margin:0 auto">'; document.body.style.cssText='margin:0;background:#fff;overflow:hidden'
3. Tab G: navigate to the Gemini URL you were given (new chat each item). Model picker should say "Neon" (Deeper analysis); leave it.
   Click the "Upload & tools" (+) button, wait 1s, then javascript:
   [...document.querySelectorAll('input[type=file]')].find(x=>x.accept==='image/*,video/*').setAttribute('aria-label','imgupload-target')
   then find "file input labelled imgupload-target" to get its ref. Press Escape is NOT needed.
4. Take a FULL-SCALE screenshot of tab P (computer screenshot, NO scale parameter; scaled screenshots upload tiny), then immediately
   upload_image with that imageId, tabId = tab G, ref = the file input ref, filename <id>.png. (Dropping on the textbox does NOT work.)
5. Click the prompt textbox, type EXACTLY:
   This is a photo of a present. Create an image of exactly this item as a Nick Sharratt-style felt-tip illustration (like the Tracy Beaker books), with bold black outlines and bright colours, on a plain white background. Square.
   Press Return. Wait ~30-40 s, screenshot to confirm the picture appeared.
6. Extract at full size: javascript in tab G:
   const im=[...document.querySelectorAll('img.image.loaded')].pop(); let o=document.getElementById('__ov'); if(!o){o=document.createElement('div');o.id='__ov';document.body.appendChild(o);} o.style.cssText='position:fixed;inset:0;background:#fff;z-index:2147483647'; o.replaceChildren(); const n=document.createElement('img'); n.src=im.src; n.style.cssText='width:1024px;height:1024px;display:block;position:absolute;left:0;top:0'; o.appendChild(n); [innerWidth, devicePixelRatio, im.naturalWidth]
   Take a normal screenshot first (so the coordinate frame is fresh), then computer zoom, region [0,0,W,W] where W = 1024 * (screenshot frame width / innerWidth) (e.g. frame 1510, innerWidth 2196 -> W=704), save_to_disk true, NO scale param. It must report 1024x1024 (if 1025, crop to 1024 with PIL).
   The tool result shows the saved path ("[Image: source: ...png]"). cp it to /mnt/project-files/sqe1-site/src/img/shop-drawn/<id>.png and check with python PIL that it is 1024x1024.
   Remove the overlay afterwards: document.getElementById('__ov').remove()
7. Self-check BEFORE moving on (Monnie hates wasted generations): it must clearly be the same product as the photo (shape, colours, characters, pattern, wording),
   felt-tip style, white background, bright. If it is clearly wrong, you may do ONE fresh new chat retry for that item, never edit the bad picture. Written words on products
   (e.g. "Welcome to Cluckington Palace", "HARIBO", "Chickens Coloring Book", "Fairy Pig Man & Chicken") must be spelled right; if still wrong after the one retry, keep the best one and report it.
8. Never type into anything except the Gemini prompt box. Don't click Share/Download/Delete. Avoid anything that opens a native file dialog.

Report back: per id: saved OK / problems (one line each), and the Gemini chat URL.

Other threads also use Gemini in this Chrome: if a new chat's prompt box already contains someone else's text, do NOT delete it; open another new chat instead.
