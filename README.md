# Discord OAuth Handler

This project was created in order to handle the OAuth redirect discord now requires.

# Usage
This is fairly self-explanatory, but this just needs to be running somewhere. You can use `npm run start` to run it directly, or, assuming installed, `pm2` to keep alive.

From there, it needs to be served, either directly on a port, or the preferred approach, to use a reverse proxy, **nginx**, to serve it on a standard 80 or 443 ports on a domain.

# My personal use-case
My own use for this will be hosting it on a server via nginx, then use a _cloudflare handled_ domain to point to it, creating a **nginx virtual block** just for this.

All just for a discord bot that'll, in turn, be rather simple...

_sighs in overcomplicatedness_
