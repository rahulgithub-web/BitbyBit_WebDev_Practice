# BitbyBit_WebDev_Practice
Thanks to VIT Bhopal BitbyBit Club's Workshop on Web Development course which gave me the opportunity to know and play with creative front end web development projects. This is repository is made to showcase the practice problems they gave to do after the detailed workshop on how HTML, CSS and JAVASCRIPT works.

The 4 projects provided by the club were :
<ul>
  <li>Stop Watch</li>
  <li>Tic Tac Toe</li>
  <li>Music Player</li>
  <li>Rock Paper Scissor</li>
  </ul>
  
 So Following are the project descriptions and demo images of them done by me :
 
 
 ## Stop Watch
 
 #### Description:
 
 First of all, I have made a gradient colored ring with colors ranging from Violet to Red (VIBGYOR). The colored circle is covered by a background color circle to create the ring shape as shown. I have added some effects when someone hovers on the **Start**, **Stop** or **Reset** button to make the website feel more alive.
 
 As per the javascript of this project, this is rather simple. A somple `setTimeout` function is used to recur through the functions for every 10 ms. Further its coded to set the milisecond and second to 0 respectively when the milisecond variable hits 100 and the second variable hits 60 to increment second and minute variables. The clock will freeze when the time reaches a maximum if 99 minutes 99 seconds 99 miliseconds so as to avoide 3 digit numbers. Also to maintain the 2 digit form of the number for the full time while the stopwatch runs, it coded such that whenever the milisecond, second or the minute value is less than 10, it will add a string '0'
before it so as to show the 2 digit number all the time.

#### Demo Image 1:
![demo](https://user-images.githubusercontent.com/72212592/170106460-2cd5348b-351b-4454-a24f-ed3c7c9fa6c7.png)

#### Demo Image 2:

