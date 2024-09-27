Hi! 👋

I did a few things to this repo, but there are a lot more I could do.

First the things I ended up adding:

I ended up using the Database, but I did change the schema so that it avoids the JSONB type. It seems like Drizzle has a few issues with this. I have a bit more experience using Prisma with JSONB/Postgres. Instead I made specialties a text[] in Postgres.

I also made it so that the search is more of an experience, rather than a single search box. It lets the user select their primary and secondary concerns. (Note I didn't do anything with the secondary concern right now since it limits the results too much with the limited data.)

I added another API to find all cities, which is just a simple SQL call using distinct on the city. This is not super optimized. I did make this optional in the UI.

Please let me know if this compiles and runs on your system, if not I can submit a change or two.

Things I would add with more time:

- Make the result table paginated (the limited data meant that I never needed to, but in the real world, this would need to happen).
- Have more time to work on the Tailwind CSS and customize it a bit more to be a little more fun.
- Make a detailed page for the inidivual Advocate, and on this page I could do some fancy things like potentially add a call to OpenAI to determine a fake BIO based on all of their specialties. (just for fun)
- Some kind of real menu system (the top is all faked/mostly copied/pasted from tailwind's site examples)
- Add a footer so that page doesn't look incomplete
- Move the backend to Python/FastAPI or Java or something other than Next's route handler system.
