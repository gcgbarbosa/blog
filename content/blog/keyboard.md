+++
title = "The case for custom ergonomic keyboards"
date = "2023-07-01"
description = "It is never early to start preventing repetitive strain injury"
tags = [
    "productivity",
]
+++

If we do our jobs right (programmers), we spend 40 hours a week typing on this thing called keyboard.
Some people love keyboards—a lot.
I am one of them. I started with mechanical keyboards, and I must warn you that this is addictive.

## Mechanical Keyboards

A mechanical keyboard uses individual mechanical switches for each key instead of the rubber dome or membrane
commonly used in most modern keyboards.
Sometimes the mechanical switches provide tactile feedback and a distinct "click" sound when pressed.
Mechanical switches are usually more responsive and comfortable for typing or gaming.
Mechanical keyboards are often preferred by users who want a more durable,
customizable, and responsive keyboard experience.

![cleaning mechanical keyboard](/posts/keyboards/example.webp)

### Custom Mechanical Keyboards

Custom mechanical keyboards are built from individual components selected and assembled by
the user rather than being pre-built by a manufacturer.
They typically involve selecting a custom mechanical keyboard kit or individual components,
such as a printed circuit board,
switches, keycaps, and a case and then assembling these components into a fully functional keyboard.

There are many particularities of mechanical keyboards that I will have to skip.
I want to avoid the "switches war specifically".
I think we have way too many options.
If you can, test brown, red, and blue cherry MX or similar brands.
Then go from there. Don't overthink. There are way too many options.

The best example of this type of keyboard is the Planck.
The Planck keyboard is highly customizable and can be configured with various switch types,
keycaps, and **firmware** options to suit the user's preferences.
It is often used by enthusiasts,
programmers,
and others who value portability,
ergonomics, and customization in their keyboard setup.
The keyboard was designed by Jack Humbert and is manufactured and sold by the company OLKB (**Ortholinear** Keyboards).

![ortholinear example](/posts/keyboards/ortho.webp)

### Ortholinear vs Staggered

An ortholinear keyboard arranges the keys in a grid pattern,
with keys aligned in straight rows and columns,
unlike the staggered layout found in most traditional keyboards.
This layout is intended to reduce finger travel distance and promote a more
ergonomic typing position by reducing strain on the fingers and wrists.

### Keyboard firmware

The keyboard firmware controls how the keyboard functions and communicates with the computer or other devices.
[ZMK](https://github.com/zmkfirmware/zmk),
[BlueMicro](https://github.com/jpconstantineau/BlueMicro_BLE),
and [QMK](https://github.com/qmk/qmk_firmware) are the most well-known.

## Split keyboards

A split keyboard is divided into two or more separate sections,
usually separated by a gap or a pivot. The sections can be adjusted to fit the user's preferences,
allowing for a more ergonomic typing position that reduces strain on the wrists and arms.

My \*dreams\* keyboard used to be the Kinesis Advantage360:

![kinesis](/posts/keyboards/split.webp)

### Custom Split Mechanical Keyboard (CSMK)

Now the real deal.
Custom Split Mechanical Keyboard is the holy grail of keyboards.
It is the ultimate repetitive strain injury fighter.
Bear with me. Your hands are going to thank you.

### Examples

Kyria ([https://github.com/splitkb/kyria](https://github.com/splitkb/kyria)):

![kyria keyboards](/posts/keyboards/kyria.webp)

Lili58 ([https://github.com/kata0510/Lily58](https://github.com/kata0510/Lily58)):

![lili keyboard](/posts/keyboards/lili.webp)

Redox ([https://github.com/mattdibi/redox-keyboard](https://github.com/mattdibi/redox-keyboard)):

![redox keyboard](/posts/keyboards/redox.webp)

### George's babies

I have two corne keyboards([https://github.com/foostan/crkbd](<<https://github.com/foostan/crkbd>)).
One wired and one wireless. I will break down how I built the wireless one,
trying to shed some light on what you'll need to choose to make a similar build.

This is my baby:

![my keyboard 1](/posts/keyboards/baby1.webp)

Bottom:

![my keyboard 2](/posts/keyboards/baby2.webp)

The parts are:

- PCB
  - You must get the PCB printed
  - cheapest is always going to a printer
  - You can get it easier from [https://keyhive.xyz/](https://keyhive.xyz/)
    - There are other options, feel free to pick the best
- Power button
  - Aliexpress, Amazon
  - [https://www.amazon.com/gp/product/B086L2GPGX/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1](https://www.amazon.com/gp/product/B086L2GPGX/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
    - this is where I got mine
    - send me an e-mail if links break
- Keycaps
  - Aliexpress, Amazon
    - [https://boardsource.xyz/store/5f6ef2d68e3bf05ab838f918](https://boardsource.xyz/store/5f6ef2d68e3bf05ab838f918) \* got mine from boardsource
- Switches
  - Aliexpress, Amazon
    - got mine from boardsource
    - I have the choc robin (close-ish to blue switches)
    - [https://boardsource.xyz/store/5ef6f7376786dc1e65a80744](https://boardsource.xyz/store/5ef6f7376786dc1e65a80744)
- Kailh Hot Swap Sockets
  - same place you get the switches from
  - get them both together
- Microcontrollers
  - [https://nicekeyboards.com/nice-nano](https://nicekeyboards.com/nice-nano)
    - I use the nice nano with ZMK firmware
    - get them from keyhive or boardsource
- Batteries
  - Amazon, for sure, get a 301230 lithium battery.
  - [https://www.amazon.com/s?k=301230&crid=UP1Y3Z7Z9NSO&sprefix=301230%2Caps%2C122&ref=nb_sb_noss_1](https://www.amazon.com/s?k=301230&crid=UP1Y3Z7Z9NSO&sprefix=301230%2Caps%2C122&ref=nb_sb_noss_1)
- Nuts and bolts (optional)
- Reset button (optional)
- Case (optional)
  - My case is composed of 3 things:
    - Plastic sheet that I cut the same format as the keyboard PCB
      - Female 3/8 to 1/4 screw adapter
        - [https://www.amazon.com/gp/product/B073W2C9SK/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1](https://www.amazon.com/gp/product/B073W2C9SK/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)
      - Camera mount clamp with 1/4 screw
        - [https://www.amazon.com/gp/product/B07QV1HYVZ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1](https://www.amazon.com/gp/product/B07QV1HYVZ/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1)

Once you get the parts, you need to put it together, solder it in place, flash the firmware, and learn how to use your new device.
