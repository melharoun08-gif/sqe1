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

## p07-p17: NOT DONE
- p07 attempt 1: Gemini refused: daily image limit reached ("Limit reached - resets 11:32 PM" UK, 19 Nov). Pages 7-17 still to draw.
- Note for next run: fresh chat per page plus an explicit left-to-right layout per panel (who stands where, whose bubble, "silent, no speech bubble") worked far better than the raw script prompt. Small edit requests in the same chat are good for fixing a single word. p01 was drawn in the first chat and has a plainer title banner than p02-p06 (yellow scalloped banner).
