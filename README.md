# WEATHER APP

<div align="center">
<a href="https://blu3tan.github.io/Weather-App/">
<img src="./src/gifs/weather-gif-800.gif">
</a>

[Live Demo](https://blu3tan.github.io/Weather-App/)

</div>

# Concept

A weather app fetching data from <a href="https://www.weatherapi.com/">Weather api</a>

The app is:

- fully responsive
- allows search for a specific location with the research api
- displays data in metric or imperial units
- dynamic app color, background and weather icons

# Code logic

The code is divided in fetch and dom modules.
Project after project, i'm trying to achieve cleaner and readable coding habits, in this case the dynamic-color and image-picker functions are a little on the verbose side but is due to the structure of this api and the design choices i made (custom icons and changing colors)

# Visual and ux

The app design is based on an i-watch weather app design mockup i have found on pinterest tweaked to fit the exercise requirements.
The icons are from <a href="https://bas.dev/work/meteocons">Meteocons</a> an awesome free project, big thanks to <a href="https://github.com/basmilius">Bass Milius</a>

As always the design is minimal but intuitive, all the functions are there even tho whenever i can, i try to avoid adding another ui element. Instead i prefer to refactor what is already there to fit multiple purpose (see the search field/title and the temperature/unit switch).

Sometimes this requires more code but i think is worth it.

---
