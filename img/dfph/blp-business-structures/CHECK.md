# Proof-check log: BLP Business structures (DFPH comic pages)

Each page checked word-for-word against src/content/dfph-script-blp-business-structures.json (title, 3 captions, bubbles + speakers, prop words). Originals in src/img/gemini-art/dfph-bl1/.

## p01 Business structures: two big questions
- Attempt 1: all text correct except panel 3 caption had a stray duplicated "put in." after the sentence. Fixed by whiting it out (clean white area, no art touched) -> p01-fixed.png. Re-checked: title, captions 1-3, 6 bubbles (correct speakers), props Sole trader/Partnership/LLP/Ltd/plc, Ben's Bikes Ltd, Jo's Cupcakes, UNLIMITED, LIMITED all correct. Minor: slightly wide word gap "have  limited" in caption 3 (cosmetic only). ACCEPTED.

## p02 The sole trader
- Attempt 1 (continued chat): REJECTED - panel 3 speaker was Ben not the teacher; "HMRC self-assessment" garbled; two "Companies House" signs; extra "Price" words on tags; garbled tiny sign on house.
- Attempt 2 (edit request): REJECTED - Gemini pasted a giant form over the old garbled one; half-hidden "Compa/Hous" sign remained.
- Attempt 3 (fresh chat, prompt with explicit fixes): all text correct except Jo's bubble "I just opened my stall!" appeared twice. Fixed by erasing the duplicate bubble (filled with the flat background colour) -> p02-fixed.png. Re-checked: title, captions 1-3, bubbles (Jo x2, supplier, teacher - correct speakers), props Jo's Cupcakes, Unpaid flour bill, HMRC self-assessment, Companies House; price tags blank. ACCEPTED.

## p03 General partnership: it just happens
- Attempt 1: title, captions 1-3, bubbles (Priya, Tom x2, teacher x2 - correct speakers), props Candles, No agreement, Profits, Co-owned house all exactly correct; nothing covered or cut off. ACCEPTED.

## p04 Partnership: no separate person, unlimited liability
- Attempt 1: REJECTED - panel 2 "Then Priya owes me her share!" pointed at Priya (should be Tom); panel 3 "I'm giving notice!" pointed at Tom (should be Priya); extra "To The Firm" on envelope.
- Attempt 2 (edit request): REJECTED - panel 2 tails still wrong, and "I'm giving notice!" now appeared twice.
- Attempt 3 (re-ask in same chat): Gemini returned the same image; REJECTED.
- Attempt 4 (fresh chat, explicit left-to-right layout): text all correct; extra silent "NO" bubble from Priya in panel 2 and a duplicate second Tom with a "NO" bubble in panel 3. Fixed by erasing the "NO" bubble (panel 2) and the duplicate Tom + "NO" bubble (panel 3), filled with flat background colour -> p04-fixed.png. Re-checked: title, captions 1-3, bubbles (Tom, creditor, Tom, Priya, teacher - all tails to correct speaker), props Priya & Tom Candles, Whole debt, Notice; envelope and cracked sign blank. ACCEPTED.

## p05 The limited liability partnership (LLP)
- Attempt 1 (script prompt + rules suffix): REJECTED - prompt text leaked onto a noticeboard ("Through the window a public noticeboard shows..."), extra labels ("Registration Certificate", "Teacher", "Badges", "Kemi box"), Leon drawn twice in panel 3, stray quote marks on the sign.
- Attempt 2 (fresh chat, explicit left-to-right layout): title, captions 1-3, bubbles (Kemi, Leon, teacher, Leon - correct speakers), props Kemi & Leon LLP, Companies House (certificate), Designated members: 2, Members' agreement, Public accounts all exactly correct; name badges blank; nothing cut off. ACCEPTED.

## p06 The private limited company (Ltd)
- Attempt 1 (fresh chat, explicit layout): REJECTED - panel 1 caption repeated words ("owned by by", "run run"); hat labels unreadable/garbled.
- Attempt 2 (edit: fix panel 1 only): caption fixed; left hat read "SHARBHOLDER". REJECTED.
- Attempt 3 (edit: left hat only): "SHAREHOLDER" and "DIRECTOR" clear. Full re-check: title, captions 1-3, bubbles (Ben, teacher, Ben, Ben, teacher - correct speakers), props Ben's Bikes Ltd, SHAREHOLDER, DIRECTOR, Director (chair), 1 share: 1p, No minimum capital, Shares: fully paid, No public offers all correct. ACCEPTED.

## p07-p17: NOT DONE (superseded: see ChatGPT run below)
- p07 attempt 1: Gemini refused: daily image limit reached ("Limit reached - resets 11:32 PM" UK, 19 Nov). Pages 7-17 still to draw.
- Note for next run: fresh chat per page plus an explicit left-to-right layout per panel (who stands where, whose bubble, "silent, no speech bubble") worked far better than the raw script prompt. Small edit requests in the same chat are good for fixing a single word. p01 was drawn in the first chat and has a plainer title banner than p02-p06 (yellow scalloped banner).

## ChatGPT run (19 Nov 2026): pages 7-17 drawn with ChatGPT image generation
Prompts: script prompt word for word, except the illustrator-named style phrase replaced by a generic "bold felt-tip pen children's book illustration style..." phrase (ChatGPT refuses named-illustrator styles). Originals: Monnie's ~/Downloads/bl1-pNN.png.

## p07 The public limited company (plc)
- Attempt 1 (ChatGPT, earlier test, chatgpt-bl1-p07-test.png): white panel backgrounds. Panel 2 caption uses the notes' wording "plus all of any premium" (script said "plus premium"; alt text in dfph.js uses the notes' wording too). Title, captions 1-3, bubbles (plc director, teacher, plc director, teacher - correct speakers), props Sunny Foods plc, £50,000, 1/4 paid, Trading certificate s.761 all correct; nothing extra or cut off. ACCEPTED.

## p08 Who pays tax?
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (Jo, teacher, Kemi, teacher - correct speakers), props Income tax + Class 4 NICs, Partnership tax return, LLP, Corporation tax, Dividend, Salary all exactly correct; nothing extra; props at bottom edge slightly tight but fully readable. Script text matches notes. ACCEPTED.

## p09 Key differences and a trap
- Attempt 1 (fresh chat): all text correct except a stray accent on "privaté!" in Jo's bubble. Fixed by whiting out the accent mark (bubble white, no letters touched) -> scratchpad p09-fixed.png. Re-checked: title, captions 1-3, bubbles (Jo, Ben, teacher, teacher), props 9 months / plc: 6 months, Perpetual succession, LLP, LP all correct. Minor: panel 3 bubble has no tail and sits top-left (teacher is centre, holding the signs); acceptable. Script matches notes. ACCEPTED.

## p10 Salomon: the company is a separate person
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (Mr Salomon, creditor, judge, supplier, Ben - correct speakers), props A Salomon & Co Ltd, Debentures, House of Lords, Invoice: Ben's Bikes Ltd all exactly correct; nothing extra (company buildings have no labels); invoice sits near bottom edge but fully readable. Script matches notes. ACCEPTED.

## p11 What separate personality means
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (insurer, Mrs Lee, teacher - correct speakers), props Timber, Insurance policy, Employment contract, Lee's Air Farming, Parent Co, Subsidiary Co all exactly correct; nothing extra or cut off. Minor art difference: in panel 2 a man in a suit nods instead of the teacher (no text involved). Script matches notes. ACCEPTED.

## p12 Limited liability belongs to the shareholders
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (teacher, liquidator, Asha, teacher - correct speakers), props Company: unlimited, Members: capped, 1,000 shares at £1.50, Paid: £1,000, PERSONALITY, LIMITED LIABILITY all exactly correct; nothing extra or cut off. Script matches notes (premium included). ACCEPTED.

## p13 Still personally liable: not veil piercing
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (bank manager, Ben, teacher, teacher - correct speakers), props Personal guarantee, Signed: Ben, personally, Fraudulent trading s.213, Wrongful trading s.214, Phoenix names ss.216-217, VEIL all exactly correct; nothing extra or cut off. Script matches notes. ACCEPTED.

## p14 Piercing the corporate veil
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (teacher, Mrs Prest, judge, judge - correct speakers), props CORPORATE VEIL, Trust (one tag on each of the three houses, as the scene asks), EVASION, CONCEALMENT, Obligation all exactly correct; nothing extra or cut off. Script matches notes. ACCEPTED.

## p15 Evasion cases, and when courts will not pierce
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (judge, judge, teacher - correct speakers), props Promise: no approaching customers, Contract of sale, Fair? Control? Insolvent? Group? (each crossed) all exactly correct; stop sign and van blank; nothing extra or cut off. Script matches notes. ACCEPTED.

## p16 Choosing a structure: seven questions
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (Jo, teacher, Ben, teacher - correct speakers), signposts Step 1: Who?, Step 2: Risk?, Step 3: Privacy, Step 4: Tax, Step 5: Money, Step 6: Control, Step 7: Future all exactly correct; nothing extra or cut off. Note: signposts are short labels for the notes' seven questions (the Till now uses the notes' full questions); not wrong, so left as scripted. ACCEPTED.

## p17 Choosing a structure: common answers
- Attempt 1 (fresh chat): title, captions 1-3, bubbles (Kemi, Leon, plc director, Ben, Jo, Priya - correct speakers), props Kemi & Leon LLP, plc, Ltd, Partnership agreement all exactly correct; nothing extra or cut off. Script matches notes. ACCEPTED.

## Summary
All 17 pages now drawn and installed (p01-p06 Gemini; p07-p17 ChatGPT). Only hand fix in this run: p09 stray accent removed. The earlier "p07-p17: NOT DONE" note above is superseded.
