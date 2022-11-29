# Prep work Coding Challenge

https://codesandbox.io/s/sctp-se-prepwork-forked-ybu3s3

#### 1. As I had a very limited knowledge of html, css, and JS, this was a rather challenging exercise. But thanks to the w3school resources provided, youtube, stackoverflow, etc, I managed to complete it.
#
#### 2. Inserting the car image was the first challenge as it needed to be overlaid on the road image. While searching on stackoverflow, there were some examples on how to do it.
#
#### 3. From the stackoverflow examples, I also learned how to declare the `position` as `relative` for `road` and `absolute` for `car`. 
#
#### 4. Adjusting the location of the car relative to the road was a little tricky as I did not know what the `top` and `left` values represent. More googling and reading helped me figure out what values to use.
#
#### 5. Next was the script. This was the most difficult of all as I really had no idea on how or where to start finding for answers. So I googled "css js html how to make an image move with keypress". From the examples, I managed to work out how to get objects to respond to `keydown` events.
#
#### 6. Now I had to find out how to link the car's `left` value to the `switch` cases using the `querySelector`. This took a while as I was not able to get the left value when I passed in the car ID as the selector. In the end, I tried passing in the class value `div.absolute` and it worked. More on that later.
#
#### 7. Now that I got the car moving using the `a` and `d` keys, I found that it got stuck when it reached the end of the road. I guess using some sort of conditional would prevent that by stopping it from reaching the end, but I didn't know how to apply it. Again more googling got me the answers.
#
#### 8. Using the console.log() helped me with the debugging. I could track and find out what were the attributes being returned. It allowed me to learn how getComputedStyle and parseFloat work. It also helped me see how different selectors returned different values.