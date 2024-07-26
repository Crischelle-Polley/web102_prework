# WEB102 Prework - *Sea Monster Crowdfunding*

Submitted by: **Crischelle Polley**

**Sea Monster Crowdfunding** is a website for the company Sea Monster that displays information about the games they have funded.

Time spent: **35** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

<!-- * [ ] List anything else that you can get done to improve the app functionality! -->
* [ ] A search bar for users to find specific games.
* [ ] A navigation link to the games section.
* [ ] A display filter to affect the how the games in the game section are shown.
* [ ] The top games cards take the user to their game card in the game section.
* [ ] A footer with the contact information for game developers to join Sea Monster Crowdfunding and other company information.
* [ ] (If have time/feel like it) The game cards take user to respective game page where they can fund it.

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='http://i.imgur.com/link/to/your/gif/file.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with ...  
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
* Setting up dev tools to debug and view webpage.
    * I used the Visual Studio Code IDE and node.js to edit my webpage. It was not reliable to use these for debugging, so I decided to use my browser instead.

* Changing the layout of the index page.
    * During my process, I realized I wanted to redo the layout of the index to better implement the layout I designed.
      I had broken down the layout to 3 sections: the header, the company's description and information (stats), and the games.
      
        * The header includes the redesigned logo, title of the page, a search bar for users to find specific games, and a navigation link which takes users
    to the games section.
        * The description and stats is the original description container and stats container combined into one section.
        * The games are also the original games container.

* Understanding how CSS affects the HTML.
    * Positioning the html elements was the biggest challenge. In the CSS, I used a grid and subgrid display, which allows for 2D manipulation of the layout.
  Redoing the entire layout enabled me to work closely with grid properties and inheritance for the children of the sections.
    * After positioning, I also had to carefully determine the sizing unit to use throughout the page. With sizing, I took into consideration user
  choice (page adjustment), inheritance, and consistency.

## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
