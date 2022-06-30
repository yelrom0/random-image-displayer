# Random Image Displayer

This little program will display a random image from a folder specified.

## How Do I use it?

1. Check out `app/server.js`, this is where the magic happens.
2. Under the `Local Constants` section, change the `imageFolder` to the folder you want to display images from and the `port` to whatever port you want to use.
3. Put the images you want to display in the folder you specified.
4. Run `chmod +x` on the `buildandrun.sh` file.
5. Run `./buildandrun.sh` in the terminal. Which will start the server.
6. Open your browser and go to `http://localhost:port` where `port` is the port you specified in the `Local Constants` section.
7. Refresh the page to see a new image.
8. Enjoy!

## Why did I make it?

- I wanted to make a simple program that I could use to display random images for my wildcard subdomains.
- I wanted to learn a little more Node.js and how to use it to create a simple server.
- I was going to use Python/FastAPI (which I'm more familiar with) but I would have had to write a front-end in JS anyway.
- It literally just took me a few minutes to make.

## Who am I?

- I'm Daniel Morley, a Backend Python Developer from Melbourne, Australia. I enjoy tinkering with my home server and sometimes write small projects like this.

## Can I modify it?

- Sure! Feel free to modify it and share it with the world.

## Can I test it without running it myself?

- _sigh_ yes, as long as you don't break anything [Random Image @ Morley's Exact Club](https://random-image.morleysexact.club)

## Will you update this in the future?

- Maybe, but this wasn't the original idea. I was hoping to return a full 404 page with a random image and styling etc. Maybe I'll end up doing that and changing this project to something written in react.js, maybe I'll just leave it as is ¯\\\_(ツ)\_/¯
