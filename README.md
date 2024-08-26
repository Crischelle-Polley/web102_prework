# WEB102 Prework - *Sea Monster Crowdfunding*

Submitted by: **Crischelle Polley**

**Sea Monster Crowdfunding** is a website for the company Sea Monster that displays information about the games they have funded.

Time spent: **40** hours spent in total

## Required Features

The following **required** functionality is completed:

* [x] The introduction section explains the background of the company and how many games remain unfunded.
* [x] The Stats section includes information about the total contributions and dollars raised as well as the top two most funded games.
* [x] The Our Games section initially displays all games funded by Sea Monster Crowdfunding
* [x] The Our Games section has three buttons that allow the user to display only unfunded games, only funded games, or all games.

The following **optional** features are implemented:

<!-- * [ ] List anything else that you can get done to improve the app functionality! -->
* [x] A search bar for users to find specific games.
* [x] A navigation link to the games section.
* [x] The top games cards take the user to their game card in the game section.

## Video Walkthrough

Here's a walkthrough of implemented features:

https://www.youtube.com/watch?v=-55ErHtv71I

<!-- Replace this with whatever GIF tool you used! -->
GIF created with [ClipChamp] for Windows.
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

Describe any challenges encountered while building the app.
* Setting up dev tools to debug and view webpage.
    * I used the Visual Studio Code (VS Code) IDE and node.js to edit my webpage. It was not reliable to use these for debugging, so I decided to use the Windows DevTools.
    * Windows DevTools combined with the VS Code extension Live Server showed real-time updates of my site, and DevTools outlined the elements 

* Changing the layout of the index page.
    * During my process, I realized I wanted to redo the layout of the index to better implement the layout I designed.
      I had broken down the layout to 3 sections: the header, the company's description and information (stats), and the games.
      
        * The header includes a redesigned logo, and a search bar for users to find specific games.
        * The description and stats is the original description container and stats container combined into one section.
        * The games are also the original games container.
     
     * The layout was changed multiple times as I studied design theory and tried to implement its principles.

* Understanding how CSS affects the HTML.
    * Positioning the html elements was the biggest challenge. In the CSS, I used grid and flex display. Redoing the entire layout enabled me to work closely with grid and flex properties as well as inheritance between parent and children elements.

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
